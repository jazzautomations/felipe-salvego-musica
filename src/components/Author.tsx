"use client";

import Image from "next/image";

export default function Author() {
  return (
    <section id="autor" className="relative z-[1] overflow-hidden px-6 py-28 md:px-12">
      {/* Parallax bg layer */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--gold)]/[0.02] via-transparent to-transparent" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* Image */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent z-10" />
          <Image
            src="/images/felipe-guitar.jpg"
            alt="Felipe Salvego"
            fill
            className="object-cover object-center grayscale transition-all duration-700 group-hover:grayscale-0"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {/* Decorative border */}
          <div className="absolute -bottom-3 -right-3 left-3 top-3 -z-10 rounded-sm border border-[var(--gold)] opacity-30" />
        </div>

        {/* Bio */}
        <div className="space-y-5">
          <span className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--gold)]">
            Sobre o autor
          </span>
          <h2 className="text-3xl font-light leading-[1.15] tracking-[-0.01em] text-[var(--fg)] md:text-4xl">
            Felipe <span className="font-semibold text-[var(--gold)]">Salvego</span>
          </h2>

          <div className="space-y-4 text-[0.88rem] leading-relaxed text-[var(--muted)]">
            <p>
              Músico multi-instrumentista, guitarrista e produtor fonográfico. Nascido em 1998 em
              São Paulo — mas com alma musical nascida muito antes, aos 12 anos, quando subiu num
              palco pela primeira vez e nunca mais saiu.
            </p>
            <p>
              Formado em Guitarra — Jazz & MPB e Produção Fonográfica, construiu uma trajetória que
              transita com naturalidade entre palcos, estúdios e salas de aula. Já dividiu o palco
              com a irmã, a cantora Bebé Salvego, em shows pelo Brasil, e trabalhou como músico
              acompanhador, arranjador, produtor e professor.
            </p>
            <p>
              Sua oficina <span className="italic">&ldquo;Ouvir para Criar&rdquo;</span> — ministrada no
              Centro Cultural São Paulo — reflete sua abordagem pedagógica: escuta ativa, percepção
              crítica e a música como fenômeno vivo, não só como teoria na página.
            </p>
            <p>
              <span className="text-[var(--fg)]">A Música e a Matemática da Natureza</span> é seu
              primeiro livro — o Volume I da Série Fundamentos da Música —, nascido da constatação
              de que faltava uma ponte entre a física do som, a história dos sistemas musicais e a
              prática cotidiana de quem faz música.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {["Guitarrista", "Produtor", "Professor", "Multi-instrumentista"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--gold)]/20 bg-[var(--gold)]/[0.06] px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.1em] text-[var(--gold)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
