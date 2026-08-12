import { useState } from 'react';

const testimonials = [
  {
    name: 'Lucas Silva',
    role: 'Cliente há 3 anos',
    avatar: '👨‍💼',
    rating: 5,
    text: 'Melhor barbearia que já frequentei. O Rodrigo é um verdadeiro artista. Cada corte sai perfeito e o ambiente é muito agradável. Recomendo de olhos fechados!',
  },
  {
    name: 'Pedro Oliveira',
    role: 'Cliente há 2 anos',
    avatar: '👨',
    rating: 5,
    text: 'Levo meu filho de 5 anos e ele adora ir ao Rodrigo. Paciência infinita com crianças e o resultado é sempre incrível. Virou programa de pai e filho!',
  },
  {
    name: 'André Santos',
    role: 'Cliente há 5 anos',
    avatar: '🧔',
    rating: 5,
    text: 'Desde que descobri o Rodrigo, nunca mais mudei de barbeiro. A atenção aos detalhes da barba é impressionante. Profissional de altíssimo nível.',
  },
  {
    name: 'Rafael Costa',
    role: 'Cliente há 1 ano',
    avatar: '👱‍♂️',
    rating: 5,
    text: 'O combo corte + barba é sensacional. Saio de lá me sentindo outro homem. Produtos de qualidade e atendimento nota 10. Vale cada centavo!',
  },
  {
    name: 'Marcos Ribeiro',
    role: 'Cliente há 4 anos',
    avatar: '👨‍🦱',
    rating: 5,
    text: 'Pontualidade exemplar! Nunca esperei mais que 5 minutos. O agendamento pelo WhatsApp facilita muito. Barbearia moderna com atendimento old school.',
  },
  {
    name: 'João Ferreira',
    role: 'Cliente há 2 anos',
    avatar: '🧑',
    rating: 5,
    text: 'Meu adolescente não queria ir ao barbeiro. Depois que conheceu o Rodrigo, pede pra ir todo mês! O cara tem um dom com todas as idades.',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleCount = 3;

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      items.push(testimonials[(activeIndex + i) % testimonials.length]);
    }
    return items;
  };

  return (
    <section id="depoimentos" className="relative py-20 lg:py-32 bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="reveal">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 border border-gold-500/20 bg-gold-500/5 mb-6">
              Depoimentos
            </span>
          </div>
          <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            O Que Nossos Clientes{' '}
            <span className="gradient-text">Dizem</span>
          </h2>
          <p className="reveal text-dark-300 text-lg max-w-2xl mx-auto">
            Mais de 5.000 clientes satisfeitos e contando. Confira alguns depoimentos reais.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {getVisibleTestimonials().map((testimonial, i) => (
            <div
              key={`${activeIndex}-${i}`}
              className="glass-light rounded-2xl p-8 card-hover relative group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${i * 0.15}s both`,
              }}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-4xl text-gold-500/10 font-display">"</div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, si) => (
                  <span key={si} className="text-gold-400 text-sm">★</span>
                ))}
              </div>

              {/* Text */}
              <p className="text-dark-200 leading-relaxed mb-6 text-sm lg:text-base">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400/20 to-gold-600/20 flex items-center justify-center text-xl border border-gold-500/20">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-dark-400 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="reveal flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-gold-400 hover:text-gold-400 transition-all duration-300 hover:scale-110"
            aria-label="Depoimento anterior"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'bg-gold-400 w-6' : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-gold-400 hover:text-gold-400 transition-all duration-300 hover:scale-110"
            aria-label="Próximo depoimento"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
