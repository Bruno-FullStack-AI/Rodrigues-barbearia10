import { business, services, whatsappLink } from '../data/business';
import { Icon } from './Icons';

export default function Services() {
  return (
    <section id="servicos" className="section-pad relative overflow-hidden bg-dark-900/40">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-gold-700/10 blur-[130px]" />

      <div className="container-x relative">
        <header className="mx-auto max-w-2xl text-center">
          <p className="eyebrow eyebrow--plain justify-center">Tabela da casa</p>
          <h2 className="display mt-4 text-4xl text-white sm:text-5xl lg:text-6xl">
            Serviços e <span className="text-gold-gradient">preços</span>
          </h2>
          <p className="mt-4 text-dark-300">
            Tudo o que você precisa para sair no seu melhor — do corte seco ao combo completo
            com barba. Valores de referência: confirme o seu no WhatsApp.
          </p>
        </header>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service.slug}
              className={`reveal stagger-${Math.min(index + 1, 6)} group relative flex flex-col rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1.5 ${
                service.featured
                  ? 'border-gold-500/35 bg-gradient-to-b from-gold-500/[0.09] to-dark-950 hover:border-gold-400/60'
                  : 'border-white/7 bg-dark-950/70 hover:border-gold-500/30'
              }`}
            >
              {service.featured && (
                <span className="absolute right-4 top-4 rounded-full border border-gold-400/40 bg-gold-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-300">
                  Mais pedido
                </span>
              )}

              <span
                className={`grid h-11 w-11 place-items-center rounded-full ${
                  service.featured
                    ? 'bg-gold-400 text-dark-950'
                    : 'bg-gold-500/10 text-gold-400 group-hover:bg-gold-500/15'
                }`}
              >
                <Icon name={service.icon} className="h-5 w-5" />
              </span>

              <h3 className="display mt-4 text-2xl tracking-wide text-white">{service.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-dark-400">
                {service.description}
              </p>

              <div className="mt-5 flex items-end justify-between gap-2 border-t border-white/5 pt-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-dark-400">A partir de</p>
                  <p className="display text-2xl text-gold-300">{service.price}</p>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-dark-400">
                  <Icon name="clock" className="h-3.5 w-3.5" />
                  {service.duration}
                </span>
              </div>

              <a
                href={whatsappLink(
                  `Olá, Alison! Quero agendar ${service.name} na Barbearia Alison Rodrigues. Pode me passar os horários?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-between gap-2 rounded-full border border-white/10 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-dark-100 transition-colors hover:border-gold-400/50 hover:text-gold-300"
              >
                Agendar este serviço
                <Icon name="arrowRight" className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>

        <div className="reveal mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/7 bg-dark-950/70 p-6 sm:flex-row">
          <div className="flex items-start gap-3">
            <Icon name="wallet" className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
            <p className="text-sm text-dark-300">
              <strong className="font-semibold text-white">Preço justo e transparente.</strong>{' '}
              Dinheiro, PIX, débito e crédito. Platinado e pigmentação são orçados no WhatsApp
              conforme o tamanho do serviço.
            </p>
          </div>
          <a
            href={whatsappLink('Olá, Alison! Queria tirar uma dúvida sobre os serviços e valores.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold btn-sm btn-shine shrink-0"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            Tirar dúvida
          </a>
        </div>

        <p className="mt-4 text-center text-xs text-dark-400">
          Atendimento em {business.address.district}, {business.address.city} — {business.address.state}.
          Valores podem mudar sem aviso; confirme no agendamento.
        </p>
      </div>
    </section>
  );
}
