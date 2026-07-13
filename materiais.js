/**
 * Conteúdo extraído da planilha "MATERIAIS PARA FOLLOW UP" (marketing, Grupo Studio)
 * em 2026-07-10: https://docs.google.com/spreadsheets/d/1NIJX16NVanV9llT1H93YEw1Y5LhGYu_aGT7aj1xjPCI
 *
 * A planilha é atualizada com frequência pelo marketing — não há sync automático.
 * Quando ela mudar, reler as abas e atualizar este arquivo manualmente, depois
 * `wrangler deploy`.
 */

export const MATERIALS = {
  EBOOK: {
    titulo: 'E-book',
    mensagem: 'Aqui estão os e-books de autoria do Grupo Studio com conteúdo rico e aprofundado sobre os temas que mais impactam o seu negócio, totalmente gratuitos para você acessar agora.',
    itens: [
      { nome: 'A Tempestade Perfeita para Advogados e Contadores', link: 'https://drive.google.com/file/d/1CFy1dqIsLnPCsSB-k8yckFAgbayuEgxL/view?usp=drive_link' },
      { nome: 'Como Implementar a Área Tributária no seu Escritório', link: 'https://drive.google.com/file/d/1VA6reXAgkSXcqW_I9B7yKSA0XnjHmp_e/view?usp=drive_link' },
      { nome: 'Manual Completo Novo Tributário', link: 'https://drive.google.com/file/d/1TgAvF9S5DdUUvhWPFpORDqlEnTy0n0pT/view?usp=sharing' },
      { nome: 'Lei do Bem', link: 'https://drive.google.com/file/d/1nHuHlssxFPUfTvxqlw_mx2Zu2RO4H0J1/view?usp=sharing' },
    ],
  },

  CASES_DE_SUCESSO: {
    titulo: 'Cases de Sucesso',
    mensagem: 'Apresento a você cases de sucesso do Grupo Studio onde você acompanha de forma integral o que é o nosso padrão de entrega, resultados como esses acontecem todos os dias aqui dentro.',
    itens: [
      { local: 'Alagoas - AL', segmento: 'Indústria Alimentícia', faturamento: 'R$ 13.000.000,00', credito: 'R$ 1.170.607,32', link: 'https://drive.google.com/file/d/1PEjCAxLigTFpCVvxcBqStqeatyZW23nr/view' },
      { local: 'Araguaiana - TO', segmento: 'Indústria Alimentícia', faturamento: 'R$ 20.128.046,86', credito: 'R$ 2.019.174,90', link: 'https://drive.google.com/file/d/1mhtjzUcr1t0nX1-PQkW54yFgBTwCz6yv/view' },
      { local: 'Belo Horizonte - MG', segmento: 'Concessionária', faturamento: 'R$ 88.000.000,00', credito: 'R$ 1.782.934,32', link: 'https://drive.google.com/file/d/1iEEnVhKRbHXHboDjrr9wbv5yzvjbz88W/view' },
      { local: 'Belo Horizonte - MG', segmento: 'Serviços em Geral', faturamento: 'R$ 38.928.724,34', credito: 'R$ 1.767.072,60', link: 'https://drive.google.com/file/d/1lihedj5XcnE6jFzGFj9zlXzvSZAdSCNZ/view' },
      { local: 'Blumenau - SC', segmento: 'Atacadista', faturamento: 'R$ 35.237.634,88', credito: 'R$ 730.103,74', link: 'https://drive.google.com/file/d/1uK8eaBkNt8hlgkava4omgtRWjsnSBwjk/view' },
      { local: 'Brasília - DF', segmento: 'Tecnologia', faturamento: 'R$ 13.314.984,40', credito: 'R$ 1.583.787,17', link: 'https://drive.google.com/file/d/1fDm8sDEMUC0ywGRHcVBvQGrZtPNng1Xe/view' },
      { local: 'Catanduvas - SC', segmento: 'Indústria', faturamento: 'R$ 21.980.102,62', credito: 'R$ 810.534,84', link: 'https://drive.google.com/file/d/1kyW46688dd3S6_vTHNXcuryBV80wQ_gT/view' },
      { local: 'Cascavel - PR', segmento: 'Atacadista', faturamento: 'R$ 71.522.490,58', credito: 'R$ 412.918,50', link: 'https://drive.google.com/file/d/1_b1LAcaBrpejlM0OOOZhpDjHf9soE4Co/view' },
      { local: 'Catanduvas - SC', segmento: 'Indústria', faturamento: 'R$ 21.980.102,62', credito: 'R$ 344.081,77', link: 'https://drive.google.com/file/d/1Xw9QgbSI7_tPDwOp_BxT1fBdiEW5asxs/view' },
      { local: 'Caxias do Sul - RS', segmento: 'Indústria de Sucos', faturamento: 'R$ 56.263.000,00', credito: 'R$ 4.051.964,83', link: 'https://drive.google.com/file/d/1RUD3S91gSfSH1GY2EB4KPFwXMBQtfnbT/view' },
      { local: 'Caxias do Sul - RS', segmento: 'Indústria de Sucos', faturamento: 'R$ 56.262.437,20', credito: 'R$ 1.442.698,34', link: 'https://drive.google.com/file/d/1Tqpxwxc28HbUMMm-s9lO3TU2wIqu1SO1/view' },
      { local: 'Concórdia - SC', segmento: 'Varejista', faturamento: 'R$ 8.058.228,61', credito: 'R$ 409.890,69', link: 'https://drive.google.com/file/d/1gkU7mJlM7-go669kA5zqTk-4AplrZd9-/view' },
      { local: 'Curitiba - PR', segmento: 'Atacadista', faturamento: 'R$ 15.303.174,77', credito: 'R$ 1.640.848,75', link: 'https://drive.google.com/file/d/1MzJAfK_c3a46QzUH1IlM0ssgzkx_jh-y/view' },
      { local: 'Embu das Artes - SP', segmento: 'Indústria', faturamento: 'R$ 62.276.409,72', credito: 'R$ 820.203,55', link: 'https://drive.google.com/file/d/1qU6RS90tFz8hiProijO7vxCTjQbT7CTl/view' },
      { local: 'Embu das Artes - SP', segmento: 'Indústria', faturamento: 'R$ 62.276.409,72', credito: 'R$ 1.241.028,63', link: 'https://drive.google.com/file/d/1zfHVQYevKxQmYfg-SF57Ae2rrIyrJzst/view' },
      { local: 'Formiga - MG', segmento: 'Atacadista', faturamento: 'R$ 15.434.321,59', credito: 'R$ 653.798,88', link: 'https://drive.google.com/file/d/1gN3j5AKf_pVdnToBRiqeEJxxFPIQExbK/view' },
      { local: 'Imperatriz - MA', segmento: 'Serviço', faturamento: 'R$ 8.000.000,00', credito: 'R$ 7.839.618,13', link: 'https://drive.google.com/file/d/1dgvA6bUG6FkmyAa7YPLq7QJP7iOGMS4t/view' },
      { local: 'Itaqui - RS', segmento: 'Varejista', faturamento: 'R$ 32.021.163,19', credito: 'R$ 12.710.195,20', link: 'https://drive.google.com/file/d/1-xU1FNevo-2qVZ7Hd7DCAxUkbd-wAa-M/view' },
      { local: 'João Pessoa - PB', segmento: 'Supermercado', faturamento: 'R$ 45.422.046,95', credito: 'R$ 3.767.874,24', link: 'https://drive.google.com/file/d/1xzHlTQ-NaTzfwtr8emeZ7ZOzNBQ9UZlq/view' },
      { local: 'João Pessoa - PB', segmento: 'Supermercado', faturamento: 'R$ 45.422.046,95', credito: 'R$ 9.658.259,17', link: 'https://drive.google.com/file/d/1CeR7LlOaNk9GcuhTra_-SibkzOYQlBLW/view' },
      { local: 'Joinville - SC', segmento: 'Indústria', faturamento: 'R$ 6.947.343,68', credito: 'R$ 537.411,70', link: 'https://drive.google.com/file/d/1wxj-QO4Kw1-e7f6nEVEdFI54gsChLZjo/view' },
      { local: 'Jundiaí - SP', segmento: 'Autopeças', faturamento: 'R$ 55.982.018,20', credito: 'R$ 570.428,31', link: 'https://drive.google.com/file/d/1kTKVy3aKXmVVtT9dTj3hV3EueKUOpeY6/view' },
      { local: 'Minas Gerais - MG', segmento: 'Indústria Alimentícia', faturamento: 'R$ 11.600.000,00', credito: 'R$ 186.906,97', link: 'https://drive.google.com/file/d/1V-zxgKwBFKfyIvyBtuK8b7AqWbZSWjOn/view' },
      { local: 'Mogi das Cruzes - SP', segmento: 'Concessionária', faturamento: 'R$ 88.039.116,48', credito: 'R$ 919.250,74', link: 'https://drive.google.com/file/d/1VKthkiL6MdtVLQYi_L9aRpzz56wnQ_rE/view' },
      { local: 'Nilópolis - RJ', segmento: 'Hospitalar', faturamento: 'R$ 358.930.039,38', credito: 'R$ 1.214.533,42', link: 'https://drive.google.com/file/d/1NECyF_9yqdqckkkNM5hhIOl497nRR1lF/view' },
      { local: 'Palmas - TO', segmento: 'Comércio', faturamento: 'R$ 20.000.000,00', credito: 'R$ 836.590,00', link: 'https://drive.google.com/file/d/1pnBjX6fL0mmT-F81O-pyMTkPEMkBoAZt/view' },
      { local: 'Pelotas - RS', segmento: 'Varejista', faturamento: 'R$ 4.117.664,06', credito: 'R$ 210.531,43', link: 'https://drive.google.com/file/d/1XqQ8JXRAk0HmluESGT62rdt3LOVfmHNu/view' },
      { local: 'Rio Grande do Norte - RN', segmento: 'Hospitalar', faturamento: 'R$ 21.600.000,00', credito: 'R$ 1.215.000,00', link: 'https://drive.google.com/file/d/1xQPFSX9-0XmD_rHu-mjg65UgWW8jMCz2/view' },
      { local: 'Sto Amaro da Imperatriz - SC', segmento: 'Varejista', faturamento: 'R$ 11.369.126,66', credito: 'R$ 934.031,72', link: 'https://drive.google.com/file/d/1CmvyaD2O68MfiXqQSHmKGwg0xw_hU7zG/view' },
      { local: 'São Paulo - SP', segmento: 'Serviços em Geral', faturamento: 'R$ 1.446.383,91', credito: 'R$ 442.302,35', link: 'https://drive.google.com/file/d/103PaLtKCiSAZoQvBDxLX2ISA8k1whjMk/view' },
      { local: 'São Paulo - SP', segmento: 'Serviços em Geral', faturamento: 'R$ 14.864.514,31', credito: 'R$ 494.238,34', link: 'https://drive.google.com/file/d/1BI6StPvHhk9CgrSemR_a44tdYb9is98-/view' },
      { local: 'São Paulo - SP', segmento: 'Indústria Alimentícia', faturamento: 'R$ 22.000.000,00', credito: 'R$ 439.805,07', link: 'https://drive.google.com/file/d/1QXI6fe93xJs6RkxMuDD6YemLNgwNxQo7/view' },
      { local: 'São Paulo - SP', segmento: 'Supermercadista', faturamento: 'R$ 422.515.007,80', credito: 'R$ 9.113.251,44', link: 'https://drive.google.com/file/d/1QcD7XUZdKxwA-PbG1NOG_kio2RkWGvg4/view' },
      { local: 'São Paulo - SP', segmento: 'Atacadista', faturamento: 'R$ 381.094.794,87', credito: 'R$ 5.013.573,61', link: 'https://drive.google.com/file/d/1Sjlm1YftBjFKUXLYeBVkPYm81VzUpO_Y/view' },
      { local: 'São Paulo - SP', segmento: 'Serviços em Geral', faturamento: 'R$ 33.583.811,53', credito: 'R$ 3.109.457,09', link: 'https://drive.google.com/file/d/1W7pe4hjJaZ8iTnIfgUYFel9xlGmpAXRB/view' },
      { local: 'Seara - SC', segmento: 'Agrícola', faturamento: 'R$ 66.986.396,08', credito: 'R$ 535.324,71', link: 'https://drive.google.com/file/d/1AmFkDqmFNlbieOBe3E84IovkjzG2xcOQ/view' },
      { local: 'Sobral - CE', segmento: 'Concessionária e Autopeças de Motos', faturamento: 'R$ 23.017.180,36', credito: 'R$ 203.228,77', link: 'https://drive.google.com/file/d/16k4kMe53z9cOHOlg1KDLYOjB9Xxi8FXw/view' },
      { local: 'Sobral - CE', segmento: 'Concessionária', faturamento: 'R$ 33.774.222,21', credito: 'R$ 639.015,26', link: 'https://drive.google.com/file/d/1zTRWy4j0YFVvlG_wmRkRSdMW8ZSSi3ZX/view' },
      { local: 'Taió - SC', segmento: 'Atacadista', faturamento: 'R$ 131.629.751,35', credito: 'R$ 2.484.015,62', link: 'https://drive.google.com/file/d/1MobCXOwDi8_iAY4ZyPVacZD-vhWoDRcT/view' },
      { local: 'Tangará da Serra - MT', segmento: 'Transportadora', faturamento: 'R$ 131.629.751,35', credito: 'R$ 2.560.160,09', link: 'https://drive.google.com/file/d/15iBMHqiQYw3oqfhLZGZMJGddztNW7on_/view' },
      { local: 'Tangará da Serra - MT', segmento: 'Transportadora', faturamento: 'R$ 131.629.751,35', credito: 'R$ 2.185.255,81', link: 'https://drive.google.com/file/d/1Mhn-j0KmqUeca0fQMv_ZWC3tgcLTGnoF/view' },
      { local: 'Timóteo - MG', segmento: 'Serviços em Geral', faturamento: 'R$ 21.980.102,62', credito: 'R$ 724.434,83', link: 'https://drive.google.com/file/d/14Uy3qWWliasTEIef90nPtn_fn0PLaAJr/view' },
      { local: 'Toledo - PR', segmento: 'Atacadista', faturamento: 'R$ 44.178.137,97', credito: 'R$ 1.354.838,91', link: 'https://drive.google.com/file/d/1Eyk8fYxzA0vxXWLrrLgjDd4UPi2gOlSg/view' },
      { local: 'Toledo - PR', segmento: 'Atacadista', faturamento: 'R$ 44.178.137,97', credito: 'R$ 237.848,14', link: 'https://drive.google.com/file/d/12Z3TxkAU7TQ8l8b6PoTfWJGJTw6fabie/view' },
      { local: 'Unaí - MG', segmento: 'Agroindústria', faturamento: 'R$ 261.857.341,34', credito: 'R$ 83.517.898,29', link: 'https://drive.google.com/file/d/1qxypj-BSCuUd3bI1bBRFlkfsDhQneort/view' },
      { local: 'Viçosa - MG', segmento: 'Pet Shop', faturamento: 'R$ 7.161.205,40', credito: 'R$ 669.370,42', link: 'https://drive.google.com/file/d/125-f3GNoBN4fHNqPE47uSxDnZgfJ0Ngv/view' },
      { local: 'Volta Redonda - RJ', segmento: 'Concessionária', faturamento: 'R$ 73.626.283,83', credito: 'R$ 1.707.930,62', link: 'https://drive.google.com/file/d/1FuA8vKklvVEU-TGciAfQh1upCIyLg2lR/view' },
      { local: 'Volta Redonda - RJ', segmento: 'Serviços em Geral', faturamento: 'R$ 7.827.473,37', credito: 'R$ 218.357,06', link: 'https://drive.google.com/file/d/1W37Uvr1iRVp1KXBzatxZ7qpSvqsNoZxu/view' },
    ],
  },

  ATESTADO_CAPACIDADE: {
    titulo: 'Atestado de Capacidade',
    mensagem: 'Estou enviando para você nossa revista de atestados que contempla inúmeras empresas que fazem parte da história do Grupo Studio e atestam a qualidade do que entregamos todos os dias:',
    itens: [
      { nome: 'Revista de Atestados de Capacidade (GS Digital)', link: 'https://drive.google.com/file/d/1JGgm9yRPcgIGNXGQOqnnvfPgrfILb1E9/view?usp=drive_link' },
    ],
  },

  DEPOIMENTO_FRANQUEADOS: {
    titulo: 'Depoimento de Franqueados',
    mensagem: 'Ouça de quem já viveu essa experiência: nossos franqueados falam sobre o treinamento que receberam na fase inicial do contrato e o que esse suporte significou para o começo da sua jornada com o Grupo Studio.',
    itens: [
      { local: 'Brasília', segmento: 'Advogada', link: 'https://drive.google.com/file/d/1dHRmTQqsxnNf8_9PByn9jCZLM1q1iJ96/view?usp=sharing' },
      { local: 'Minas Gerais', segmento: 'Advogada', link: 'https://drive.google.com/file/d/1jCI_8B8_23pfAXIfNzzUMIfuZMViAypR/view?usp=sharing' },
      { local: 'Belo Horizonte', segmento: 'Empresário', link: 'https://drive.google.com/file/d/1HazgrEuT1vv2Mb3DaiIHpIqoCrMHAUXY/view?usp=sharing' },
      { local: 'Campinas', segmento: 'Advogado', link: 'https://drive.google.com/file/d/1PCda21f7RAqpAnDw7aUXwrKiAdN8dvgr/view?usp=sharing' },
      { local: 'São Paulo', segmento: 'Advogada', link: 'https://drive.google.com/file/d/1Bjp8-AHFmyP8pges1yItlEaMHObYv9L1/view?usp=sharing' },
      { local: 'São Paulo', segmento: 'Advogada', link: 'https://drive.google.com/file/d/1U3XkfIx5wU6I-WQnTmfg6WVLI5idlTRB/view?usp=sharing' },
      { local: 'São Paulo', segmento: 'Advogada', link: 'https://drive.google.com/file/d/1HH6IbnuGQ_ztZUnWER9CIVpBTbPiczFz/view?usp=sharing' },
      { local: 'Pelotas', segmento: 'Empresário', link: 'https://drive.google.com/file/d/1ORhWtfsjEeOPi7g8CDJ8wXRILtL5BtGb/view?usp=sharing' },
      { local: 'Florianópolis', segmento: 'Empresário', link: 'https://drive.google.com/file/d/1Ye0zI1sImH1qZZFxp4rDc7VOCignbuzU/view?usp=sharing' },
      { local: 'Maringá', segmento: 'Administrador', link: 'https://drive.google.com/file/d/1LrlkF2JSEl1JICeQnmmhACg3eL4uygQE/view?usp=sharing' },
      { local: null, segmento: 'Advogado', link: 'https://drive.google.com/file/d/1qTOM2jk9IgEW0b1XGrh1Bvlb-il_0OcL/view?usp=sharing' },
      { local: null, segmento: 'Jornalista', link: 'https://drive.google.com/file/d/1gTVdQCw8JTNM2uDikZ7OGNKUd3Wm51U5/view?usp=sharing' },
      { local: null, segmento: 'Engenheiro', link: 'https://drive.google.com/file/d/1ebFwbc5bMgOb8ADVKvRG-oXqd1E_hK9y/view?usp=sharing' },
    ],
  },

  DEPOIMENTO_PARCEIROS: {
    titulo: 'Depoimento de Parceiros',
    mensagem: 'Ouça de quem já viveu essa experiência: nossos parceiros falam sobre o treinamento que receberam na fase inicial do contrato e o que esse suporte significou para o começo da sua jornada com o Grupo Studio.',
    itens: [
      { link: 'https://drive.google.com/file/d/1WaKxh0AFwqhb7ykogG0B2V3Zsk3BS63d/view?usp=sharing' },
      { link: 'https://drive.google.com/file/d/1ALK7Uqndfr-DwGtWekQrrHPFOOHDo8jD/view?usp=sharing' },
      { link: 'https://drive.google.com/file/d/1AcR8TC8pV4ixbBAfueeh-XYaOil-xAay/view?usp=sharing' },
    ],
  },

  VIDEOS_PARCERIA: {
    titulo: 'Vídeos sobre Parceria',
    mensagem: 'Estou te enviando alguns vídeos curtos para que você entenda, de forma simples e prática, como funciona o modelo de parceria do Grupo Studio.',
    itens: [
      { assunto: 'Como funciona o modelo de negócio de parceria', link: 'https://www.youtube.com/watch?v=I0uQgKk57Gs&list=PLbAd3viRqde0&index=1&t=3s' },
      { assunto: 'Para que serve o treinamento do parceiro', link: 'https://www.youtube.com/watch?v=ifly9Aa3Nfg&list=PLbAd3viRqde0&index=2' },
      { assunto: 'Quanto você pode ganhar sendo parceiro', link: 'https://www.youtube.com/watch?v=ZqdLV81Aw48&list=PLbAd3viRqde0&index=3' },
      { assunto: 'Tecnologia para auxiliar sua captação de clientes - PJ360', link: 'https://www.youtube.com/watch?v=UPepfux-F_Y&list=PLbAd3viRqde0&index=4' },
      { assunto: 'Portfólio de soluções disponível para o parceiro', link: 'https://www.youtube.com/watch?v=iIM8PS-jsAw&list=PLbAd3viRqde0&index=5' },
    ],
  },

  VIDEO_INSTITUCIONAL: {
    titulo: 'Vídeo Institucional',
    mensagem: 'Estou te enviando nosso vídeo institucional para que você conheça melhor a estrutura, a história e a atuação do Grupo Studio.',
    itens: [
      { assunto: 'Quem Somos: 30 Anos de Soluções que Geram Resultados', link: 'https://www.youtube.com/watch?v=CbRPiF0rdao' },
    ],
  },

  BLOG_POST: {
    titulo: 'Blog Post',
    mensagem: 'Separei alguns conteúdos no nosso site que podem ajudar você a entender melhor as oportunidades e tomar uma decisão mais segura.',
    // Lista completa (~280 posts) fica pesada pra UI — mantemos um recorte "evergreen"
    // (não amarrado a datas/notícias do momento) por categoria. Blog não entra na matriz
    // principal, é sempre oferecido como conteúdo extra.
    itens: [
      { categoria: 'Reforma Tributária', assunto: 'Reforma Tributária 2026: Guia Completo', link: 'https://grupostudio.com.br/noticia/reforma-tributaria-2026-guia-completo/' },
      { categoria: 'Holding e Planejamento Patrimonial', assunto: 'LC 227/2026: Holding Familiar, ITCMD e Planejamento Patrimonial', link: 'https://grupostudio.com.br/noticia/lc-227-2026-holding-familiar-itcmd-valor-mercado-janela-sucessao/' },
      { categoria: 'Fusões e Aquisições (M&A)', assunto: 'Due Diligence Tributária em M&A: checklist para o CFO', link: 'https://grupostudio.com.br/noticia/due-diligence-tributaria-ma-checklist-cfo-2026/' },
      { categoria: 'Gestão Financeira e Crédito', assunto: 'Como usar créditos tributários para reduzir passivos e liberar caixa', link: 'https://grupostudio.com.br/noticia/usar-creditos-tributarios-reduzir-passivos-caixa/' },
      { categoria: 'Agronegócio', assunto: 'PL 5122: Refinanciamento de Dívidas Rurais', link: 'https://grupostudio.com.br/noticia/pl-5122-refinanciamento-dividas-rurais-senado-2026-cfo/' },
      { categoria: 'Estratégia Empresarial', assunto: 'Planejamento Tributário 2026', link: 'https://grupostudio.com.br/noticia/planejamento-tributario-2026/' },
      { categoria: 'Tributário e Contencioso Fiscal', assunto: 'CARF acelera com IA: o que muda no contencioso para o CFO', link: 'https://grupostudio.com.br/noticia/carf-acelera-com-ia-o-que-muda-no-contencioso-para-o-cfo-em-2026/' },
    ],
  },

  COMPARATIVO_CONCORRENCIA: {
    titulo: 'Comparativo com Concorrência',
    mensagem: 'Preparei um comparativo para mostrar, de forma clara, os diferenciais do Grupo Studio em relação ao mercado e ajudar você a avaliar a melhor decisão.',
    tabela: {
      colunas: ['Critério', 'Grupo Studio', 'Concorrente A', 'Concorrente B'],
      linhas: [
        ['Tempo de mercado', '30 anos', '16 anos', '15 anos'],
        ['Portfólio', 'Mais de 40 soluções', 'Somente previdenciário', 'Somente tributário'],
        ['Tecnologia', 'PJ360° (120+ fontes)', 'Não existe', 'Não existe'],
        ['Glosas pela Receita Federal', 'Zero Glosas', 'Diversas', 'Indeterminado'],
        ['Média de oportunidade', '3,5 milhões', '300 mil', '450 mil'],
        ['Suporte', 'Completo, modulado para atender franqueados', 'Não faz parte do core business', 'Suporte comercial'],
        ['Redes e unidades', '350 escritórios + 1 mil parceiros', '800 parceiros', '240 escritórios'],
        ['Verticais de atuação', 'TAX - LEGAL - M&A - FINANCE - HOLDING - ENERGY - TECH', 'TAX previdenciário', 'TAX fiscal'],
        ['Benefícios gerados', '16 bilhões', '7 bilhões', '10 bilhões'],
        ['Clientes atendidos', '35 mil', '10 mil', '16 mil'],
      ],
    },
  },

  VIDEOS_JOSE_CARLOS: {
    titulo: 'Vídeos José Carlos (CEO)',
    mensagem: 'Estou enviando para você uma entrevista exclusiva com o CEO do Grupo Studio, onde ele compartilha sua visão, trajetória e o que está por trás dos resultados que entregamos todos os dias.',
    itens: [
      { assunto: 'História do Grupo Studio', link: 'https://www.youtube.com/watch?v=Xe3PlwCNBbs' },
      { assunto: 'Visão de futuro para o Grupo Studio', link: 'https://www.youtube.com/watch?v=LbdrhN3UUH0' },
      { assunto: 'Mensagem para quem pensa em entrar no ecossistema Grupo Studio', link: 'https://www.youtube.com/watch?v=g9YNgyL0qiY' },
    ],
  },

  ONBOARDING_FRANQUEADO: {
    titulo: 'Onboarding do Franqueado',
    mensagem: 'Segue um vídeo que explica como funciona o onboarding dos franqueados Grupo Studio e mostra, de forma prática, como conduzimos essa etapa de integração, preparação e alinhamento para quem inicia conosco.',
    // Marketing ainda não cadastrou o link desse vídeo na planilha (aba "ONBOARDING DO
    // FRANQUEADO" só tem o assunto, coluna Link vazia) — sinalizar isso na UI em vez de
    // quebrar.
    itens: [
      { nome: 'Onboarding Franqueado', link: null },
    ],
  },
};

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
export const STAGES = [
  { id: 593, nome: 'LEAD', subtitulo: '', bucket: 'pre' },
  { id: 594, nome: 'PRÉ-QUALIFICAÇÃO', subtitulo: 'tentativa de contato', bucket: 'pre' },
  { id: 595, nome: 'EM ATENDIMENTO', subtitulo: 'retornou, ainda não qualificado', bucket: 'pre' },
  { id: 596, nome: 'MQL FRANQUIA', subtitulo: 'qualificação realizada, CC1 agendada ou não', bucket: 'pre' },
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
// em vez de inventar portas que não existem na fonte.
export const PLAYBOOK_ETAPAS = {
  pre: {
    nome: 'Pré-SQL (Qualificadora)',
    descricao: 'Lead ainda em qualificação pela Qualificadora, antes do repasse pro closer.',
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

// ============= MATRIZ etapa (bucket) x persona -> materiais sugeridos =============
// Proposta inicial (2026-07-10, revisada com o Playbook de Expansão) — ajustar conforme
// feedback real dos closers.
export const RECOMMENDATIONS = {
  pre: {
    advogado: ['VIDEO_INSTITUCIONAL'],
    contador: ['VIDEO_INSTITUCIONAL'],
    bancario: ['VIDEO_INSTITUCIONAL'],
    empresario: ['VIDEO_INSTITUCIONAL'],
  },
  sql: {
    advogado: ['VIDEO_INSTITUCIONAL', 'EBOOK'],
    contador: ['VIDEO_INSTITUCIONAL', 'EBOOK'],
    bancario: ['VIDEO_INSTITUCIONAL', 'COMPARATIVO_CONCORRENCIA'],
    empresario: ['VIDEO_INSTITUCIONAL', 'COMPARATIVO_CONCORRENCIA'],
  },
  oportunidade: {
    advogado: ['CASES_DE_SUCESSO', 'EBOOK'],
    contador: ['CASES_DE_SUCESSO', 'ATESTADO_CAPACIDADE'],
    bancario: ['COMPARATIVO_CONCORRENCIA', 'VIDEO_INSTITUCIONAL'],
    empresario: ['CASES_DE_SUCESSO', 'COMPARATIVO_CONCORRENCIA'],
  },
  oportunidade_quente: {
    advogado: ['DEPOIMENTO_FRANQUEADOS', 'VIDEOS_JOSE_CARLOS'],
    contador: ['ATESTADO_CAPACIDADE', 'VIDEOS_JOSE_CARLOS'],
    bancario: ['DEPOIMENTO_PARCEIROS', 'COMPARATIVO_CONCORRENCIA'],
    empresario: ['DEPOIMENTO_FRANQUEADOS', 'VIDEOS_JOSE_CARLOS'],
  },
  proposta: {
    advogado: ['DEPOIMENTO_FRANQUEADOS', 'COMPARATIVO_CONCORRENCIA'],
    contador: ['COMPARATIVO_CONCORRENCIA', 'ATESTADO_CAPACIDADE'],
    bancario: ['COMPARATIVO_CONCORRENCIA', 'DEPOIMENTO_PARCEIROS'],
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
  bancario: 'DEPOIMENTO_PARCEIROS',
  empresario: 'VIDEOS_JOSE_CARLOS',
};

/**
 * @param {number} stageId
 * @param {string} personaId
 * @param {number} diasParado
 * @returns {{ materiais: string[], estagnado: boolean, motivo: string }}
 */
export function recomendar(stageId, personaId, diasParado) {
  const stage = STAGE_BY_ID[stageId];
  if (!stage) throw new Error(`Etapa desconhecida: ${stageId}`);
  const base = RECOMMENDATIONS[stage.bucket]?.[personaId] ?? [];
  const estagnado = !BUCKETS_SEM_ESTAGNACAO.has(stage.bucket) && diasParado > LIMIAR_DIAS_ESTAGNADO;
  const materiais = estagnado ? [REFORCO_ESTAGNACAO[personaId], ...base] : base;
  return {
    materiais: [...new Set(materiais)],
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
  { quando: 'Semana 2 · quinta', dias: 11, assunto: 'Vídeo do treinamento', materialKey: 'VIDEOS_PARCERIA', mensagem: '[Nome], todo sócio entra preparado: esse é o nosso treinamento. Posso te mostrar como seria o seu começo?' },
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
