"use client";

import { BookOpen } from "lucide-react";
import { useEffect, useRef } from "react";
import LeadForm from "./LeadForm";

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const revealEls = el.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    revealEls.forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="baixar"
      className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950 px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <span className="reveal mb-4 inline-block rounded-full border border-emerald-700/40 bg-emerald-900/20 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-emerald-400">
          Download gratuito
        </span>

        <h2 className="reveal mt-4 text-[clamp(1.75rem,5vw,2.75rem)] font-light leading-tight tracking-tight text-stone-100">
          Leve a música e a{" "}
          <span className="font-semibold italic text-emerald-400">matemática da natureza</span>{" "}
          com você
        </h2>

        <p className="reveal mx-auto mt-4 max-w-lg text-base leading-relaxed text-stone-400">
          Preencha abaixo e receba o PDF completo na hora. Sem spam, sem pegadinha — é só o
          livro e, de vez em quando, novidades sobre música e matemática.
        </p>

        <div className="reveal mx-auto mt-10 max-w-md">
          <div className="rounded-xl border border-stone-700/60 bg-stone-800/40 p-6 backdrop-blur-sm md:p-8">
            <div className="mb-6 flex items-center justify-center gap-3 text-stone-400">
              <BookOpen className="size-5" />
              <span className="text-sm">PDF • 150+ páginas • Grátis</span>
            </div>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
