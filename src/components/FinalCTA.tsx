"use client";

import { BookOpen } from "lucide-react";
import { useEffect, useRef } from "react";
import LeadForm from "./LeadForm";

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    el.querySelectorAll(".reveal").forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="baixar"
      className="section"
    >
      <div className="mx-auto max-w-3xl text-center">
        <span className="reveal mb-4 inline-block rounded-full border border-[color-mix(in_srgb,var(--gold),transparent_70%)] bg-[color-mix(in_srgb,var(--gold),transparent_92%)] px-4 py-1.5 font-[var(--font-jetbrains)] text-[0.65rem] font-medium tracking-[0.2em] uppercase text-[var(--gold)]">
          Download gratuito
        </span>

        <h2 className="reveal mt-4 font-[var(--font-cinzel)] text-[clamp(1.75rem,5vw,2.75rem)] font-light leading-[1.2] tracking-tight text-[var(--cream)]">
          Leve a música e a{" "}
          <span className="font-semibold text-[var(--gold-2)]">matemática da natureza</span>{" "}
          com você
        </h2>

        <p className="reveal mx-auto mt-4 max-w-lg text-[clamp(0.85rem,1.5vw,0.95rem)] leading-relaxed text-[var(--cream-dim)]">
          Preencha abaixo e receba o PDF completo na hora. Sem spam, sem pegadinha — é só o
          livro e, de vez em quando, novidades sobre música e matemática.
        </p>

        <div className="reveal mx-auto mt-10 max-w-md">
          <div className="card p-6 md:p-8">
            <div className="mb-6 flex items-center justify-center gap-3 text-[var(--cream-dim)]">
              <BookOpen className="size-5 text-[var(--gold)]" />
              <span className="font-[var(--font-jetbrains)] text-[0.72rem] tracking-[0.1em] uppercase text-[var(--muted)]">
                PDF · 150+ páginas · Grátis
              </span>
            </div>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
