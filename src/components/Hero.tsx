"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      const y = window.scrollY;
      bgRef.current.style.transform = `scale(${1 + y * 0.0004}) translateY(${y * 0.08}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--bg)]">
      {/* Parallax BG — poster image as subtle texture */}
      <div
        ref={bgRef}
        className="pointer-events-none absolute inset-0 will-change-transform"
      >
        <Image
          src="/images/hero-poster.png"
          alt=""
          fill
          className="object-cover opacity-[0.08]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)]/40 via-transparent to-[var(--bg)]" />
      </div>

      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[70vh] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--gold-dim)]/5 blur-[140px]" />

      {/* Content */}
      <div className="relative z-[2] mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <span className="reveal font-[var(--font-jetbrains)] text-[0.65rem] uppercase tracking-[0.16em] text-[var(--gold-2)]">
          Série Fundamentos da Música · Volume I
        </span>

        <h1 className="reveal mt-8 max-w-4xl font-[var(--font-cinzel)] text-[clamp(2rem,7vw,5rem)] font-normal leading-[1.05] tracking-[-0.02em] text-[var(--cream)]">
          A Música e a{" "}
          <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-2)] bg-clip-text text-transparent">
            Matemática da Natureza
          </span>
        </h1>

        <p className="reveal mt-5 max-w-2xl font-[var(--font-cormorant)] text-[clamp(1.05rem,2vw,1.35rem)] leading-[1.55] text-[var(--cream-dim)] italic">
          Das origens antigas ao temperamento ocidental — a física do som que
          moldou a música ocidental, o blues e os sistemas modais do mundo
          árabe, turco e indiano.
        </p>

        <div className="reveal mt-3 flex items-center gap-2 font-[var(--font-jetbrains)] text-[0.7rem] uppercase tracking-[0.12em] text-[var(--muted)]">
          <span>FÍSICA</span>
          <span className="text-[var(--gold-dim)]">·</span>
          <span>MATEMÁTICA</span>
          <span className="text-[var(--gold-dim)]">·</span>
          <span>HISTÓRIA</span>
          <span className="text-[var(--gold-dim)]">·</span>
          <span>CULTURA</span>
        </div>

        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#cta"
            className="group relative overflow-hidden rounded-[2px] border border-[var(--gold)] bg-[var(--gold)]/10 px-7 py-3 font-[var(--font-jetbrains)] text-[0.72rem] uppercase tracking-[0.14em] text-[var(--gold-2)] no-underline transition-all duration-300 hover:bg-[var(--gold-2)] hover:text-[var(--bg)]"
          >
            <span className="relative z-[1]">Baixar o Livro</span>
          </a>
          <a
            href="#livro"
            className="rounded-[2px] border border-[var(--bg-3)] px-7 py-3 font-[var(--font-jetbrains)] text-[0.72rem] uppercase tracking-[0.14em] text-[var(--cream-dim)] no-underline transition-all duration-300 hover:border-[var(--gold-dim)] hover:text-[var(--cream)]"
          >
            Explorar
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="reveal absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="font-[var(--font-jetbrains)] text-[0.55rem] uppercase tracking-[0.2em] text-[var(--muted)]">
              Role
            </span>
            <div className="h-8 w-[1px] bg-gradient-to-b from-[var(--gold-dim)] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
