"use client";

import { Download } from "lucide-react";
import { useEffect, useRef } from "react";

export default function FinalCTA() {
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
      <div className="mx-auto max-w-3xl text-center">
        <div className="eyebrow reveal">Download Grátis</div>
        <h2 className="reveal mt-4 text-[clamp(1.5rem,3vw,2.5rem)] font-[var(--font-cinzel)] leading-[1.15] text-[var(--cream)]">
          A Música e a Matemática da Natureza
        </h2>
        <p className="reveal mx-auto mt-5 max-w-xl text-sm leading-[1.7] text-[var(--cream-dim)]">
          Série Fundamentos da Música • Volume I
        </p>

        <div className="reveal mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://jazzautomations.zo.space/download"
            target="_blank"
            className="btn-primary"
          >
            <Download className="size-4" />
            Baixar Grátis
          </a>
          <p className="px-4 text-xs leading-relaxed text-[var(--muted)]">
            PDF • 54 páginas • Sem cadastro • Download direto
          </p>
        </div>
      </div>
    </section>
  );
}
