import ChromaticWheel from "./ChromaticWheel";

export default function Hook() {
  return (
    <section className="relative z-[1] border-b border-[var(--line)] px-8 py-[88px]">
      <div className="mx-auto grid max-w-[1180px] items-center gap-[70px] md:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="eyebrow">O problema que começa tudo</p>
          <h2 className="mb-6 font-[var(--font-cinzel)] text-[clamp(1.6rem,2.6vw,2.15rem)] font-medium leading-[1.2] tracking-[0.02em] text-[var(--gold-2)]">
            Por que Dó, Ré, Mi... e não uma nota qualquer?
          </h2>
          <p className="mb-5 max-w-[54ch] text-[var(--cream-dim)]">
            A maioria dos músicos aprende as doze notas como se fossem um fato natural do universo — como se a
            distância entre Dó e Ré# tivesse existido desde sempre, e não fosse a solução de um problema acústico
            com mais de dois mil anos.
          </p>
          <p className="mb-5 max-w-[54ch] text-[var(--cream-dim)]">
            Empilhe <strong className="font-semibold text-[var(--gold-2)]">doze quintas perfeitas</strong> a partir
            de qualquer nota e, matematicamente, você nunca volta exatamente ao ponto de partida. Sobra sempre uma
            fração — <strong className="font-semibold text-[var(--gold-2)]">23,46 cents</strong>, quase um quarto de
            semitom. Esse resto é o <strong className="font-semibold text-[var(--gold-2)]">comma pitagórico</strong>, e
            é o motivo de existirem escalas, temperamentos e a própria grade de 12 notas do seu instrumento.
          </p>
          <blockquote className="my-7 border-l-2 border-[var(--gold)] pl-5 font-[var(--font-cormorant)] text-[1.2rem] italic leading-[1.5] text-[var(--cream)]">
            &quot;É matematicamente impossível dividir a oitava em doze quintas perfeitas — assim como é impossível
            expressar √2 como fração de inteiros.&quot;
          </blockquote>
          <p className="max-w-[54ch] text-[var(--cream-dim)]">
            O livro conta essa história inteira: como diferentes culturas — grega, chinesa, árabe, indiana — resolveram
            o mesmo impasse de formas completamente diferentes, e como Bach usou o cravo para provar que dava pra tocar
            em todas as tonalidades ao mesmo tempo.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <ChromaticWheel />
        </div>
      </div>
    </section>
  );
}
