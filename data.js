/*
  KPZ Customs - Cadastro dos Projetos

  É AQUI QUE VOCÊ EDITA O PORTFÓLIO.

  Passo a passo simples para adicionar um projeto:
  1. Copie um projeto inteiro entre chaves { ... }.
  2. Cole o bloco logo antes do colchete final ];
  3. Troque estes campos:
     - id: deve ser único, sem espaços, ex: 'cordao-astro-others'.
     - nome: título do projeto.
     - categoria: vehicles, weapons, clothes ou free.
     - subcategoria: a divisão correta da página.
     - imagem: caminho da imagem principal.
     - descricao: descrição curta.
     - detalhes: lista de itens para mostrar no modal.
     - galeria: imagens extras do projeto.
     - download: só para categoria free.

  Categorias aceitas:
  - vehicles
  - weapons
  - clothes
  - free

  Subcategorias usadas nas páginas:
  Vehicles: Corporation, Illegal, Others
  Weapons: Custom Weapons
  Clothes: Corporation, Illegal, Others
  Free: Download

  CARROSSEL DA HOME:
  - Para aparecer no carrossel: destaque: true,
  - Para NÃO aparecer: destaque: false,
  - A ordem do carrossel segue a ordem dos projetos aqui no data.js.

  IMPORTANTE: id deve ser único. Se houver dois projetos com o mesmo id,
  apenas o primeiro será aberto no modal.
*/

/* EXEMPLO DE PROJETO
  Cole esse bloco antes do colchete final ] do array de projetos.
  Troque os valores conforme o seu projeto.
{
  id: 'seu-projeto-unico',
  nome: 'Nome do Projeto',
  categoria: 'vehicles', // vehicles, weapons, clothes ou free
  subcategoria: 'Corporation', // use a divisão certa
  imagem: 'assets/img/sua-imagem.png',
  descricao: 'Descrição curta do projeto.',
  destaque: false, // true para aparecer no carrossel da home
  detalhes: [
    'Feature 1',
    'Feature 2',
    'Feature 3'
  ],
  galeria: [
    'assets/img/sua-imagem.png',
    'assets/img/thumbnail-2.png'
  ],
  download: 'downloads/seu-download.zip' // só para categoria free
},
*/

const projetos = [
  {
    id: 'r1200-hosp-brazza',
    nome: 'Übermacht GS 1200 - Brazza',
    categoria: 'vehicles',
    subcategoria: 'Corporation',
    imagem: 'assets/img/r1200-hosp-brazza/r1200-hosp-photo-1.png',
    descricao: 'Modelo premium com visual operacional, ideal para GTM e policiamento ostensivo.',
    destaque: true, // aparece no carrossel da Home
    detalhes: [
      'Übermacht GS 1200 - Brazza',
      'FiveM Ready',
      'Modelo otimizado',
      'Detalhes realistas',
      'Iluminação funcional',
      'Ideal para GTM e patrulhamento',
      'Acabamento premium',
      'Compatível com plotagem personalizada'
],
    galeria: [
      'assets/img/r1200-hosp-brazza/r1200-hosp-photo-1.png',
      'assets/img/r1200-hosp-brazza/r1200-hosp-photo-2.png',
      'assets/img/r1200-hosp-brazza/r1200-hosp-photo-3.png',
      'assets/img/r1200-hosp-brazza/r1200-hosp-photo-4.png',
      'assets/img/r1200-hosp-brazza/r1200-hosp-photo-5.png',
      'assets/img/r1200-hosp-brazza/r1200-hosp-photo-6.png',
    ]
  },

  {
    id: 'vapid-hosp-brazza',
    nome: 'Vapid Speedo - Brazza',
    categoria: 'vehicles',
    subcategoria: 'Corporation',
    imagem: 'assets/img/vapid-hosp-brazza/vapid-hosp-brazza-photo-1.png',
    descricao: 'Ambulância operacional desenvolvida para resgates, atendimentos de emergência e suporte médico.',
    destaque: true, // aparece no carrossel da Home
    detalhes: [
      'Vapid Speedo - Brazza',
      'FiveM Ready',
      'Modelo exclusivo',
      'Texturas em alta qualidade',
      'Equipamentos médicos detalhados',
      'Ideal para resgate e atendimento emergencial',
      'Acabamento premium',
      'Otimizada para servidores FiveM'
    ],
    galeria: [
      'assets/img/vapid-hosp-brazza/vapid-hosp-brazza-photo-1.png',
      'assets/img/vapid-hosp-brazza/vapid-hosp-brazza-photo-2.png',
      'assets/img/vapid-hosp-brazza/vapid-hosp-brazza-photo-3.png',
      'assets/img/vapid-hosp-brazza/vapid-hosp-brazza-photo-4.png',
      'assets/img/vapid-hosp-brazza/vapid-hosp-brazza-photo-5.png',
      'assets/img/vapid-hosp-brazza/vapid-hosp-brazza-photo-6.png'
    ]
  },

  {
    id: 'sw4-hosp-brazza',
    nome: 'Karin SW4 - Brazza',
    categoria: 'vehicles',
    subcategoria: 'Corporation',
    imagem: 'assets/img/sw4-hosp-brazza/sw4-hosp-photo-1.png',
    descricao: 'SUV de emergência desenvolvida para atendimento rápido, resgates e suporte médico avançado.',
    destaque: true, // aparece no carrossel da Home
    detalhes: [
      'Karin SW4 - Brazza',
      'FiveM Ready',
      'Modelo exclusivo',
      'Texturas em alta qualidade',
      'Equipamentos médicos detalhados',
      'Ideal para atendimento rápido e suporte avançado',
      'Acabamento premium',
      'Otimizada para servidores FiveM'
    ],
    galeria: [
      'assets/img/sw4-hosp-brazza/sw4-hosp-photo-1.png',
      'assets/img/sw4-hosp-brazza/sw4-hosp-photo-2.png',
      'assets/img/sw4-hosp-brazza/sw4-hosp-photo-3.png',
      'assets/img/sw4-hosp-brazza/sw4-hosp-photo-4.png',
      'assets/img/sw4-hosp-brazza/sw4-hosp-photo-5.png'
    ]
  },

  {
    id: 'baller-eb-universo',
    nome: 'Gallivanter Baller EB - Universo',
    categoria: 'vehicles',
    subcategoria: 'Corporation',
    imagem: 'assets/img/baller-eb-universo/baller-eb-universo-photo-1.png',
    descricao: 'SUV tática desenvolvida para operações militares, transporte de oficiais e missões de campo.',
    destaque: true, // aparece no carrossel da Home
    detalhes: [
      'Gallivanter Baller EB - Universo',
      'FiveM Ready',
      'Modelo exclusivo',
      'Pintura e identidade militar',
      'Detalhes táticos personalizados',
      'Ideal para operações do Exército Brasileiro',
      'Acabamento premium',
      'Otimizada para servidores FiveM'
    ],
    galeria: [
      'assets/img/baller-eb-universo/baller-eb-universo-photo-1.png',
      'assets/img/baller-eb-universo/baller-eb-universo-photo-2.png',
      'assets/img/baller-eb-universo/baller-eb-universo-photo-3.png',
      'assets/img/baller-eb-universo/baller-eb-universo-photo-4.png'
    ]
  },

    {
    id: 'cypher-eb-universo-eb-universo',
    nome: 'Übermacht Cypher Tactical EB - Universo',
    categoria: 'vehicles',
    subcategoria: 'Corporation',
    imagem: 'assets/img/cypher-eb-universo/cypherh-eb-universo-photo-1.png',
    descricao: 'Veículo tático desenvolvido para missões de inteligência, escolta e operações especiais do Exército Brasileiro.',
    destaque: true, // aparece no carrossel da Home
    detalhes: [
      'Übermacht Cypher Tactical EB - Universo',
      'FiveM Ready',
      'Modelo exclusivo',
      'Pintura e identidade militar',
      'Detalhes táticos personalizados',
      'Ideal para operações do Exército Brasileiro',
      'Acabamento premium',
      'Otimizada para servidores FiveM'
    ],
    galeria: [
      'assets/img/cypher-eb-universo/cypherh-eb-universo-photo-1.png',
      'assets/img/cypher-eb-universo/cypherh-eb-universo-photo-2.png',
      'assets/img/cypher-eb-universo/cypherh-eb-universo-photo-3.png',
      'assets/img/cypher-eb-universo/cypherh-eb-universo-photo-4.png'
    ]
  },

  {
    id: 'niobe-eb-universo',
    nome: 'Obey Niobe Commander EB - Universo',
    categoria: 'vehicles',
    subcategoria: 'Corporation',
    imagem: 'assets/img/niobe-eb-universo/niobe-eb-universo-photo-1.png',
    descricao: 'Veículo de comando desenvolvido para transporte de oficiais, escoltas e operações estratégicas do Exército Brasileiro.',
    destaque: true, // aparece no carrossel da Home
    detalhes: [
      'Obey Niobe Commander EB - Universo',
      'FiveM Ready',
      'Modelo exclusivo',
      'Identidade visual militar',
      'Detalhes premium personalizados',
      'Ideal para oficiais e operações especiais',
      'Acabamento executivo',
      'Otimizada para servidores FiveM'
    ],
    galeria: [
      'assets/img/niobe-eb-universo/niobe-eb-universo-photo-1.png',
      'assets/img/niobe-eb-universo/niobe-eb-universo-photo-2.png',
      'assets/img/niobe-eb-universo/niobe-eb-universo-photo-3.png',
      'assets/img/niobe-eb-universo/niobe-eb-universo-photo-4.png'
    ]
  },

    {
    id: 'tailgater-eb-universo',
    nome: 'Obey Tailgater Command EB - Universo',
    categoria: 'vehicles',
    subcategoria: 'Corporation',
    imagem: 'assets/img/tailgater-eb-universo/tailgater-eb-universo-photo-1.png',
    descricao: 'Sedan executivo desenvolvido para transporte de oficiais, comando e missões administrativas do Exército Brasileiro.',
    destaque: true, // aparece no carrossel da Home
    detalhes: [
      'Obey Tailgater Command EB - Universo',
      'FiveM Ready',
      'Modelo exclusivo',
      'Identidade visual militar',
      'Detalhes executivos personalizados',
      'Ideal para oficiais e transporte de comando',
      'Acabamento premium',
      'Otimizada para servidores FiveM'
    ],
    galeria: [
      'assets/img/tailgater-eb-universo/tailgater-eb-universo-photo-1.png',
      'assets/img/tailgater-eb-universo/tailgater-eb-universo-photo-2.png',
      'assets/img/tailgater-eb-universo/tailgater-eb-universo-photo-3.png',
      'assets/img/tailgater-eb-universo/tailgater-eb-universo-photo-4.png'
    ]
  },

      {
    id: 'xls-eb-universo',
    nome: 'Benefactor XLS Guardian Armored EB - Universo',
    categoria: 'vehicles',
    subcategoria: 'Corporation',
    imagem: 'assets/img/xls-eb-universo/xls-eb-universo-photo-1.png',
    descricao: 'SUV blindada desenvolvida para transporte protegido de oficiais, escoltas e operações estratégicas do Exército Brasileiro.',
    destaque: true, // aparece no carrossel da Home
    detalhes: [
      'Benefactor XLS Guardian Armored EB - Universo',
      'FiveM Ready',
      'Modelo exclusivo',
      'Blindagem reforçada',
      'Identidade visual militar',
      'Detalhes táticos personalizados',
      'Ideal para escolta e transporte de comando',
      'Otimizada para servidores FiveM'
    ],
    galeria: [
      'assets/img/xls-eb-universo/xls-eb-universo-photo-1.png',
      'assets/img/xls-eb-universo/xls-eb-universo-photo-2.png',
      'assets/img/xls-eb-universo/xls-eb-universo-photo-3.png',
      'assets/img/xls-eb-universo/xls-eb-universo-photo-4.png'
    ]
  },

  {
    id: 'valkyrie-eb-universo',
    nome: 'Buckingham Valkyrie Tactical EB - Universo',
    categoria: 'vehicles',
    subcategoria: 'Corporation',
    imagem: 'assets/img/valkyrie-eb-universo/valkyrie-eb-universo-photo-1.png',
    descricao: 'Helicóptero militar desenvolvido para transporte de tropas, apoio aéreo e operações táticas do Exército Brasileiro.',
    destaque: true, // aparece no carrossel da Home
    detalhes: [
      'Buckingham Valkyrie Tactical EB - Universo',
      'FiveM Ready',
      'Modelo exclusivo',
      'Pintura e identidade militar',
      'Detalhes de aviação personalizados',
      'Ideal para operações aéreas e transporte tático',
      'Acabamento premium',
      'Otimizada para servidores FiveM'
    ],
    galeria: [
      'assets/img/valkyrie-eb-universo/valkyrie-eb-universo-photo-1.png',
      'assets/img/valkyrie-eb-universo/valkyrie-eb-universo-photo-2.png',
      'assets/img/valkyrie-eb-universo/valkyrie-eb-universo-photo-3.png',
      'assets/img/valkyrie-eb-universo/valkyrie-eb-universo-photo-4.png'
    ]
  },

  {
    id: 'illegal-vehicle-demo',
    nome: 'Illegal Vehicle Demo',
    categoria: 'vehicles',
    subcategoria: 'Illegal',
    imagem: 'assets/img/rain-patrol.png',
    descricao: 'Modelo de exemplo para veículos da divisão Illegal.',
    destaque: false, // não aparece no carrossel
    detalhes: [
      'FiveM Ready',
      'Visual personalizado',
      'Textura otimizada',
      'Projeto para RP',
      'Editar no data.js'
    ],
    galeria: [
      'assets/img/rain-patrol.png',
      'assets/img/interceptor.png',
      'assets/img/suv-front.png',
      'assets/img/suv-rear.png'
    ]
  },

  {
    id: 'suv-rear',
    nome: 'SUV Rear View',
    categoria: 'vehicles',
    subcategoria: 'Others',
    imagem: 'assets/img/suv-rear.png',
    descricao: 'Visual traseiro completo com livery aplicada.',
    destaque: false, // aparece no carrossel da Home
    detalhes: [
      'FiveM Ready',
      'Visual traseiro detalhado',
      'Livery completa em todos os lados',
      'Acabamento limpo',
      'Ideal para frota oficial'
    ],
    galeria: [
      'assets/img/suv-rear.png',
      'assets/img/suv-front.png',
      'assets/img/interceptor.png',
      'assets/img/rain-patrol.png'
    ]
  },

  {
    id: 'weapon-demo',
    nome: 'Custom Weapon',
    categoria: 'weapons',
    subcategoria: 'Custom Weapons',
    imagem: 'assets/img/interceptor.png',
    descricao: 'Área modelo para cadastrar armas customizadas.',
    destaque: false, // não aparece no carrossel
    detalhes: [
      'FiveM Ready',
      'Textura personalizada',
      'Attachments opcionais',
      'Nome e logo 3D',
      'Acabamento premium'
    ],
    galeria: [
      'assets/img/interceptor.png',
      'assets/img/rain-patrol.png',
      'assets/img/suv-front.png',
      'assets/img/suv-rear.png'
    ]
  },

  {
    id: 'farda-corporation-demo',
    nome: 'Farda Corporation Demo',
    categoria: 'clothes',
    subcategoria: 'Corporation',
    imagem: 'assets/img/cordao-astro.png',
    descricao: 'Modelo de exemplo para roupas e skins de corporação.',
    destaque: false, // não aparece no carrossel
    detalhes: [
      'FiveM Ready',
      'Roupa/skin personalizada',
      'Textura premium',
      'Masculino ou feminino',
      'Editar no data.js'
    ],
    galeria: [
      'assets/img/cordao-astro.png',
      'assets/img/cordao-astro.png'
    ]
  },

  {
    id: 'cordao-astro',
    nome: 'Cordão Astro',
    categoria: 'clothes',
    subcategoria: 'Illegal',
    imagem: 'assets/img/cordao-astro.png',
    descricao: 'Cordão personalizado com pingente exclusivo.',
    destaque: false, // aparece no carrossel da Home
    detalhes: [
      'FiveM Ready',
      'Cordão personalizado',
      'Pingente exclusivo',
      'Textura premium',
      'Projeto sob encomenda'
    ],
    galeria: [
      'assets/img/cordao-astro.png',
      'assets/img/cordao-close.png',
      'assets/img/cordao-astro.png',
      'assets/img/cordao-close.png'
    ]
  },

  {
    id: 'free-demo',
    nome: 'Mod Free KPZ',
    categoria: 'free',
    subcategoria: 'Download',
    imagem: 'assets/img/suv-front.png',
    descricao: 'Modelo de card para download gratuito.',
    destaque: false, // não aparece no carrossel
    detalhes: [
      'Download grátis',
      'Créditos KPZ Customs',
      'Não revender',
      'Não redistribuir sem autorização',
      'Suporte via Discord'
    ],
    galeria: [
      'assets/img/suv-front.png',
      'assets/img/suv-rear.png',
      'assets/img/interceptor.png',
      'assets/img/rain-patrol.png'
    ],
    download: 'downloads/testessd.zip'
  },

  {
    id: 'cordao-astro-others',
    nome: 'Cordão Astro',
    categoria: 'clothes',
    subcategoria: 'Others',
    imagem: 'assets/img/cordao-astro/cordao-astro-1.png',
    descricao: 'Cordão Astro com detalhes premium.',
    destaque: true,
    detalhes: [
      'FiveM Ready',
      'Textura 4K Ultra HD',
      'Material premium com brilho realista',
      'Corrente detalhada em alta qualidade',
      'Pingente exclusivo e personalizável',
      'Acabamento de alto padrão',
      'Otimizado para servidores FiveM',
      'Proteção contra dumps'
    ],
    galeria: [
      'assets/img/cordao-astro/cordao-astro-1.png',
      'assets/img/cordao-astro/cordao-astro-2.png'
    ]
  },

  {
    id: 'cordao-kodex-1',
    nome: 'Cordão Kodex',
    categoria: 'clothes',
    subcategoria: 'Others',
    imagem: 'assets/img/cordao-kodex/cordao-kodex-1.png',
    descricao: 'Cordão Kodex com detalhes premium.',
    destaque: true,
    detalhes: [
      'FiveM Ready',
      'Textura 4K Ultra HD',
      'Material premium com brilho realista',
      'Corrente detalhada em alta qualidade',
      'Pingente exclusivo e personalizável',
      'Acabamento de alto padrão',
      'Otimizado para servidores FiveM',
      'Proteção contra dumps'
    ],
    galeria: [
      'assets/img/cordao-kodex/cordao-kodex-1.png',
      'assets/img/cordao-kodex/cordao-kodex-2.png'
    ]
  }

];
