// Conteúdo do site. RASCUNHO: textos, números e contatos marcados com "TODO" precisam de confirmação do dono.

export const marca = {
  nome: 'Órbita Soft',
  slogan: 'Sistemas que colocam o seu negócio em órbita.',
  dominio: 'orbitasoft.com.br',
  // TODO: trocar pelo WhatsApp real (formato 55 + DDD + número, só dígitos)
  whatsapp: '5500000000000',
  // TODO: e-mail e redes sociais reais
  email: 'contato@orbitasoft.com.br',
  instagram: '',
};

export const mensagemWhatsapp = 'Olá! Vim pelo site da Órbita Soft e quero saber mais sobre os sistemas.';

export const sistemas = [
  {
    id: 'enki',
    nome: 'ENKI',
    categoria: 'Gestão inteligente',
    resumo:
      'Plataforma completa para lojas e comércios: PDV, loja online, estoque, financeiro, NF-e e cobrança em um só lugar.',
    destaques: ['PDV rápido', 'Loja online', 'NF-e', 'Pix com QR', 'Multiempresa', 'WhatsApp'],
    cor: 'from-sky-400 to-blue-600',
    imagem: '/img/enki-icon.png',
    grande: true,
    status: 'No ar',
  },
  {
    id: 'cardapio',
    nome: 'Cardápio Digital',
    categoria: 'Delivery e restaurantes',
    resumo: 'Cardápio online com pedidos, pagamento e painel para lanchonetes, pastelarias e restaurantes.',
    destaques: ['Pedidos online', 'Painel do dono', 'Multi-lojas'],
    cor: 'from-amber-300 to-orange-500',
    icone: 'cardapio',
    status: 'No ar',
  },
  {
    id: 'chatbot',
    nome: 'Painel Chatbot',
    categoria: 'Atendimento automático',
    resumo: 'Atendimento por WhatsApp com robô, campanhas de mensagens e histórico em um painel simples.',
    destaques: ['WhatsApp', 'Campanhas', 'Respostas automáticas'],
    cor: 'from-emerald-300 to-teal-500',
    icone: 'chat',
    status: 'No ar',
  },
  {
    id: 'grafica',
    nome: 'GraficaERP',
    categoria: 'Gestão para gráficas',
    resumo: 'ERP para gráfica rápida e comunicação visual: orçamentos, produção, estoque em rolo e fiscal.',
    destaques: ['Ficha técnica', 'Estoque em rolo', 'NF-e'],
    cor: 'from-fuchsia-400 to-violet-600',
    icone: 'grafica',
    status: 'No ar',
  },
];

// TODO: confirmar números reais antes de publicar
export const numeros = [
  { valor: 4, sufixo: '', rotulo: 'Sistemas próprios' },
  { valor: 60, sufixo: '+', rotulo: 'Módulos e recursos' },
  { valor: 24, sufixo: '/7', rotulo: 'Sistemas no ar' },
  { valor: 100, sufixo: '%', rotulo: 'Feito sob medida no Brasil' },
];

export const passos = [
  { n: '01', titulo: 'Conheça', texto: 'Escolha o sistema ideal para o seu negócio e veja tudo funcionando.' },
  { n: '02', titulo: 'Teste', texto: 'Converse com a gente, receba um acesso de demonstração e tire suas dúvidas.' },
  { n: '03', titulo: 'Decole', texto: 'Implantamos, treinamos sua equipe e acompanhamos o crescimento.' },
];

export const beneficiosParceiro = [
  { titulo: 'Comissão por indicação', texto: 'Ganhe um percentual sobre cada cliente que você indicar, com regras claras.' },
  { titulo: 'Painel privado', texto: 'Acompanhe indicações, extratos mensais e repasses em um link só seu.' },
  { titulo: 'Pagamento via Pix', texto: 'Repasses por Pix, com extrato e aviso por e-mail e WhatsApp.' },
];

export const faixa = [
  'PDV', 'Loja online', 'NF-e', 'Pix', 'WhatsApp', 'Estoque', 'Financeiro', 'Multiempresa', 'Cardápio digital', 'Chatbot',
];
