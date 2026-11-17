import { useMemo, useState } from 'react';
import { business, services, whatsappLink } from '../data/business';
import {
  formatISODate,
  slotsForDay,
  todayISO,
  weekdayFromISODate,
  scheduleFor,
} from '../utils/hours';
import { cn } from '../utils/cn';
import { Icon } from './Icons';

const inputClass =
  'w-full rounded-lg border border-white/10 bg-dark-950/70 px-4 py-3 text-sm text-white placeholder:text-dark-400 transition-colors focus:border-gold-500/70 focus:outline-none';

export default function Booking() {
  const [name, setName] = useState('');
  const [service, setService] = useState(services[0].name);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [link, setLink] = useState('');
  const [sent, setSent] = useState(false);

  const weekday = date ? weekdayFromISODate(date) : null;
  const isClosedDay = weekday === 1;
  const slots = useMemo(
    () => (date && weekday !== null && !isClosedDay ? slotsForDay(weekday) : []),
    [date, weekday, isClosedDay]
  );

  const handleDate = (value: string) => {
    setDate(value);
    setTime('');
    setError('');
    setSent(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(false);

    if (name.trim().length < 2) {
      setError('Escreva seu nome para o Alison saber com quem está falando.');
      return;
    }
    if (!date) {
      setError('Escolha o dia que você quer cortar.');
      return;
    }
    if (isClosedDay) {
      setError('Segunda-feira a barbearia está fechada. Escolha de terça a domingo.');
      return;
    }
    if (!time) {
      setError('Selecione um horário disponível.');
      return;
    }

    const message = [
      'Olá, Alison! Quero agendar um horário na Barbearia Alison Rodrigues.',
      '',
      `Nome: ${name.trim()}`,
      `Serviço: ${service}`,
      `Data: ${formatISODate(date)}`,
      `Horário: ${time}`,
      notes.trim() ? `Observação: ${notes.trim()}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    const url = whatsappLink(message);
    setLink(url);
    setSent(true);
    setError('');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="agendar" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-gold-700/10 blur-[130px]" />

      <div className="container-x relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Texto */}
        <div className="reveal-left">
          <p className="eyebrow">Agendamento</p>
          <h2 className="display mt-4 text-4xl text-white sm:text-5xl lg:text-6xl">
            Monte seu pedido.
            <br />
            <span className="text-gold-gradient">A gente confirma.</span>
          </h2>
          <p className="mt-5 text-dark-300">
            Preencha nome, serviço, dia e horário. O site monta a mensagem e abre direto no
            WhatsApp da barbearia — você só aperta enviar e o Alison confirma.
          </p>

          <ol className="mt-8 space-y-4">
            {[
              { title: 'Escolha o serviço', text: 'Corte degradê, social, navalhado, barba ou combo.' },
              { title: 'Selecione dia e hora', text: 'Terça a quinta 9h–19h · sexta e sábado 9h–12h · domingo 8h–12h.' },
              { title: 'Envie no WhatsApp', text: 'A mensagem vai pronta. Ele responde confirmando o horário.' },
            ].map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="display grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold-500/35 bg-gold-500/10 text-base text-gold-300">
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{step.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-dark-400">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 rounded-xl border border-white/7 bg-dark-900/60 p-5">
            <p className="text-[11px] uppercase tracking-[0.2em] text-dark-400">
              Prefere falar direto?
            </p>
            <a
              href={whatsappLink('Olá, Alison! Quero agendar um horário.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-2 text-lg font-semibold text-white transition-colors hover:text-gold-300"
            >
              <Icon name="whatsapp" className="h-5 w-5 text-emerald-400" />
              {business.phone.display}
            </a>
            <p className="mt-3 flex items-center gap-2 text-xs text-dark-400">
              <Icon name="pin" className="h-3.5 w-3.5 text-gold-400" />
              {business.address.full}
            </p>
          </div>
        </div>

        {/* Formulário */}
        <div className="reveal-right">
          <form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-5 shadow-[0_30px_80px_-45px_rgba(0,0,0,0.9)] sm:p-7"
            noValidate
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="display text-2xl tracking-wide text-white">Pedido de horário</h3>
              <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-300">
                Resposta rápida
              </span>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-dark-300">
                  Seu nome
                </span>
                <input
                  type="text"
                  name="nome"
                  autoComplete="name"
                  placeholder="Como o Alison te chama?"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    setSent(false);
                  }}
                  className={inputClass}
                  required
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-dark-300">
                  Serviço
                </span>
                <select
                  name="servico"
                  value={service}
                  onChange={(event) => {
                    setService(event.target.value);
                    setSent(false);
                  }}
                  className={inputClass}
                >
                  {services.map((item) => (
                    <option key={item.slug} value={item.name} className="bg-dark-900">
                      {item.name} — {item.price}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-dark-300">
                  Dia
                </span>
                <input
                  type="date"
                  name="data"
                  min={todayISO()}
                  value={date}
                  onChange={(event) => handleDate(event.target.value)}
                  className={cn(inputClass, '[color-scheme:dark]')}
                  required
                />
              </label>

              <div className="flex items-end">
                <p className="w-full rounded-lg border border-white/5 bg-dark-950/40 px-4 py-3 text-xs leading-relaxed text-dark-400">
                  {date
                    ? isClosedDay
                      ? 'Segunda-feira: barbearia fechada.'
                      : `${scheduleFor(weekday ?? 0).label}: ${scheduleFor(weekday ?? 0).open} às ${scheduleFor(weekday ?? 0).close}`
                    : 'Escolha o dia para ver os horários.'}
                </p>
              </div>
            </div>

            <fieldset className="mt-5">
              <legend className="mb-2 flex w-full items-center justify-between text-xs font-medium uppercase tracking-[0.14em] text-dark-300">
                Horário
                {slots.length > 0 && (
                  <span className="text-[10px] normal-case tracking-normal text-dark-400">
                    {slots.length} horários
                  </span>
                )}
              </legend>

              {slots.length === 0 ? (
                <p className="rounded-lg border border-dashed border-white/10 px-4 py-5 text-center text-xs text-dark-400">
                  Selecione um dia com atendimento para ver os horários disponíveis.
                </p>
              ) : (
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                  {slots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => {
                        setTime(slot);
                        setSent(false);
                        setError('');
                      }}
                      className={cn(
                        'rounded-lg border px-2 py-2.5 text-sm font-medium transition-colors',
                        time === slot
                          ? 'border-gold-400 bg-gold-500/15 text-gold-200'
                          : 'border-white/10 bg-dark-950/50 text-dark-200 hover:border-gold-500/40 hover:text-white'
                      )}
                      aria-pressed={time === slot}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              )}
            </fieldset>

            <label className="mt-5 block">
              <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-dark-300">
                Observação <span className="text-dark-400">(opcional)</span>
              </span>
              <textarea
                name="obs"
                rows={2}
                placeholder="Referência de corte, se é a primeira vez, se leva filho..."
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                className={cn(inputClass, 'resize-none')}
              />
            </label>

            {error && (
              <p role="alert" className="mt-4 rounded-lg border border-red-400/25 bg-red-500/10 px-3.5 py-2.5 text-xs text-red-200">
                {error}
              </p>
            )}

            {sent && (
              <div className="mt-4 rounded-lg border border-emerald-400/25 bg-emerald-400/10 px-4 py-3">
                <p className="text-sm font-medium text-emerald-200">Pedido pronto! 🎉</p>
                <p className="mt-1 text-xs text-emerald-100/80">
                  Se a janela do WhatsApp não abriu, use o botão abaixo.
                </p>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-200 underline decoration-emerald-400/40 underline-offset-4"
                >
                  <Icon name="whatsapp" className="h-3.5 w-3.5" />
                  Abrir WhatsApp com meu pedido
                </a>
              </div>
            )}

            <button type="submit" className="btn btn-gold btn-full btn-shine mt-5">
              <Icon name="whatsapp" className="h-5 w-5" />
              Enviar pedido no WhatsApp
            </button>

            <p className="mt-3 text-center text-[11px] leading-relaxed text-dark-400">
              O pedido abre o WhatsApp com nome, serviço, dia e horário.
              O horário só é reservado após a confirmação do Alison.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
