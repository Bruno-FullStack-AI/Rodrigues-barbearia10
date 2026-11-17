import {
  business,
  defaultWhatsAppMessage,
  whatsappLink,
} from "../data/site";
import { useScrollState } from "../hooks/useScroll";
import { cn } from "../utils/cn";
import { ArrowUp, MapPin, Phone, WhatsApp } from "./ui/Icons";

export default function FloatingActions() {
  const { past } = useScrollState();

  return (
    <>
      {/* Desktop WhatsApp pill */}
      <a
        href={whatsappLink(defaultWhatsAppMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar pelo WhatsApp"
        className="group fixed bottom-6 right-6 z-40 hidden items-center gap-3 rounded-full bg-gradient-to-br from-[#2ee06f] to-[#12a34a] py-3 pl-3.5 pr-4 text-[#06130b] shadow-[0_18px_40px_-14px_rgba(37,211,102,0.65)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-14px_rgba(37,211,102,0.85)] md:inline-flex"
      >
        <span className="relative grid h-9 w-9 place-items-center rounded-full bg-[#06130b]/10">
          <WhatsApp className="h-5 w-5" />
        </span>
        <span className="text-[0.8rem] font-extrabold tracking-tight">
          Agendar no WhatsApp
        </span>
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5">
          <span className="pulse-dot absolute inset-0 rounded-full bg-[#baffd1]" />
        </span>
      </a>

      {/* Back to top */}
      <a
        href="#inicio"
        aria-label="Voltar ao topo"
        className={cn(
          "fixed bottom-6 left-6 z-40 hidden h-11 w-11 place-items-center rounded-full border border-white/12 bg-ink-950/80 text-ivory-dim backdrop-blur-md transition-all duration-500 hover:border-brass-400/50 hover:text-brass-200 md:grid",
          past
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        <ArrowUp className="h-4 w-4" />
      </a>

      {/* Mobile action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/[0.09] bg-ink-950/92 px-3 pb-[calc(0.55rem+env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-xl md:hidden">
        <div className="flex items-center gap-2">
          <a
            href={whatsappLink(defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm flex-1"
          >
            <WhatsApp className="h-4 w-4" />
            Agendar
          </a>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm flex-1"
          >
            <MapPin className="h-4 w-4 text-brass-300" />
            Como chegar
          </a>
          <a
            href={`tel:+${business.phoneRaw}`}
            aria-label={`Ligar para ${business.phoneDisplay}`}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-ivory"
          >
            <Phone className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  );
}
