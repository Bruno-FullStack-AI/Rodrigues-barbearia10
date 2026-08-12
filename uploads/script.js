const WHATSAPP_NUMBER = "5585988086334";

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

function openWhatsApp(text) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

$$(".js-book").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest("[data-service]");
    const service = card?.dataset.service || "um horário";
    openWhatsApp(`Olá! Quero agendar: ${service} na Rodrigues Barbearia.`);
  });
});

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

bookingForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = $("#nome").value.trim();
  const telefone = $("#telefone").value.trim();
  const servico = $("#servico").value;
  const data = $("#data").value;
  const hora = $("#hora").value;
  const obs = $("#obs").value.trim();

  if (!nome || !telefone || !servico) {
    formError.hidden = false;
    formError.textContent = "Preencha nome, telefone e o serviço desejado.";
    return;
  }

  formError.hidden = true;

  const linhas = [
    "Olá! Quero agendar um horário na Rodrigues Barbearia.",
    `Nome: ${nome}`,
    `Telefone: ${telefone}`,
    `Serviço: ${servico}`,
  ];

  if (data) linhas.push(`Data preferida: ${data.split("-").reverse().join("/")}`);
  if (hora) linhas.push(`Horário: ${hora}`);
  if (obs) linhas.push(`Observação: ${obs}`);

  openWhatsApp(linhas.join("\n"));
});
