"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const n = 70;
    const w = rect.width;
    const h = rect.height;
    const mid = h / 2;
    const bars: { x: number; amp: number; phase: number; width: number }[] = [];

    for (let i = 0; i < n; i++) {
      const x = (i / n) * w;
      const dist = Math.abs(i - n / 2) / (n / 2);
      const amp = (1 - dist) * (h * 0.42) * (0.4 + Math.random() * 0.6);
      bars.push({
        x,
        amp,
        phase: Math.random() * Math.PI * 2,
        width: Math.max(1.6, (w / n) * 0.55),
      });
    }

    let t = 0;
    let raf: number;

    function animate() {
      t += 0.018;
      ctx!.clearRect(0, 0, w, h);

      bars.forEach((bar, i) => {
        const scale = 0.55 + 0.45 * Math.sin(t * 1.6 + bar.phase + i * 0.12);
        const barH = Math.max(2, bar.amp * scale);
        const dist = Math.abs(i - n / 2) / (n / 2);
        const alpha = 0.35 + (1 - dist) * 0.5;

        ctx!.fillStyle = `rgba(184, 135, 63, ${alpha})`;
        ctx!.fillRect(bar.x, mid - barH / 2, bar.width, barH);
      });

      raf = requestAnimationFrame(animate);
    }

    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative z-[1] border-b border-[var(--line)] px-8 pb-[60px] pt-[84px]">
      <div className="mx-auto grid max-w-[1180px] items-center gap-16 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow">Série Fundamentos da Música · Volume I</p>
          <h1 className="font-[var(--font-cinzel)] text-[clamp(2.1rem,4vw,3.35rem)] font-medium leading-[1.15] tracking-[0.02em] text-[var(--gold-2)]">
            A música é a matemática{" "}
            <em className="font-[var(--font-cormorant)] italic text-[var(--cream)]">
              que pode ser ouvida.
            </em>
          </h1>
          <p className="mb-8 mt-6 max-w-[46ch] text-[1.12rem] leading-[1.65] text-[var(--cream-dim)]">
            Uma linha do tempo completa da física do som e da matemática das
            proporções — dos sumérios ao temperamento igual, de Pitágoras ao
            blues. Escrito para músicos, não para matemáticos.
          </p>
          <div className="mb-5">
            <span className="badge-free">Download 100% gratuito</span>
          </div>
          <div>
            <a href="#download" className="btn-primary">
              Baixar o e-book agora
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path d="M12 3v13m0 0l-5-5m5 5l5-5M4 21h16" />
              </svg>
            </a>
          </div>
          <p className="cta-note">PDF · 51 páginas · 3–4 horas de leitura · sem pré-requisitos</p>
        </div>

        <div className="relative aspect-[4/5] max-w-[420px] mx-auto">
          <div className="absolute inset-0 border border-[var(--line-bright)] bg-gradient-to-b from-[var(--bg-2)] to-[var(--bg)] p-[30px] flex flex-col justify-between">
            <p className="text-center font-[var(--font-jetbrains)] text-[0.68rem] uppercase tracking-[0.18em] text-[var(--gold-dim)]">
              Física · Matemática · História · Cultura
            </p>
            <canvas ref={canvasRef} className="h-[140px] w-full" />
            <div>
              <p className="text-center font-[var(--font-cinzel)] text-[1.3rem] font-medium leading-[1.4] tracking-[0.05em] text-[var(--gold-2)]">
                A Música e a Matemática
                <br />
                da Natureza
              </p>
              <p className="mt-1 text-center font-[var(--font-cormorant)] text-[0.95rem] italic text-[var(--cream-dim)]">
                Felipe Salvego
              </p>
            </div>
            <div className="flex justify-between border-t border-[var(--line)] pt-3.5 font-[var(--font-jetbrains)] text-[0.68rem] tracking-[0.04em] text-[var(--muted)]">
              <span>Semitom = 2^(1/12)</span>
              <span>≈ 1,05946</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
