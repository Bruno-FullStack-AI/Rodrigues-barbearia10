export type ServiceId = "corte" | "barba" | "combo";

export interface Service {
  id: ServiceId;
  index: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  duration: string;
  includes: string[];
  image: string;
  imageSmall: string;
  alt: string;
}

export const business = {
  name: "Alison Rodrigues",
  fullName: "Barbearia Alison Rodrigues",
  since: 2023,
  tagline: "Estilo · Atitude · Confiança",
  /** Número principal exibido no Google Maps. */
  phoneDisplay: "(85) 98938-7208",
  phoneRaw: "5585989387208",
  phoneAltDisplay: "(85) 98808-6334",
  phoneAltRaw: "5585988086334",
  street: "R. Beta — Vila Velha",
  city: "Fortaleza — CE",
  postalCode: "60349-130",
  plusCode: "79PX+C7",
  mapsUrl: "https://maps.app.goo.gl/PRT9VoXKQBeuZjbZ9",
  rating: "5,0",
  reviewCount: 5,
  priceRange: "R$ 20–40",
  timeZone: "America/Fortaleza",
} as const;

export const whatsappLink = (message?: string) =>
  `https://wa.me/${business.phoneRaw}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export const defaultWhatsAppMessage =
  "Olá, Alison! Vim pelo site e quero agendar um horário. Pode me passar os horários disponíveis?";

export interface DayHours {
  /** 0 = domingo */
  day: number;
  label: string;
  short: string;
  open: number | null;
  close: number | null;
}

/** Minutos desde a meia-noite. Horários publicados no Google Maps. */
export const hours: DayHours[] = [
  { day: 0, label: "Domingo", short: "Dom", open: 8 * 60, close: 12 * 60 },
  { day: 1, label: "Segunda-feira", short: "Seg", open: null, close: null },
  { day: 2, label: "Terça-feira", short: "Ter", open: 9 * 60, close: 19 * 60 },
  { day: 3, label: "Quarta-feira", short: "Qua", open: 9 * 60, close: 19 * 60 },
  { day: 4, label: "Quinta-feira", short: "Qui", open: 9 * 60, close: 19 * 60 },
  { day: 5, label: "Sexta-feira", short: "Sex", open: 9 * 60, close: 12 * 60 },
  { day: 6, label: "Sábado", short: "Sáb", open: 9 * 60, close: 12 * 60 },
];

export const formatMinutes = (minutes: number) => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m === 0 ? `${h}h` : `${h}h${String(m).padStart(2, "0")}`;
};

export const services: Service[] = [
  {
    id: "corte",
    index: "01",
    name: "Corte",
    tagline: "Máquina, tesoura e leitura de rosto",
    description:
      "A conversa vem antes da máquina. Entendemos o formato do seu rosto, a rotina e o estilo que combina com você — depois executamos com acabamento na navalha.",
    price: 30,
    duration: "40 min",
    includes: [
      "Consulta de estilo",
      "Corte na máquina e tesoura",
      "Pézinho e contornos",
      "Finalização",
    ],
    image: "/img/fade-detail-1400.webp",
    imageSmall: "/img/fade-detail-700.webp",
    alt: "Detalhe de um degradê (fade) bem executado, visto de costas",
  },
  {
    id: "barba",
    index: "02",
    name: "Barba",
    tagline: "Desenho, navalha e pele cuidada",
    description:
      "Contornos desenhados para valorizar o seu rosto, alinhamento cuidadoso e finalização que deixa a pele tranquila — sem pressa e sem excesso.",
    price: 20,
    duration: "25 min",
    includes: [
      "Preparo e alinhamento",
      "Desenho do contorno",
      "Acabamento na navalha",
      "Hidratação pós-barba",
    ],
    image: "/img/tools-1400.webp",
    imageSmall: "/img/tools-700.webp",
    alt: "Navalha, máquina, pente e pincel de barbear sobre bancada de madeira",
  },
  {
    id: "combo",
    index: "03",
    name: "Combo Rodrigues",
    tagline: "Corte + barba no mesmo horário",
    description:
      "O ritual completo em uma única visita. Você entra com a rotina corrida e sai com o corte alinhado, a barba desenhada e a sensação de dever cumprido.",
    price: 40,
    duration: "60 min",
    includes: [
      "Corte completo",
      "Barba desenhada na navalha",
      "Contornos e sobrancelha a combinar",
      "Finalização premium",
    ],
    image: "/img/barber-portrait-1100.webp",
    imageSmall: "/img/barber-portrait-700.webp",
    alt: "Barbeiro finalizando o corte de um cliente na barbearia",
  },
];

export const addOns = [
  { name: "Sobrancelha", price: "R$ 10" },
  { name: "Pézinho", price: "R$ 10" },
  { name: "Hidratação", price: "R$ 20" },
  { name: "Corte infantil", price: "R$ 25" },
  { name: "Pigmentação", price: "R$ 25" },
  { name: "Platinado", price: "R$ 40*" },
];

export const reviews = {
  headline: {
    name: "João Victor",
    meta: "Avaliação no Google · 5 estrelas",
    quote: "O homi tem preço e qualidade.",
  },
  ratingsOnly: {
    name: "Yuri Muniz",
    meta: "Avaliação no Google · 5 estrelas",
  },
};

export const faqs = [
  {
    q: "Preciso agendar ou posso chegar direto?",
    a: "O ideal é agendar: assim a cadeira é sua, sem espera. Você pode mandar mensagem no WhatsApp e combinar o melhor dia e horário. Se estiver passando perto, chame que a gente confere a agenda na hora.",
  },
  {
    q: "Quais são os horários de funcionamento?",
    a: "Terça a quinta, das 9h às 19h. Sexta e sábado, das 9h às 12h. Domingo, das 8h às 12h. Segunda-feira é o dia de descanso da casa. Horários podem variar em datas especiais — confirme no WhatsApp.",
  },
  {
    q: "Quanto custa um corte?",
    a: "O corte sai por R$ 30, a barba por R$ 20 e o Combo Rodrigues (corte + barba) por R$ 40. A faixa de preço da casa no Google é de R$ 20 a R$ 40. Serviços extras, como sobrancelha e platinado, são combinados no atendimento.",
  },
  {
    q: "Onde fica a barbearia?",
    a: "Na R. Beta, Vila Velha — Fortaleza, CE, CEP 60349-130. O ponto de referência do Google é 79PX+C7. Toque em “Ver no mapa” para abrir a rota no Google Maps.",
  },
  {
    q: "Atendem crianças?",
    a: "Sim. O corte infantil faz parte da rotina da casa, com paciência e conversa para deixar a criança à vontade. É só avisar no agendamento para reservarmos o tempo certo.",
  },
  {
    q: "Quais formas de pagamento vocês aceitam?",
    a: "Combine direto pelo WhatsApp antes do atendimento — a gente confirma as formas de pagamento disponíveis e o valor do serviço escolhido.",
  },
];

export const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "A casa", href: "#a-casa" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Preços", href: "#precos" },
  { label: "Dúvidas", href: "#faq" },
];
