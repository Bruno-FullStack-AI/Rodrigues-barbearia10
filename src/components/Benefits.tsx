const benefits = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Higiene Impecável',
    description: 'Todos os equipamentos são esterilizados e descartáveis quando necessário. Sua segurança é prioridade.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Pontualidade Garantida',
    description: 'Agendamento inteligente para que você seja atendido no horário marcado. Sem filas, sem espera.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Produtos Premium',
    description: 'Utilizamos apenas produtos profissionais de marcas renomadas para garantir o melhor resultado.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Atendimento Familiar',
    description: 'Ambiente acolhedor para pais e filhos. Crianças de todas as idades são bem-vindas com carinho especial.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Técnicas Atualizadas',
    description: 'Sempre estudando as últimas tendências mundiais para trazer o que há de mais moderno em cortes.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Localização Privilegiada',
    description: 'Fácil acesso, estacionamento próximo e ambiente climatizado para sua comodidade total.',
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="relative py-20 lg:py-32 bg-dark-950 noise overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="reveal-left relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7697490/pexels-photo-7697490.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200"
                alt="Ferramentas de barbearia"
                className="w-full h-[400px] lg:h-[600px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 sm:right-8 glass rounded-2xl p-6 max-w-[240px] animate-float">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-dark-950 font-bold">
                  ✓
                </div>
                <div>
                  <div className="text-white font-bold text-lg">10+ Anos</div>
                  <div className="text-dark-400 text-xs">de excelência</div>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold-400 text-sm">★</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Benefits */}
          <div>
            <div className="reveal">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 border border-gold-500/20 bg-gold-500/5 mb-6">
                Por Que Nos Escolher
              </span>
            </div>
            <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              A Diferença Está nos{' '}
              <span className="gradient-text">Detalhes</span>
            </h2>
            <p className="reveal text-dark-300 text-lg mb-10">
              Mais do que um corte, oferecemos uma experiência completa de cuidado pessoal 
              com profissionalismo e dedicação.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <div
                  key={benefit.title}
                  className={`reveal stagger-${Math.min(i + 1, 6)} flex gap-4 group`}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold-500/10 text-gold-400 flex items-center justify-center group-hover:bg-gold-500/20 group-hover:scale-110 transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 group-hover:text-gold-400 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-dark-400 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
