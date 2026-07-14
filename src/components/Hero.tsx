"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => {
      if (!bgRef.current) return;
      const y = window.scrollY * 0.3;
      bgRef.current.style.transform = `translateY(${y}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero-section">
      <div ref={bgRef} className="hero-bg-layer [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,black,transparent)]">
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

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-5 text-center md:px-8">
        <span className="eyebrow mb-8">Série Fundamentos da Música • Vol. 1</span>

        <h1
          className={`max-w-4xl font-[var(--font-cinzel)] text-[clamp(2rem,6vw,4.2rem)] font-bold leading-[1.1] tracking-tight text-[var(--cream)] transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          A <span className="text-[var(--gold-2)]">Música</span> e a{" "}
          <span className="text-[var(--gold-2)]">Matemática</span>
          <br className="hidden sm:block" />
          da Natureza
        </h1>

        <p
          className={`mt-6 max-w-2xl text-[clamp(0.85rem,2vw,1.1rem)] leading-[1.6] text-[var(--cream-dim)] transition-all duration-1000 delay-150 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Por que as notas soam bem juntas? Por que uma oitava tem 12 notas?
          A física dos intervalos, a história da afinação e a matemática secreta
          que organiza toda a música ocidental.
        </p>

        <div
          className={`mt-8 flex flex-wrap items-center justify-center gap-4 transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a href="https://jazzautomations.zo.space/download" target="_blank" className="btn-primary">
            Baixar Grátis
          </a>
          <a href="#livro" className="btn-secondary">
            Saber mais
          </a>
        </div>

        <div className="mt-6 flex items-center gap-3">
          {["Física", "Matemática", "História", "Cultura"].map((tag) => (
            <span key={tag} className="tag-pill text-[0.55rem]">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="scroll-indicator">
        <span role="img" aria-label="scroll">
          ↓
        </span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
