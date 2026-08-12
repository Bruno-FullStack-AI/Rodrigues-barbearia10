const services = [
  {
    icon: '✂️',
    title: 'Corte Masculino',
    description: 'Cortes modernos e clássicos com técnicas de alta precisão. Do degradê perfeito ao estilo social.',
    image: 'https://images.pexels.com/photos/13138585/pexels-photo-13138585.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  },
  {
    icon: '🪒',
    title: 'Barba & Bigode',
    description: 'Modelagem e alinhamento de barba com navalha e toalha quente. Cuidado premium para seu rosto.',
    image: 'https://images.pexels.com/photos/3998402/pexels-photo-3998402.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  },
  {
    icon: '👦',
    title: 'Corte Infantil',
    description: 'Ambiente acolhedor para os pequenos. Cortes divertidos e modernos com toda a paciência do mundo.',
    image: 'https://images.pexels.com/photos/7697385/pexels-photo-7697385.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  },
  {
    icon: '💈',
    title: 'Combo Completo',
    description: 'Corte + barba + sobrancelha + hidratação. O pacote definitivo para quem quer sair renovado.',
    image: 'https://images.pexels.com/photos/4969874/pexels-photo-4969874.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  },
  {
    icon: '🧴',
    title: 'Tratamento Capilar',
    description: 'Hidratação profunda, cauterização e tratamentos exclusivos para a saúde do seu cabelo.',
    image: 'https://images.pexels.com/photos/31840006/pexels-photo-31840006.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  },
  {
    icon: '👁️',
    title: 'Design de Sobrancelha',
    description: 'Sobrancelhas alinhadas e com design personalizado para valorizar seu rosto. Acabamento perfeito.',
    image: 'https://images.pexels.com/photos/9992819/pexels-photo-9992819.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative py-20 lg:py-32 bg-dark-950 noise overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gold-600/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="reveal">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 border border-gold-500/20 bg-gold-500/5 mb-6">
              Nossos Serviços
            </span>
          </div>
          <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            Serviços Pensados{' '}
            <span className="gradient-text">Para Você</span>
          </h2>
          <p className="reveal text-dark-300 text-lg max-w-2xl mx-auto">
            Do corte clássico ao mais moderno, cada serviço é executado com atenção aos detalhes 
            e produtos de primeira linha.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal stagger-${Math.min(i + 1, 6)} group relative rounded-2xl overflow-hidden card-hover cursor-pointer`}
            >
              {/* Image */}
              <div className="img-hover aspect-[4/3] relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{service.icon}</span>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-gold-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-dark-300 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-gold-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Saiba mais</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-gold-500/30 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
