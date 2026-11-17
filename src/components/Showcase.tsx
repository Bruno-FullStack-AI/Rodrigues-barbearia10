import type { CSSProperties } from "react";
import {
  business,
  defaultWhatsAppMessage,
  whatsappLink,
} from "../data/site";
import { useOpenStatus } from "../hooks/useOpenStatus";
import { cn } from "../utils/cn";
import { ArrowUpRight, Calendar, MapPin, WhatsApp } from "./ui/Icons";

const steps = [
  {
    n: "01",
    title: "Boas-vindas sem cerimônia",
    text: "Você chega, senta e conta o que quer. Se não souber explicar, mostra uma foto: a gente traduz para o seu cabelo.",
  },
  {
    n: "02",
    title: "Consulta de estilo",
    text: "Formato do rosto, rotina, textura. O corte é desenhado para você — não para o feed.",
  },
  {
    n: "03",
    title: "Mãos à obra",
    text: "Máquina, tesoura e navalha no tempo certo. Sem pressa e sem improviso.",
  },
  {
    n: "04",
    title: "O detalhe final",
    text: "Acabamento, contornos e uma dica de manutenção para o corte durar mais em casa.",
  },
];

const gallery = [
  {
    src: "/img/trabalho-1.webp",
    alt: "Cliente na cadeira da barbearia com a capa de corte, ao lado da placa da marca",
    label: "Na cadeira",
    caption: "Atendimento na R. Beta",
  },
  {
    src: "/img/trabalho-3.webp",
    alt: "Resultado de um degradê masculino visto de perfil",
    label: "Resultado",
    caption: "Degradê finalizado",
  },
  {
    src: "/img/trabalho-2.webp",
    alt: "Barbeiro e cliente sorrindo em frente ao espelho da barbearia",
    label: "Sem pose",
    caption: "Cliente satisfeito",
  },
];

export default function Showcase() {
  const status = useOpenStatus();

  return (
    <section
      id="experiencia"
      className="section relative overflow-hidden border-y border-white/[0.06] bg-ink-900/40"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="orb -left-40 top-1/4 h-[26rem] w-[26rem] bg-brass-900/25" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container-x relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow" data-reveal>
              A experiência
            </p>
            <h2
              className="display-lg mt-5"
              data-reveal
              style={{ "--d": "80ms" } as CSSProperties}
            >
              A cadeira é sua.
              <br className="hidden sm:block" /> O tempo também é{" "}
              <em className="italic-accent">seu</em>.
            </h2>
          </div>
          <p
            className="max-w-sm text-[0.95rem] leading-relaxed text-ivory-dim lg:pb-1"
            data-reveal
            style={{ "--d": "160ms" } as CSSProperties}
          >
            Nada de fila, pressa ou corte no automático. A hora marcada existe
            para você sair daqui com o que veio buscar.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          {/* Image column */}
          <div className="relative" data-reveal="scale">
            <div className="lg:sticky lg:top-28">
              <div className="img-frame relative aspect-[4/5] rounded-[1.75rem] shadow-[0_40px_100px_-60px_rgba(0,0,0,0.9)] sm:aspect-[5/5] lg:aspect-[4/5]">
                <img
                  src="/img/loja-1600.webp"
                  srcSet="/img/loja-800.webp 800w, /img/loja-1600.webp 1600w"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  alt="Interior da barbearia com cadeira de couro, espelho dourado e luz âmbar"
                  loading="lazy"
                  decoding="async"
                  width={1600}
                  height={893}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-ink-950/25" />

                <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-ink-950/50 px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-brass-200 backdrop-blur-md">
                  A casa · Vila Velha
                </span>

                <div className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5">
                  <div className="glass flex flex-wrap items-center justify-between gap-3 rounded-xl px-4 py-3">
                    <div className="flex items-center gap-2.5">
                      <span className="relative flex h-2 w-2">
                        <span
                          className={cn(
                            "pulse-dot relative h-2 w-2 rounded-full",
                            status.isOpen ? "bg-emerald-400" : "bg-brass-400",
                          )}
                          aria-hidden
                        />
                      </span>
                      <div>
                        <p className="text-[0.72rem] font-semibold text-ivory">
                          {status.label}
                        </p>
                        <p className="text-[0.65rem] text-ivory-mute">
                          {status.detail} · {business.phoneDisplay}
                        </p>
                      </div>
                    </div>
                    <a
                      href={business.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-[0.7rem] font-bold text-brass-200 hover:text-ivory"
                    >
                      Ver rota
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1">
                <p className="inline-flex items-center gap-2 text-[0.72rem] text-ivory-mute">
                  <MapPin className="h-3.5 w-3.5 text-brass-400" />
                  {business.street}, {business.city}
                </p>
                <a
                  href={whatsappLink(defaultWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-[0.72rem] font-bold text-brass-200 hover:text-ivory"
                >
                  <WhatsApp className="h-3.5 w-3.5" />
                  Falar com a casa
                </a>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="lg:py-2">
            <ol className="relative">
              <span
                aria-hidden
                className="absolute left-[1.45rem] top-4 bottom-6 w-px bg-gradient-to-b from-brass-500/40 via-white/10 to-transparent"
              />
              {steps.map((step, index) => (
                <li
                  key={step.n}
                  data-reveal
                  style={{ "--d": `${index * 90}ms` } as CSSProperties}
                  className="group relative flex gap-5 pb-8 last:pb-0"
                >
                  <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/10 bg-ink-900 font-display text-sm text-brass-200 transition-all duration-500 group-hover:border-brass-400/50 group-hover:bg-brass-400/10">
                    {step.n}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="font-display text-[1.35rem] leading-tight text-ivory">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 max-w-md text-[0.9rem] leading-relaxed text-ivory-dim/85">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div
              className="mt-9 flex flex-col gap-4 rounded-[1.4rem] border border-brass-400/20 bg-gradient-to-br from-brass-500/[0.09] to-transparent p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
              data-reveal
            >
              <div>
                <p className="font-display text-lg text-ivory">
                  Sem pressa. Sem fila. Sem surpresa.
                </p>
                <p className="mt-1 text-[0.8rem] text-ivory-mute">
                  Escolha o serviço e mande o seu pedido em menos de um minuto.
                </p>
              </div>
              <a
                href="#agendar"
                className="btn btn-primary btn-sm shrink-0"
              >
                <Calendar />
                Escolher horário
              </a>
            </div>
          </div>
        </div>

        {/* Real results gallery */}
        <div className="mt-16 sm:mt-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow" data-reveal>
                Resultados reais
              </p>
              <h3
                className="mt-3 font-display text-2xl text-ivory sm:text-3xl"
                data-reveal
                style={{ "--d": "60ms" } as CSSProperties}
              >
                Fotos da casa, sem filtro.
              </h3>
            </div>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-[0.75rem] font-semibold text-brass-200 hover:text-ivory"
              data-reveal
            >
              Ver as 13 fotos no Google
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div
            role="group"
            aria-label="Fotos da barbearia"
            tabIndex={0}
            className="no-scrollbar -mx-5 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-1 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0"
          >
            {gallery.map((photo, index) => (
              <figure
                key={photo.src}
                data-reveal="scale"
                style={{ "--d": `${index * 100}ms` } as CSSProperties}
                className="group relative w-[76vw] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/[0.08] sm:w-auto"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    width={900}
                    height={1200}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                  />
                </div>
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                <figcaption className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="caption-tag">{photo.label}</p>
                    <p className="mt-1 font-display text-lg text-ivory">
                      {photo.caption}
                    </p>
                  </div>
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-ink-950/40 text-ivory opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
