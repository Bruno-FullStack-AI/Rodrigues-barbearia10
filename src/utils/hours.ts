import { business } from '../data/business';

export type DaySchedule = (typeof business.hours)[number];

const WEEKDAY_INDEX: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

export function parseTime(value: string): number {
  const [h, m] = value.split(':').map(Number);
  return h * 60 + m;
}

export function formatTime(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

/** Data/hora atual no fuso de Fortaleza, independente do fuso do visitante. */
export function fortalezaNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Fortaleza',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(date);

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '';
  const weekday = WEEKDAY_INDEX[get('weekday')] ?? date.getDay();
  const hour = Number(get('hour')) % 24;
  const minute = Number(get('minute'));

  return { weekday, minutes: hour * 60 + minute };
}

export function scheduleFor(day: number): DaySchedule {
  return business.hours.find((h) => h.day === day) ?? business.hours[1];
}

/** Próximo dia com atendimento a partir de `fromDay` (inclusive) com abertura após `afterMinutes`. */
export function nextOpening(fromDay: number, afterMinutes = 0) {
  for (let offset = 0; offset < 8; offset += 1) {
    const day = (fromDay + offset) % 7;
    const schedule = scheduleFor(day);
    if (!schedule.open) continue;
    const openMinutes = parseTime(schedule.open);
    if (offset === 0 && openMinutes <= afterMinutes) continue;
    return { offset, day, schedule, minutes: openMinutes };
  }
  return null;
}

export type OpenStatus = {
  isOpen: boolean;
  headline: string;
  detail: string;
  today: DaySchedule;
  todayLabel: string;
};

export function getOpenStatus(now = new Date()): OpenStatus {
  const { weekday, minutes } = fortalezaNow(now);
  const today = scheduleFor(weekday);

  if (today.open && today.close) {
    const openMinutes = parseTime(today.open);
    const closeMinutes = parseTime(today.close);

    if (minutes >= openMinutes && minutes < closeMinutes) {
      return {
        isOpen: true,
        headline: 'Aberto agora',
        detail: `atende até às ${today.close}`,
        today,
        todayLabel: today.label.toLowerCase(),
      };
    }

    if (minutes < openMinutes) {
      return {
        isOpen: false,
        headline: 'Fechado agora',
        detail: `abre hoje às ${today.open}`,
        today,
        todayLabel: today.label.toLowerCase(),
      };
    }
  }

  const next = nextOpening(weekday, minutes);
  if (!next) {
    return {
      isOpen: false,
      headline: 'Fechado agora',
      detail: 'confira os horários no WhatsApp',
      today,
      todayLabel: today.label.toLowerCase(),
    };
  }

  const nextLabel = next.schedule.label.toLowerCase();
  const when = next.offset === 0 ? 'hoje' : next.offset === 1 ? 'amanhã' : nextLabel;

  return {
    isOpen: false,
    headline: 'Fechado agora',
    detail: `abre ${when} às ${next.schedule.open}`,
    today,
    todayLabel: today.label.toLowerCase(),
  };
}

/** Horários de 30 em 30 minutos para um dia da semana. */
export function slotsForDay(day: number, now = new Date()): string[] {
  const schedule = scheduleFor(day);
  if (!schedule.open || !schedule.close) return [];

  const start = parseTime(schedule.open);
  const end = parseTime(schedule.close);
  const slots: string[] = [];

  for (let time = start; time <= end - 30; time += 30) {
    slots.push(formatTime(time));
  }

  const { weekday, minutes } = fortalezaNow(now);
  if (day === weekday) {
    return slots.filter((slot) => parseTime(slot) > minutes + 20);
  }

  return slots;
}

/** Converte "YYYY-MM-DD" em número do dia da semana (0 = domingo). */
export function weekdayFromISODate(value: string): number {
  const [year, month, day] = value.split('-').map(Number);
  return new Date(year, month - 1, day).getDay();
}

export function todayISO(now = new Date()): string {
  const { year, month, day } = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Fortaleza',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(now).reduce<Record<string, string>>((acc, part) => {
    if (part.type !== 'literal') acc[part.type] = part.value;
    return acc;
  }, {});

  return `${year}-${month}-${day}`;
}

export function formatISODate(value: string): string {
  const [, month, day] = value.split('-');
  const weekdays = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
  const weekday = weekdays[weekdayFromISODate(value)];
  return `${weekday}, ${day}/${month}`;
}
