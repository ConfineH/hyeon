"use client";

import { useEffect } from "react";

export function Motion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const showAll = () => elements.forEach(element => element.removeAttribute("data-motion"));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.removeAttribute("data-motion");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });
    elements.forEach(element => {
      if (element.getBoundingClientRect().top >= window.innerHeight) {
        element.dataset.motion = "pending";
        observer.observe(element);
      }
    });
    // Keyboard navigation and in-page links must never land on hidden content.
    const showFocused = (event: FocusEvent) => (event.target as HTMLElement)?.closest(".reveal")?.removeAttribute("data-motion");
    document.addEventListener("focusin", showFocused);
    window.addEventListener("hashchange", showAll);
    preference.addEventListener("change", showAll);
    return () => {
      observer.disconnect(); showAll();
      document.removeEventListener("focusin", showFocused);
      window.removeEventListener("hashchange", showAll);
      preference.removeEventListener("change", showAll);
    };
  }, []);
  return null;
}
