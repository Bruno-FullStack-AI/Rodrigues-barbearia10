import { useState } from 'react';

const plans = [
  {
    name: 'Corte Masculino',
    price: '45',
    description: 'Corte profissional com lavagem e finalização',
    features: [
      'Consulta de estilo personalizada',
      'Lavagem com produtos premium',
      'Corte com técnica de sua escolha',
      'Finalização profissional',
      'Dicas de manutenção',
    ],
    popular: false,
    icon: '✂️',
  },
  {
    name: 'Combo Premium',
    price: '75',
    description: 'Corte + Barba + Sobrancelha — O pacote mais pedido',
    features: [
      'Tudo do Corte Masculino',
      'Barba com navalha e toalha quente',
      'Design de sobrancelha',
      'Hidratação facial',
      'Finalização com produtos exclusivos',
      'Desconto de 15%',
    ],
    popular: true,
    icon: '💈',
  },
  {
    name: 'Corte Infantil',
    price: '35',
    description: 'Para os pequenos guerreiros de até 12 anos',
    features: [
      'Ambiente acolhedor e divertido',
      'Corte moderno ou clássico',
      'Paciência e carinho no atendimento',
      'Finalização estilosa',
      'Brinde especial',
    ],
    popular: false,
    icon: '👦',
  },
];

const additionalServices = [
  { name: 'Barba Completa', price: 'R$ 35' },
  { name: 'Sobrancelha', price: 'R$ 15' },
  { name: 'Hidratação Capilar', price: 'R$ 40' },
  { name: 'Pigmentação', price: 'R$ 25' },
  { name: 'Platinado', price: 'R$ 80' },
  { name: 'Luzes / Mechas', price: 'R$ 120' },
];

export default function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  return (
    <section id="precos" className="relative py-20 lg:py-32 bg-dark-950 noise overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="reveal">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 border border-gold-500/20 bg-gold-500/5 mb-6">
              Investimento
            </span>
          </div>
          <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            Preços <span className="gradient-text">Justos</span>,{' '}
            <br className="hidden sm:block" />
            Qualidade <span className="gradient-text">Premium</span>
          </h2>
          <p className="reveal text-dark-300 text-lg max-w-2xl mx-auto">
            Investimento acessível para um cuidado pessoal de alto padrão. 
            Escolha o serviço ideal para você.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal stagger-${i + 1} relative rounded-2xl p-8 transition-all duration-500 cursor-pointer ${
                plan.popular
                  ? 'bg-gradient-to-b from-gold-500/10 to-dark-950 border-2 border-gold-500/40 scale-[1.02] lg:scale-105'
                  : 'glass-light border border-white/5 hover:border-gold-500/20'
              }`}
              onMouseEnter={() => setHoveredPlan(i)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full text-dark-950 text-xs font-bold uppercase tracking-wider">
                  Mais Popular
                </div>
              )}

              {/* Icon */}
              <div className="text-4xl mb-4">{plan.icon}</div>

              {/* Name */}
              <h3 className="font-display text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-dark-400 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-dark-400 text-lg">R$</span>
                <span className={`text-5xl font-bold font-display ${plan.popular ? 'gradient-text' : 'text-white'}`}>
                  {plan.price}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-dark-200 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#agendar"
                className={`block w-full text-center py-3.5 rounded-full font-semibold transition-all duration-300 btn-shine ${
                  plan.popular || hoveredPlan === i
                    ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-dark-950 hover:shadow-lg hover:shadow-gold-500/25'
                    : 'border border-white/20 text-white hover:border-gold-400/50 hover:text-gold-400'
                }`}
              >
                Agendar Agora
              </a>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="reveal">
          <h3 className="font-display text-2xl font-bold text-white text-center mb-8">
            Serviços Adicionais
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalServices.map((service, i) => (
              <div
                key={service.name}
                className={`stagger-${Math.min(i + 1, 6)} glass-light rounded-xl p-4 text-center card-hover group cursor-pointer`}
              >
                <div className="text-white font-medium text-sm mb-2 group-hover:text-gold-400 transition-colors">
                  {service.name}
                </div>
                <div className="text-gold-400 font-bold font-display text-lg">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
