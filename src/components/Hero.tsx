"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    el.querySelectorAll(".reveal").forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="hero-section" id="topo">
      {/* Background layer */}
      <div className="hero-bg-layer">
        <Image
          src="/images/hero-poster.png"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div className="hero-overlay" />
      <div className="hero-glow" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:gap-14 md:px-8">
        {/* Text */}
        <div className="text-center md:text-left">
          <span className="reveal mb-4 inline-block rounded-full border border-[color-mix(in_srgb,var(--gold),transparent_70%)] bg-[color-mix(in_srgb,var(--gold),transparent_92%)] px-3.5 py-1 text-[0.6rem] font-medium tracking-[0.2em] uppercase text-[var(--gold)]">
            Série Fundamentos da Música · Vol. I
          </span>

          <h1 className="reveal mt-4 font-[var(--font-cinzel)] text-[clamp(1.75rem,5.5vw,3.2rem)] font-bold leading-[1.1] tracking-tight text-[var(--cream)]">
            A Música e a{" "}
            <span className="text-[var(--gold-2)]">
              Matemática da Natureza
            </span>
          </h1>

          <p className="reveal mx-auto mt-5 max-w-md text-[clamp(0.85rem,1.5vw,1rem)] leading-relaxed text-[var(--cream-dim)] md:mx-0">
            Física · Matemática · História · Cultura — das origens antigas ao
            temperamento igual, a jornada dos intervalos que organizam o som.
          </p>

          <p className="reveal mt-2 text-[0.75rem] italic text-[var(--muted)]">
            Felipe Salvego
          </p>

          <div className="reveal mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
            <a href="#baixar" className="btn-primary">
              Baixar grátis
            </a>
            <a href="#livro" className="btn-secondary">
              Sobre o livro
            </a>
          </div>
        </div>

        {/* Poster */}
        <div className="reveal flex justify-center">
          <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm">
            <Image
              src="/images/hero-poster.png"
              alt="Capa — A Música e a Matemática da Natureza"
              className="relative rounded-sm border border-[color-mix(in_srgb,var(--gold),transparent_85%)] object-cover shadow-[0_24px_80px_-16px_rgba(0,0,0,0.7)]"
              priority
              width={500}
              height={700}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
