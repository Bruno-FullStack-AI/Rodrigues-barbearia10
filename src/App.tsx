import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Booking from './components/Booking';
import Location from './components/Location';
import CtaBanner from './components/CtaBanner';
import Faq from './components/Faq';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import { useReveal } from './hooks/useReveal';

function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-dark-950 font-body text-white antialiased">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold-400 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-dark-950"
      >
        Pular para o conteúdo
      </a>

      <Navbar />
      <main id="conteudo">
        <Hero />
        <Highlights />
        <About />
        <Services />
        <Gallery />
        <Reviews />
        <Booking />
        <Location />
        <CtaBanner />
        <Faq />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
