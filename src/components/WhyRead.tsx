"use client";

import { useEffect, useRef } from "react";

const REASONS = [
  {
    title: "Músicos",
    desc: "Você sabe que uma quinta perfeita “soa certa”. Mas não sabe por quê. Aqui está a matemática que seu ouvido já sabe — e que sua mente vai querer entender.",
  },
  {
    title: "Estudantes de Música",
    desc: "As escolas ensinam a ler partitura. Ninguém ensina por que ela funciona. Aqui você entende a mecânica por trás da música — e nunca mais olha pra uma nota do mesmo jeito.",
  },
  {
    title: "Curiosos e Autodidatas",
    desc: "Por que certas frequências juntas causam prazer e outras causam desconforto? Não é gosto — é física. Quando você entende a física, começa a ouvir o mundo de outro jeito.",
  },
  {
    title: "Produtores e Compositores",
    desc: "Todo sample que você já usou carrega uma história matemática. Quando você entende essa história, para de chutar e começa a criar com intenção.",
  },
  {
    title: "Matemáticos e Físicos",
    desc: "Série Harmônica, logaritmos, proporções irracionais — tudo isso existe na natureza e na sua orelha. A matemática mais bonita que você nunca viu na escola.",
  },
  {
    title: "Professores e Educadores",
    desc: "O material que faltava em português: conecta música, matemática e física de um jeito que o aluno entende — e se empolga.",
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
