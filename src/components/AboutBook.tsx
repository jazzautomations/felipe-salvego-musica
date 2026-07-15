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
                Você já tocou uma nota e sentiu que ela &ldquo;bateria&rdquo;
                com outra? Isso não é achismo —{" "}
                <strong className="text-[var(--cream)]">é matemática</strong>.
                Quando Pitágoras tocou uma corda pela metade, ele não
                descobriu uma nota. Ele descobriu que o universo inteiro
                fala em proporções.
              </p>
              <p>
                Mas aqui vai o que ninguém te conta: as proporções não
                fecham.{" "}
                <strong className="text-[var(--cream)]">
                  Existe um erro matemático escondido no fundo de todo
                  instrumento
                </strong>
                , em cada acorde que você já tocou — um erro de 23 cents,
                menor que um semitom, que mudou a história da música.
              </p>
              <p>
                <strong className="text-[var(--cream)]">
                  Este livro é sobre esse erro
                </strong>{" "}
                — e sobre como a humanidade, dos monacórdios medievais ao
                temperamento igual de 12 tons (12-TET), aprendeu a conviver
                com ele. No caminho, você vai entender onde o microtonalismo
                e a música contemporânea expandem os limites do que ouvimos.
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
