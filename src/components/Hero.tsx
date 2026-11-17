import { business, defaultWhatsAppMessage, whatsappLink } from '../data/business';
import { useOpenStatus } from '../hooks/useOpenStatus';
import { Icon } from './Icons';
import Stars from './Stars';

export default function Hero() {
  const status = useOpenStatus();
  const todayHours = status.today.open
    ? `${status.today.open} às ${status.today.close}`
    : 'Fechado';

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-16 pt-32 lg:pb-24 lg:pt-44"
    >
      <img
        src="/images/ambiente.jpg"
        alt="Ambiente de barbearia com cadeira, espelho e luz quente"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-dark-950 via-dark-950/92 to-dark-950/35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-dark-950 via-dark-950/20 to-dark-950/70" />
      <div className="pointer-events-none absolute -left-24 top-1/3 -z-10 h-72 w-72 rounded-full bg-gold-600/15 blur-[110px]" />

      <div className="container-x relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Texto */}
          <div>
            <p className="eyebrow animate-fade-up">Vila Velha · Fortaleza — CE</p>

            <h1
              className="display mt-6 animate-fade-up text-[3.7rem] leading-[0.88] text-white sm:text-[4.8rem] lg:text-[5.6rem] xl:text-[6.2rem]"
              style={{ animationDelay: '80ms' }}
            >
              <span className="block">Estilo,</span>
              <span className="block">atitude</span>
              <span className="block">
                e <span className="text-gold-gradient">confiança</span>
                <span className="text-gold-400">.</span>
              </span>
            </h1>

            <p
              className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-dark-200 sm:text-lg"
              style={{ animationDelay: '160ms' }}
            >
              Corte, degradê e barba na navalha na cadeira do{' '}
              <strong className="font-semibold text-white">Alison Rodrigues</strong>. Atendimento
              direto, preço justo e aquele acabamento que você reconhece no espelho.
            </p>

            <div
              className="mt-8 flex animate-fade-up flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: '240ms' }}
            >
              <a
                href={whatsappLink(defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold btn-lg btn-shine"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                Agendar no WhatsApp
              </a>
              <a href="#servicos" className="btn btn-outline btn-lg">
                Ver serviços e preços
                <Icon name="arrowRight" className="h-4 w-4" />
              </a>
            </div>

            <div
              className="mt-8 flex animate-fade-up flex-wrap items-center gap-x-6 gap-y-3 text-sm text-dark-300"
              style={{ animationDelay: '320ms' }}
            >
              <a
                href={business.maps.reviews}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Stars />
                <span className="font-semibold text-white">5,0</span>
                <span>· {business.rating.count} avaliações no Google</span>
              </a>
              <span className="hidden h-4 w-px bg-white/15 sm:block" />
              <span className="flex items-center gap-2">
                <Icon name="wallet" className="h-4 w-4 text-gold-400" />
                Serviços de {business.priceRange}
              </span>
            </div>
          </div>

          {/* Cartão de atendimento */}
          <div
            className="animate-fade-up lg:justify-self-end"
            style={{ animationDelay: '380ms' }}
          >
            <div className="glass w-full max-w-sm rounded-2xl p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-300">
                  Hoje na barbearia
                </span>
                <span
                  className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${
                    status.isOpen
                      ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
                      : 'border-white/10 bg-white/5 text-dark-300'
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      status.isOpen ? 'bg-emerald-400 pulse-dot' : 'bg-dark-400'
                    }`}
                  />
                  {status.headline}
                </span>
              </div>

              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.18em] text-dark-400">
                      {status.today.label}
                    </dt>
                    <dd className="text-white">{todayHours}</dd>
                    <dd className="text-xs text-dark-400">{status.detail}</dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.18em] text-dark-400">
                      Endereço
                    </dt>
                    <dd className="text-white">{business.address.line1}</dd>
                    <dd className="text-xs text-dark-400">{business.address.line2}</dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.18em] text-dark-400">
                      WhatsApp
                    </dt>
                    <dd className="text-white">{business.phone.display}</dd>
                  </div>
                </div>
              </dl>

              <div className="mt-6 grid grid-cols-2 gap-2">
                <a
                  href={business.maps.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  <Icon name="pin" className="h-4 w-4" />
                  Rota
                </a>
                <a
                  href={whatsappLink(defaultWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold btn-sm"
                >
                  <Icon name="whatsapp" className="h-4 w-4" />
                  Marcar
                </a>
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-dark-400 lg:text-right">
              Ter–Qui 9h–19h · Sex e Sáb 9h–12h · Dom 8h–12h
            </p>
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-dark-400 transition-colors hover:text-gold-300 lg:flex"
      >
        Descer
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-gold-400" />
        </span>
      </a>
    </section>
  );
}
