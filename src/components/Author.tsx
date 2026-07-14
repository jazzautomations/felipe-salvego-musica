"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Author() {
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
    <section ref={ref} className="section">
      <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-8 md:flex-row md:gap-16">
        <div className="reveal w-full max-w-sm md:w-1/3">
          <Image
            src="/images/felipe-guitar.jpg"
            alt="Felipe Salvego"
            width={520}
            height={694}
            className="w-full rounded-lg object-cover opacity-90 shadow-2xl"
          />
        </div>

        <div className="w-full md:w-2/3">
          <div className="eyebrow reveal">Sobre o Autor</div>

          <div className="reveal mt-6 space-y-4 text-sm leading-[1.7] text-[var(--cream-dim)]">
            <p>
              <strong className="font-[var(--font-cinzel)] text-[var(--cream)]">
                Felipe Salvego
              </strong>{" "}
              é músico multi-instrumentista, compositor e professor. Formado em Música pela
              Universidade de São Paulo, dedica-se há mais de 15 anos a investigar e traduzir
              as conexões entre som, ciência e cultura.
            </p>
            <p>
              Guitarrista de jazz e MPB, já dividiu o palco com músicos de destaque no circuito
              independente brasileiro e acumula experiência em estúdio como produtor e arranjador.
              Sua prática musical está profundamente enraizada na escuta analítica do fenômeno sonoro
              — o que o levou naturalmente ao estudo da acústica e da história dos sistemas de afinação.
            </p>
            <p>
              <strong className="text-[var(--gold-2)]">
                &ldquo;A Música e a Matemática da Natureza&rdquo;
              </strong>{" "}
              é resultado de anos de pesquisa e de sala de aula — um livro que nasceu da constatação
              de que faltava em português uma obra que conectasse a intuição musical do músico
              prático com o rigor conceitual que a música carrega desde Pitágoras.
            </p>
            <p className="italic text-[var(--muted)]">
              &ldquo;Não escrevi para matemáticos. Escrevi para músicos que um dia sentaram
              num banco de escola e ouviram &lsquo;a música é matemática&rsquo; sem nunca
              entenderem direito o que aquilo significava.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
