/**
 * Fonte única de verdade do site.
 * Informações extraídas do perfil oficial no Google Maps
 * (Barbearia Alison Rodrigues — R. Beta, Vila Velha, Fortaleza/CE).
 *
 * Para atualizar telefone, horários, preços ou endereço, altere apenas este arquivo.
 */

export const business = {
  name: 'Barbearia Alison Rodrigues',
  shortName: 'Alison Rodrigues',
  master: 'Alison Rodrigues',
  tagline: ['Estilo', 'Atitude', 'Confiança'],
  category: 'Barbearia',
  since: 2023,

  phone: {
    /** Exibição amigável do número (Google Maps). */
    display: '(85) 98938-7208',
    /** Formato E.164 para links de telefone. */
    tel: '+5585989387208',
    /** Somente dígitos — usado no wa.me. */
    whatsapp: '5585989387208',
  },

  address: {
    street: 'R. Beta',
    district: 'Vila Velha',
    city: 'Fortaleza',
    state: 'CE',
    zip: '60349-130',
    country: 'Brasil',
    line1: 'R. Beta — Vila Velha',
    line2: 'Fortaleza — CE · 60349-130',
    full: 'R. Beta — Vila Velha, Fortaleza — CE, 60349-130',
    plusCode: '79PX+C7 Vila Velha, Fortaleza',
  },

  maps: {
    place:
      'https://www.google.com/maps/place/Barbearia+Alison+Rodrigues+-+R.+Beta+-+Vila+Velha,+Fortaleza+-+CE,+60349-130/data=!4m2!3m1!1s0x7c74b92495d3399:0x5f0db480317b3bb6',
    directions:
      'https://www.google.com/maps/dir/?api=1&destination=Barbearia+Alison+Rodrigues,+R.+Beta,+Vila+Velha,+Fortaleza+-+CE,+60349-130',
    reviews:
      'https://www.google.com/maps/place/Barbearia+Alison+Rodrigues+-+R.+Beta+-+Vila+Velha,+Fortaleza+-+CE,+60349-130/data=!4m2!3m1!1s0x7c74b92495d3399:0x5f0db480317b3bb6!9m1!1b1',
    embed:
      'https://www.google.com/maps?q=Barbearia%20Alison%20Rodrigues%2C%20R.%20Beta%2C%20Vila%20Velha%2C%20Fortaleza%20-%20CE%2C%2060349-130&hl=pt-BR&z=16&output=embed',
  },

  rating: {
    value: 5.0,
    count: 5,
    source: 'Google',
  },

  priceRange: 'R$ 20 – 40',

  /** Horário oficial do perfil no Google (0 = domingo). */
  hours: [
    { day: 0, label: 'Domingo', short: 'Dom', open: '08:00', close: '12:00' },
    { day: 1, label: 'Segunda-feira', short: 'Seg', open: null, close: null },
    { day: 2, label: 'Terça-feira', short: 'Ter', open: '09:00', close: '19:00' },
    { day: 3, label: 'Quarta-feira', short: 'Qua', open: '09:00', close: '19:00' },
    { day: 4, label: 'Quinta-feira', short: 'Qui', open: '09:00', close: '19:00' },
    { day: 5, label: 'Sexta-feira', short: 'Sex', open: '09:00', close: '12:00' },
    { day: 6, label: 'Sábado', short: 'Sáb', open: '09:00', close: '12:00' },
  ],
} as const;

export type Service = {
  slug: string;
  name: string;
  description: string;
  price: string;
  note?: string;
  duration: string;
  icon: 'scissors' | 'fade' | 'razor' | 'beard' | 'brow' | 'kid' | 'combo' | 'color';
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: 'corte-degrade',
    name: 'Corte Degradê',
    description:
      'O fade na régua: máquina, tesoura e acabamento na navalha para um degradê limpo que dura semanas.',
    price: 'R$ 25',
    duration: '40 min',
    icon: 'fade',
    featured: true,
  },
  {
    slug: 'corte-social',
    name: 'Corte Social',
    description:
      'Clássico, alinhado e discreto para o dia a dia e para o trabalho. Tesoura, máquina e finalização.',
    price: 'R$ 25',
    duration: '30 min',
    icon: 'scissors',
  },
  {
    slug: 'corte-navalhado',
    name: 'Corte Navalhado',
    description:
      'Desenho de linhas e pezinho rente à pele com navalha, para quem gosta de definição máxima.',
    price: 'R$ 30',
    duration: '40 min',
    icon: 'razor',
  },
  {
    slug: 'corte-barba',
    name: 'Corte + Barba',
    description:
      'O combo da casa: corte completo e barba desenhada na navalha. Você sai pronto para qualquer compromisso.',
    price: 'R$ 40',
    duration: '1h',
    icon: 'combo',
    featured: true,
  },
  {
    slug: 'barba',
    name: 'Barba',
    description:
      'Contorno desenhado na navalha, máquina no comprimento certo e finalização com hidratante.',
    price: 'R$ 20',
    duration: '25 min',
    icon: 'beard',
  },
  {
    slug: 'sobrancelha',
    name: 'Sobrancelha',
    description:
      'Limpeza e desenho na navalha para valorizar o olhar sem exageros.',
    price: 'R$ 10',
    duration: '10 min',
    icon: 'brow',
  },
  {
    slug: 'infantil',
    name: 'Corte Infantil',
    description:
      'Paciência de sobra para o primeiro corte e para os pequenos que não param quietos.',
    price: 'R$ 25',
    duration: '30 min',
    icon: 'kid',
  },
  {
    slug: 'platinado',
    name: 'Platinado e Pigmentação',
    description:
      'Descoloração, platinado e pigmentação de barba ou cabelo. Valor e prazo confirmados no WhatsApp.',
    price: 'Sob consulta',
    duration: 'A combinar',
    icon: 'color',
  },
];

export const highlights = [
  {
    icon: 'pin' as const,
    title: 'Vila Velha, Fortaleza',
    text: 'R. Beta — fácil acesso, pertinho de você.',
  },
  {
    icon: 'clock' as const,
    title: 'Aberto de terça a domingo',
    text: 'Chame no WhatsApp e combine o melhor horário.',
  },
  {
    icon: 'star' as const,
    title: '5,0 no Google',
    text: 'Nota máxima nas avaliações de quem senta na cadeira.',
  },
  {
    icon: 'wallet' as const,
    title: 'Preço justo',
    text: 'Serviços entre R$ 20 e R$ 40, sem surpresa no caixa.',
  },
];

export const gallery = [
  {
    src: '/images/corte-fade.jpg',
    alt: 'Barbeiro finalizando um degradê com máquina',
    caption: 'Degradê na régua',
    tag: 'Corte',
  },
  {
    src: '/images/corte-atendimento.jpg',
    alt: 'Cliente durante o corte na Barbearia Alison Rodrigues',
    caption: 'Atendimento na cadeira',
    tag: 'Bastidores',
  },
  {
    src: '/images/resultado-fade.jpg',
    alt: 'Resultado de corte fade com barba desenhada',
    caption: 'Fade + barba',
    tag: 'Resultado',
  },
  {
    src: '/images/barba-navalhete.jpg',
    alt: 'Barba sendo desenhada com navalha',
    caption: 'Barba na navalha',
    tag: 'Barba',
  },
  {
    src: '/images/espelho.jpg',
    alt: 'Cliente e barbeiro no espelho depois do corte',
    caption: 'Antes e depois',
    tag: 'Espelho',
  },
  {
    src: '/images/ambiente.jpg',
    alt: 'Ambiente interno da barbearia com cadeira e espelho',
    caption: 'Nosso espaço',
    tag: 'Ambiente',
  },
];

export const reviews = [
  {
    name: 'João Victor',
    initials: 'JV',
    rating: 5,
    date: 'há 2 semanas',
    text: 'O melhor, o homi tem preço e qualidade. Atendimento direto, sem enrolação.',
    source: 'Google',
  },
];

export const faqs = [
  {
    q: 'Como agendo meu horário?',
    a: 'O jeito mais rápido é pelo WhatsApp (85) 98938-7208. Você também pode preencher o formulário de agendamento aqui no site: ele monta a mensagem com nome, serviço, dia e horário e abre direto no seu WhatsApp.',
  },
  {
    q: 'Quais são os horários de funcionamento?',
    a: 'Terça a quinta, das 9h às 19h. Sexta e sábado, das 9h às 12h. Domingo, das 8h às 12h. Segunda-feira a barbearia fecha.',
  },
  {
    q: 'Preciso marcar horário?',
    a: 'O ideal é chamar no WhatsApp para combinar o horário e não pegar fila, principalmente no fim da tarde e no sábado. Se estiver passando perto, mande uma mensagem para saber se tem vaga na hora.',
  },
  {
    q: 'Quanto custa um corte?',
    a: 'Os serviços da casa ficam entre R$ 20 e R$ 40. Corte a partir de R$ 25, barba R$ 20 e o combo corte + barba por R$ 40. Platinado e pigmentação são orçados no WhatsApp.',
  },
  {
    q: 'Quais formas de pagamento vocês aceitam?',
    a: 'Combine direto com o Alison pelo WhatsApp antes do atendimento — ele confirma PIX, dinheiro ou cartão conforme a sua preferência.',
  },
  {
    q: 'Atendem crianças?',
    a: 'Sim. O corte infantil tem preço próprio (R$ 25) e o atendimento é feito com calma, para a criança se sentir à vontade na cadeira.',
  },
  {
    q: 'Onde fica a barbearia?',
    a: 'Estamos na R. Beta, Vila Velha — Fortaleza/CE, CEP 60349-130 (Plus Code 79PX+C7). O mapa aqui do site abre a rota direto no Google Maps, com a melhor via de acesso saindo de onde você estiver.',
  },
];

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${business.phone.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const defaultWhatsAppMessage =
  'Olá, Alison! Vim pelo site e quero agendar um horário na Barbearia Alison Rodrigues.';
