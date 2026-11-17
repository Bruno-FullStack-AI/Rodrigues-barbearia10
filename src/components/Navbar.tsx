import { useEffect, useState } from 'react';
import { business, defaultWhatsAppMessage, whatsappLink } from '../data/business';
import { useOpenStatus } from '../hooks/useOpenStatus';
import { cn } from '../utils/cn';
import { Icon } from './Icons';

const links = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Horários', href: '#horarios' },
  { label: 'Dúvidas', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const status = useOpenStatus();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Faixa de informações */}
      <div className="hidden border-b border-white/5 bg-dark-950/95 backdrop-blur md:block">
        <div className="container-x flex h-9 items-center justify-between text-[11px] uppercase tracking-[0.16em] text-dark-300">
          <span className="flex items-center gap-2">
            <span
              className={cn(
                'h-1.5 w-1.5 rounded-full',
                status.isOpen ? 'bg-emerald-400 pulse-dot' : 'bg-dark-400'
              )}
            />
            <span className={status.isOpen ? 'text-emerald-300' : 'text-dark-300'}>
              {status.headline}
            </span>
            <span className="text-dark-600">·</span>
            <span className="normal-case tracking-normal text-dark-400">{status.detail}</span>
          </span>

          <div className="flex items-center gap-6">
            <a
              href={business.maps.place}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-gold-300"
            >
              <Icon name="pin" className="h-3.5 w-3.5 text-gold-400" />
              {business.address.line1} · {business.address.city}
            </a>
            <a
              href={`tel:${business.phone.tel}`}
              className="flex items-center gap-1.5 transition-colors hover:text-gold-300"
            >
              <Icon name="phone" className="h-3.5 w-3.5 text-gold-400" />
              {business.phone.display}
            </a>
          </div>
        </div>
      </div>

      {/* Navegação */}
      <div
        className={cn(
          'transition-all duration-500',
          scrolled
            ? 'border-b border-gold-500/15 bg-dark-950/92 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl'
            : 'border-b border-transparent bg-gradient-to-b from-dark-950/85 via-dark-950/45 to-transparent'
        )}
      >
        <div className="container-x flex items-center justify-between py-3 lg:py-4">
          <a href="#inicio" className="group flex items-center gap-3" aria-label={business.name}>
            <span className="relative grid h-11 w-11 place-items-center rounded-md border border-gold-500/50 bg-dark-900/80 font-serif text-lg text-gold-300 transition-colors group-hover:border-gold-400">
              AR
              <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-gold-400" />
            </span>
            <span className="leading-none">
              <span className="display block text-2xl tracking-wide text-white">
                Alison Rodrigues
              </span>
              <span className="mt-1 block text-[9px] uppercase tracking-[0.32em] text-gold-400/90 sm:text-[10px]">
                Barbearia · Vila Velha
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-sm text-dark-200 transition-colors hover:text-gold-300"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappLink(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold btn-sm btn-shine hidden sm:inline-flex"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Agendar
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-md border border-white/15 text-white transition-colors hover:border-gold-400/60 hover:text-gold-300 lg:hidden"
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <Icon name="menu" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={cn(
          'fixed inset-0 z-[60] flex flex-col bg-dark-950/98 backdrop-blur-xl transition-all duration-500 lg:hidden',
          menuOpen ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'
        )}
      >
        <div className="container-x flex items-center justify-between py-4">
          <span className="display text-2xl text-white">Alison Rodrigues</span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="grid h-11 w-11 place-items-center rounded-md border border-white/15 text-white"
            aria-label="Fechar menu"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>

        <div className="container-x flex flex-1 flex-col justify-center gap-1 py-6">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="display border-b border-white/5 py-4 text-4xl text-white transition-colors hover:text-gold-300"
              style={{
                transitionDelay: menuOpen ? `${index * 45}ms` : '0ms',
              }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#agendar"
            onClick={() => setMenuOpen(false)}
            className="btn btn-gold btn-lg btn-full mt-8"
          >
            <Icon name="calendar" className="h-5 w-5" />
            Agendar horário
          </a>
        </div>

        <div className="container-x space-y-2 pb-8 text-sm text-dark-300">
          <p className="flex items-center gap-2">
            <Icon name="pin" className="h-4 w-4 text-gold-400" />
            {business.address.full}
          </p>
          <a href={`tel:${business.phone.tel}`} className="flex items-center gap-2">
            <Icon name="phone" className="h-4 w-4 text-gold-400" />
            {business.phone.display}
          </a>
          <p className="flex items-center gap-2">
            <span
              className={cn(
                'h-1.5 w-1.5 rounded-full',
                status.isOpen ? 'bg-emerald-400' : 'bg-dark-400'
              )}
            />
            {status.headline} · {status.detail}
          </p>
        </div>
      </div>
    </header>
  );
}
