const WHATSAPP_NUMBER = "5585989387208";

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const preloader = $("#preloader");
const header = $("#header");
const nav = $("#nav");
const menuToggle = $("#menuToggle");
const year = $("#year");
const bookingForm = $("#bookingForm");
const formError = $("#formError");
const lightbox = $("#lightbox");
const lightboxImage = $("#lightboxImage");
const lightboxCaption = $("#lightboxCaption");

const galleryItems = $$(".gallery__item").map((item) => ({
  src: $("img", item).src,
  caption: $("strong", item)?.textContent || $("img", item).alt,
}));

let galleryIndex = 0;

function hidePreloader() {
  preloader?.classList.add("is-done");
}

window.addEventListener("load", () => {
  setTimeout(hidePreloader, 400);
});

setTimeout(hidePreloader, 2500);

if (year) year.textContent = String(new Date().getFullYear());

window.addEventListener("scroll", () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 16);
});

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  menuToggle.classList.toggle("is-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
});

$$(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuToggle?.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const sections = $$("main section[id]");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      $$(".nav__link").forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
);

sections.forEach((section) => navObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
);

$$(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((el) => {
  revealObserver.observe(el);
});

function whatsappUrl(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function openWhatsApp(text) {
  const url = whatsappUrl(text);
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  document.body.append(link);
  link.click();
  link.remove();
}

function openLightbox(index) {
  galleryIndex = (index + galleryItems.length) % galleryItems.length;
  const item = galleryItems[galleryIndex];
  lightboxImage.src = item.src;
  lightboxImage.alt = item.caption;
  lightboxCaption.textContent = item.caption;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
}

$$(".gallery__item").forEach((item, index) => {
  item.addEventListener("click", () => openLightbox(index));
});

$("#lightboxClose")?.addEventListener("click", closeLightbox);
$("#lightboxPrev")?.addEventListener("click", () => openLightbox(galleryIndex - 1));
$("#lightboxNext")?.addEventListener("click", () => openLightbox(galleryIndex + 1));

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (lightbox.hidden) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") openLightbox(galleryIndex - 1);
  if (event.key === "ArrowRight") openLightbox(galleryIndex + 1);
});

const WEEKDAYS = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];
const MONTHS = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
const BOOKING_DAYS = 14;

const dateInput = $("#data");
const timeInput = $("#hora");
const dateOptions = $("#dateOptions");
const timeOptions = $("#timeOptions");
const timeHint = $("#timeHint");

function pad(value) {
  return String(value).padStart(2, "0");
}

function toISODate(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function formatDateLabel(isoDate) {
  const [year, month, day] = isoDate.split("-");
  return `${day}/${month}/${year}`;
}

function buildSlots(ranges) {
  const slots = [];
  ranges.forEach(([start, end]) => {
    const [startHour, startMinute] = start.split(":").map(Number);
    const [endHour, endMinute] = end.split(":").map(Number);
    let minutes = startHour * 60 + startMinute;
    const last = endHour * 60 + endMinute;
    while (minutes < last) {
      slots.push(`${pad(Math.floor(minutes / 60))}:${pad(minutes % 60)}`);
      minutes += 30;
    }
  });
  return slots;
}

function hoursForDay(date) {
  // Horário oficial (Google Maps): Seg fechado; Ter–Qui 9h–19h; Sex–Sáb 9h–12h; Dom 8h–12h.
  const week = {
    0: [["08:00", "12:00"]],
    1: [],
    2: [["09:00", "19:00"]],
    3: [["09:00", "19:00"]],
    4: [["09:00", "19:00"]],
    5: [["09:00", "12:00"]],
    6: [["09:00", "12:00"]],
  };
  return week[date.getDay()] || [];
}

function hoursLabel(date) {
  switch (date.getDay()) {
    case 0:
      return "Domingo: 8h às 12h";
    case 1:
      return "Segunda: fechado";
    case 2:
    case 3:
    case 4:
      return "Terça a quinta: 9h às 19h";
    default:
      return "Sexta e sábado: 9h às 12h";
  }
}

function availableSlots(date) {
  const now = new Date();
  const today = toISODate(now) === toISODate(date);
  const cutoff = now.getHours() * 60 + now.getMinutes() + 30;
  return buildSlots(hoursForDay(date)).filter((slot) => {
    if (!today) return true;
    const [hour, minute] = slot.split(":").map(Number);
    return hour * 60 + minute >= cutoff;
  });
}

function nextDays(count) {
  const days = [];
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  while (days.length < count) {
    if (availableSlots(cursor).length) {
      days.push(new Date(cursor));
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return days;
}

function renderTimes(isoDate) {
  timeInput.value = "";
  timeOptions.innerHTML = "";

  if (!isoDate) {
    if (timeHint) timeHint.textContent = "Selecione um dia para ver os horários.";
    return;
  }

  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  const slots = availableSlots(date);

  if (!slots.length) {
    if (timeHint) timeHint.textContent = "Não há horários restantes neste dia. Escolha outra data.";
    return;
  }

  if (timeHint) timeHint.textContent = hoursLabel(date);

  let lastPeriod = "";
  slots.forEach((slot) => {
    const period = Number(slot.slice(0, 2)) < 12 ? "Manhã" : "Tarde";
    if (period !== lastPeriod) {
      const label = document.createElement("p");
      label.className = "schedule__group";
      label.textContent = period;
      timeOptions.append(label);
      lastPeriod = period;
    }

    const button = document.createElement("button");
    button.type = "button";
    button.className = "schedule__time";
    button.textContent = slot;
    button.setAttribute("role", "option");
    button.setAttribute("aria-selected", "false");
    button.addEventListener("click", () => {
      timeInput.value = slot;
      $$(".schedule__time").forEach((item) => {
        item.classList.toggle("is-selected", item === button);
        item.setAttribute("aria-selected", String(item === button));
      });
      if (formError) formError.hidden = true;
      setInvalid($("#timeOptions"), false);
      updateSummary();
      refreshWhatsAppLink();
    });
    timeOptions.append(button);
  });
}

function renderDates() {
  if (!dateOptions) return;

  nextDays(BOOKING_DAYS).forEach((date, index) => {
    const iso = toISODate(date);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "schedule__day";
    button.dataset.date = iso;
    button.setAttribute("role", "option");
    button.setAttribute("aria-selected", "false");
    button.innerHTML = `
      <small>${index === 0 && toISODate(new Date()) === iso ? "hoje" : WEEKDAYS[date.getDay()]}</small>
      <strong>${date.getDate()}</strong>
      <span>${MONTHS[date.getMonth()]}</span>
    `;
    button.addEventListener("click", () => {
      dateInput.value = iso;
      $$(".schedule__day").forEach((item) => {
        item.classList.toggle("is-selected", item === button);
        item.setAttribute("aria-selected", String(item === button));
      });
      renderTimes(iso);
      updateSummary();
      if (formError) formError.hidden = true;
    });
    dateOptions.append(button);
  });
}

renderDates();

function setInvalid(el, on) {
  el?.classList.toggle("is-invalid", Boolean(on));
}

function bookingPayload(mark = false) {
  const nome = $("#nome")?.value.trim() || "";
  const telefone = $("#telefone")?.value.trim() || "";
  const servico = $("#servico")?.value || "";
  const data = dateInput?.value || "";
  const hora = timeInput?.value || "";
  const obs = $("#obs")?.value.trim() || "";

  if (mark) {
    setInvalid($("#nome"), !nome);
    setInvalid($("#telefone"), !telefone);
    setInvalid($("#servico"), !servico);
    setInvalid($("#dateOptions"), !data);
    setInvalid($("#timeOptions"), !hora);
  }

  if (!nome || !telefone || !servico || !data || !hora) {
    return { ok: false, missing: true };
  }

  const linhas = [
    "Olá! Quero agendar um horário na Rodrigues Barbearia.",
    `Agendamento para ${formatDateLabel(data)} às ${hora}.`,
    `Nome: ${nome}`,
    `Telefone: ${telefone}`,
    `Serviço: ${servico}`,
  ];

  if (obs) linhas.push(`Observação: ${obs}`);

  return { ok: true, text: linhas.join("\n") };
}

function showFormError(message) {
  if (!formError) return;
  formError.hidden = false;
  formError.textContent = message;
  formError.scrollIntoView({ behavior: "smooth", block: "center" });
}

const whatsappSend = $("#whatsappSend");

function refreshWhatsAppLink() {
  const payload = bookingPayload(false);
  if (payload.ok && whatsappSend) {
    whatsappSend.href = whatsappUrl(payload.text);
  }
}

function updateSummary() {
  const summary = $("#bookingSummary");
  if (!summary) return;
  const data = dateInput?.value || "";
  const hora = timeInput?.value || "";
  if (data && hora) {
    summary.hidden = false;
    summary.textContent = `Agendamento para ${formatDateLabel(data)} às ${hora} — confirme no botão abaixo.`;
  } else {
    summary.hidden = true;
    summary.textContent = "";
  }
}

["#nome", "#telefone", "#servico", "#obs"].forEach((selector) => {
  $(selector)?.addEventListener("input", () => {
    if (formError) formError.hidden = true;
    refreshWhatsAppLink();
  });
  $(selector)?.addEventListener("change", refreshWhatsAppLink);
});

whatsappSend?.addEventListener("click", (event) => {
  const payload = bookingPayload(true);

  if (!payload.ok) {
    event.preventDefault();
    showFormError("Preencha nome, telefone, serviço, data e horário para enviar no WhatsApp.");
    return;
  }

  whatsappSend.href = whatsappUrl(payload.text);
});

bookingForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  whatsappSend?.click();
});
