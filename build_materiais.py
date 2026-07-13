"""
Gera publish/materials-data.js a partir da planilha "MATERIAIS PARA FOLLOW UP" do
marketing (Grupo Studio) — roda local ou via GitHub Actions (agendado).

A planilha é pública para leitura ("qualquer pessoa com o link"), então o export
funciona sem token/login — confirmado em 2026-07-13 com um curl simples.

Só gera o MATERIALS (conteúdo real da planilha: ebooks, cases, depoimentos, vídeos,
comparativo, blog). STAGES/PERSONAS/RECOMMENDATIONS/CADENCIA/CARTEIRA são lógica de
negócio escrita à mão em materiais.js e não são tocados por este script.
"""
import json
import urllib.request
import openpyxl
import io
import os

SHEET_ID = '1NIJX16NVanV9llT1H93YEw1Y5LhGYu_aGT7aj1xjPCI'
EXPORT_URL = f'https://docs.google.com/spreadsheets/d/{SHEET_ID}/export?format=xlsx'

# Localmente o site fica em publish/ (mesmo padrão dos outros projetos); no repo
# publicado (deploy.sh copia os arquivos pra raiz) não existe essa subpasta — escreve
# direto ao lado do script nesse caso.
_SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
_PUBLISH_DIR = os.path.join(_SCRIPT_DIR, 'publish')
OUT_PATH = os.path.join(_PUBLISH_DIR if os.path.isdir(_PUBLISH_DIR) else _SCRIPT_DIR, 'materials-data.js')


def fetch_workbook():
    with urllib.request.urlopen(EXPORT_URL, timeout=60) as r:
        data = r.read()
    return openpyxl.load_workbook(io.BytesIO(data), data_only=True)


def cell_link(cell):
    return cell.hyperlink.target if cell.hyperlink else (cell.value if isinstance(cell.value, str) and cell.value.startswith('http') else None)


def rows(ws, min_row=2):
    for row in ws.iter_rows(min_row=min_row):
        if any(c.value not in (None, '') for c in row):
            yield row


def sumario_mensagens(wb):
    ws = wb['SUMÁRIO']
    out = {}
    for row in rows(ws):
        nome, msg = row[0].value, row[1].value
        if nome:
            out[str(nome).strip().upper()] = msg
    return out


def build_ebook(wb, mensagens):
    ws = wb['EBOOKS']
    itens = []
    for row in rows(ws):
        nome, link_cell = row[0].value, row[1]
        link = cell_link(link_cell)
        if nome and link:
            itens.append({'nome': str(nome).strip(), 'link': link})
    return {'titulo': 'E-book', 'mensagem': mensagens.get('EBOOK', ''), 'itens': itens}


def build_cases(wb, mensagens):
    ws = wb['CASES DE SUCESSO']
    itens = []
    for row in rows(ws):
        local, segmento, faturamento, credito, link_cell = row[0].value, row[1].value, row[2].value, row[3].value, row[4]
        link = cell_link(link_cell)
        if link:
            itens.append({
                'local': local, 'segmento': segmento,
                'faturamento': faturamento, 'credito': credito, 'link': link,
            })
    return {'titulo': 'Cases de Sucesso', 'mensagem': mensagens.get('CASES DE SUCESSO', ''), 'itens': itens}


def build_atestado(wb, mensagens):
    ws = wb['ATESTADO DE CAPACIDADE']
    itens = []
    for row in rows(ws):
        nome_cell = row[0]
        link = cell_link(nome_cell)
        if link:
            itens.append({'nome': str(nome_cell.value).strip(), 'link': link})
    return {'titulo': 'Atestado de Capacidade', 'mensagem': mensagens.get('ATESTADO DE CAPACIDADE', ''), 'itens': itens}


def build_depoimentos_franqueados(wb, mensagens):
    ws = wb['DEPOIMENTOS FRANQUEADOS']
    itens = []
    for row in rows(ws):
        local, segmento, link_cell = row[0].value, row[1].value, row[2]
        link = cell_link(link_cell)
        if link:
            itens.append({'local': local, 'segmento': segmento, 'link': link})
    return {'titulo': 'Depoimento de Franqueados', 'mensagem': mensagens.get('DEPOIMENTO DE FRANQUEADOS', ''), 'itens': itens}


def build_depoimentos_parceiros(wb, mensagens):
    ws = wb['DEPOIMENTOS PARCEIROS']
    itens = []
    for row in rows(ws):
        link_cell = row[2]
        link = cell_link(link_cell)
        if link:
            itens.append({'link': link})
    return {'titulo': 'Depoimento de Parceiros', 'mensagem': mensagens.get('DEPOIMENTO DE PARCEIROS', ''), 'itens': itens}


def build_videos(wb, sheet_name, titulo, msg_key, mensagens):
    ws = wb[sheet_name]
    itens = []
    for row in rows(ws):
        assunto, link_cell = row[0].value, row[1]
        link = cell_link(link_cell)
        if assunto and link:
            itens.append({'assunto': str(assunto).strip(), 'link': link})
    return {'titulo': titulo, 'mensagem': mensagens.get(msg_key, ''), 'itens': itens}


def build_videos_jose_carlos(wb, mensagens):
    # Essa aba tem 2 blocos de colunas (A/B e G/H) com o mesmo conteúdo duplicado —
    # usa só o primeiro bloco.
    ws = wb['VÍDEOS JOSÉ CARLOS']
    itens = []
    for row in rows(ws):
        assunto, link_cell = row[0].value, row[1]
        link = cell_link(link_cell)
        if assunto and link:
            itens.append({'assunto': str(assunto).strip(), 'link': link})
    return {'titulo': 'Vídeos José Carlos (CEO)', 'mensagem': mensagens.get('VÍDEOS JOSÉ CARLOS', ''), 'itens': itens}


def build_onboarding(wb, mensagens):
    ws = wb['ONBOARDING DO FRANQUEADO']
    itens = []
    for row in rows(ws):
        nome_cell = row[0]
        link = cell_link(row[1]) if len(row) > 1 else None
        if nome_cell.value:
            itens.append({'nome': str(nome_cell.value).strip(), 'link': link})
    if not itens:
        itens = [{'nome': 'Onboarding Franqueado', 'link': None}]
    return {'titulo': 'Onboarding do Franqueado', 'mensagem': mensagens.get('ONBOARDING DO FRANQUEADO', ''), 'itens': itens}


def build_blog(wb, mensagens):
    ws = wb['BLOG POSTS']
    itens = []
    for row in rows(ws):
        categoria, link_cell = row[0].value, row[1]
        link = cell_link(link_cell)
        if categoria and link:
            itens.append({'categoria': str(categoria).strip(), 'assunto': str(categoria).strip(), 'link': link})
    return {'titulo': 'Blog Post', 'mensagem': mensagens.get('BLOG POST', ''), 'itens': itens}


def build_comparativo(wb, mensagens):
    ws = wb['COMPARATIVO COM CONCORRÊNCIA']
    linhas = []
    colunas = None
    for row in rows(ws, min_row=1):
        vals = [c.value for c in row if c.value not in (None, '')]
        if colunas is None:
            colunas = vals
        else:
            linhas.append(vals)
    return {
        'titulo': 'Comparativo com Concorrência',
        'mensagem': mensagens.get('COMPARATIVO COM CONCORRÊNCIA', ''),
        'tabela': {'colunas': colunas, 'linhas': linhas},
    }


def main():
    wb = fetch_workbook()
    mensagens = sumario_mensagens(wb)
    materials = {
        'EBOOK': build_ebook(wb, mensagens),
        'CASES_DE_SUCESSO': build_cases(wb, mensagens),
        'ATESTADO_CAPACIDADE': build_atestado(wb, mensagens),
        'DEPOIMENTO_FRANQUEADOS': build_depoimentos_franqueados(wb, mensagens),
        'DEPOIMENTO_PARCEIROS': build_depoimentos_parceiros(wb, mensagens),
        'VIDEOS_PARCERIA': build_videos(wb, 'VÍDEOS SOBRE PARCERIA', 'Vídeos sobre Parceria', 'VÍDEOS SOBRE PARCERIA', mensagens),
        'VIDEO_INSTITUCIONAL': build_videos(wb, 'VÍDEO INSTITUCIONAL', 'Vídeo Institucional', 'VÍDEO INSTITUCIONAL', mensagens),
        'BLOG_POST': build_blog(wb, mensagens),
        'COMPARATIVO_CONCORRENCIA': build_comparativo(wb, mensagens),
        'VIDEOS_JOSE_CARLOS': build_videos_jose_carlos(wb, mensagens),
        'ONBOARDING_FRANQUEADO': build_onboarding(wb, mensagens),
    }
    js = '// GERADO AUTOMATICAMENTE por build_materiais.py a partir da planilha do marketing.\n'
    js += '// Não editar à mão — mudanças são sobrescritas no próximo sync.\n'
    js += 'export const MATERIALS = ' + json.dumps(materials, ensure_ascii=False, indent=2) + ';\n'
    os.makedirs(os.path.dirname(OUT_PATH), exist_ok=True)
    with open(OUT_PATH, 'w', encoding='utf-8') as f:
        f.write(js)
    print(f'OK: {OUT_PATH} ({sum(len(m.get("itens", [])) for m in materials.values())} itens no total)')


if __name__ == '__main__':
    main()
