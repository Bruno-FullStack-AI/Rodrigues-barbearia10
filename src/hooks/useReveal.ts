import { useLayoutEffect } from "react";

/**
 * Progressive scroll reveals. Elements are visible by default (no-JS safe);
 * the `.reveal-ready` class on <html> enables the hidden state only when JS runs.
 */
export function useReveal() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const nodes = () =>
      Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const supported = "IntersectionObserver" in window;
    root.classList.add("reveal-ready");

    if (reduced || !supported) {
      nodes().forEach((el) => el.classList.add("is-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    const scan = () => {
      nodes()
        .filter((el) => !el.classList.contains("is-in"))
        .forEach((el) => observer.observe(el));
    };

    scan();

    const mutation = new MutationObserver(scan);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);
}
