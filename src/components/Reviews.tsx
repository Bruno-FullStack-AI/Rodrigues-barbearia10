import { business, reviews } from '../data/business';
import { Icon } from './Icons';
import Stars from './Stars';

export default function Reviews() {
  return (
    <section id="avaliacoes" className="section-pad relative overflow-hidden bg-dark-900/40">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-gold-600/10 blur-[120px]" />

      <div className="container-x relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        {/* Nota */}
        <div className="reveal-left">
          <p className="eyebrow">Avaliações</p>
          <h2 className="display mt-4 text-4xl text-white sm:text-5xl lg:text-6xl">
            Nota <span className="text-gold-gradient">máxima</span> de quem senta na cadeira
          </h2>

          <div className="mt-8 inline-flex flex-col rounded-2xl border border-gold-500/25 bg-dark-950/70 p-6">
            <div className="flex items-end gap-4">
              <span className="display text-6xl leading-none text-white">
                {business.rating.value.toFixed(1).replace('.', ',')}
              </span>
              <div className="pb-1.5">
                <Stars starClassName="h-4 w-4" />
                <p className="mt-1.5 text-xs text-dark-400">
                  {business.rating.count} avaliações · {business.rating.source}
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 border-t border-white/5 pt-4 text-xs text-dark-400">
              <Icon name="google" className="h-4 w-4 text-gold-400" />
              Perfil verificado no Google Maps
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={business.maps.reviews}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold btn-sm btn-shine"
            >
              <Icon name="star" className="h-3.5 w-3.5" />
              Ver avaliações no Google
            </a>
            <a href="#agendar" className="btn btn-outline btn-sm">
              Agendar e conferir
            </a>
          </div>
        </div>

        {/* Depoimentos */}
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <blockquote
              key={review.name}
              className={`reveal stagger-${index + 1} relative rounded-2xl border border-white/7 bg-dark-950/70 p-6 sm:p-7`}
            >
              <span className="display absolute right-5 top-1 select-none text-6xl leading-none text-gold-500/20">
                ”
              </span>
              <Stars value={review.rating} />
              <p className="mt-4 text-lg leading-relaxed text-dark-100">“{review.text}”</p>
              <footer className="mt-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-gold-500/30 bg-gold-500/10 text-sm font-semibold text-gold-200">
                  {review.initials}
                </span>
                <div>
                  <cite className="block text-sm font-semibold not-italic text-white">
                    {review.name}
                  </cite>
                  <span className="text-xs text-dark-400">
                    Avaliação no {review.source} · {review.date}
                  </span>
                </div>
              </footer>
            </blockquote>
          ))}

          <div className="reveal stagger-2 rounded-2xl border border-white/7 bg-gradient-to-br from-gold-500/[0.08] to-transparent p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-300">
              O que mais elogiam
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                { label: 'Preço justo', icon: 'wallet' as const },
                { label: 'Qualidade no corte', icon: 'scissors' as const },
                { label: 'Atendimento direto', icon: 'check' as const },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-2 text-sm text-dark-200">
                  <Icon name={item.icon} className="h-4 w-4 shrink-0 text-gold-400" />
                  {item.label}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-dark-400">
              Já é cliente? Deixe sua avaliação no Google e ajude mais gente da Vila Velha a
              encontrar a barbearia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
