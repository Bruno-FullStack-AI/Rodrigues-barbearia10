export default function SocialProof() {
  const brands = [
    'Google Reviews', 'Instagram', 'Facebook', 'WhatsApp Business', 'Booksy', 'TikTok'
  ];

  return (
    <section className="relative py-16 bg-dark-950 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-10">
          <p className="text-dark-400 text-sm uppercase tracking-[0.3em] font-medium">
            Presente nas melhores plataformas
          </p>
        </div>
        <div className="reveal flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16">
          {brands.map((brand, i) => (
            <div
              key={brand}
              className={`stagger-${i + 1} flex items-center gap-2 text-dark-500 hover:text-gold-400 transition-colors duration-500 group cursor-default`}
            >
              <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-gold-400/10 transition-colors duration-300 flex items-center justify-center">
                <span className="text-xs font-bold">{brand.charAt(0)}</span>
              </div>
              <span className="text-sm font-medium tracking-wide">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
