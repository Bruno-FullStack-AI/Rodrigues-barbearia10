import { useCallback, useState } from "react";
import type { ServiceId } from "./data/site";
import { useReveal } from "./hooks/useReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import SocialProof from "./components/SocialProof";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Booking from "./components/Booking";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

export default function App() {
  useReveal();
  const [selectedService, setSelectedService] = useState<ServiceId>("combo");

  const chooseService = useCallback((id: ServiceId) => {
    setSelectedService(id);
    const target = document.getElementById("agendar");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target?.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
      block: "start",
    });
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-ink-950 font-sans text-ivory antialiased">
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>

      <Navbar />

      <main id="conteudo">
        <Hero />
        <Ticker />
        <SocialProof />
        <Services onChoose={chooseService} />
        <Showcase />
        <Benefits />
        <Testimonials />
        <Pricing onChoose={chooseService} />
        <Booking selectedService={selectedService} />
        <FAQ />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
