"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Preciso saber ler partitura?",
    a: "Não. O livro usa notação musical quando necessário, mas todo conceito é explicado em linguagem acessível, com diagramas, gráficos e exemplos sonoros. Um músico de ouvido, um produtor de beat e um engenheiro conseguem acompanhar sem partitura.",
  },
  {
    q: "Qual o nível de matemática exigido?",
    a: "Matemática básica: frações, proporções e logaritmos no nível do ensino médio. O foco é no conceito — a conta vem a reboque. Se você sabe que 2/1 é o dobro de 1/1, você já tem 90% do que precisa.",
  },
  {
    q: "É só teoria ou tem prática musical?",
    a: "Cada módulo conecta a teoria a um fenômeno musical concreto: a série harmônica aparece no timbre do violão, o comma pitagórico aparece na quinta do lobo dos órgãos, as blue notes aparecem no bending do blues. O livro foi escrito por um músico em atividade, não por um teórico de gabinete.",
  },
  {
    q: "O que faz este livro ser diferente de um livro de teoria musical comum?",
    a: "Livros de teoria tradicionais ensinam o sistema como dado — &lsquo;as notas são estas, as escalas são aquelas&rsquo;. Este livro pergunta: por que 12 notas? Por que o semitom? O que é um tom, afinal? O livro reconta a história das descobertas: dos sumérios ao 12-TET, passando por Pitágoras, os sistemas árabes, indianos e o blues.",
  },
  {
    q: "O livro cobre sistemas não ocidentais?",
    a: "Sim. A Parte IX (Ritmo, Melodia e a Mesma Coisa) e os apêndices dedicam seções inteiras aos sistemas árabe-maqam, turco-makam e indiano-raga, incluindo intervalos microtonais, escalas de 22 shrutis e os commas específicos de cada tradição.",
  },
  {
    q: "Vai ter Volume II?",
    a: "Sim. Este é o Volume I da Série Fundamentos da Música. O Volume II tratará de harmonia funcional, o Volume III de ritmo e métrica, e o Volume IV de forma e análise. O Volume I estabelece a base — o som, a afinação, os sistemas de notas.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative z-[1] px-6 py-28 md:px-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-14 text-center">
          <span className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--gold)]">
            FAQ
          </span>
          <h2 className="mt-2 text-3xl font-light leading-[1.15] tracking-[-0.01em] text-[var(--fg)] md:text-4xl">
            Perguntas frequentes
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="group rounded-sm border border-[var(--border)] bg-[var(--bg-2)] transition-all duration-300"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left text-sm font-medium leading-snug text-[var(--fg)] transition-colors hover:text-[var(--gold)]"
              >
                {faq.q}
                <ChevronDown
                  className={`size-4 shrink-0 text-[var(--muted)] transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="border-t border-[var(--border)] px-6 pb-5 pt-4 text-[0.82rem] leading-relaxed text-[var(--muted)]">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
