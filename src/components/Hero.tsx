import type { CSSProperties, PointerEvent as ReactPointerEvent } from "react";
import { useRef } from "react";
import {
  business,
  defaultWhatsAppMessage,
  whatsappLink,
} from "../data/site";
import { useScrollState } from "../hooks/useScroll";
import { useOpenStatus as useShopStatus } from "../hooks/useOpenStatus";
import { ArrowDown, ArrowRight, Clock, Google, MapPin, Star, WhatsApp } from "./ui/Icons";
import { Stars } from "./ui/Stars";
import { cn } from "../utils/cn";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const status = useShopStatus();
  const { scrolled } = useScrollState();

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    const node = sectionRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (event.pointerType !== "mouse") return;

    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    node.style.setProperty("--px", x.toFixed(3));
    node.style.setProperty("--py", y.toFixed(3));
  };

  const resetPointer = () => {
    const node = sectionRef.current;
    if (!node) return;
    node.style.setProperty("--px", "0");
    node.style.setProperty("--py", "0");
  };

  return (
    <section
      ref={sectionRef}
      id="inicio"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="relative overflow-hidden pb-16 pt-28 sm:pt-32 lg:min-h-[100svh] lg:pb-24 lg:pt-36"
      style={{ "--px": 0, "--py": 0 } as CSSProperties}
    >
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_75%_10%,rgba(58,44,28,0.55),transparent_60%)]" />
        <div className="hero-grid absolute inset-0 opacity-70" />
        <div className="orb -left-32 top-10 h-[26rem] w-[26rem] bg-brass-800/35" />
        <div className="orb -right-24 top-1/3 h-[30rem] w-[30rem] bg-brass-700/25 [animation-delay:3s]" />
        <div className="absolute -bottom-40 left-1/2 h-[22rem] w-[36rem] -translate-x-1/2 rounded-full bg-brass-900/25 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
        <div className="absolute inset-y-0 left-[8%] hidden w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent xl:block" />
        <div className="absolute inset-y-0 right-[8%] hidden w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent xl:block" />
      </div>

      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 xl:gap-20">
          {/* Copy */}
          <div className="max-w-xl">
            <div className="hero-in flex flex-wrap items-center gap-3" style={{ "--i": 0 } as CSSProperties}>
              <span className="inline-flex items-center gap-2 rounded-full border border-brass-400/25 bg-brass-500/[0.08] px-3.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-brass-200">
                <span className="h-1.5 w-1.5 rounded-full bg-brass-300" aria-hidden />
                Vila Velha · Fortaleza
              </span>
              <span className="text-[0.7rem] font-medium tracking-wide text-ivory-mute">
                desde {business.since}
              </span>
            </div>

            <h1 className="display-xl mt-7 text-ivory">
              <span className="hero-in block" style={{ "--i": 1 } as CSSProperties}>
                Seu corte é{" "}
              </span>
              <span className="hero-in block" style={{ "--i": 2 } as CSSProperties}>
                a sua{" "}
              </span>
              <span className="hero-in block" style={{ "--i": 3 } as CSSProperties}>
                <em className="italic-accent">assinatura</em>.
              </span>
            </h1>

            <p
              className="hero-in mt-6 max-w-md text-[1.02rem] leading-relaxed text-ivory-dim sm:text-lg"
              style={{ "--i": 4 } as CSSProperties}
            >
              Barbearia em Vila Velha, Fortaleza. Corte, barba e acabamento
              na navalha com hora marcada, preço honesto e atenção que se
              sente no espelho. Cuidado de ateliê, conversa de bairro.
            </p>

            <div
              className="hero-in mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ "--i": 5 } as CSSProperties}
            >
              <a
                href={whatsappLink(defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <WhatsApp />
                Agendar meu horário
                <ArrowRight />
              </a>
              <a href="#servicos" className="btn btn-ghost">
                Ver serviços
                <ArrowDown />
              </a>
            </div>

            <div
              className="hero-in mt-9 flex flex-wrap items-center gap-x-7 gap-y-4"
              style={{ "--i": 6 } as CSSProperties}
            >
              <div className="flex items-center gap-2.5">
                <Google />
                <Stars className="text-[0.8rem]" />
                <span className="text-sm font-bold text-ivory">{business.rating}</span>
                <span className="text-xs text-ivory-mute">({business.reviewCount} no Google)</span>
              </div>

              <div className="hidden h-5 w-px bg-white/10 sm:block" />

              <a
                href="#a-casa"
                className="group inline-flex items-center gap-2 text-xs font-semibold text-ivory-dim transition-colors hover:text-ivory"
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className={cn(
                      "pulse-dot relative h-2 w-2 rounded-full",
                      status.isOpen ? "bg-emerald-400" : "bg-brass-400",
                    )}
                    aria-hidden
                  />
                </span>
                {status.label}
                <span className="text-ivory-mute">· {status.detail}</span>
              </a>
            </div>
          </div>

          {/* Visual composition */}
          <div className="relative mx-auto w-full max-w-[27rem] sm:max-w-[31rem] lg:max-w-none">
            <div
              aria-hidden
              className="absolute -inset-5 rounded-[2.75rem] bg-[conic-gradient(from_140deg_at_50%_50%,rgba(211,160,92,0.22),transparent_35%,transparent_70%,rgba(211,160,92,0.12))] blur-[2px] opacity-80"
            />

            <div
              className="relative transition-transform duration-300 ease-out will-change-transform"
              style={{
                transform:
                  "translate3d(calc(var(--px) * 10px), calc(var(--py) * 10px), 0)",
              }}
            >
              <div className="img-frame img-shade group relative aspect-[4/5] rounded-[2rem] shadow-[0_50px_120px_-50px_rgba(0,0,0,0.95)]">
                <img
                  src="/img/barber-portrait-1100.webp"
                  srcSet="/img/barber-portrait-700.webp 700w, /img/barber-portrait-1100.webp 1100w"
                  sizes="(min-width: 1024px) 44vw, 92vw"
                  alt="Barbeiro finalizando um corte masculino na barbearia, com iluminação âmbar"
                  width={1100}
                  height={1366}
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover"
                />

                {/* status pill */}
                <div className="absolute left-4 top-4 z-10 sm:left-5 sm:top-5">
                  <div className="glass flex items-center gap-2.5 rounded-full py-2 pl-3 pr-4">
                    <span className="relative flex h-2 w-2">
                      <span
                        className={cn(
                          "pulse-dot relative h-2 w-2 rounded-full",
                          status.isOpen ? "bg-emerald-400" : "bg-brass-400",
                        )}
                        aria-hidden
                      />
                    </span>
                    <span className="text-[0.7rem] font-semibold text-ivory">
                      {status.label}
                    </span>
                    <span className="hidden text-[0.7rem] text-ivory-mute sm:inline">
                      {status.detail}
                    </span>
                  </div>
                </div>

                {/* address */}
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-24 right-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-950/60 px-3 py-1.5 text-[0.65rem] font-medium text-ivory-dim backdrop-blur-md transition-colors hover:border-brass-400/40 hover:text-ivory sm:bottom-28"
                >
                  <MapPin className="h-3.5 w-3.5 text-brass-300" />
                  R. Beta · Vila Velha
                </a>
              </div>

              {/* rating card */}
              <div
                className="glass float-slow absolute -bottom-6 left-2 z-20 rounded-2xl px-4 py-3.5 sm:-left-6 sm:px-5"
                style={{
                  transform:
                    "translate3d(calc(var(--px) * -18px), calc(var(--py) * -14px), 0)",
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white/95">
                    <Google className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-xl leading-none text-ivory">
                        {business.rating}
                      </span>
                      <Stars />
                    </div>
                    <p className="mt-1 text-[0.65rem] text-ivory-mute">
                      {business.reviewCount} avaliações no Google
                    </p>
                  </div>
                </div>
              </div>

              {/* rotating seal */}
              <div
                aria-hidden
                className="absolute -right-3 -top-10 z-20 h-[6.5rem] w-[6.5rem] sm:-right-6 sm:-top-12 sm:h-[7.5rem] sm:w-[7.5rem]"
              >
                <div className="relative grid h-full w-full place-items-center rounded-full border border-brass-300/25 bg-ink-950/70 backdrop-blur-md">
                  <svg viewBox="0 0 120 120" className="orbit absolute inset-0 h-full w-full">
                    <defs>
                      <path
                        id="seal-path"
                        d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
                      />
                    </defs>
                    <text className="fill-brass-200 text-[7.6px] font-semibold uppercase tracking-[2.2px]">
                      <textPath href="#seal-path" startOffset="0">
                        Estilo · Atitude · Confiança · Desde 2023 ·
                      </textPath>
                    </text>
                  </svg>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-brass-400/10 text-brass-200">
                    <Star className="h-4 w-4" />
                  </span>
                </div>
              </div>

              {/* price tag */}
              <div className="absolute -right-4 bottom-32 z-20 hidden rounded-xl border border-white/10 bg-ink-950/80 px-3.5 py-2.5 backdrop-blur-md sm:block">
                <p className="text-[0.6rem] uppercase tracking-[0.18em] text-ivory-mute">
                  Combo completo
                </p>
                <p className="mt-0.5 font-display text-lg text-brass-200">
                  R$ 40
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          className={cn(
            "mt-16 flex items-center justify-between gap-6 border-t border-white/[0.06] pt-5 transition-opacity duration-500",
            scrolled && "lg:opacity-0",
          )}
        >
          <p className="hidden max-w-[18rem] text-[0.68rem] uppercase tracking-[0.22em] text-ivory-mute sm:block">
            {business.tagline} — uma cadeira, sua melhor versão.
          </p>
          <a
            href="#servicos"
            className="scroll-cue group flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.22em] text-ivory-mute transition-colors hover:text-ivory"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full border border-white/12 transition-colors group-hover:border-brass-400/50">
              <ArrowDown className="h-3.5 w-3.5 text-brass-300" />
            </span>
            Descer para ver
          </a>
          <span className="hidden items-center gap-1.5 text-[0.65rem] uppercase tracking-[0.2em] text-ivory-mute md:flex">
            <Clock className="h-3.5 w-3.5 text-brass-400" />
            Hora marcada
          </span>
        </div>
      </div>
    </section>
  );
}
