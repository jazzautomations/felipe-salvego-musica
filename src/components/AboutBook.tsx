import Image from "next/image";

export default function AboutBook() {
  return (
    <section
      id="livro"
      className="relative z-[1] border-t border-[var(--bg-3)] bg-[var(--bg)] py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Image */}
          <div className="reveal">
            <div className="group relative">
              <div className="absolute -inset-3 rounded-sm bg-gradient-to-br from-[var(--gold-dim)]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <Image
                src="/images/book-covers.png"
                alt="A Música e a Matemática da Natureza — Felipe Salvego"
                width={2400}
                height={1600}
                className="relative w-full rounded-sm object-contain shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div className="reveal">
            <span className="font-[var(--font-jetbrains)] text-[0.65rem] uppercase tracking-[0.16em] text-[var(--gold-2)]">
              Sobre o Livro
            </span>
            <h2 className="mt-4 font-[var(--font-cinzel)] text-[clamp(1.6rem,3.5vw,2.6rem)] font-normal leading-[1.1] tracking-[-0.01em] text-[var(--cream)]">
              Música, Matemática <br />e Som
            </h2>

            <div className="mt-6 space-y-4 font-[var(--font-cormorant)] text-[1.1rem] leading-[1.7] text-[var(--cream-dim)]">
              <p>
                Por que uma oitava tem 12 notas? O que faz um acorde soar
                &ldquo;certo&rdquo; ou &ldquo;errado&rdquo;? Como Pitágoras
                descobriu a matemática da música milênios antes do primeiro
        tratado de teoria musical?
              </p>
              <p>
                Este livro é o Volume I da série <em>Fundamentos da Música</em>
                , um mergulho na interseção entre a física do som, a
                matemática das proporções e a história dos sistemas musicais
                ao redor do mundo — do monocórdio de Pitágoras ao blues de
                Robert Johnson, dos maqams árabes às ragas indianas.
              </p>
              <p>
                Sem pré-requisitos além da curiosidade. Em 3 a 4 horas de
                leitura, você entende por que a música ocidental soa como soa
                — e por que o comma pitagórico, aquela fração de 23,46 cents,
                é o segredo mais bem guardado da harmonia.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              {[
                { label: "Duração", value: "3–4h de leitura" },
                { label: "Partes", value: "8 + 4 Apêndices" },
                { label: "Nível", value: "Todos · sem pré-requisitos" },
              ].map((i) => (
                <div key={i.label}>
                  <p className="font-[var(--font-jetbrains)] text-[0.6rem] uppercase tracking-[0.16em] text-[var(--muted)]">
                    {i.label}
                  </p>
                  <p className="mt-1 font-[var(--font-cinzel)] text-[0.9rem] text-[var(--cream)]">
                    {i.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
