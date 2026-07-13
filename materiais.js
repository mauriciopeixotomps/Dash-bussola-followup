/**
 * Regras de negócio da Bússola de Follow-up (etapas, personas, matriz de recomendação,
 * cadência, carteira de clientes). O conteúdo real dos materiais (links, mensagens,
 * cases) vem de materials-data.js, GERADO AUTOMATICAMENTE a partir da planilha pública
 * do marketing (build_materiais.py, rodado via GitHub Actions sempre que uma linha nova
 * é adicionada — ver .github/workflows/update.yml). Este arquivo aqui é escrito à mão e
 * não é sobrescrito pelo sync.
 */
export { MATERIALS } from './materials-data.js';
import { MATERIALS } from './materials-data.js';

// ============= ETAPAS (pipeline 62, Studio Fiscal Franquia) =============
// Confirmado pelo usuário em 2026-07-10 (corrige a inferência inicial baseada só no
// Playbook de Expansão, que colapsava Negociação/Aditivo Jurídico/Contrato Enviado
// numa etapa só e descrevia Proposta como "já enviada" — na real, Proposta dispara
// quando a CC2 é REALIZADA, não quando a proposta já foi mandada):
//
// Qualificação (Qualificadora, pré-repasse pro closer):
//   Lead -> Pré-qualificação (tentativa de contato) -> Em atendimento (lead que já
//   retornou mas ainda não foi qualificado) -> MQL Franquia (qualificação realizada,
//   com CC1 agendada ou não).
// Closer:
//   Aguardando FPQ (CC1 realizada) -> Oportunidade (FPQ recebida) -> Oportunidade
//   Quente (CC2 agendada) -> Proposta (CC2 realizada) -> Negociação (pendente de CC3
//   ou não) -> Aditivo Jurídico -> Contrato Enviado.
//
// As 4 etapas de Qualificação viraram 4 buckets distintos (lead/pre_qualificacao/
// em_atendimento/mql) em vez de um "pre" único — usuário notou que "Lead" sempre
// sugeria o mesmo conteúdo; cada uma agora tem sua própria progressão.
export const STAGES = [
  { id: 593, nome: 'LEAD', subtitulo: '', bucket: 'lead' },
  { id: 594, nome: 'PRÉ-QUALIFICAÇÃO', subtitulo: 'tentativa de contato', bucket: 'pre_qualificacao' },
  { id: 595, nome: 'EM ATENDIMENTO', subtitulo: 'retornou, ainda não qualificado', bucket: 'em_atendimento' },
  { id: 596, nome: 'MQL FRANQUIA', subtitulo: 'qualificação realizada, CC1 agendada ou não', bucket: 'mql' },
  { id: 597, nome: 'AGUARDANDO FPQ', subtitulo: 'CC1 realizada', bucket: 'sql' },
  { id: 598, nome: 'OPORTUNIDADE', subtitulo: 'FPQ recebida', bucket: 'oportunidade' },
  { id: 599, nome: 'OPORTUNIDADE QUENTE', subtitulo: 'CC2 agendada', bucket: 'oportunidade_quente' },
  { id: 600, nome: 'PROPOSTA', subtitulo: 'CC2 realizada', bucket: 'proposta' },
  { id: 601, nome: 'NEGOCIAÇÃO', subtitulo: 'pendente de CC3 ou não', bucket: 'negociacao' },
  { id: 602, nome: 'ADITIVO JURÍDICO', subtitulo: '', bucket: 'aditivo_juridico' },
  { id: 603, nome: 'CONTRATO ENVIADO', subtitulo: '', bucket: 'contrato_enviado' },
];

export const STAGE_BY_ID = Object.fromEntries(STAGES.map(s => [s.id, s]));

// Buckets em que "estagnação" (muitos dias parado) NÃO deve trocar a sugestão por um
// reforço de prova social — aqui já é normal esperar (assinatura, aditivo jurídico
// etc.), não é sinal de que o ângulo de venda está errado.
export const BUCKETS_SEM_ESTAGNACAO = new Set(['negociacao', 'aditivo_juridico', 'contrato_enviado']);

// ============= ETAPAS DO CLOSER, COM GUIA DE REUNIÃO =============
// "portas" (checklist pra avançar) e deve/não-deve por reunião vêm quase literais do
// Playbook de Expansão (Módulo 4 · Regras do Pipedrive) — únicas etapas com esse nível
// de detalhe no PDF. Aditivo Jurídico e Contrato Enviado não têm checklist próprio no
// playbook (ele as tratava como uma "Negociação" genérica); descrição mínima honesta
// em vez de inventar portas que não existem na fonte. As 4 etapas de qualificação
// (lead/pre_qualificacao/em_atendimento/mql) são território da Qualificadora, sem
// checklist de reunião do closer — só descrição.
export const PLAYBOOK_ETAPAS = {
  lead: {
    nome: 'Lead',
    descricao: 'Lead recém-capturado, ainda não contatado pela Qualificadora.',
  },
  pre_qualificacao: {
    nome: 'Pré-qualificação',
    descricao: 'Tentativa de contato em andamento pela Qualificadora.',
  },
  em_atendimento: {
    nome: 'Em Atendimento',
    descricao: 'Lead retornou o contato, mas ainda não foi qualificado.',
  },
  mql: {
    nome: 'MQL Franquia',
    descricao: 'Qualificação realizada — CC1 pode estar agendada ou não.',
  },
  sql: {
    nome: 'Aguardando FPQ',
    descricao: 'CC1 realizada. Lead qualificado, com interesse confirmado.',
    portas: ['≥ 1 CNPJ de indicação coletado', 'FPQ introduzida e enviada', 'COF introduzida e cobrada', '2ª reunião marcada'],
    reuniao: {
      titulo: '1ª reunião (CC1) — vender o negócio',
      deve: ['Apresentar e vender o modelo', 'Primeira visão financeira (panorama)', 'Integrar a FPQ', 'Pedir ≥ 1 CNPJ; cobrar a COF', 'Sair com a 2ª reunião marcada'],
      naoDeve: ['Negociar valores ou parcelamento', 'Detalhar o plano financeiro', 'Mostrar o contrato'],
    },
  },
  oportunidade: {
    nome: 'Oportunidade',
    descricao: 'FPQ recebida. Demonstrou interesse e tem a 2ª reunião (CC2) agendada. PJ360° e plano financeiro entram em jogo.',
    portas: ['Plano financeiro executado na 2ª reunião', 'PJ360° apresentado', 'FPQ preenchida'],
    reuniao: {
      titulo: '2ª reunião (CC2) — provar valor',
      deve: ['Abrir o PJ360° e o plano financeiro', 'Mostrar o potencial de ganho', 'Discutir e preencher a FPQ', 'Explicar produtos, papéis e próximos passos', 'Sair com a 3ª marcada e o compromisso do cliente'],
      naoDeve: ['Mostrar o contrato', 'Encerrar sem a 3ª reunião'],
    },
  },
  oportunidade_quente: {
    nome: 'Oportunidade Quente',
    descricao: 'CC2 agendada. Alta probabilidade, ainda sem fechar valores.',
    portas: ['Materiais analisados', 'Plano financeiro validado', 'COF entregue e recebida (mín. 10 dias antes da assinatura)', 'Contrato aberto e apresentado', '3ª reunião marcada + compromisso do cliente'],
  },
  proposta: {
    nome: 'Proposta',
    descricao: 'CC2 realizada. A proposta comercial (contrato) é preparada e enviada nesta etapa, com os pré-requisitos anteriores cumpridos.',
    portas: ['Proposta + contrato enviados, com data', 'Pré-requisitos anteriores cumpridos'],
    reuniao: {
      titulo: '3ª reunião (CC3) — oportunidade quente / proposta',
      deve: ['Abrir e discutir o contrato', 'Enviar a proposta formal', 'Enviar o contrato para análise', 'Conduzir à contraproposta e ao fechamento'],
      naoDeve: ['Reapresentar o modelo do zero', 'Improvisar valores sem um plano'],
    },
  },
  negociacao: {
    nome: 'Negociação',
    descricao: 'Contrato em análise pelo cliente — a CC3 pode ou não já ter acontecido. Ajuste de termos a caminho do fechamento.',
    portas: ['Contrato em análise pelo cliente', 'Cliente entendeu o contrato'],
  },
  aditivo_juridico: {
    nome: 'Aditivo Jurídico',
    descricao: 'Contrato passando por ajuste jurídico antes do envio final para assinatura.',
  },
  contrato_enviado: {
    nome: 'Contrato Enviado',
    descricao: 'Contrato enviado para assinatura. Dispara o onboarding assim que assinado.',
    portas: ['Contrato enviado para assinatura'],
  },
};

// ============= PERSONAS (Playbook de Expansão, Módulo 2) =============
// Escolhidas na hora pelo closer, não persistem no CRM. Substituem os 4 perfis
// genéricos da v1 — estes são os perfis reais de quem compra a franquia/parceria,
// com dor, argumento e gancho de abertura prontos do playbook oficial.
export const PERSONAS = [
  {
    id: 'advogado',
    label: 'Advogado',
    subtitulo: 'recém-formado, empresarial ou tributarista',
    dores: [
      'Receita com teto: depende das próprias horas.',
      'Vê o cliente recuperar tributo por terceiros e não captura nada.',
      'Recém-formado: não tem marca para entrar em clientes maiores.',
      'Empresarial: deixa passar a área mais rentável.',
      'Via parceiro: sem garantia de qualidade, prazo ou dedicação.',
    ],
    argumentos: [
      'Monetiza a carteira sem virar tributarista nem montar estrutura.',
      'Recém-formado: entra com a marca GS e depois mantém o cliente.',
      'Margem melhor que montar equipe; otimiza a carteira.',
      'Tributarista: operação ilimitada, sem competidor nem risco de cobrarmos o cliente dele.',
      'Entra como sócio no êxito: R$ 245–420 mil por contrato.',
    ],
    gancho: 'Você já tem a confiança dos seus clientes. Hoje, quando precisam de tributário, quem entrega é outro. E se fosse você, sem montar estrutura?',
  },
  {
    id: 'contador',
    label: 'Contador',
    subtitulo: 'sócio de escritório contábil',
    dores: [
      'Serviço virou commodity: honorário pressionado.',
      'Sem tempo de revisar a parte tributária com frequência.',
      'Vê advogados venderem tributário ao cliente dele todo dia.',
      'Uma receita que passa na frente dele e ele não captura.',
      'Sem estrutura técnica para teses complexas.',
    ],
    argumentos: [
      'Passa a oferecer o serviço e aumenta a carteira.',
      'Fica mais forte tributariamente para quem já atende.',
      'Custo muito menor que montar uma equipe.',
      'Porta de captação: revisa cliente de outro escritório e migra a contabilidade.',
      '+35 mil clientes e +R$ 16 bi recuperados dão segurança.',
    ],
    gancho: 'Todo dia tem advogado vendendo tributário para o seu cliente. Por que não ser você, que conhece a contabilidade dele melhor que ninguém?',
  },
  {
    id: 'bancario',
    label: 'Bancário / Representante',
    subtitulo: 'perfil comercial forte',
    dores: [
      'Relacionamento de uma vida, mas sem produto próprio de alto valor.',
      'Só monetiza pelo banco: teto de meta e comissão.',
      'O relacionamento não é dele; depende do empregador.',
      'Quer renda própria sem largar a carreira.',
      'Não entende de tributário (e acha que precisaria).',
    ],
    argumentos: [
      'Não precisa entender de tributário: o papel é comercial.',
      'O GS entrega o produto, na verdade vários: um portfólio.',
      'Monetiza a carteira de sempre com margem altíssima.',
      'Sem risco e sem custo para ele.',
      'O GS faz 100% da técnica; ele é a ponte comercial.',
    ],
    gancho: 'Você tem os contatos e a força comercial de uma vida. Faltava o produto. E se tivesse um portfólio de alto valor para levar a cada um deles?',
  },
  {
    id: 'empresario',
    label: 'Empresário',
    subtitulo: 'empreendedor / investidor',
    dores: [
      'Cansado de negócios de margem apertada e operação pesada.',
      'Estoque, ponto e equipe grande pesam no resultado.',
      'Quer um ativo de alta margem, escalável e diferenciado.',
      'Não quer "mais um do mesmo".',
      'Estrutura e relacionamento atuais subaproveitados.',
    ],
    argumentos: [
      'Modelo validado: 30 anos, +350 sócios, Top 10 franquias.',
      'Alta margem e escala sem aumentar custos.',
      'Caminho 1: explorar a carteira atual com o GS.',
      'Caminho 2: construir a própria rede de parceiros.',
      'Em geral, 1 contrato paga o investimento.',
    ],
    gancho: 'Você já tem estrutura e relacionamento. Falta o ativo certo: de alta margem, que escala explorando a sua carteira ou construindo a sua rede.',
  },
];

// Pra priorizar depoimentos do mesmo segmento da persona escolhida (DEPOIMENTO_FRANQUEADOS
// tem campo `segmento` por item) — usado só na hora de renderizar, não muda a recomendação.
export const SEGMENTO_POR_PERSONA = {
  advogado: 'Advogad', // casa com "Advogado" e "Advogada"
  empresario: 'Empresário',
};

// ============= PERFIL DA CARTEIRA DE CLIENTES =============
// Filtro adicional (2026-07-14, pedido do usuário): que tipo de cliente o lead já
// atende hoje (ou "ainda não tem carteira"). Usado pra: (1) priorizar Cases de Sucesso/
// Depoimentos do mesmo segmento da carteira dele, tornando a prova social mais
// relevante; (2) reforçar com material institucional/comparativo quando ele ainda não
// tem carteira (prova social por segmento não faz sentido nesse caso).
export const CARTEIRAS = [
  { id: 'sem_clientes', label: 'Ainda não tem carteira de clientes' },
  { id: 'industria', label: 'Indústria' },
  { id: 'comercio', label: 'Comércio / Varejo' },
  { id: 'agro', label: 'Agronegócio' },
  { id: 'produtor_rural', label: 'Produtor Rural' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'pf', label: 'Pessoa Física (PF)' },
];

// Palavras-chave que casam com o campo `segmento` de CASES_DE_SUCESSO/DEPOIMENTO_FRANQUEADOS.
// Nenhum case da planilha hoje é de Pessoa Física (PF) — todos são PJ com faturamento —
// então "pf" fica sem palavra-chave própria (ver `ajustarPorCarteira`, que troca Cases
// por Depoimentos nesse caso, já que há depoimentos de pessoas físicas individuais).
export const CARTEIRA_SEGMENTO_KEYWORDS = {
  industria: ['Indústria'],
  comercio: ['Varejista', 'Atacadista', 'Supermercado', 'Comércio', 'Concessionária', 'Autopeças', 'Pet Shop'],
  agro: ['Agrícola', 'Agroindústria'],
  produtor_rural: ['Agrícola', 'Agroindústria'],
  servicos: ['Serviços', 'Serviço', 'Transportadora', 'Hospitalar', 'Tecnologia'],
  pf: [],
};

/**
 * Combina as palavras-chave de segmento da persona + carteira escolhidas, pra priorizar
 * itens de CASES_DE_SUCESSO/DEPOIMENTO_FRANQUEADOS que casem com qualquer uma delas.
 * @param {string|null} personaId
 * @param {string|null} carteiraId
 * @returns {string[]}
 */
export function segmentoKeywords(personaId, carteiraId) {
  const kws = [];
  if (carteiraId && CARTEIRA_SEGMENTO_KEYWORDS[carteiraId]) kws.push(...CARTEIRA_SEGMENTO_KEYWORDS[carteiraId]);
  if (personaId && SEGMENTO_POR_PERSONA[personaId]) kws.push(SEGMENTO_POR_PERSONA[personaId]);
  return kws;
}

// ============= SELEÇÃO AUTOMÁTICA DENTRO DE BLOG POST E E-BOOK =============
// Antes disso, "Blog Post" e "E-book" eram tratados como categorias únicas — o closer
// via sempre a mesma lista (ou uma aleatória), sem relação com a persona/carteira. A
// aba BLOG POSTS tem 285 posts, cada um com um "Assunto" que na prática funciona como
// categoria temática (ex: "Agronegócio", "Holding e Planejamento Patrimonial") — e os
// 4 e-books têm nomes autoexplicativos ("...PARA ADVOGADOS E CONTADORES"). Em vez de eu
// curar manualmente qual post/e-book mostrar pra cada combinação (o que não escala e é
// exatamente o "raciocínio humano" que o usuário pediu pra tirar do caminho), essas
// duas funções casam AUTOMATICAMENTE o texto real de cada item com palavras-chave de
// persona/carteira — se a planilha ganhar um novo post/e-book com um assunto/nome que
// já bate em alguma dessas palavras-chave, ele já entra no jogo sozinho, sem precisar
// eu tocar no código.
const BLOG_CATEGORIA_POR_PERSONA = {
  advogado: ['Tributário e Contencioso Fiscal', 'Reforma Tributária', 'Holding e Planejamento Patrimonial'],
  contador: ['Tributário e Contencioso Fiscal', 'Reforma Tributária', 'Gestão Financeira e Crédito'],
  bancario: ['Gestão Financeira e Crédito', 'Fusões e Aquisições', 'Estratégia Empresarial'],
  empresario: ['Estratégia Empresarial', 'Fusões e Aquisições', 'Holding e Planejamento Patrimonial', 'Gestão Financeira e Crédito'],
};

const BLOG_CATEGORIA_POR_CARTEIRA = {
  agro: ['Agronegócio'],
  produtor_rural: ['Agronegócio'],
  industria: ['Energia e Eficiência Energética', 'Estratégia Empresarial'],
  comercio: ['Estratégia Empresarial', 'Gestão Financeira e Crédito'],
  servicos: ['Estratégia Empresarial'],
  pf: ['Holding e Planejamento Patrimonial'],
};

/**
 * @param {string|null} personaId
 * @param {string|null} carteiraId
 * @returns {string[]} categorias (do campo "Assunto" da aba BLOG POSTS) mais relevantes
 */
export function blogCategoriaKeywords(personaId, carteiraId) {
  const kws = [];
  if (carteiraId && BLOG_CATEGORIA_POR_CARTEIRA[carteiraId]) kws.push(...BLOG_CATEGORIA_POR_CARTEIRA[carteiraId]);
  if (personaId && BLOG_CATEGORIA_POR_PERSONA[personaId]) kws.push(...BLOG_CATEGORIA_POR_PERSONA[personaId]);
  return kws;
}

// Palavras que, se aparecerem no NOME do e-book, indicam pra qual persona ele fala mais
// diretamente — casamento por texto simples, não uma lista fixa de "e-book X pra
// persona Y" (cresce sozinho se a planilha ganhar um e-book novo com nome parecido).
const EBOOK_PALAVRA_POR_PERSONA = {
  advogado: ['ADVOGAD'],
  contador: ['CONTADOR', 'CONTÁBIL'],
};
// Palavras técnicas genéricas (tributário) relevantes pras duas personas técnicas.
const EBOOK_PALAVRAS_TECNICAS = ['TRIBUTÁ'];

/**
 * @param {string|null} personaId
 * @returns {string[]} palavras-chave (maiúsculas) pra casar contra o nome do e-book
 */
export function ebookPalavraChave(personaId) {
  const kws = [...EBOOK_PALAVRAS_TECNICAS];
  if (personaId && (personaId === 'advogado' || personaId === 'contador')) {
    kws.push(...(EBOOK_PALAVRA_POR_PERSONA[personaId] || []));
  }
  return kws;
}

/**
 * Ajusta a lista de materiais sugeridos conforme a carteira de clientes do lead:
 * - sem carteira ainda: prova social por segmento não faz sentido — reforça com
 *   Atestado de Capacidade + Comparativo (credibilidade institucional/diferencial).
 * - PF: nenhum Case de Sucesso da planilha é pessoa física (todos têm faturamento de
 *   empresa) — troca Cases de Sucesso por Depoimento de Franqueados, que tem
 *   depoimentos de pessoas físicas individuais (advogados, jornalista, engenheiro).
 * @param {string[]} materiaisKeys
 * @param {string|null} carteiraId
 * @returns {string[]}
 */
export function ajustarPorCarteira(materiaisKeys, carteiraId) {
  let out = [...materiaisKeys];
  if (carteiraId === 'sem_clientes') {
    out = [...out, 'ATESTADO_CAPACIDADE', 'COMPARATIVO_CONCORRENCIA'];
  } else if (carteiraId === 'pf') {
    out = out.map(k => (k === 'CASES_DE_SUCESSO' ? 'DEPOIMENTO_FRANQUEADOS' : k));
  }
  return [...new Set(out)];
}

// ============= MATRIZ etapa (bucket) x persona -> materiais sugeridos =============
// Proposta inicial (2026-07-10, revisada com o Playbook de Expansão; ampliada em
// 2026-07-14 pra diversificar as etapas de qualificação — antes todas caíam no mesmo
// "pre" e sugeriam sempre Vídeo Institucional). Rebalanceada em 2026-07-14 (1ª vez):
// achei Vídeo Institucional/Comparativo/Vídeos José Carlos/Onboarding em >60% das
// combinações e troquei vários por materiais mais específicos, incluindo Vídeos sobre
// Parceria/Depoimento de Parceiros pro perfil Bancário/Representante. **Corrigido no
// mesmo dia, 2ª vez**: o usuário esclareceu que o foco do negócio é vender FRANQUIA,
// não parceria — "não quer muito usar vídeo de parceria... mas cases de sucesso e
// depoimentos de franqueado é bom usar". Tirei Vídeos sobre Parceria da matriz
// principal (fica só como conteúdo da CADENCIA, que já tinha um toque fixo com ele) e
// troquei Depoimento de Parceiros por Depoimento de Franqueados/Cases de Sucesso em
// quase todos os usos, inclusive pro Bancário/Representante — mesmo esse perfil sendo
// descrito no playbook como "ponte comercial", o material que sai por padrão pra ele
// agora reforça o modelo de franquia, igual pras outras personas.
export const RECOMMENDATIONS = {
  lead: {
    advogado: ['VIDEO_INSTITUCIONAL'],
    contador: ['VIDEO_INSTITUCIONAL'],
    bancario: ['VIDEO_INSTITUCIONAL'],
    empresario: ['VIDEO_INSTITUCIONAL'],
  },
  pre_qualificacao: {
    advogado: ['VIDEO_INSTITUCIONAL', 'BLOG_POST'],
    contador: ['VIDEO_INSTITUCIONAL', 'BLOG_POST'],
    bancario: ['VIDEO_INSTITUCIONAL', 'BLOG_POST'],
    empresario: ['VIDEO_INSTITUCIONAL', 'BLOG_POST'],
  },
  em_atendimento: {
    advogado: ['BLOG_POST', 'EBOOK'],
    contador: ['BLOG_POST', 'EBOOK'],
    bancario: ['CASES_DE_SUCESSO', 'COMPARATIVO_CONCORRENCIA'],
    empresario: ['COMPARATIVO_CONCORRENCIA', 'CASES_DE_SUCESSO'],
  },
  mql: {
    advogado: ['EBOOK', 'CASES_DE_SUCESSO'],
    contador: ['EBOOK', 'ATESTADO_CAPACIDADE'],
    bancario: ['CASES_DE_SUCESSO', 'DEPOIMENTO_FRANQUEADOS'],
    empresario: ['CASES_DE_SUCESSO', 'COMPARATIVO_CONCORRENCIA'],
  },
  sql: {
    advogado: ['EBOOK', 'CASES_DE_SUCESSO'],
    contador: ['EBOOK', 'BLOG_POST'],
    bancario: ['CASES_DE_SUCESSO', 'COMPARATIVO_CONCORRENCIA'],
    empresario: ['CASES_DE_SUCESSO', 'COMPARATIVO_CONCORRENCIA'],
  },
  oportunidade: {
    advogado: ['CASES_DE_SUCESSO', 'DEPOIMENTO_FRANQUEADOS'],
    contador: ['CASES_DE_SUCESSO', 'ATESTADO_CAPACIDADE'],
    bancario: ['DEPOIMENTO_FRANQUEADOS', 'COMPARATIVO_CONCORRENCIA'],
    empresario: ['CASES_DE_SUCESSO', 'COMPARATIVO_CONCORRENCIA'],
  },
  oportunidade_quente: {
    advogado: ['DEPOIMENTO_FRANQUEADOS', 'VIDEOS_JOSE_CARLOS'],
    contador: ['ATESTADO_CAPACIDADE', 'VIDEOS_JOSE_CARLOS'],
    bancario: ['DEPOIMENTO_FRANQUEADOS', 'CASES_DE_SUCESSO'],
    empresario: ['DEPOIMENTO_FRANQUEADOS', 'VIDEOS_JOSE_CARLOS'],
  },
  proposta: {
    advogado: ['DEPOIMENTO_FRANQUEADOS', 'COMPARATIVO_CONCORRENCIA'],
    contador: ['COMPARATIVO_CONCORRENCIA', 'ATESTADO_CAPACIDADE'],
    bancario: ['COMPARATIVO_CONCORRENCIA', 'DEPOIMENTO_FRANQUEADOS'],
    empresario: ['COMPARATIVO_CONCORRENCIA', 'VIDEOS_JOSE_CARLOS'],
  },
  negociacao: {
    advogado: ['VIDEOS_JOSE_CARLOS', 'ONBOARDING_FRANQUEADO'],
    contador: ['VIDEOS_JOSE_CARLOS', 'ONBOARDING_FRANQUEADO'],
    bancario: ['VIDEOS_JOSE_CARLOS', 'ONBOARDING_FRANQUEADO'],
    empresario: ['VIDEOS_JOSE_CARLOS', 'ONBOARDING_FRANQUEADO'],
  },
  aditivo_juridico: {
    advogado: ['VIDEOS_JOSE_CARLOS', 'ONBOARDING_FRANQUEADO'],
    contador: ['VIDEOS_JOSE_CARLOS', 'ONBOARDING_FRANQUEADO'],
    bancario: ['VIDEOS_JOSE_CARLOS', 'ONBOARDING_FRANQUEADO'],
    empresario: ['VIDEOS_JOSE_CARLOS', 'ONBOARDING_FRANQUEADO'],
  },
  contrato_enviado: {
    advogado: ['ONBOARDING_FRANQUEADO'],
    contador: ['ONBOARDING_FRANQUEADO'],
    bancario: ['ONBOARDING_FRANQUEADO'],
    empresario: ['ONBOARDING_FRANQUEADO'],
  },
};

// Se o negócio está parado há mais dias que o limiar, troca a sugestão base por um
// material de "reforço" (prova social/autoridade) pra quebrar a inércia em vez de
// repetir o mesmo ângulo.
export const LIMIAR_DIAS_ESTAGNADO = 7;

export const REFORCO_ESTAGNACAO = {
  advogado: 'DEPOIMENTO_FRANQUEADOS',
  contador: 'ATESTADO_CAPACIDADE',
  bancario: 'DEPOIMENTO_FRANQUEADOS',
  empresario: 'VIDEOS_JOSE_CARLOS',
};

/**
 * @param {number} stageId
 * @param {string} personaId
 * @param {number} diasParado
 * @param {string|null} [carteiraId]
 * @returns {{ materiais: string[], estagnado: boolean, motivo: string }}
 */
export function recomendar(stageId, personaId, diasParado, carteiraId = null) {
  const stage = STAGE_BY_ID[stageId];
  if (!stage) throw new Error(`Etapa desconhecida: ${stageId}`);
  const base = RECOMMENDATIONS[stage.bucket]?.[personaId] ?? [];
  const estagnado = !BUCKETS_SEM_ESTAGNACAO.has(stage.bucket) && diasParado > LIMIAR_DIAS_ESTAGNADO;
  const materiais = estagnado ? [REFORCO_ESTAGNACAO[personaId], ...base] : base;
  return {
    materiais: ajustarPorCarteira([...new Set(materiais)], carteiraId),
    estagnado,
    motivo: estagnado
      ? `${diasParado} dias parado em "${stage.nome}" (acima do limiar de ${LIMIAR_DIAS_ESTAGNADO}) — reforço de prova social`
      : `Etapa "${stage.nome}", ${diasParado} dias`,
  };
}

// ============= CADÊNCIA DE RELACIONAMENTO (Playbook de Expansão, Módulo 3) =============
// Calendário de toques a partir da 1ª reunião realizada (SQL) — copy pronta, quase
// literal do PDF (placeholder [Nome] pro closer preencher). Independente de etapa/
// persona: é o mesmo calendário pra todo mundo, o playbook usa a persona só na abertura
// (gancho) e nos argumentos de reunião, não na cadência.
// `dias` é a estimativa de dias corridos desde a 1ª reunião usada só pra ordenar/
// destacar o toque "da vez" — os rótulos oficiais (D+2, Semana 2 etc.) estão em `quando`.
export const CADENCIA = [
  { quando: 'D+2', dias: 2, assunto: 'Relatório do PJ360°', materialKey: null, mensagem: '[Nome], saiu o seu diagnóstico PJ360°: nossa IA já mapeou as oportunidades. Te envio aqui. Dá uma olhada e me diz o que achou?' },
  { quando: 'D+4', dias: 4, assunto: 'Vídeo José Carlos', materialKey: 'VIDEOS_JOSE_CARLOS', mensagem: '[Nome], separei algo especial: o fundador contando como construímos +R$ 16 bi em resultados. Vale 2 minutos. Depois me conta?' },
  { quando: 'Semana 2 · terça', dias: 9, assunto: 'Case de sucesso', materialKey: 'CASES_DE_SUCESSO', mensagem: '[Nome], olha esse case: resultado real para uma empresa parecida com as da sua carteira. Faz sentido para você?' },
  { quando: 'Semana 2 · quinta', dias: 11, assunto: 'Vídeo do treinamento', materialKey: 'ONBOARDING_FRANQUEADO', mensagem: '[Nome], todo sócio entra preparado: esse é o nosso treinamento. Posso te mostrar como seria o seu começo?' },
  { quando: 'Semana 3 · segunda', dias: 16, assunto: 'Print do plano financeiro', materialKey: null, mensagem: '[Nome], montei um resumo do seu plano financeiro. Bora marcar 15 minutos para eu te explicar?' },
  { quando: 'Semana 3 · sexta', dias: 20, assunto: 'Vídeo da sede', materialKey: 'VIDEO_INSTITUCIONAL', mensagem: '[Nome], quer conhecer a estrutura que vai operar com você? +300 especialistas. Quando vier, te recebo pessoalmente.' },
  { quando: 'Semana 4 · quarta', dias: 23, assunto: 'E-book: A Tempestade Perfeita', materialKey: 'EBOOK', mensagem: '[Nome], esse material é a sua cara: "A Tempestade Perfeita". Mostra a janela aberta agora. Já pensou em aproveitar com a gente?' },
  { quando: 'Mês 2 · semana 2', dias: 37, assunto: 'Outro case de sucesso', materialKey: 'CASES_DE_SUCESSO', mensagem: '[Nome], mais um resultado fresco da rede. Os números não param. Quero te ver fazendo parte disso, seguimos?' },
  { quando: 'Mês 2 · semana 3', dias: 44, assunto: 'Convite para a morning call', materialKey: null, mensagem: '[Nome], quero te convidar para a nossa morning call com a rede. Poucos entram. Posso reservar a sua vaga?' },
  { quando: 'Mês 3 · semana 2', dias: 65, assunto: 'Artigo do blog', materialKey: 'BLOG_POST', mensagem: '[Nome], saiu um conteúdo com tudo a ver com o seu momento. Te mando o link. Continua fazendo sentido seguir?' },
];

/**
 * @param {number|null} diasDesdeReuniao
 * @returns {{ atual: object|null, proximos: object[] }} o toque mais recente já vencido
 * (`atual`) e os 2 próximos ainda não vencidos (`proximos`), pra destacar "o que mandar
 * agora" sem esconder o resto do calendário.
 */
export function cadenciaAtual(diasDesdeReuniao) {
  if (diasDesdeReuniao == null) return { atual: null, proximos: CADENCIA.slice(0, 2) };
  const vencidos = CADENCIA.filter(c => c.dias <= diasDesdeReuniao);
  const futuros = CADENCIA.filter(c => c.dias > diasDesdeReuniao);
  return { atual: vencidos.length ? vencidos[vencidos.length - 1] : null, proximos: futuros.slice(0, 2) };
}
