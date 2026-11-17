import { business, defaultWhatsAppMessage, whatsappLink } from '../data/business';
import { Icon } from './Icons';

const pillars = [
  {
    icon: 'fade' as const,
    title: 'Técnica de verdade',
    text: 'Degradê fechado na régua, tesoura, navalha e acabamento conferido nas duas laterais.',
  },
  {
    icon: 'clock' as const,
    title: 'Seu tempo respeitado',
    text: 'Horário marcado pelo WhatsApp e atendimento direto com quem vai te cortar.',
  },
  {
    icon: 'wallet' as const,
    title: 'Preço justo, sempre',
    text: 'Serviços entre R$ 20 e R$ 40, combinados antes de sentar na cadeira.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-gold-600/8 blur-[130px]" />

      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Fotos */}
        <div className="reveal-left relative">
          <div className="frame-gold rounded-2xl">
            <div className="img-zoom overflow-hidden rounded-2xl border border-white/10">
              <img
                src="images/corte-fade.jpg"
                alt="Barbeiro finalizando um degradê com a máquina"
                className="h-[420px] w-full object-cover sm:h-[520px]"
                loading="lazy"
              />
            </div>
          </div>

          <div className="absolute -bottom-10 -right-2 hidden w-48 overflow-hidden rounded-xl border border-gold-500/25 shadow-2xl sm:block lg:-right-8 lg:w-56">
            <img
              src="images/resultado-fade.jpg"
              alt="Resultado de corte degradê com barba desenhada"
              className="h-56 w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="glass absolute -left-2 top-6 rounded-xl px-4 py-3 text-center shadow-xl lg:-left-8">
            <p className="display text-3xl text-gold-300">Desde {business.since}</p>
            <p className="text-[10px] uppercase tracking-[0.22em] text-dark-300">
              Estilo · Atitude · Confiança
            </p>
          </div>
        </div>

        {/* Texto */}
        <div className="reveal-right">
          <p className="eyebrow">A casa</p>
          <h2 className="display mt-5 text-4xl text-white sm:text-5xl lg:text-6xl">
            Mais que um corte.
            <br />
            <span className="text-gold-gradient">Uma assinatura.</span>
          </h2>

          <p className="mt-6 text-dark-200 leading-relaxed">
            A Barbearia Alison Rodrigues fica na R. Beta, em Vila Velha, e virou ponto de
            referência para quem quer sair da cadeira com o visual alinhado sem pagar caro.
            Aqui quem atende é o Alison: você explica o que quer, ele mostra o que funciona
            no seu tipo de cabelo e faz.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            Sem esteira, sem pressa artificial. Máquina afiada, produtos de barbearia e uma
            conversa boa enquanto o degradê toma forma. Do primeiro corte do filho ao
            acabamento da barba antes do casamento.
          </p>

          <ul className="mt-8 space-y-3">
            {pillars.map((pillar, index) => (
              <li
                key={pillar.title}
                className={`reveal stagger-${index + 1} flex gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4`}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold-500/10 text-gold-400">
                  <Icon name={pillar.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{pillar.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-dark-400">{pillar.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={whatsappLink(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Falar com o Alison
            </a>
            <a
              href={business.maps.place}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium text-dark-200 transition-colors hover:text-gold-300"
            >
              <Icon name="google" className="h-4 w-4 text-gold-400" />
              Ver no Google
              <Icon
                name="arrowRight"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
