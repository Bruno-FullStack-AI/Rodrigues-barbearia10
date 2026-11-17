import type { FormEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import {
  business,
  defaultWhatsAppMessage,
  services,
  whatsappLink,
  type ServiceId,
} from "../data/site";
import { upcomingDays, useOpenStatus } from "../hooks/useOpenStatus";
import { cn } from "../utils/cn";
import {
  ArrowUpRight,
  Calendar,
  Check,
  Clock,
  Google,
  MapPin,
  Phone,
  Star,
  WhatsApp,
} from "./ui/Icons";

interface BookingProps {
  selectedService: ServiceId;
}

const periods = ["Manhã", "Tarde", "Indiferente"];

export default function Booking({ selectedService }: BookingProps) {
  const days = useMemo(() => upcomingDays(8), []);
  const [name, setName] = useState("");
  const [service, setService] = useState<ServiceId>(selectedService);
  const [day, setDay] = useState(days[0]?.value ?? "");
  const [period, setPeriod] = useState(periods[0]);
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);
  const status = useOpenStatus();

  useEffect(() => {
    setService(selectedService);
  }, [selectedService]);

  const buildMessage = () => {
    const label =
      services.find((item) => item.id === service)?.name ?? "Serviço";
    return [
      "Olá, Alison! Vim pelo site e quero agendar um horário.",
      "",
      `*Nome:* ${name.trim() || "—"}`,
      `*Serviço:* ${label}`,
      `*Dia:* ${day}`,
      `*Período:* ${period}`,
      note.trim() ? `*Observações:* ${note.trim()}` : "",
      "",
      "Pode confirmar a disponibilidade?",
    ].join("\n");
  };

  const link = whatsappLink(buildMessage());

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.open(link, "_blank", "noopener,noreferrer");
    setSent(true);
    window.setTimeout(() => setSent(false), 9000);
  };

  return (
    <section
      id="agendar"
      aria-labelledby="agendar-titulo"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <img
          src="/img/tools-1400.webp"
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_20%_50%,rgba(8,9,10,0.94),rgba(8,9,10,0.82))]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950" />
        <div className="orb right-[8%] top-1/4 h-80 w-80 bg-brass-600/20" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass-400/30 to-transparent" />
      </div>

      <div className="container-x relative">
        <div
          className="grid overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-ink-950/55 shadow-[0_60px_140px_-60px_rgba(0,0,0,0.9)] backdrop-blur-xl lg:grid-cols-[1fr_1.02fr]"
          data-reveal="scale"
        >
          {/* Copy side */}
          <div className="relative flex flex-col justify-between gap-10 p-6 sm:p-9 lg:p-11">
            <div>
              <p className="eyebrow">Agendamento</p>
              <h2
                id="agendar-titulo"
                className="display-lg mt-5 max-w-md"
              >
                Reserve a{" "}
                <em className="italic-accent">sua</em> cadeira.
              </h2>
              <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-ivory-dim">
                Monte o seu pedido ao lado. O WhatsApp abre com tudo preenchido
                — você só confirma com o Alison o melhor horário.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={`tel:+${business.phoneRaw}`}
                  className="group flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 transition-colors hover:border-brass-400/35 hover:bg-brass-400/[0.05]"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-brass-400/10 text-brass-300">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[0.6rem] font-bold uppercase tracking-[0.18em] text-ivory-mute">
                      WhatsApp e telefone
                    </span>
                    <span className="text-sm font-semibold text-ivory">
                      {business.phoneDisplay}
                    </span>
                  </span>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-ivory-mute transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>

                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 transition-colors hover:border-brass-400/35 hover:bg-brass-400/[0.05]"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-brass-400/10 text-brass-300">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[0.6rem] font-bold uppercase tracking-[0.18em] text-ivory-mute">
                      Onde estamos
                    </span>
                    <span className="text-sm font-semibold text-ivory">
                      {business.street} · {business.city}
                    </span>
                  </span>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-ivory-mute transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>

                <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-brass-400/10 text-brass-300">
                    <Clock className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[0.6rem] font-bold uppercase tracking-[0.18em] text-ivory-mute">
                      Agora
                    </span>
                    <span className="text-sm font-semibold text-ivory">
                      {status.label}
                      <span className="font-normal text-ivory-mute">
                        {" "}
                        · {status.detail}
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/[0.08] pt-5">
              <div className="flex items-center gap-2">
                <Google className="h-4 w-4" />
                <Star className="h-3.5 w-3.5 text-amber-400" />
                <span className="text-xs font-semibold text-ivory">
                  {business.rating}
                </span>
                <span className="text-[0.7rem] text-ivory-mute">
                  ({business.reviewCount} avaliações)
                </span>
              </div>
              <span className="text-[0.7rem] text-ivory-mute">
                {business.tagline}
              </span>
            </div>
          </div>

          {/* Form side */}
          <div className="relative border-t border-white/[0.08] bg-ink-900/80 p-6 sm:p-9 lg:border-l lg:border-t-0 lg:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass-400/30 to-transparent"
            />
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl text-ivory">
                  Peça seu horário
                </h3>
                <p className="mt-1 text-[0.78rem] text-ivory-mute">
                  Leva menos de um minuto.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.12em] text-emerald-300">
                <WhatsApp className="h-3 w-3" />
                Direto
              </span>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="nome" className="field-label">
                  Seu nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Como podemos te chamar?"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="field"
                />
              </div>

              <div>
                <label htmlFor="servico" className="field-label">
                  Serviço
                </label>
                <select
                  id="servico"
                  name="servico"
                  required
                  value={service}
                  onChange={(event) =>
                    setService(event.target.value as ServiceId)
                  }
                  className="field"
                >
                  {services.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name} — R$ {item.price}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="dia" className="field-label">
                    Dia
                  </label>
                  <select
                    id="dia"
                    name="dia"
                    value={day}
                    onChange={(event) => setDay(event.target.value)}
                    className="field"
                  >
                    {days.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <fieldset>
                  <legend className="field-label">Período</legend>
                  <div className="grid grid-cols-3 gap-1.5">
                    {periods.map((option) => (
                      <label
                        key={option}
                        className={cn(
                          "cursor-pointer rounded-xl border px-1 py-3 text-center text-[0.7rem] font-semibold transition-all duration-200 focus-within:ring-2 focus-within:ring-brass-300/60",
                          period === option
                            ? "border-brass-400/70 bg-brass-400/15 text-brass-100"
                            : "border-white/10 bg-ink-950/40 text-ivory-mute hover:border-white/25 hover:text-ivory",
                        )}
                      >
                        <input
                          type="radio"
                          name="periodo"
                          value={option}
                          checked={period === option}
                          onChange={() => setPeriod(option)}
                          className="sr-only"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>

              <div>
                <label htmlFor="obs" className="field-label">
                  Observações <span className="normal-case tracking-normal opacity-60">(opcional)</span>
                </label>
                <textarea
                  id="obs"
                  name="obs"
                  rows={2}
                  placeholder="Referência de corte, criança, barba…"
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                  className="field resize-none"
                />
              </div>

              <button type="submit" className="btn btn-primary w-full">
                <WhatsApp />
                Enviar pedido no WhatsApp
              </button>

              <p className="flex items-start gap-2 text-[0.68rem] leading-relaxed text-ivory-mute">
                <Check className="mt-0.5 h-3 w-3 shrink-0 text-brass-400" />
                O WhatsApp abre com a mensagem pronta. Nada é enviado sem a sua
                confirmação.
              </p>

              <div aria-live="polite" className="min-h-0">
                {sent && (
                  <p className="rounded-xl border border-emerald-400/25 bg-emerald-400/[0.08] px-3 py-2 text-[0.72rem] text-emerald-200">
                    Pedido pronto. Se o WhatsApp não abriu,{" "}
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold underline underline-offset-2"
                    >
                      toque aqui
                    </a>
                    .
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center text-[0.7rem] text-ivory-mute">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-brass-400" />
            Hora marcada, sem fila
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-brass-400" />
            Pedido direto com a casa
          </span>
          <a
            href={whatsappLink(defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex items-center gap-1.5 font-semibold text-brass-200 hover:text-ivory"
          >
            Prefere só conversar?
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
