const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/3998431/pexels-photo-3998431.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600',
    alt: 'Barba sendo modelada com navalha',
    span: 'row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/37533244/pexels-photo-37533244.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    alt: 'Corte profissional de cabelo',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/7697711/pexels-photo-7697711.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    alt: 'Ferramentas premium de barbearia',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/18503633/pexels-photo-18503633.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    alt: 'Detalhe de corte com máquina',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3998426/pexels-photo-3998426.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600',
    alt: 'Modelagem de barba profissional',
    span: 'row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/7697363/pexels-photo-7697363.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    alt: 'Corte infantil divertido',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/12464842/pexels-photo-12464842.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    alt: 'Técnica de corte com navalha',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/7697358/pexels-photo-7697358.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    alt: 'Criança recebendo corte',
    span: '',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="relative py-20 lg:py-32 bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="reveal">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 border border-gold-500/20 bg-gold-500/5 mb-6">
              Galeria
            </span>
          </div>
          <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            Nosso <span className="gradient-text">Trabalho</span>
          </h2>
          <p className="reveal text-dark-300 text-lg max-w-2xl mx-auto">
            Cada corte é uma obra de arte. Confira alguns dos nossos trabalhos 
            e veja a qualidade que nos diferencia.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[240px]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`reveal-scale stagger-${Math.min(i + 1, 6)} img-hover rounded-xl overflow-hidden relative group cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white text-sm font-medium">{img.alt}</p>
              </div>
              {/* Gold corner accent on hover */}
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
