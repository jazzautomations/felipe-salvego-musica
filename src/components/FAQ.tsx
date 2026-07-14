"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "Preciso saber teoria musical antes de ler?",
    a: "Não. O livro foi escrito para todos os níveis, sem pré-requisitos — do músico iniciante ao avançado que quer entender a física por trás do que já toca.",
    defaultOpen: true,
  },
  {
    q: "É realmente gratuito?",
    a: "Sim, 100% gratuito. O checkout existe apenas para processar a entrega e enviar o link de download para o seu e-mail — nenhum cartão é necessário.",
  },
  {
    q: "Em que formato o livro é entregue?",
    a: "PDF, com entrega imediata após a confirmação — 51 páginas, ilustrações e tabelas incluídas.",
  },
  {
    q: "Quanto tempo leva para ler?",
    a: "Entre 3 e 4 horas de leitura contínua. O livro está dividido em 8 partes independentes, então dá pra ler aos poucos.",
  },
  {
    q: "Existe um Volume II?",
    a: "Este é o Volume I da série Fundamentos da Música. Os próximos volumes estão em preparação.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative z-[1] border-b border-[var(--line)] px-8 py-[90px]">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-12 max-w-[640px]">
          <p className="eyebrow">Perguntas frequentes</p>
          <h2 className="mt-4 font-[var(--font-cinzel)] text-[clamp(1.6rem,2.6vw,2.1rem)] font-medium leading-[1.2] tracking-[0.02em] text-[var(--gold-2)]">
            Antes de baixar
          </h2>
        </div>

        <div className="max-w-[760px]">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-[var(--line)]">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between py-[22px] px-1 text-left"
                >
                  <span className="font-[var(--serif-body)] text-[1.02rem] font-semibold text-[var(--cream)]">
                    {item.q}
                  </span>
                  <span
                    className={`ml-4 font-[var(--font-jetbrains)] text-[1.3rem] text-[var(--gold)] transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="max-w-[62ch] px-1 text-[var(--cream-dim)]">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
