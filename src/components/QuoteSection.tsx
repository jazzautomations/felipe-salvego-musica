"use client";

import { useEffect, useRef } from "react";

export default function QuoteSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal").forEach((child) => {
              child.classList.add("in-view");
            });
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="section">
      <div className="mx-auto max-w-4xl text-center">
        <div className="reveal text-[clamp(1.25rem,2.5vw,2rem)] font-light leading-[1.6] tracking-wide text-[var(--cream)]">
          <span className="text-[var(--gold)]">&ldquo;</span>A Música é a matemática
          que pode ser ouvida, e a Matemática é a música que pode ser pensada.
          <span className="text-[var(--gold)]">&rdquo;</span>
        </div>
        <p className="reveal mt-6 text-xs tracking-[0.15em] text-[var(--muted)]">
          — James Joseph Sylvester, matemático (1814–1897)
        </p>
      </div>
    </section>
  );
}
