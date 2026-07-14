"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
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
      { threshold: 0.15 }
    );
    revealEls.forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-stone-950 pt-16"
    >
      {/* Grain overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc0IiBudW1PY3RhdmVzPSI0IiAvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNmKSIgb3BhY2l0eT0iLjA0IiAvPjwvc3ZnPg==')] opacity-30" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6">
        {/* Texto */}
        <div className="text-center md:text-left">
          <span className="reveal mb-4 inline-block rounded-full border border-emerald-700/30 bg-emerald-900/15 px-3.5 py-1 text-xs font-medium tracking-widest uppercase text-emerald-400">
            Série Fundamentos da Música • Vol. I
          </span>

          <h1 className="reveal mt-4 text-[clamp(2rem,6vw,3.5rem)] font-light leading-[1.08] tracking-tight text-stone-100">
            A Música e a{" "}
            <span className="font-semibold italic text-emerald-400">Matemática da Natureza</span>
          </h1>

          <p className="reveal mt-5 text-base leading-relaxed text-stone-400 md:text-lg">
            Física • Matemática • História • Cultura — das origens antigas ao temperamento
            igual, a jornada dos intervalos que organizam o som.
          </p>

          <p className="reveal mt-2 text-sm italic text-stone-500">
            Felipe Salvego
          </p>

          <div className="reveal mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
            <a
              href="#baixar"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-500"
            >
              Baixar grátis
            </a>
            <a
              href="#livro"
              className="inline-flex items-center gap-2 rounded-lg border border-stone-700 px-6 py-3.5 text-sm font-medium text-stone-300 transition hover:border-stone-500 hover:text-stone-100"
            >
              Sobre o livro
            </a>
          </div>
        </div>

        {/* Poster */}
        <div className="reveal flex justify-center">
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-emerald-500/20 to-stone-700/20 opacity-60 blur-xl" />
            <Image
              src="/hero-poster.png"
              alt="A Música e a Matemática da Natureza — Felipe Salvego"
              className="relative rounded-xl border border-stone-700/60 object-cover shadow-2xl"
              priority
              width={500}
              height={700}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
