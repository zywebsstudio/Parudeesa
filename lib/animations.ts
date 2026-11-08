"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight, zero-lag scroll reveal hook (AOS style, once: true)
 * Fixes all delay/lag bugs from heavy scroll triggers.
 */
export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      element.classList.remove("opacity-0", "translate-y-6");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-6");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target); // once: true
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const revealItems = element.querySelectorAll(".reveal-item");
    if (revealItems.length > 0) {
      revealItems.forEach((item) => observer.observe(item));
    } else {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
