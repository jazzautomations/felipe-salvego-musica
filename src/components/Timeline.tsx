"use client";

import { useEffect, useRef } from "react";

const ITEMS = [
  { year: "~500 a.C.", event: "Pitágoras descobre que cordas vibrantes produzem razões simples — nasce a relação entre números e sons." },
  { year: "~350 a.C.", event: "Aristóxeno de Tarento sistematiza a teoria musical grega e critica a abordagem puramente matemática de Pitágoras." },
  { year: "Séc. I d.C.", event: "Ptolomeu escreve Harmônica, refinando os intervalos consonantes e propondo o tetracorde dítônico." },
  { year: "~1026", event: "Guido d'Arezzo inventa a pauta musical e nomeia as notas (Ut, Re, Mi, Fa, Sol, La), organizando o canto gregoriano." },
  { year: "~1300", event: "Philippe de Vitry escreve Ars Nova, formalizando a notação rítmica e a síncope na música polifônica." },
  { year: "~1490", event: "Franchino Gaffurio publica Theorica Musicae, conectando a música renascentista à tradição pitagórica." },
  { year: "~1585", event: "Vincenzo Galilei (pai de Galileu) questiona o sistema pitagórico, abrindo caminho para novos temperamentos." },
  { year: "~1636", event: "Marin Mersenne publica Harmonie Universelle, descrevendo leis da corda vibrante e frequências." },
  { year: "~1691", event: "Andreas Werckmeister sistematiza o temperamento igual de 12 sons (12-TET), viabilizando a música tonal moderna." },
  { year: "~1722", event: "Bach compõe O Cravo Bem-Temperado, demonstrando na prática a viabilidade do sistema 12-TET." },
  { year: "~1860", event: "Hermann von Helmholtz publica O Sentido dos Tons, unificando acústica, fisiologia auditiva e teoria musical." },
  { year: "Atual", event: "O microtonalismo e a música eletrônica expandem os limites do 12-TET, explorando divisões mais finas da oitava." },
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
