import type { CSSProperties } from "react";
import { business, reviews } from "../data/site";
import { ArrowUpRight, Google, Star } from "./ui/Icons";
import { Stars } from "./ui/Stars";

const stats = [
  { value: "2023", label: "Cuidando do estilo", detail: "da Vila Velha" },
  { value: "R$ 20–40", label: "Faixa de preço", detail: "no Google" },
  { value: "Ter–Dom", label: "Na cadeira", detail: "com hora marcada" },
];

export default function SocialProof() {
  return (
    <section
      aria-labelledby="prova-social"
      className="band-light relative overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-brass-300/20 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-white/40 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(20,17,12,0.9) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      <div className="container-x relative py-9 lg:py-11">
        <h2 id="prova-social" className="sr-only">
          Prova social — avaliações e números da barbearia
        </h2>

        <div className="grid items-center gap-8 md:grid-cols-[auto_1fr] lg:grid-cols-[auto_1.35fr_1fr] lg:gap-10">
          {/* Google rating */}
          <div data-reveal className="flex items-center gap-4 md:pr-10 lg:border-r lg:border-ink-950/10">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-ink-950/10 bg-white/80 shadow-sm">
              <Google className="h-6 w-6" />
            </span>
            <div>
              <div className="flex items-end gap-2.5">
                <span className="font-display text-5xl leading-none tracking-tight text-ink-950 sm:text-[3.4rem]">
                  {business.rating}
                </span>
                <span className="pb-1.5">
                  <Stars className="text-brass-600" />
                  <span className="mt-1 block text-[0.68rem] font-semibold text-ink-950/70">
                    {business.reviewCount} avaliações no Google
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <dl className="grid grid-cols-3 gap-4 md:gap-6 lg:pr-8">
            {stats.map((stat, index) => (
              <div
                key={stat.value}
                data-reveal
                style={{ "--d": `${index * 90 + 80}ms` } as CSSProperties}
                className="lg:border-r lg:border-ink-950/10 lg:pr-6 lg:last:border-r-0"
              >
                <dt className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-ink-950/65">
                  {stat.label}
                </dt>
                <dd className="mt-1.5 font-display text-xl text-ink-950 sm:text-2xl">
                  {stat.value}
                </dd>
                <p className="text-[0.68rem] text-ink-950/65">{stat.detail}</p>
              </div>
            ))}
          </dl>

          {/* Real review pull */}
          <figure
            data-reveal
            style={{ "--d": "220ms" } as CSSProperties}
            className="relative border-t border-ink-950/10 pt-6 md:col-span-2 lg:col-span-1 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0"
          >
            <div className="flex items-center gap-1.5 text-brass-700">
              <Star className="h-3.5 w-3.5" />
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.18em]">
                No Google
              </span>
            </div>
            <blockquote className="mt-2 font-display text-lg italic leading-snug text-ink-950/85 sm:text-xl">
              “{reviews.headline.quote}”
            </blockquote>
            <figcaption className="mt-2 flex items-center justify-between gap-3">
              <span className="text-[0.7rem] font-semibold text-ink-950/70">
                — {reviews.headline.name}, avaliação verificada
              </span>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline shrink-0 text-[0.7rem] font-bold text-brass-700 hover:text-ink-950"
              >
                Ver no Google
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
