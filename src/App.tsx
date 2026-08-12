import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const revealElements = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    );
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Re-observe when sections mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      const revealElements = document.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right, .reveal-scale'
      );
      revealElements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-dark-950 text-white font-body antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <Gallery />
      <Benefits />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar um horário."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 hover:bg-green-400 hover:scale-110 transition-all duration-300 group"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-dark-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
          Fale conosco!
        </span>
      </a>

      {/* Back to top */}
      <BackToTop />
    </div>
  );
}

function BackToTop() {
  useEffect(() => {
    const btn = document.getElementById('back-to-top');
    const handleScroll = () => {
      if (btn) {
        if (window.scrollY > 600) {
          btn.classList.remove('opacity-0', 'invisible', 'translate-y-4');
          btn.classList.add('opacity-100', 'visible', 'translate-y-0');
        } else {
          btn.classList.add('opacity-0', 'invisible', 'translate-y-4');
          btn.classList.remove('opacity-100', 'visible', 'translate-y-0');
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      id="back-to-top"
      href="#inicio"
      className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full glass flex items-center justify-center text-gold-400 hover:text-white hover:bg-gold-500/20 transition-all duration-300 opacity-0 invisible translate-y-4"
      aria-label="Voltar ao topo"
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </a>
  );
}

export default App;
