import { useEffect, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/897263/pexels-photo-897263.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920"
          alt="Barbearia premium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/90 to-dark-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/40" />
      </div>

      {/* Ambient decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold-500/10 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-600/5 rounded-full blur-[120px]" style={{ animationDelay: '3s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 transition-all duration-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-gold-300 text-sm font-medium">Barbearia Premium em sua cidade</span>
          </div>

          {/* Heading */}
          <h1
            className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] mb-6 transition-all duration-1000 delay-200 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Estilo &{' '}
            <span className="gradient-text">Precisão</span>
            <br />
            em Cada Corte
          </h1>

          {/* Subheading */}
          <p
            className={`text-lg sm:text-xl text-dark-300 max-w-xl mb-10 leading-relaxed transition-all duration-1000 delay-400 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Cortes de cabelo e barba para homens e crianças de todas as idades. 
            Experiência premium com técnicas modernas e atendimento exclusivo.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-1000 delay-500 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="#agendar"
              className="btn-shine bg-gradient-to-r from-gold-500 to-gold-600 text-dark-950 px-8 py-4 rounded-full font-bold text-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/30 hover:scale-105 text-center animate-pulse-gold"
            >
              Agendar Meu Horário
            </a>
            <a
              href="#servicos"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:border-gold-400/50 group"
            >
              <span>Ver Serviços</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div
            className={`flex flex-wrap gap-8 sm:gap-12 transition-all duration-1000 delay-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {[
              { number: '5.000+', label: 'Clientes Satisfeitos' },
              { number: '10+', label: 'Anos de Experiência' },
              { number: '4.9', label: 'Avaliação ★★★★★' },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold gradient-text font-display">
                  {stat.number}
                </div>
                <div className="text-sm text-dark-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs text-dark-400 uppercase tracking-widest">Rolar</span>
        <div className="w-6 h-10 rounded-full border-2 border-dark-400/30 flex justify-center">
          <div className="w-1.5 h-3 bg-gold-400 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
