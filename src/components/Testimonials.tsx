import type { CSSProperties } from "react";
import { business, reviews } from "../data/site";
import { ArrowUpRight, Google, Quote, Star } from "./ui/Icons";
import { Stars } from "./ui/Stars";

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="band-light section relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brass-300/25 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-white/50 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(20,17,12,0.9) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,17,12,0.9) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="container-x relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow" data-reveal>
              Avaliações
            </p>
            <h2
              className="display-lg mt-5 text-ink-950"
              data-reveal
              style={{ "--d": "80ms" } as CSSProperties}
            >
              Quem senta na cadeira,
              <br className="hidden sm:block" />{" "}
              <em className="italic text-brass-700">volta</em>.
            </h2>
          </div>
          <div
            className="flex items-center gap-3 rounded-2xl border border-ink-950/10 bg-white/50 px-4 py-3 backdrop-blur-sm lg:mb-1"
            data-reveal
            style={{ "--d": "140ms" } as CSSProperties}
          >
            <Google className="h-6 w-6" />
            <div>
              <div className="flex items-center gap-1.5">
                <Stars className="text-brass-600" />
                <span className="text-sm font-extrabold text-ink-950">
                  {business.rating}
                </span>
              </div>
              <p className="text-[0.68rem] font-medium text-ink-950/70">
                {business.reviewCount} avaliações no Google Maps
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.18fr_0.82fr] lg:gap-5">
          {/* Featured real review */}
          <figure
            data-reveal="scale"
            className="relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] bg-ink-950 p-7 text-ivory shadow-[0_40px_100px_-60px_rgba(0,0,0,0.8)] sm:p-9"
          >
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-brass-500/15 blur-3xl" />
              <Quote className="absolute -bottom-4 right-4 h-32 w-32 text-white/[0.04]" />
            </div>

            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <Stars className="text-brass-300" />
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[0.6rem] font-semibold text-ivory-dim">
                  <Google className="h-3.5 w-3.5" />
                  Avaliação verificada
                </span>
              </div>

              <blockquote className="mt-6 max-w-lg font-display text-[2rem] leading-[1.15] tracking-tight sm:text-[2.6rem]">
                “{reviews.headline.quote}”
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brass-200 to-brass-500 font-display text-lg text-ink-950">
                  JV
                </span>
                <div>
                  <p className="text-sm font-bold text-ivory">
                    {reviews.headline.name}
                  </p>
                  <p className="text-[0.7rem] text-ivory-mute">
                    {reviews.headline.meta}
                  </p>
                </div>
              </figcaption>
            </div>

            <div className="relative mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-5">
              <p className="text-[0.68rem] text-ivory-mute">
                Depoimento publicado no Google Maps.
              </p>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-[0.72rem] font-bold text-brass-200 hover:text-ivory"
              >
                Ler as avaliações
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </figure>

          {/* Side cards */}
          <div className="flex flex-col gap-4">
            <div
              data-reveal
              style={{ "--d": "100ms" } as CSSProperties}
              className="rounded-[1.5rem] border border-ink-950/10 bg-white/65 p-5 backdrop-blur-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Stars className="text-brass-600" />
                  <p className="mt-3 font-display text-lg leading-tight text-ink-950">
                    Avaliação de 5 estrelas
                  </p>
                </div>
                <Google className="h-5 w-5 shrink-0" />
              </div>
              <p className="mt-3 text-[0.7rem] font-semibold text-ink-950/70">
                {reviews.ratingsOnly.name} · {reviews.ratingsOnly.meta}
              </p>
            </div>

            <div
              data-reveal
              style={{ "--d": "160ms" } as CSSProperties}
              className="rounded-[1.5rem] border border-ink-950/10 bg-white/45 p-5"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-ink-950 text-ivory">
                    <Star className="h-4 w-4 text-brass-300" />
                  </span>
                  <div>
                    <p className="text-[0.8rem] font-bold text-ink-950">
                      5,0 de 5
                    </p>
                    <p className="text-[0.65rem] text-ink-950/70">
                      Nota máxima no Google
                    </p>
                  </div>
                </div>
                <span className="font-display text-3xl text-brass-700">5</span>
              </div>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-ink-950/10">
                <div
                  data-reveal
                  className="h-full w-full origin-left rounded-full bg-gradient-to-r from-brass-600 to-brass-300"
                />
              </div>
            </div>

            <div
              data-reveal
              style={{ "--d": "220ms" } as CSSProperties}
              className="flex flex-1 flex-col justify-between gap-4 rounded-[1.5rem] border border-dashed border-ink-950/20 bg-transparent p-5"
            >
              <div>
                <p className="font-display text-lg leading-tight text-ink-950">
                  Sentou na cadeira?
                </p>
                <p className="mt-1 text-[0.78rem] leading-relaxed text-ink-950/70">
                  Sua avaliação ajuda a casa a crescer — e o próximo cliente a
                  confiar.
                </p>
              </div>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-3 rounded-full border border-ink-950/20 px-4 py-2.5 text-[0.75rem] font-bold text-ink-950 transition-colors hover:border-ink-950/40 hover:bg-ink-950 hover:text-ivory"
              >
                Avaliar no Google
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
