import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(options?: {
  stagger?: boolean;
  threshold?: number;
}) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined") return;

    const targets: HTMLElement[] = options?.stagger
      ? Array.from(el.querySelectorAll<HTMLElement>(".reveal"))
      : [el];

    if (options?.stagger) {
      targets.forEach((t, i) => {
        t.style.animationDelay = `${i * 80}ms`;
      });
    } else if (!el.classList.contains("reveal")) {
      el.classList.add("reveal");
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: options?.threshold ?? 0.15 },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [options?.stagger, options?.threshold]);
  return ref;
}

