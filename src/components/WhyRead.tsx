"use client";

import { useEffect, useRef } from "react";

const REASONS = [
  {
    title: "Músicos",
    desc: "Entenda de onde vêm os intervalos que você toca, por que a oitava tem 12 notas e o que é o temperamento igual — a base da música ocidental.",
  },
  {
    title: "Estudantes de Música",
    desc: "O conteúdo de teoria musical aplicada que escolas não ensinam: a física do som, a história da afinação e a matemática dos intervalos.",
  },
  {
    title: "Curiosos e Autodidatas",
    desc: "Se você já se perguntou por que algumas notas soam bem juntas e outras não, este livro traduz o fenômeno em linguagem acessível.",
  },
  {
    title: "Produtores e Compositores",
    desc: "Domine os fundamentos acústicos que moldam timbre, harmonia e afinação — da escolha de samples ao design sonoro.",
  },
  {
    title: "Matemáticos e Físicos",
    desc: "Uma aplicação concreta e bela de proporções, logaritmos e séries infinitas no mundo real dos sons.",
  },
  {
    title: "Professores e Educadores",
    desc: "Material de apoio raro em português para conectar música, matemática e física em sala de aula.",
  },
];

export default function WhyRead() {
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
      <div className="mx-auto max-w-6xl">
        <div className="eyebrow reveal">Pra Quem é Este Livro</div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((item) => (
            <article key={item.title} className="card reveal">
              <h3 className="font-[var(--font-cinzel)] text-base font-bold tracking-wide text-[var(--gold-2)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-[1.5] text-[var(--cream-dim)]">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
