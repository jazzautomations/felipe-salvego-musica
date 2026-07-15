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
              é músico multi-instrumentista, guitarrista e produtor fonográfico, natural de
              Piracicaba (SP). Formado em Produção Fonográfica pela Fatec de Tatuí e em Guitarra
              Jazz e MPB pelo Conservatório de Tatuí, cresceu numa família de música — filho de
              um violonista e de uma produtora musical — e transita com a mesma naturalidade entre
              Bob Dylan, Chet Baker, Tom Jobim e Pink Floyd.
            </p>
            <p>
              É parceiro musical constante da irmã, a cantora e compositora Bebé Salvego: assina
              com ela a produção completa do álbum <em>Dissolução</em> (2026) e já subiu ao palco
              em shows como o do Estúdio Pulso e do Centro Cultural São Paulo. Tocou também as
              rodas de jazz do tradicional Bourbon Street Music Club, em São Paulo. Como educador,
              criou o curso &ldquo;Gypsy Jazz e Ritmos Brasileiros&rdquo;, contemplado pelo edital
              ProAC do Governo do Estado de São Paulo, e ministra ao lado de Bebé a oficina
              &ldquo;Ouvir para Criar&rdquo; no CCSP — onde aplica na prática a escuta analítica
              que fundamenta este livro.
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
