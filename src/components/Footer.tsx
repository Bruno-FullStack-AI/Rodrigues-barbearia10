import { business, defaultWhatsAppMessage, services, whatsappLink } from '../data/business';
import { Icon } from './Icons';

const navLinks = [
  { label: 'Sobre a barbearia', href: '#sobre' },
  { label: 'Serviços e preços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Horários e endereço', href: '#horarios' },
  { label: 'Dúvidas frequentes', href: '#faq' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-dark-950 pb-24 lg:pb-0">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="container-x">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
          <div>
            <a href="#inicio" className="flex items-center gap-3">
              <span className="relative grid h-11 w-11 place-items-center rounded-md border border-gold-500/50 bg-dark-900 font-serif text-lg text-gold-300">
                AR
                <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-gold-400" />
              </span>
              <span className="leading-none">
                <span className="display block text-2xl tracking-wide text-white">
                  Alison Rodrigues
                </span>
                <span className="mt-1 block text-[9px] uppercase tracking-[0.32em] text-gold-400/90">
                  Barbearia · Vila Velha
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-dark-400">
              Estilo, atitude e confiança desde {business.since}. Corte, barba na navalha e
              acabamento caprichado no coração da Vila Velha, em Fortaleza.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <a
                href={whatsappLink(defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da barbearia"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-dark-300 transition-colors hover:border-gold-400/50 hover:text-gold-300"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
              </a>
              <a
                href={`tel:${business.phone.tel}`}
                aria-label="Ligar para a barbearia"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-dark-300 transition-colors hover:border-gold-400/50 hover:text-gold-300"
              >
                <Icon name="phone" className="h-4 w-4" />
              </a>
              <a
                href={business.maps.place}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil no Google"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-dark-300 transition-colors hover:border-gold-400/50 hover:text-gold-300"
              >
                <Icon name="google" className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-300">
              Navegar
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-dark-400 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-300">
              Serviços
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <a
                    href="#servicos"
                    className="text-sm text-dark-400 transition-colors hover:text-gold-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-300">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-dark-400">
              <li className="flex items-start gap-2.5">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <a
                  href={business.maps.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold-300"
                >
                  {business.address.line1}
                  <br />
                  {business.address.line2}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="whatsapp" className="h-4 w-4 shrink-0 text-gold-500" />
                <a
                  href={whatsappLink(defaultWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold-300"
                >
                  {business.phone.display}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <span>
                  Terça a quinta: 9h – 19h
                  <br />
                  Sex e sáb: 9h – 12h
                  <br />
                  Dom: 8h – 12h · Seg: fechado
                </span>
              </li>
            </ul>

            <a href="#agendar" className="btn btn-gold btn-sm btn-full mt-5">
              <Icon name="calendar" className="h-4 w-4" />
              Agendar horário
            </a>
          </div>
        </div>

        <div className="gold-divider" />

        <div className="flex flex-col gap-6 py-6 text-xs text-dark-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            <Icon name="pin" className="h-3.5 w-3.5 text-gold-600" />
            {business.address.city} — {business.address.state} · Plus Code {business.address.plusCode}
          </p>
        </div>

        {/* Crédito do desenvolvedor */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-dark-400">
              Site desenvolvido por
            </p>
            <p className="mt-1 text-sm font-semibold text-white">Bruno Lima</p>
            <p className="text-xs text-dark-400">
              Sites, landing pages e presença digital para o seu negócio.
            </p>
          </div>
          <a
            href="https://wa.me/5585984053391?text=Ol%C3%A1%20Bruno!%20Vi%20o%20site%20da%20Barbearia%20Alison%20Rodrigues%20e%20quero%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            <Icon name="whatsapp" className="h-4 w-4 text-gold-400" />
            (85) 98405-3391
          </a>
        </div>
      </div>
    </footer>
  );
}
