import { business, defaultWhatsAppMessage, whatsappLink } from '../data/business';
import { Icon } from './Icons';
import Stars from './Stars';

export default function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-24">
      <img
        src="/images/barba-navalhete.jpg"
        alt="Barba sendo finalizada na navalha"
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-dark-950/85" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-dark-950 via-dark-950/80 to-dark-950/40" />

      <div className="container-x relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Bora marcar?</p>
          <h2 className="display mt-4 text-4xl text-white sm:text-5xl lg:text-6xl">
            Seu próximo corte está
            <br />
            a uma mensagem <span className="text-gold-gradient">de distância</span>.
          </h2>
          <p className="mt-5 max-w-lg text-dark-200">
            Manda um oi no WhatsApp, diz o dia e o horário que fica melhor para você. O Alison
            confirma e te espera na R. Beta.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold btn-lg btn-shine"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              Agendar no WhatsApp
            </a>
            <a
              href={business.maps.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-lg"
            >
              <Icon name="pin" className="h-4 w-4" />
              Como chegar
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-dark-300">
            <span className="flex items-center gap-2">
              <Stars />
              <strong className="font-semibold text-white">5,0</strong> no Google
            </span>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <span className="flex items-center gap-2">
              <Icon name="clock" className="h-4 w-4 text-gold-400" />
              Ter–Qui 9h–19h
            </span>
            <span className="flex items-center gap-2">
              <Icon name="wallet" className="h-4 w-4 text-gold-400" />
              {business.priceRange}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
