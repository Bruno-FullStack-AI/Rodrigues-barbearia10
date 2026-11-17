import { useEffect, useState } from "react";
import { business, formatMinutes, hours, type DayHours } from "../data/site";

const WEEKDAY_INDEX: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

function localNow() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: business.timeZone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());

  const get = (type: string) =>
    parts.find((part) => part.type === type)?.value ?? "0";

  const day = WEEKDAY_INDEX[get("weekday")] ?? new Date().getDay();
  const minutes = Number(get("hour")) * 60 + Number(get("minute"));

  return { day, minutes };
}

export interface OpenStatus {
  isOpen: boolean;
  label: string;
  detail: string;
  today: DayHours;
  todayIndex: number;
}

function compute(): OpenStatus {
  const { day, minutes } = localNow();
  const today = hours[day];

  if (today.open !== null && today.close !== null) {
    if (minutes >= today.open && minutes < today.close) {
      return {
        isOpen: true,
        label: "Aberto agora",
        detail: `fecha às ${formatMinutes(today.close)}`,
        today,
        todayIndex: day,
      };
    }
    if (minutes < today.open) {
      return {
        isOpen: false,
        label: "Fechado agora",
        detail: `abre hoje às ${formatMinutes(today.open)}`,
        today,
        todayIndex: day,
      };
    }
  }

  for (let offset = 1; offset <= 7; offset += 1) {
    const next = hours[(day + offset) % 7];
    if (next.open !== null) {
      const when = offset === 1 ? "amanhã" : next.label.toLowerCase();
      return {
        isOpen: false,
        label: "Fechado agora",
        detail: `abre ${when} às ${formatMinutes(next.open)}`,
        today,
        todayIndex: day,
      };
    }
  }

  return {
    isOpen: false,
    label: "Fechado agora",
    detail: "consulte a agenda no WhatsApp",
    today,
    todayIndex: day,
  };
}

export function useOpenStatus(): OpenStatus {
  const [status, setStatus] = useState<OpenStatus>(() => compute());

  useEffect(() => {
    const timer = window.setInterval(() => setStatus(compute()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return status;
}

/** Next open days for the booking form (skips closed days). */
export function upcomingDays(count = 8) {
  const base = new Date();
  base.setHours(12, 0, 0, 0);

  const formatter = new Intl.DateTimeFormat("pt-BR", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
    timeZone: business.timeZone,
  });

  const list: { value: string; label: string }[] = [];

  for (let offset = 0; offset < 21 && list.length < count; offset += 1) {
    const date = new Date(base);
    date.setDate(base.getDate() + offset);
    const weekday = date.getDay();
    const schedule = hours[weekday];
    if (schedule.open === null) continue;

    const raw = formatter.format(date).replace(".", "");
    const label =
      offset === 0
        ? `Hoje · ${raw}`
        : offset === 1
          ? `Amanhã · ${raw}`
          : raw.charAt(0).toUpperCase() + raw.slice(1);

    list.push({ value: label, label });
  }

  return list;
}
