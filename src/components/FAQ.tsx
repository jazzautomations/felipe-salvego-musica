"use client";

import { useState, useRef, useEffect } from "react";

const FAQS = [
  {
    q: "Preciso saber matemática para ler este livro?",
    a: "Não. Se você sabe dividir uma pizza em fatias iguais, já tem a base. O livro ensina o resto — frações, proporções e noções básicas de logaritmos explicadas no texto — e o foco é sempre musical, nunca fórmula.",
  },
  {
    q: "O que é o comma pitagórico?",
    a: "É o problema que Pitágoras não resolveu: quando você empilha 12 quintas perfeitas, elas não voltam ao ponto de partida — sobra uma diferença de aproximadamente 23,46 cents, quase um quarto de semitom. Esse resto é o comma pitagórico, e resolver isso (ou conviver com ele) é o tema central da história da afinação ocidental.",
  },
  {
    q: "O que significa 12-TET?",
    a: "12-tone Equal Temperament — o sistema de afinação que divide a oitava em 12 semitons iguais (cada um de 100 cents). É o padrão da música ocidental desde o século XVIII, resolvendo o comma pitagórico ao distribuir o erro uniformemente entre todas as notas.",
  },
  {
    q: "O livro tem partituras ou exemplos práticos?",
    a: "Sim, o livro inclui diagramas de intervalos, ilustrações da Série Harmônica, gráficos de cents e referências a peças musicais históricas que ilustram cada conceito.",
  },
  {
    q: "O que é a Série Harmônica?",
    a: "É o fenômeno físico pelo qual um som fundamental gera uma série de frequências múltiplas (2×, 3×, 4×...). Essas frequências 'naturais' são a base de todos os intervalos musicais. O livro mostra como a série se relaciona com as escalas, os acordes e a percepção auditiva.",
  },
  {
    q: "O livro aborda microtonalismo?",
    a: "Sim. O último capítulo explora as limitações do 12-TET e apresenta sistemas microtonais (24-TET, 31-TET, 53-TET), além do papel da música eletrônica e contemporânea na expansão da paleta harmônica.",
  },
  {
    q: "Onde baixar o livro?",
    a: "O livro é 100% gratuito. Preencha o formulário no final da página com nome e e-mail — o PDF é baixado na hora.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
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
      <div className="mx-auto max-w-3xl">
        <div className="eyebrow reveal">Perguntas Frequentes</div>

        <div className="mt-8 space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="reveal">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="faq-btn"
                aria-expanded={open === i}
              >
                <span className="pr-4 text-left text-sm font-medium leading-[1.4] text-[var(--cream)]">
                  {faq.q}
                </span>
                <svg
                  className={`faq-chevron shrink-0 ${open === i ? "rotated" : ""}`}
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M4 6L7 9L10 6"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className={`faq-content ${open === i ? "open" : ""}`}>
                <div className="px-5 pb-5 pt-2 text-sm leading-[1.6] text-[var(--muted)]">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
