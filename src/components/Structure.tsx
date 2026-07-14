import Image from "next/image";

const INDEX_ITEMS = [
  { num: "I", title: "Antes de Pitágoras", desc: "O que as culturas antigas sabiam sobre som, corda e proporção." },
  { num: "II", title: "Vibração, Frequência e a Série Harmônica", desc: "A física do som — do que é feita uma nota musical." },
  { num: "III", title: "Pitágoras, o Monocórdio e o Comma", desc: "A primeira teoria sistemática — e o problema que ela revelou." },
  { num: "IV", title: "Semitons, Escalas e a Grade das 12 Notas", desc: "Por que Mi–Fá e Si–Dó não têm tecla preta entre eles." },
  { num: "V", title: "A Quinta do Lobo e os Sistemas de Afinação", desc: "O comma distribuído — do pitagórico ao temperamento igual." },
  { num: "VI", title: "O Cravo Bem Temperado e os Trastes", desc: "Como Bach demonstrou o 12-TET — e a matemática do braço do violão." },
  { num: "VII", title: "O Nome das Notas e Outros Sistemas do Mundo", desc: "Guido d'Arezzo, maqam árabe, raga indiano, makam turco." },
  { num: "VIII", title: "O Blues, as Blue Notes e a Série Harmônica", desc: "Como a física do som africano encontrou o piano temperado." },
  { num: "IX", title: "Ritmo, Melodia e a Mesma Coisa", desc: "Polirritmias como intervalos harmônicos no domínio do tempo." },
];

const APPENDIX = { num: "A–D", title: "Apêndices", desc: "Linha do tempo completa, glossário, referências e perguntas para reflexão." };

const STATS = [
  { n: "51", l: "Páginas" },
  { n: "3–4h", l: "Leitura" },
  { n: "9", l: "Capítulos" },
  { n: "4", l: "Apêndices" },
];

export default function Structure() {
  return (
    <section className="relative z-[1] border-b border-[var(--line)] px-8 py-[90px]">
      <div className="mx-auto grid max-w-[1180px] items-start gap-[60px] md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">O que vem dentro</p>
          <h2 className="mt-4 mb-2.5 font-[var(--font-cinzel)] text-[clamp(1.6rem,2.6vw,2rem)] font-medium leading-[1.2] tracking-[0.02em] text-[var(--gold-2)]">
            8 partes + 4 apêndices
          </h2>
          <p className="text-[var(--cream-dim)]">
            Todos os níveis, sem pré-requisitos. Do primeiro conceito de vibração até as perguntas de reflexão do
            apêndice final.
          </p>

          {/* Stats grid */}
          <div className="mt-7 grid grid-cols-2 border border-[var(--line)]">
            {STATS.map((s) => (
              <div key={s.l} className="p-6">
                <p className="font-[var(--font-cinzel)] text-[1.7rem] text-[var(--gold-2)]">{s.n}</p>
                <p className="mt-1.5 font-[var(--font-jetbrains)] text-[0.68rem] uppercase tracking-[0.08em] text-[var(--muted)]">
                  {s.l}
                </p>
              </div>
            ))}
          </div>

          {/* Book cover image */}
          <div className="mt-8 overflow-hidden border border-[var(--line)]">
            <Image
              src="/images/book-covers.png"
              alt="Capas do livro A Música e a Matemática da Natureza"
              width={800}
              height={500}
              className="w-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Index list */}
        <div className="border-t border-[var(--line)]">
          {INDEX_ITEMS.map((item) => (
            <div
              key={item.num}
              className="flex items-baseline gap-4 border-b border-[var(--line)] py-[18px] px-1"
            >
              <span className="w-8 flex-shrink-0 font-[var(--font-jetbrains)] text-[0.85rem] text-[var(--gold-dim)]">
                {item.num}
              </span>
              <div>
                <span className="block font-[var(--serif-body)] text-[0.98rem] font-semibold text-[var(--cream)]">
                  {item.title}
                </span>
                <span className="mt-0.5 block text-[0.86rem] text-[var(--cream-dim)]">{item.desc}</span>
              </div>
            </div>
          ))}

          {/* Appendix */}
          <div className="flex items-baseline gap-4 border-b border-[var(--line)] py-[18px] px-1">
            <span className="w-8 flex-shrink-0 font-[var(--font-jetbrains)] text-[0.85rem] text-[var(--wine)]">
              {APPENDIX.num}
            </span>
            <div>
              <span className="block font-[var(--serif-body)] text-[0.98rem] font-semibold text-[var(--cream)]">
                {APPENDIX.title}
              </span>
              <span className="mt-0.5 block text-[0.86rem] text-[var(--cream-dim)]">{APPENDIX.desc}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
