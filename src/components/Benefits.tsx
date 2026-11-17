import type { CSSProperties } from "react";
import {
  business,
  formatMinutes,
  hours,
  whatsappLink,
  defaultWhatsAppMessage,
} from "../data/site";
import { useOpenStatus } from "../hooks/useOpenStatus";
import { spotlight } from "../hooks/useScroll";
import { cn } from "../utils/cn";
import {
  ArrowUpRight,
  Calendar,
  Clock,
  MapPin,
  Users,
  WhatsApp,
} from "./ui/Icons";

export default function Benefits() {
  const status = useOpenStatus();

  return (
    <section id="a-casa" className="section relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="orb -right-32 top-10 h-[24rem] w-[24rem] bg-brass-800/20" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow eyebrow--center justify-center" data-reveal>
            A casa
          </p>
          <h2
            className="display-lg mt-5"
            data-reveal
            style={{ "--d": "80ms" } as CSSProperties}
          >
            Simples assim:
            <br className="hidden sm:block" /> você entra, a gente{" "}
            <em className="italic-accent">resolve</em>.
          </h2>
          <p
            className="mx-auto mt-5 max-w-lg text-[0.95rem] leading-relaxed text-ivory-dim"
            data-reveal
            style={{ "--d": "160ms" } as CSSProperties}
          >
            Sem letra miúda, sem espera desnecessária. Uma barbearia de bairro
            que trata o seu tempo e o seu dinheiro com respeito.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
          {/* Hours / status */}
          <div
            data-reveal
            className="card-spot relative flex flex-col rounded-[1.5rem] border border-white/[0.09] bg-ink-900/70 p-6 md:col-span-2 lg:row-span-2"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-ivory-mute">
                Horários
              </p>
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.62rem] font-bold",
                  status.isOpen
                    ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                    : "border-brass-400/25 bg-brass-400/[0.08] text-brass-200",
                )}
              >
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full",
                    status.isOpen ? "bg-emerald-400" : "bg-brass-400",
                  )}
                  aria-hidden
                />
                {status.label}
              </span>
            </div>

            <p className="mt-3 font-display text-[1.6rem] leading-tight text-ivory">
              {status.isOpen ? "A cadeira está quente." : "A cadeira descansa."}
            </p>
            <p className="mt-1 text-[0.78rem] text-ivory-mute">
              {status.label} · {status.detail} <span className="opacity-60">(horário de Fortaleza)</span>
            </p>

            <ul className="mt-5">
              {hours.map((day) => {
                const isToday = day.day === status.todayIndex;
                return (
                  <li
                    key={day.label}
                    className={cn(
                      "hours-row",
                      isToday && "-mx-2 rounded-md border-b-transparent bg-brass-400/[0.07] px-2 text-ivory",
                    )}
                    aria-current={isToday ? "date" : undefined}
                  >
                    <span className={cn("flex items-center gap-2", !isToday && "text-ivory-mute")}>
                      {day.short}
                      {isToday && (
                        <span className="rounded bg-brass-400/15 px-1.5 py-0.5 text-[0.55rem] font-bold uppercase tracking-wider text-brass-200">
                          hoje
                        </span>
                      )}
                    </span>
                    <span className={cn("tabular-nums", day.open === null ? "text-ivory-mute/80" : "font-medium text-ivory-dim")}>
                      {day.open === null
                        ? "Fechado"
                        : `${formatMinutes(day.open)} – ${formatMinutes(day.close ?? 0)}`}
                    </span>
                  </li>
                );
              })}
            </ul>

            <a
              href={whatsappLink(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm mt-5 w-full"
            >
              <WhatsApp />
              Agendar no WhatsApp
            </a>
          </div>

          {/* Value proposition */}
          <div
            data-reveal
            style={{ "--d": "80ms" } as CSSProperties}
            onPointerMove={spotlight}
            className="card-spot relative overflow-hidden rounded-[1.5rem] border border-white/[0.09] bg-gradient-to-br from-ink-800 to-ink-900 p-6 md:col-span-2 lg:col-span-4 lg:p-8"
          >
            <div aria-hidden className="absolute -right-10 -top-16 h-48 w-48 rounded-full bg-brass-500/10 blur-3xl" />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-sm">
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-brass-300">
                  Hora marcada
                </p>
                <h3 className="mt-3 font-display text-[1.9rem] leading-[1.08] text-ivory sm:text-[2.15rem]">
                  O seu horário.
                  <br />
                  Sem espera, sem achismo.
                </h3>
                <p className="mt-3 text-[0.85rem] leading-relaxed text-ivory-dim/80">
                  Agende pelo WhatsApp em menos de um minuto e chegue na hora
                  do corte. Se surgir um imprevisto, é só avisar.
                </p>
              </div>
              <div className="flex gap-4 sm:flex-col sm:gap-3">
                {[
                  { icon: Calendar, label: "Por mensagem" },
                  { icon: Clock, label: "Sem fila" },
                  { icon: Users, label: "Todas as idades" },
                ].map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 text-[0.72rem] font-semibold text-ivory-dim"
                  >
                    <span className="grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-brass-300">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Price */}
          <div
            data-reveal
            style={{ "--d": "140ms" } as CSSProperties}
            onPointerMove={spotlight}
            className="card-spot rounded-[1.5rem] border border-white/[0.09] bg-ink-900/70 p-6 lg:col-span-2"
          >
            <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-ivory-mute">
              Preço honesto
            </p>
            <p className="mt-3 font-display text-[2.6rem] leading-none text-ivory">
              R$ 20<span className="text-brass-300">–40</span>
            </p>
            <p className="mt-3 text-[0.82rem] leading-relaxed text-ivory-dim/80">
              Do corte à barba até o combo completo. A faixa de preço da casa é
              a mesma que está no Google — sem taxa surpresa.
            </p>
            <a
              href="#precos"
              className="link-underline mt-4 inline-flex text-[0.72rem] font-bold text-brass-200 hover:text-ivory"
            >
              Ver tabela completa
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Detail image */}
          <div
            data-reveal="scale"
            style={{ "--d": "200ms" } as CSSProperties}
            className="group relative min-h-[13rem] overflow-hidden rounded-[1.5rem] border border-white/[0.09] lg:col-span-2"
          >
            <img
              src="/img/tools-1400.webp"
              srcSet="/img/tools-700.webp 700w, /img/tools-1400.webp 1400w"
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              alt="Detalhe de navalha, máquina e pente sobre bancada de madeira"
              loading="lazy"
              decoding="async"
              width={1400}
              height={781}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/95 via-ink-950/35 to-transparent" />
            <div className="absolute inset-x-5 bottom-5">
              <p className="caption-tag">No detalhe</p>
              <p className="mt-1.5 font-display text-xl leading-snug text-ivory">
                A ferramenta certa faz metade do corte.
              </p>
            </div>
          </div>

          {/* Location + all ages */}
          <div
            data-reveal
            style={{ "--d": "260ms" } as CSSProperties}
            className="rounded-[1.5rem] border border-white/[0.09] bg-ink-900/70 p-6 md:col-span-2 lg:col-span-6"
          >
            <div className="grid gap-6 sm:grid-cols-2 sm:divide-x sm:divide-white/[0.08]">
              <div className="sm:pr-6">
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-brass-300">
                    <MapPin />
                  </span>
                  <div>
                    <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-ivory-mute">
                      Fácil de chegar
                    </p>
                    <h3 className="mt-1.5 font-display text-xl text-ivory">
                      R. Beta — Vila Velha
                    </h3>
                    <p className="text-[0.8rem] text-ivory-mute">
                      Fortaleza — CE · {business.postalCode} · {business.plusCode}
                    </p>
                  </div>
                </div>
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline mt-3 inline-flex text-[0.72rem] font-bold text-brass-200 hover:text-ivory"
                >
                  Abrir no Google Maps
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="sm:pl-6">
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-brass-300">
                    <Users />
                  </span>
                  <div>
                    <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-ivory-mute">
                      Para toda a família
                    </p>
                    <h3 className="mt-1.5 font-display text-xl text-ivory">
                      Do primeiro corte ao clássico
                    </h3>
                    <p className="max-w-sm text-[0.8rem] leading-relaxed text-ivory-mute">
                      Atendemos crianças, adolescentes e adultos — cada um com o
                      tempo e a conversa que precisa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
