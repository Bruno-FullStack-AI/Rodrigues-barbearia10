import type { CSSProperties } from "react";
import { services, type ServiceId } from "../data/site";
import { cn } from "../utils/cn";
import { ArrowRight, Check, Clock, Google, Sparkle } from "./ui/Icons";

interface PricingProps {
  onChoose: (id: ServiceId) => void;
}

const order: ServiceId[] = ["corte", "combo", "barba"];

export default function Pricing({ onChoose }: PricingProps) {
  const plans = order
    .map((id) => services.find((service) => service.id === id))
    .filter((service): service is (typeof services)[number] => Boolean(service));

  return (
    <section id="precos" className="section relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass-500/25 to-transparent" />
        <div className="orb left-1/4 top-1/3 h-[26rem] w-[26rem] bg-brass-900/25" />
      </div>

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow eyebrow--center justify-center" data-reveal>
            Investimento
          </p>
          <h2
            className="display-lg mt-5"
            data-reveal
            style={{ "--d": "80ms" } as CSSProperties}
          >
            Preço honesto, sem{" "}
            <em className="italic-accent">letra miúda</em>.
          </h2>
          <p
            className="mx-auto mt-5 max-w-lg text-[0.95rem] leading-relaxed text-ivory-dim"
            data-reveal
            style={{ "--d": "160ms" } as CSSProperties}
          >
            Valores claros para você decidir antes de sentar na cadeira. A
            faixa da casa no Google é de R$ 20 a R$ 40.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {plans.map((plan, index) => {
            const featured = plan.id === "combo";
            return (
              <div
                key={plan.id}
                data-reveal
                style={{ "--d": `${index * 100}ms` } as CSSProperties}
                className={cn(
                  "relative flex flex-col rounded-[1.6rem] p-[1px] transition-transform duration-500",
                  featured
                    ? "bg-gradient-to-b from-brass-300/70 via-brass-500/20 to-brass-300/10 md:-translate-y-3 md:hover:-translate-y-4"
                    : "bg-white/[0.09] hover:bg-white/[0.14]",
                )}
              >
                <div
                  className={cn(
                    "relative flex flex-1 flex-col rounded-[calc(1.6rem-1px)] p-6 sm:p-7",
                    featured
                      ? "bg-[radial-gradient(120%_100%_at_50%_0%,#1d1a13_0%,#0b0d0e_55%)]"
                      : "bg-ink-900",
                  )}
                >
                  {featured && (
                    <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-brass-200 to-brass-400 px-3.5 py-1.5 text-[0.58rem] font-extrabold uppercase tracking-[0.16em] text-ink-950 shadow-lg">
                      <Sparkle className="h-3 w-3" />
                      Mais pedido
                    </span>
                  )}

                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-[1.55rem] leading-none text-ivory">
                        {plan.name}
                      </h3>
                      <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-brass-300/80">
                        {plan.tagline}
                      </p>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-white/10 px-2 py-1 text-[0.6rem] font-semibold text-ivory-mute">
                      <Clock className="h-3 w-3" />
                      {plan.duration}
                    </span>
                  </div>

                  <div className="mt-7 flex items-end gap-1.5">
                    <span className="pb-2 text-sm text-ivory-mute">R$</span>
                    <span
                      className={cn(
                        "font-display text-[3.6rem] leading-[0.8] tracking-tight",
                        featured ? "grad-brass" : "text-ivory",
                      )}
                    >
                      {plan.price}
                    </span>
                    <span className="pb-2 text-[0.7rem] text-ivory-mute">
                      por serviço
                    </span>
                  </div>

                  <div className="my-6 h-px w-full bg-white/[0.08]" />

                  <ul className="flex flex-col gap-2.5">
                    {plan.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[0.84rem] leading-snug text-ivory-dim/85"
                      >
                        <Check
                          className={cn(
                            "mt-0.5 h-3.5 w-3.5 shrink-0",
                            featured ? "text-brass-300" : "text-brass-400/80",
                          )}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => onChoose(plan.id)}
                    className={cn(
                      "btn mt-7 w-full",
                      featured ? "btn-primary" : "btn-ghost",
                    )}
                  >
                    Escolher {plan.name.toLowerCase()}
                    <ArrowRight />
                  </button>

                  {featured && (
                    <p className="mt-3 text-center text-[0.65rem] text-ivory-mute">
                      Corte + barba com desconto no mesmo horário.
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="mt-6 flex flex-col gap-4 rounded-[1.4rem] border border-white/[0.08] bg-ink-900/50 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6"
          data-reveal
        >
          <ul className="grid gap-2.5 sm:grid-cols-3 sm:gap-6">
            {[
              "Valores de referência",
              "Pagamento combinado no WhatsApp",
              "Extras a partir de R$ 10",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-[0.75rem] text-ivory-dim/80"
              >
                <Check className="h-3.5 w-3.5 shrink-0 text-brass-400" />
                {item}
              </li>
            ))}
          </ul>
          <span className="inline-flex shrink-0 items-center gap-2 text-[0.68rem] font-semibold text-ivory-mute">
            <Google className="h-4 w-4" />
            Faixa no Google: R$ 20–40
          </span>
        </div>
      </div>
    </section>
  );
}
