import { business, whatsappLink } from '../data/business';
import { useOpenStatus } from '../hooks/useOpenStatus';
import { cn } from '../utils/cn';
import { Icon } from './Icons';

const dayOrder = [1, 2, 3, 4, 5, 6, 0];

export default function Location() {
  const status = useOpenStatus();

  return (
    <section id="horarios" className="section-pad relative overflow-hidden bg-dark-900/40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/25 to-transparent" />

      <div className="container-x relative">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow eyebrow--plain justify-center">Horários e endereço</p>
          <h2 className="display mt-4 text-4xl text-white sm:text-5xl lg:text-6xl">
            Fica fácil <span className="text-gold-gradient">chegar</span>
          </h2>
          <p className="mt-4 text-dark-300">
            Estamos na R. Beta, Vila Velha — pertinho do centro de Fortaleza. Confira o
            horário de hoje e trace a rota.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Horários */}
          <div className="reveal-left rounded-2xl border border-white/7 bg-dark-950/70 p-6 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="display text-2xl tracking-wide text-white">Horário de funcionamento</h3>
              <span
                className={cn(
                  'flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]',
                  status.isOpen
                    ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
                    : 'border-white/10 bg-white/5 text-dark-300'
                )}
              >
                <span
                  className={cn(
                    'h-1.5 w-1.5 rounded-full',
                    status.isOpen ? 'bg-emerald-400 pulse-dot' : 'bg-dark-400'
                  )}
                />
                {status.headline}
              </span>
            </div>

            <ul className="mt-5 divide-y divide-white/5">
              {dayOrder.map((day) => {
                const schedule = business.hours.find((item) => item.day === day);
                if (!schedule) return null;
                const isToday = day === status.today.day;
                const closed = !schedule.open;

                return (
                  <li
                    key={day}
                    className={cn(
                      'flex items-center justify-between gap-3 py-2.5 text-sm',
                      isToday && '-mx-3 rounded-lg border-l-2 border-gold-400 bg-gold-500/[0.07] px-3'
                    )}
                  >
                    <span className="flex items-center gap-2">
                      <span className={isToday ? 'font-semibold text-white' : 'text-dark-300'}>
                        {schedule.label}
                      </span>
                      {isToday && (
                        <span className="rounded-full bg-gold-400/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-gold-300">
                          Hoje
                        </span>
                      )}
                    </span>
                    <span
                      className={cn(
                        'tabular-nums',
                        closed ? 'text-dark-400' : isToday ? 'font-semibold text-gold-200' : 'text-dark-100'
                      )}
                    >
                      {closed ? 'Fechado' : `${schedule.open} – ${schedule.close}`}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              <a
                href={whatsappLink(
                  'Olá, Alison! Queria confirmar o horário de funcionamento de hoje.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold btn-sm"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                Confirmar horário
              </a>
              <a href={`tel:${business.phone.tel}`} className="btn btn-outline btn-sm">
                <Icon name="phone" className="h-4 w-4" />
                Ligar
              </a>
            </div>

            <p className="mt-4 text-[11px] leading-relaxed text-dark-400">
              Em feriados e datas comemorativas o horário pode mudar. Confirme pelo WhatsApp
              antes de sair de casa.
            </p>
          </div>

          {/* Mapa + endereço */}
          <div className="reveal-right flex flex-col gap-4">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-dark-800">
              <iframe
                title="Mapa da Barbearia Alison Rodrigues na R. Beta, Vila Velha, Fortaleza"
                src={business.maps.embed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-[300px] w-full sm:h-[360px]"
              />
              <div className="pointer-events-none absolute left-3 top-3 max-w-[85%] rounded-xl border border-gold-500/25 bg-dark-950/85 px-4 py-3 backdrop-blur">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-300">
                  Barbearia Alison Rodrigues
                </p>
                <p className="mt-1 text-sm font-medium text-white">{business.address.line1}</p>
                <p className="text-xs text-dark-300">{business.address.line2}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/7 bg-dark-950/70 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-dark-400">Endereço</p>
                    <p className="mt-1 text-sm text-white">{business.address.full}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="sparkle" className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-dark-400">
                      Plus Code
                    </p>
                    <p className="mt-1 text-sm text-white">{business.address.plusCode}</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                <a
                  href={business.maps.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold btn-sm flex-1"
                >
                  <Icon name="pin" className="h-4 w-4" />
                  Traçar rota
                </a>
                <a
                  href={business.maps.place}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm flex-1"
                >
                  <Icon name="google" className="h-4 w-4" />
                  Abrir no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
