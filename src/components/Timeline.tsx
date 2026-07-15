"use client";

import { useEffect, useRef } from "react";

const ITEMS = [
  { year: "~500 a.C.", event: "Pitágoras toca uma corda. Pela metade. O som dobra de altura. Ele não entende por quê — mas sabe que acaba de descobrir algo sobre o universo." },
  { year: "~350 a.C.", event: "Aristóxeno questiona: será que música é só matemática? Ou tem algo mais? A polêmica começa — e nunca mais termina." },
  { year: "Séc. I d.C.", event: "Ptolomeu tenta pôr ordem no caos: em Harmônica, refina os intervalos consonantes e propõe o tetracorde dítônico." },
  { year: "~1026", event: "Guido d'Arezzo inventa a pauta musical. As notas ganham nome — Ut, Re, Mi, Fa, Sol, La. A música ganha linguagem." },
  { year: "~1300", event: "Philippe de Vitry escreve Ars Nova e formaliza a síncope. Pela primeira vez, o ritmo pode ser escrito com precisão." },
  { year: "~1490", event: "Franchino Gaffurio publica Theorica Musicae, ligando a música renascentista de volta à raiz pitagórica." },
  { year: "~1585", event: "Vincenzo Galilei (pai de Galileu) enfrenta o establishment: “as proporções de Pitágoras não funcionam”. Ele tem razão." },
  { year: "~1636", event: "Marin Mersenne descreve as leis da corda vibrante em Harmonie Universelle — a física finalmente alcança o ouvido." },
  { year: "~1691", event: "Werckmeister resolve o problema que atormentou a música por 2.000 anos: divide a oitava em 12 partes iguais. Nasce o 12-TET." },
  { year: "~1722", event: "Bach compõe O Cravo Bem-Temperado. Prova, na prática, que o novo sistema funciona. A música ocidental nunca mais é a mesma." },
  { year: "~1860", event: "Helmholtz publica O Sentido dos Tons e conecta, pela primeira vez, acústica, ouvido e teoria musical num só corpo de ideias." },
  { year: "Atual", event: "O microtonalismo e a música eletrônica voltam a fazer a pergunta de Pitágoras: e se a oitava não precisasse parar em 12?" },
];

export default function Timeline() {
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
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section overflow-hidden" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div className="eyebrow reveal">Linha do Tempo</div>

        {/* horizontal scroll on desktop, vertical stack on mobile */}
        <div className="timeline-line reveal" />

        <div className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 max-md:flex-col max-md:gap-0 max-md:overflow-visible max-md:pb-0">
          {ITEMS.map((item, i) => (
            <article
              key={i}
              className="timeline-card reveal snap-start shrink-0 max-md:shrink md:w-[280px]"
            >
              <span className="timeline-dot" />
              <span className="font-[var(--font-cinzel)] text-xs tracking-[0.15em] text-[var(--gold)]">
                {item.year}
              </span>
              <p className="mt-2 text-sm leading-[1.5] text-[var(--cream-dim)]">
                {item.event}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
