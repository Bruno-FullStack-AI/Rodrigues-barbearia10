import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Preços', href: '#precos' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass py-3 shadow-2xl shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-700 flex items-center justify-center text-dark-950 font-display font-bold text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300">
            R
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg sm:text-xl font-bold text-white tracking-wide">
              Rodrigo
            </span>
            <span className="text-[10px] sm:text-xs text-gold-400 tracking-[0.25em] uppercase -mt-1">
              Barbeiro
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-dark-300 hover:text-gold-400 transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#agendar"
            className="btn-shine bg-gradient-to-r from-gold-500 to-gold-600 text-dark-950 px-6 py-2.5 rounded-full font-semibold text-sm hover:from-gold-400 hover:to-gold-500 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25"
          >
            Agendar Agora
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 relative z-[60]"
          aria-label="Menu"
        >
          <span
            className={`w-6 h-0.5 bg-gold-400 transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gold-400 transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gold-400 transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-dark-950/98 backdrop-blur-xl z-50 flex flex-col items-center justify-center gap-6 transition-all duration-500 lg:hidden ${
            mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-display text-white hover:text-gold-400 transition-all duration-300"
              style={{
                transitionDelay: mobileOpen ? `${i * 80}ms` : '0ms',
                transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: mobileOpen ? 1 : 0,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#agendar"
            onClick={() => setMobileOpen(false)}
            className="mt-4 btn-shine bg-gradient-to-r from-gold-500 to-gold-600 text-dark-950 px-8 py-3 rounded-full font-semibold text-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300"
            style={{
              transitionDelay: mobileOpen ? `${navLinks.length * 80}ms` : '0ms',
              transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: mobileOpen ? 1 : 0,
            }}
          >
            Agendar Agora
          </a>
        </div>
      </div>
    </nav>
  );
}
