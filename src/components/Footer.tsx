import {
  business,
  formatMinutes,
  hours,
  navLinks,
  whatsappLink,
  defaultWhatsAppMessage,
} from "../data/site";
import { useOpenStatus } from "../hooks/useOpenStatus";
import { cn } from "../utils/cn";
import { Brand } from "./ui/Brand";
import { ArrowUpRight, Google, MapPin, Star, WhatsApp } from "./ui/Icons";

export default function Footer() {
  const status = useOpenStatus();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-ink-950">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="orb -left-24 top-0 h-72 w-72 bg-brass-900/20" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass-500/25 to-transparent" />
      </div>

      <div className="container-x relative pb-10 pt-14 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.45fr_0.75fr_1fr_0.95fr] lg:gap-8">
          {/* Brand */}
          <div>
            <Brand />
            <p className="mt-5 max-w-xs font-display text-lg italic leading-snug text-ivory-dim">
              Estilo, atitude e confiança — no detalhe que se vê no espelho.
            </p>
            <p className="mt-3 max-w-xs text-[0.8rem] leading-relaxed text-ivory-mute">
              Barbearia em Vila Velha, Fortaleza. Corte, barba e acabamento na
              navalha desde {business.since}.
            </p>

            <a
              href={whatsappLink(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm mt-5"
            >
              <WhatsApp />
              Agendar horário
            </a>

            <div className="mt-5 flex items-center gap-2 text-[0.72rem] text-ivory-mute">
              <Google className="h-4 w-4" />
              <Star className="h-3 w-3 text-amber-400" />
              <span className="font-semibold text-ivory">{business.rating}</span>
              <span>· {business.reviewCount} avaliações no Google</span>
            </div>
          </div>

          {/* Nav */}
          <nav aria-label="Rodapé">
            <h2 className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-ivory-mute">
              Navegar
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.82rem] text-ivory-dim/80 transition-colors hover:text-brass-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#agendar"
                  className="text-[0.82rem] font-semibold text-brass-200 transition-colors hover:text-ivory"
                >
                  Agendar
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-ivory-mute">
              Contato
            </h2>
            <ul className="mt-4 flex flex-col gap-3 text-[0.82rem] text-ivory-dim/80">
              <li>
                <a
                  href={`tel:+${business.phoneRaw}`}
                  className="link-underline inline-flex hover:text-ivory"
                >
                  {business.phoneDisplay}
                </a>
                <span className="mt-0.5 block text-[0.68rem] text-ivory-mute">
                  WhatsApp principal
                </span>
              </li>
              <li>
                <a
                  href={`tel:+${business.phoneAltRaw}`}
                  className="link-underline inline-flex hover:text-ivory"
                >
                  {business.phoneAltDisplay}
                </a>
                <span className="mt-0.5 block text-[0.68rem] text-ivory-mute">
                  Telefone da loja
                </span>
              </li>
              <li>
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2 leading-relaxed hover:text-ivory"
                >
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brass-400" />
                  <span>
                    {business.street}
                    <br />
                    {business.city} · {business.postalCode}
                    <span className="mt-1 flex items-center gap-1 text-[0.68rem] text-brass-300">
                      Ver no mapa
                      <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-ivory-mute">
                Horários
              </h2>
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[0.55rem] font-bold",
                  status.isOpen
                    ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                    : "border-brass-400/25 bg-brass-400/[0.08] text-brass-200",
                )}
              >
                <span
                  className={cn(
                    "h-1 w-1 rounded-full",
                    status.isOpen ? "bg-emerald-400" : "bg-brass-400",
                  )}
                  aria-hidden
                />
                {status.isOpen ? "Aberto" : "Fechado"}
              </span>
            </div>
            <ul className="mt-4">
              {hours.map((day) => {
                const isToday = day.day === status.todayIndex;
                return (
                  <li
                    key={day.label}
                    className={cn(
                      "flex items-center justify-between gap-3 py-1 text-[0.72rem]",
                      isToday ? "text-ivory" : "text-ivory-mute",
                    )}
                  >
                    <span className="flex items-center gap-1.5">
                      {day.short}
                      {isToday && (
                        <>
                          <span
                            className="h-1 w-1 rounded-full bg-brass-300"
                            aria-hidden
                          />
                          <span className="sr-only">hoje</span>
                        </>
                      )}
                    </span>
                    <span className="tabular-nums">
                      {day.open === null
                        ? "—"
                        : `${formatMinutes(day.open)}–${formatMinutes(day.close ?? 0)}`}
                    </span>
                  </li>
                );
              })}
            </ul>
            <p className="mt-3 text-[0.65rem] leading-relaxed text-ivory-mute/90">
              Horário de Fortaleza. Datas especiais podem variar.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.08] pt-6 text-[0.68rem] text-ivory-mute sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.fullName} · Vila Velha, Fortaleza — CE. Todos os
            direitos reservados.
          </p>
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>Site por</span>
            <a
              href="https://wa.me/5585984053391"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ivory-dim transition-colors hover:text-brass-200"
            >
              Bruno Lima
            </a>
            <span aria-hidden className="text-ivory-mute/40">·</span>
            <span>Feito com cuidado em Fortaleza.</span>
          </p>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div
        aria-hidden
        className="pointer-events-none select-none overflow-hidden px-4"
      >
        <p className="-mb-[1.6vw] text-center font-display text-[15.5vw] font-light leading-[0.72] tracking-[-0.05em] text-white/[0.035]">
          Rodrigues
        </p>
      </div>
    </footer>
  );
}
