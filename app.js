// Bússola de Follow-up — Studio Fiscal. Ferramenta 100% manual: o closer informa a
// etapa, os dias e a persona; nada consulta o Pipedrive (decisão do usuário em
// 2026-07-12, depois de tentativas de integração via OAuth esbarrarem em fricção alta
// pra configurar — ver memória do projeto). Estática, sem servidor, mesmo padrão dos
// outros painéis do Grupo Studio (GitHub Pages).
import {
  MATERIALS, STAGES, STAGE_BY_ID, PERSONAS, CARTEIRAS, PLAYBOOK_ETAPAS, CADENCIA,
  recomendar, cadenciaAtual, segmentoKeywords, blogCategoriaKeywords, ebookPalavraChave,
} from './materiais.js';

let stageIdAtual = null;
let personaAtual = null;
let carteiraAtual = null;

const etapaSelect = document.getElementById('etapaSelect');
const carteiraSelect = document.getElementById('carteiraSelect');
const diasParadoEl = document.getElementById('diasParado');
const diasReuniaoEl = document.getElementById('diasReuniao');
const nomeLeadEl = document.getElementById('nomeLead');
const etapaGuiaEl = document.getElementById('etapaGuia');
const perfilGridEl = document.getElementById('perfilGrid');
const personaInfoEl = document.getElementById('personaInfo');
const cadenciaCardEl = document.getElementById('cadenciaCard');
const recomendacaoEl = document.getElementById('recomendacao');

for (const stage of STAGES) {
  const opt = document.createElement('option');
  opt.value = stage.id;
  opt.textContent = stage.nome + (stage.subtitulo ? ' — ' + stage.subtitulo : '');
  etapaSelect.appendChild(opt);
}

for (const carteira of CARTEIRAS) {
  const opt = document.createElement('option');
  opt.value = carteira.id;
  opt.textContent = carteira.label;
  carteiraSelect.appendChild(opt);
}

etapaSelect.addEventListener('change', () => {
  stageIdAtual = etapaSelect.value ? Number(etapaSelect.value) : null;
  renderTudo();
});
carteiraSelect.addEventListener('change', () => {
  carteiraAtual = carteiraSelect.value || null;
  renderTudo();
});
diasParadoEl.addEventListener('input', renderTudo);
diasReuniaoEl.addEventListener('input', renderCadencia);
nomeLeadEl.addEventListener('input', () => { renderTudo(); renderCadencia(); });

for (const persona of PERSONAS) {
  const btn = document.createElement('button');
  btn.className = 'perfil-btn';
  btn.innerHTML = escapeHtml(persona.label) + '<span class="perfil-sub">' + escapeHtml(persona.subtitulo) + '</span>';
  btn.onclick = () => {
    personaAtual = persona.id;
    for (const b of perfilGridEl.querySelectorAll('.perfil-btn')) b.classList.remove('ativo');
    btn.classList.add('ativo');
    renderPersonaInfo();
    renderTudo();
  };
  perfilGridEl.appendChild(btn);
}

function renderTudo() {
  renderEtapaGuia();
  renderRecomendacao();
}

function renderEtapaGuia() {
  if (stageIdAtual == null) { etapaGuiaEl.innerHTML = ''; return; }
  const stage = STAGE_BY_ID[stageIdAtual];
  const etapa = PLAYBOOK_ETAPAS[stage.bucket];
  let html = '<div class="motivo" style="margin:0 0 8px;">' + escapeHtml(etapa.descricao) + '</div>';
  if (etapa.portas) {
    html += '<div class="portas"><b>Portas para avançar:</b> ' + etapa.portas.map(escapeHtml).join(' · ') + '</div>';
  }
  if (etapa.reuniao) {
    html += '<div style="margin-top:8px;"><b>' + escapeHtml(etapa.reuniao.titulo) + '</b>' +
      '<div class="reuniao-cols">' +
        '<div class="deve"><b>Deve</b><ul>' + etapa.reuniao.deve.map(d => '<li>' + escapeHtml(d) + '</li>').join('') + '</ul></div>' +
        '<div class="nao-deve"><b>Não deve</b><ul>' + etapa.reuniao.naoDeve.map(d => '<li>' + escapeHtml(d) + '</li>').join('') + '</ul></div>' +
      '</div></div>';
  }
  etapaGuiaEl.innerHTML = html;
}

function renderPersonaInfo() {
  const persona = PERSONAS.find(p => p.id === personaAtual);
  if (!persona) { personaInfoEl.innerHTML = ''; return; }
  personaInfoEl.innerHTML =
    '<div class="persona-box">' +
      '<div class="persona-gancho">"' + escapeHtml(persona.gancho) + '"</div>' +
      '<div class="persona-cols">' +
        '<div><h4>Dores</h4><ul>' + persona.dores.map(d => '<li>' + escapeHtml(d) + '</li>').join('') + '</ul></div>' +
        '<div><h4>Argumentos</h4><ul>' + persona.argumentos.map(a => '<li>' + escapeHtml(a) + '</li>').join('') + '</ul></div>' +
      '</div>' +
    '</div>';
}

function nomeOuPlaceholder() {
  return nomeLeadEl.value.trim() || '[Nome]';
}

function aplicarNome(mensagem) {
  return mensagem.replace(/\[Nome\]/g, nomeOuPlaceholder());
}

function renderCadencia() {
  const dias = diasReuniaoEl.value === '' ? null : Number(diasReuniaoEl.value);
  const { atual, proximos } = cadenciaAtual(dias);
  let html = '<h2>📅 Cadência de relacionamento</h2>' +
    '<div class="motivo">' + (dias != null ? dias + ' dias desde a 1ª reunião realizada' : 'Preencha os dias desde a 1ª reunião (CC1) pra ver o toque da vez') + '</div>';
  if (atual) html += renderCadenciaItem(atual, true);
  if (proximos.length) {
    html += '<div class="toggle-link" onclick="this.nextElementSibling.style.display=\'block\';this.style.display=\'none\';">Ver próximos toques</div>' +
      '<div style="display:none;">' + proximos.map(c => renderCadenciaItem(c, false)).join('') + '</div>';
  }
  cadenciaCardEl.innerHTML = html;
}

function renderCadenciaItem(item, ativo) {
  const msgId = 'cad-' + Math.random().toString(36).slice(2, 8);
  const material = item.materialKey ? MATERIALS[item.materialKey] : null;
  return '<div class="cadencia-item' + (ativo ? ' atual' : '') + '">' +
    '<div class="cadencia-quando">' + escapeHtml(item.quando) + (ativo ? ' · enviar agora' : '') + '</div>' +
    '<div class="cadencia-assunto">' + escapeHtml(item.assunto) + '</div>' +
    '<div class="material-msg" id="' + msgId + '">' + escapeHtml(aplicarNome(item.mensagem)) + '</div>' +
    '<button class="copiar" onclick="window.copiarTexto(\'' + msgId + '\')">Copiar</button>' +
    (material ? renderItensLinks(material, item.materialKey) : '') +
    '</div>';
}

function renderRecomendacao() {
  if (stageIdAtual == null || !personaAtual) { recomendacaoEl.innerHTML = ''; return; }
  const diasParado = diasParadoEl.value === '' ? 0 : Number(diasParadoEl.value);
  const { materiais, motivo } = recomendar(stageIdAtual, personaAtual, diasParado, carteiraAtual);
  if (!materiais.length) { recomendacaoEl.innerHTML = '<div class="vazio">Sem sugestão pra essa combinação ainda.</div>'; return; }
  let html = '<h2>🎯 Material sugerido</h2><div class="motivo">' + escapeHtml(motivo) + '</div>';
  for (const key of materiais) {
    const mat = MATERIALS[key];
    if (!mat) continue;
    html += renderMaterialCard(key, mat);
  }
  recomendacaoEl.innerHTML = html;
}

function renderMaterialCard(key, mat) {
  const linksHtml = mat.tabela ? renderTabela(mat.tabela) : renderItensLinks(mat, key);
  const msgId = 'msg-' + key + '-' + Math.random().toString(36).slice(2, 8);
  return '<div class="material-card">' +
    '<div class="material-titulo">' + escapeHtml(mat.titulo) + '</div>' +
    '<div class="material-msg" id="' + msgId + '">' + escapeHtml(aplicarNome(mat.mensagem)) + '</div>' +
    '<button class="copiar" onclick="window.copiarTexto(\'' + msgId + '\')">Copiar mensagem</button>' +
    linksHtml +
    '</div>';
}

// Ordena um array colocando primeiro quem casa com pelo menos uma keyword num campo.
function priorizarPorKeyword(itens, keywords, campo) {
  if (!keywords.length) return itens;
  return [...itens].sort((a, b) => {
    const am = keywords.some(k => (a[campo] || '').includes(k)) ? 0 : 1;
    const bm = keywords.some(k => (b[campo] || '').includes(k)) ? 0 : 1;
    return am - bm;
  });
}

function ordenarItens(mat, materialKey) {
  const itens = mat.itens;
  if (materialKey === 'CASES_DE_SUCESSO' || materialKey === 'DEPOIMENTO_FRANQUEADOS') {
    // Segmento do case/depoimento casando com a carteira de clientes e/ou a persona
    // escolhidas (ex: carteira "Indústria" -> mostra primeiro cases de empresas
    // industriais) — deixa a prova social mais relevante pro lead específico.
    return priorizarPorKeyword(itens, segmentoKeywords(personaAtual, carteiraAtual), 'segmento');
  }
  if (materialKey === 'BLOG_POST') {
    // Assunto do post casando com a persona/carteira (ex: persona "Advogado" -> prioriza
    // "Tributário e Contencioso Fiscal"; carteira "Agronegócio" -> prioriza posts de
    // Agronegócio). Sem casamento nenhum, embaralha pra não travar sempre nos mesmos 6
    // de 285 posts.
    const keywords = blogCategoriaKeywords(personaAtual, carteiraAtual);
    const ordenado = priorizarPorKeyword(itens, keywords, 'categoria');
    return keywords.length ? ordenado : [...ordenado].sort(() => Math.random() - 0.5);
  }
  if (materialKey === 'EBOOK') {
    // Nome do e-book casando com palavras-chave da persona (ex: "ADVOGADOS E CONTADORES"
    // -> prioriza pra quem é advogado/contador).
    return priorizarPorKeyword(itens, ebookPalavraChave(personaAtual), 'nome');
  }
  return itens;
}

function renderItensLinks(mat, materialKey) {
  if (!mat.itens) return '';
  const itens = ordenarItens(mat, materialKey);
  return '<div class="material-links">' + itens.slice(0, 6).map(item => {
    const nome = item.nome || item.assunto || [item.local, item.segmento].filter(Boolean).join(' — ') || 'Material';
    return item.link
      ? '<a href="' + item.link + '" target="_blank" rel="noopener">' + escapeHtml(nome) + '</a>'
      : '<span style="color:#b8b3ad;">' + escapeHtml(nome) + ' (link pendente com o marketing)</span>';
  }).join('') + '</div>';
}

function renderTabela(tabela) {
  let html = '<table class="comparativo"><thead><tr>' + tabela.colunas.map(c => '<th>' + escapeHtml(c) + '</th>').join('') + '</tr></thead><tbody>';
  for (const linha of tabela.linhas) html += '<tr>' + linha.map(c => '<td>' + escapeHtml(c) + '</td>').join('') + '</tr>';
  html += '</tbody></table>';
  return html;
}

window.copiarTexto = function (id) {
  const el = document.getElementById(id);
  navigator.clipboard.writeText(el.textContent);
};

function escapeHtml(str) {
  return String(str ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

renderCadencia();
