import type { CSSProperties } from "react";
import { useState } from "react";
import {
  business,
  defaultWhatsAppMessage,
  faqs,
  whatsappLink,
} from "../data/site";
import { cn } from "../utils/cn";
import { ArrowUpRight, ChevronDown, Clock, MapPin, WhatsApp } from "./ui/Icons";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="orb -left-32 bottom-10 h-80 w-80 bg-brass-900/25" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow" data-reveal>
              Antes do corte
            </p>
            <h2
              className="display-lg mt-5 max-w-sm"
              data-reveal
              style={{ "--d": "80ms" } as CSSProperties}
            >
              Dúvidas?
              <br className="hidden sm:block" /> A gente{" "}
              <em className="italic-accent">responde</em>.
            </h2>
            <p
              className="mt-5 max-w-sm text-[0.92rem] leading-relaxed text-ivory-dim"
              data-reveal
              style={{ "--d": "140ms" } as CSSProperties}
            >
              Se a sua pergunta não estiver aqui, chame no WhatsApp. Quem
              responde é a própria casa — sem robô, sem enrolação.
            </p>

            <div
              className="mt-7 rounded-[1.4rem] border border-white/[0.09] bg-ink-900/60 p-5"
              data-reveal
              style={{ "--d": "200ms" } as CSSProperties}
            >
              <a
                href={whatsappLink(defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm w-full"
              >
                <WhatsApp />
                Falar no WhatsApp
              </a>
              <a
                href={`tel:+${business.phoneRaw}`}
                className="mt-3 flex items-center justify-between gap-2 text-[0.78rem] font-semibold text-ivory-dim transition-colors hover:text-ivory"
              >
                {business.phoneDisplay}
                <ArrowUpRight className="h-3.5 w-3.5 text-brass-400" />
              </a>
              <div className="mt-4 flex flex-col gap-2 border-t border-white/[0.08] pt-4 text-[0.72rem] text-ivory-mute">
                <span className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brass-400" />
                  {business.street}, {business.city}
                </span>
                <span className="flex items-start gap-2">
                  <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brass-400" />
                  Seg fechado · Ter–Qui 9h–19h · Sex/Sáb 9h–12h · Dom 8h–12h
                </span>
              </div>
            </div>
          </div>

          <div data-reveal>
            {faqs.map((item, index) => {
              const isOpen = open === index;
              return (
                <div
                  key={item.q}
                  className="border-b border-white/[0.09] first:border-t first:border-white/[0.09]"
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      id={`faq-trigger-${index}`}
                      className="group flex w-full items-center gap-4 py-5 text-left sm:py-6"
                    >
                      <span className="font-sans text-[0.6rem] font-bold tracking-[0.18em] text-brass-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "flex-1 font-display text-[1.15rem] leading-snug transition-colors sm:text-[1.3rem]",
                          isOpen
                            ? "text-brass-100"
                            : "text-ivory group-hover:text-brass-100",
                        )}
                      >
                        {item.q}
                      </span>
                      <span
                        className={cn(
                          "grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300",
                          isOpen
                            ? "rotate-180 border-brass-400/50 bg-brass-400/10 text-brass-200"
                            : "border-white/12 text-ivory-mute group-hover:border-brass-400/40 group-hover:text-brass-200",
                        )}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${index}`}
                    className="acc-panel"
                    data-open={isOpen}
                    aria-hidden={!isOpen}
                  >
                    <div>
                      <p className="pb-6 pl-8 pr-4 text-[0.88rem] leading-relaxed text-ivory-dim/85 sm:pb-7 sm:pr-12">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
