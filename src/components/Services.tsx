import type { CSSProperties } from "react";
import { addOns, services, type ServiceId } from "../data/site";
import { spotlight } from "../hooks/useScroll";
import { cn } from "../utils/cn";
import { ArrowRight, Check, Clock } from "./ui/Icons";

interface ServicesProps {
  onChoose: (id: ServiceId) => void;
}

export default function Services({ onChoose }: ServicesProps) {
  return (
    <section id="servicos" className="section relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-brass-500/25 to-transparent" />
        <div className="orb -right-40 top-40 h-96 w-96 bg-brass-800/20" />
      </div>

      <div className="container-x relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow" data-reveal>
              O ritual
            </p>
            <h2
              className="display-lg mt-5"
              data-reveal
              style={{ "--d": "80ms" } as CSSProperties}
            >
              Precisão que se vê
              <br className="hidden sm:block" /> no{" "}
              <em className="italic-accent">espelho</em>.
            </h2>
          </div>
          <p
            className="max-w-sm text-[0.95rem] leading-relaxed text-ivory-dim"
            data-reveal
            style={{ "--d": "160ms" } as CSSProperties}
          >
            Três formas de sentar na cadeira. Em todas elas, a mesma regra:
            ouvir primeiro, cortar depois — e acertar no detalhe que ninguém
            mais vê.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service, index) => {
            const featured = service.id === "combo";
            return (
              <article
                key={service.id}
                data-reveal
                style={{ "--d": `${index * 110}ms` } as CSSProperties}
                onPointerMove={spotlight}
                className={cn(
                  "card-spot group relative flex flex-col overflow-hidden rounded-[1.5rem] border bg-ink-900/70",
                  featured
                    ? "border-brass-400/30 shadow-[0_30px_80px_-50px_rgba(211,160,92,0.55)] md:col-span-2 lg:col-span-1"
                    : "border-white/[0.08]",
                )}
              >
                {featured && (
                  <span className="absolute right-4 top-4 z-20 rounded-full bg-brass-300 px-3 py-1 text-[0.58rem] font-extrabold uppercase tracking-[0.16em] text-ink-950 shadow-lg">
                    Mais pedido
                  </span>
                )}

                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    srcSet={`${service.imageSmall} 700w, ${service.image} 1400w`}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    alt={service.alt}
                    loading="lazy"
                    decoding="async"
                    width={1400}
                    height={781}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-950/20 to-transparent" />

                  <span className="absolute left-4 top-4 font-display text-sm tracking-[0.2em] text-brass-200/80">
                    {service.index}
                  </span>

                  <span className="absolute bottom-3 right-4 inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-ink-950/60 px-2.5 py-1 text-[0.62rem] font-semibold text-ivory-dim backdrop-blur-md">
                    <Clock className="h-3 w-3 text-brass-300" />
                    {service.duration}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="display-md text-ivory">{service.name}</h3>
                      <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-brass-300/80">
                        {service.tagline}
                      </p>
                    </div>
                    <p className="shrink-0 text-right">
                      <span className="block text-[0.6rem] uppercase tracking-[0.16em] text-ivory-mute">
                        a partir de
                      </span>
                      <span className="font-display text-2xl text-ivory">
                        R$ {service.price}
                      </span>
                    </p>
                  </div>

                  <p className="mt-4 text-[0.88rem] leading-relaxed text-ivory-dim/85">
                    {service.description}
                  </p>

                  <ul className="mt-5 grid grid-cols-1 gap-2 text-[0.8rem] text-ivory-dim/80 sm:grid-cols-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brass-400" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => onChoose(service.id)}
                    className={cn(
                      "mt-6 inline-flex w-full items-center justify-between gap-3 rounded-full border px-4 py-3 text-[0.8rem] font-bold transition-all duration-300",
                      featured
                        ? "border-brass-400/40 bg-brass-400/10 text-brass-100 hover:bg-brass-400 hover:text-ink-950"
                        : "border-white/12 text-ivory hover:border-brass-400/50 hover:bg-brass-400/10",
                    )}
                  >
                    Agendar {service.name.toLowerCase()}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Add-ons */}
        <div
          className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-ink-900/40 p-5 sm:p-6"
          data-reveal
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xs">
              <h3 className="font-display text-xl text-ivory">
                Para completar o visual
              </h3>
              <p className="mt-1 text-[0.8rem] leading-relaxed text-ivory-mute">
                Serviços extras combinados na hora, junto do corte.
              </p>
            </div>
            <ul className="grid flex-1 grid-cols-2 gap-2 sm:grid-cols-3 lg:max-w-2xl">
              {addOns.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2 text-[0.78rem] transition-colors hover:border-brass-400/30 hover:bg-brass-400/[0.06]"
                >
                  <span className="text-ivory-dim">{item.name}</span>
                  <span className="font-semibold text-brass-200">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-[0.68rem] leading-relaxed text-ivory-mute/90">
            * Platinado a partir do valor indicado, conforme comprimento e
            técnica. Valores de referência — confirme no WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
