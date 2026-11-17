import { useEffect, useState } from 'react';
import { business, defaultWhatsAppMessage, whatsappLink } from '../data/business';
import { cn } from '../utils/cn';
import { Icon } from './Icons';

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp flutuante */}
      <a
        href={whatsappLink(defaultWhatsAppMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="group fixed bottom-24 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_-12px_rgba(37,211,102,0.8)] transition-transform hover:scale-105 lg:bottom-6 lg:right-6"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-25 group-hover:animate-ping" />
        <Icon name="whatsapp" className="relative h-7 w-7" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg border border-white/10 bg-dark-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-xl transition-opacity duration-300 group-hover:opacity-100 lg:block">
          Falar com o Alison
        </span>
      </a>

      {/* Voltar ao topo */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Voltar ao topo"
        className={cn(
          'fixed bottom-[10.5rem] right-5 z-40 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-dark-900/85 text-gold-300 backdrop-blur transition-all duration-300 hover:border-gold-400/60 hover:text-white lg:bottom-24 lg:right-6',
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        )}
      >
        <Icon name="arrowUp" className="h-4 w-4" />
      </button>

      {/* Barra fixa mobile */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-dark-950/95 px-4 pb-[max(0.65rem,env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-xl lg:hidden">
        <div className="grid grid-cols-2 gap-2">
          <a href="#agendar" className="btn btn-outline btn-sm">
            <Icon name="calendar" className="h-4 w-4" />
            Agendar
          </a>
          <a
            href={whatsappLink(defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold btn-sm"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
        <p className="mt-1.5 text-center text-[10px] text-dark-400">
          {business.phone.display} · Ter–Qui 9h–19h · Seg fechado
        </p>
      </div>
    </>
  );
}
