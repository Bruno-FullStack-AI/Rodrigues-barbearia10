import { useEffect } from 'react';

/**
 * Adiciona a classe `visible` nos elementos com as classes de reveal
 * assim que eles entram na viewport (IntersectionObserver).
 */
export function useReveal() {
  useEffect(() => {
    const selector = '.reveal, .reveal-left, .reveal-right, .reveal-scale';
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}
