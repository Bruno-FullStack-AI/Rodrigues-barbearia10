import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import {
  business,
  defaultWhatsAppMessage,
  navLinks,
  whatsappLink,
} from "../data/site";
import { useScrollSpy, useScrollState } from "../hooks/useScroll";
import { useOpenStatus } from "../hooks/useOpenStatus";
import { cn } from "../utils/cn";
import { Brand } from "./ui/Brand";
import { ArrowUpRight, Close, Google, Menu, Star, WhatsApp } from "./ui/Icons";

const SECTION_IDS = navLinks.map((link) => link.href.replace("#", ""));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrolled } = useScrollState();
  const active = useScrollSpy(SECTION_IDS);
  const status = useOpenStatus();
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab") return;
      const overlay = overlayRef.current;
      if (!overlay) return;

      const focusable = Array.from(
        overlay.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/[0.07] bg-ink-950/80 py-2.5 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent py-4 lg:py-5",
        )}
      >
        <div className="container-x flex items-center justify-between gap-6">
          <Brand />

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = active === link.href.replace("#", "");
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="nav-link"
                      aria-current={isActive ? "true" : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2.5">
            <span className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.68rem] font-semibold text-ivory-dim xl:inline-flex">
              <span
                className={cn(
                  "relative h-1.5 w-1.5 rounded-full",
                  status.isOpen ? "bg-emerald-400" : "bg-brass-400",
                )}
                aria-hidden
              />
              {status.label}
            </span>

            <a
              href={whatsappLink(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm hidden sm:inline-flex"
            >
              Agendar
              <ArrowUpRight />
            </a>

            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-ivory transition-colors hover:border-brass-400/50 hover:bg-brass-500/10 lg:hidden"
            >
              <Menu />
            </button>
          </div>
        </div>

        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-brass-700 via-brass-300 to-brass-500 transition-opacity duration-500"
          style={{
            transform: "scaleX(var(--scroll-progress, 0))",
            opacity: scrolled ? 1 : 0,
          }}
        />
      </header>

      {open && (
        <div
          ref={overlayRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          className="menu-overlay fixed inset-0 z-[80] flex flex-col overflow-y-auto bg-ink-950/97 backdrop-blur-2xl"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="orb -right-24 top-0 h-72 w-72 bg-brass-600/25" />
            <div className="orb -left-20 bottom-10 h-64 w-64 bg-brass-800/20" />
          </div>

          <div className="container-x relative flex items-center justify-between py-4">
            <Brand asLink={false} />
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Fechar menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-ivory transition-colors hover:border-brass-400/50 hover:bg-brass-500/10"
            >
              <Close />
            </button>
          </div>

          <nav aria-label="Menu móvel" className="container-x relative flex-1 py-6">
            <ul className="flex flex-col">
              {navLinks.map((link, index) => (
                <li
                  key={link.href}
                  className="menu-item border-b border-white/[0.07]"
                  style={{ "--i": index } as CSSProperties}
                >
                  <a
                    href={link.href}
                    onClick={close}
                    className="group flex items-baseline justify-between gap-4 py-4"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-sans text-[0.6rem] font-bold tracking-[0.25em] text-brass-500">
                        0{index + 1}
                      </span>
                      <span className="font-display text-[2rem] leading-none text-ivory transition-colors group-hover:text-brass-200">
                        {link.label}
                      </span>
                    </span>
                    <ArrowUpRight className="text-brass-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="menu-item mt-7 flex flex-col gap-4" style={{ "--i": navLinks.length } as CSSProperties}>
              <a
                href={whatsappLink(defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full"
              >
                <WhatsApp />
                Agendar pelo WhatsApp
              </a>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ivory-mute">
                <span className="inline-flex items-center gap-1.5">
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      status.isOpen ? "bg-emerald-400" : "bg-brass-400",
                    )}
                    aria-hidden
                  />
                  {status.label} · {status.detail}
                </span>
                <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-ivory">
                  {business.street}
                </a>
                <a href={`tel:+${business.phoneRaw}`} className="link-underline hover:text-ivory">
                  {business.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2 pt-1 text-[0.7rem] text-ivory-mute">
                <Google />
                <Star className="-ml-1.5 text-amber-400" />
                <span className="font-semibold text-ivory">{business.rating}</span>
                <span>· {business.reviewCount} avaliações no Google</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
