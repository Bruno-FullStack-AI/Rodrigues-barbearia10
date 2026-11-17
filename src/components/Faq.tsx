import { useState } from 'react';
import { business, faqs, whatsappLink } from '../data/business';
import { cn } from '../utils/cn';
import { Icon } from './Icons';

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad relative overflow-hidden">
      <div className="container-x grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <div className="reveal">
            <p className="eyebrow">Dúvidas frequentes</p>
            <h2 className="display mt-4 text-4xl text-white sm:text-5xl lg:text-6xl">
              Antes de sentar <span className="text-gold-gradient">na cadeira</span>
            </h2>
          </div>

          <div className="mt-8 divide-y divide-white/5 border-y border-white/5">
            {faqs.map((item, index) => {
              const isOpen = open === index;
              return (
                <div key={item.q} className="reveal">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-5 py-4 text-left"
                  >
                    <span
                      className={cn(
                        'text-base font-medium transition-colors',
                        isOpen ? 'text-gold-300' : 'text-white hover:text-gold-200'
                      )}
                    >
                      {item.q}
                    </span>
                    <span
                      className={cn(
                        'mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all duration-300',
                        isOpen
                          ? 'rotate-180 border-gold-400/60 bg-gold-400/10 text-gold-300'
                          : 'border-white/15 text-dark-300'
                      )}
                    >
                      <Icon name="chevronDown" className="h-3.5 w-3.5" />
                    </span>
                  </button>
                  <div
                    className={cn(
                      'grid overflow-hidden transition-all duration-500 ease-out',
                      isOpen ? 'grid-rows-[1fr] pb-4 opacity-100' : 'grid-rows-[0fr] opacity-0'
                    )}
                  >
                    <p className="min-h-0 pr-10 text-sm leading-relaxed text-dark-300">{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <aside className="reveal-right lg:sticky lg:top-32 lg:self-start">
          <div className="rounded-2xl border border-gold-500/25 bg-gradient-to-b from-gold-500/[0.08] to-dark-950/80 p-6">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-gold-500/15 text-gold-300">
              <Icon name="whatsapp" className="h-5 w-5" />
            </span>
            <h3 className="display mt-5 text-3xl text-white">Ficou com dúvida?</h3>
            <p className="mt-2 text-sm leading-relaxed text-dark-300">
              Chama no WhatsApp que o Alison responde direto. Sem robô, sem fila de
              atendimento.
            </p>
            <a
              href={whatsappLink('Olá, Alison! Tenho uma dúvida sobre os serviços da barbearia.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold btn-full btn-shine mt-5"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Falar no WhatsApp
            </a>

            <div className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm">
              <a
                href={`tel:${business.phone.tel}`}
                className="flex items-center gap-3 text-dark-200 transition-colors hover:text-gold-300"
              >
                <Icon name="phone" className="h-4 w-4 text-gold-400" />
                {business.phone.display}
              </a>
              <a
                href={business.maps.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-dark-200 transition-colors hover:text-gold-300"
              >
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                {business.address.full}
              </a>
              <p className="flex items-center gap-3 text-dark-200">
                <Icon name="clock" className="h-4 w-4 text-gold-400" />
                Ter–Qui 9h–19h · Sex/Sáb 9h–12h · Dom 8h–12h
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <p className="flex items-center gap-2 text-xs text-dark-400">
              <Icon name="shield" className="h-4 w-4 text-gold-400" />
              Combine o horário direto com o Alison pelo WhatsApp.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
