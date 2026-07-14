"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AboutBook() {
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
    <section id="livro" className="section" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div className="eyebrow reveal">O Livro</div>

        <div className="mt-8 grid items-start gap-10 md:grid-cols-5 md:gap-16">
          {/* book cover image */}
          <div className="book-card reveal md:col-span-2">
            <div className="offset-frame">
              <Image
                src="/images/book-covers.png"
                alt="A Música e a Matemática da Natureza — capa e contracapa"
                width={800}
                height={600}
                className="h-auto w-full rounded-[2px]"
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* description */}
          <div className="reveal md:col-span-3">
            <h2 className="font-[var(--font-cinzel)] text-[clamp(1.4rem,3.5vw,2rem)] font-bold leading-[1.2] text-[var(--gold-2)]">
              A Música e a Matemática da Natureza
            </h2>
            <p className="mt-2 font-[var(--font-jetbrains)] text-[0.7rem] uppercase tracking-[0.12em] text-[var(--muted)]">
              Felipe Salvego — Série Fundamentos da Música • Volume I
            </p>

            <div className="mt-6 space-y-4 text-[clamp(0.82rem,1.5vw,0.92rem)] leading-[1.7] text-[var(--cream-dim)]">
              <p>
                Por que uma oitava tem 12 notas? De onde vêm os intervalos
                musicais? O que Pitágoras tem a ver com a Série Harmônica?
                <strong className="text-[var(--cream)]">
                  {" "}Este livro responde a essas perguntas{" "}
                </strong>
                conectando a prática musical à matemática e à física que a
                sustentam.
              </p>
              <p>
                A jornada começa na descoberta de Pitágoras — a primeira
                pessoa a provar que os sons têm forma — e avança pela
                história da afinação: dos monacórdios medievais ao
                temperamento igual de 12 tons (12-TET), passando pelos
                problemas não resolvidos que atormentaram músicos durante
                séculos.
              </p>
              <p>
                Você vai entender por que{" "}
                <strong className="text-[var(--cream)]">
                  o comma pitagórico atormentou a música ocidental
                </strong>
                , como o sistema de 12 tons se consolidou, e onde o
                microtonalismo e a música contemporânea expandem os limites
                do que ouvimos.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="tag-pill">Física Acústica</span>
              <span className="tag-pill">Intervalos Musicais</span>
              <span className="tag-pill">12-TET</span>
              <span className="tag-pill">Comma Pitagórico</span>
              <span className="tag-pill">Série Harmônica</span>
              <span className="tag-pill">Microtonalidade</span>
              <span className="tag-pill">História da Música</span>
              <span className="tag-pill">Sistema de Afinação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
