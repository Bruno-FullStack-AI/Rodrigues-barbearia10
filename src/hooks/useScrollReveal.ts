import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const el = ref.current;
    if (el) {
      const revealElements = el.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      revealElements.forEach((element) => observer.observe(element));
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

export function useParallax() {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      parallaxElements.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.parallax || '0.5');
        const rect = el.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const distance = elementCenter - viewportCenter;
        (el as HTMLElement).style.transform = `translateY(${distance * speed * 0.1}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
