"use client";

import { useEffect, useRef } from "react";

const POINTS = [
  {
    label: "Som",
    detail:
      "Uma corda vibra um número X de vezes por segundo. Essa frequência (Hz) é exatamente o que seu ouvido traduz como nota musical.",
  },
  {
    label: "Cor",
    detail:
      "A luz também é onda. O vermelho e o violeta são só frequências eletromagnéticas diferentes — a mesma lógica do som, numa oitava mil vezes mais aguda.",
  },
  {
    label: "Batimento",
    detail:
      "Seu coração pulsa numa frequência própria. Rápido ou devagar demais, o corpo sente que algo está errado — o mesmo instinto que detecta uma nota fora do tom.",
  },
  {
    label: "Percepção",
    detail:
      "Sua cóclea decompõe qualquer som em frequências antes de você processar que ouviu algo — uma espécie de Transformada de Fourier biológica, rodando o tempo todo sem você perceber.",
  },
];

export default function Convergence() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal").forEach((child, i) => {
              (child as HTMLElement).style.setProperty("--i", String(i));
              child.classList.add("in-view");
            });
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section" ref={ref}>
      <div className="mx-auto max-w-4xl text-center">
        <div className="eyebrow reveal mx-auto justify-center">Antes de Começar</div>

        <h2 className="reveal mt-4 font-[var(--font-cinzel)] text-[clamp(1.5rem,4vw,2.3rem)] font-light leading-[1.3] text-[var(--cream)]">
          Pitágoras achava que{" "}
          <span className="font-semibold text-[var(--gold-2)]">tudo é número</span>. Hermeto
          Pascoal vive dizendo que{" "}
          <span className="font-semibold text-[var(--gold-2)]">tudo é som</span>. Eles não
          discordam.
        </h2>

        <p className="reveal mx-auto mt-6 max-w-2xl text-[clamp(0.85rem,1.5vw,0.98rem)] leading-[1.8] text-[var(--cream-dim)]">
          Os dois estão olhando pro mesmo fenômeno de ângulos diferentes: a frequência. A nota
          que você canta, a cor que você enxerga e o batimento do seu coração são, na física
          crua, a mesma coisa — uma oscilação periódica, medida em ciclos por segundo. O que
          muda é só a escala.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {POINTS.map((p) => (
          <div key={p.label} className="card reveal">
            <h3 className="font-[var(--font-cinzel)] text-sm font-bold uppercase tracking-[0.12em] text-[var(--gold-2)]">
              {p.label}
            </h3>
            <p className="mt-2 text-[0.82rem] leading-[1.6] text-[var(--cream-dim)]">
              {p.detail}
            </p>
          </div>
        ))}
      </div>

      <p className="reveal mx-auto mt-10 max-w-xl text-center text-[0.85rem] italic leading-[1.7] text-[var(--muted)]">
        Este livro começa exatamente nesse ponto de convergência — onde física, matemática e
        música param de ser matérias separadas e viram a mesma pergunta: por que as coisas soam
        do jeito que soam?
      </p>
    </section>
  );
}
