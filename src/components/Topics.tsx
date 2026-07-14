const TOPICS = [
  {
    num: "I",
    title: "O Som e a Série Harmônica",
    desc: "Ondas, frequências e a descoberta de que um único som carrega um universo de harmônicos dentro de si — a base física de toda a música.",
  },
  {
    num: "II",
    title: "Consonância e Dissonância",
    desc: "O que faz dois sons soarem bem juntos? A matemática por trás do que nossos ouvidos chamam de 'agradável' ou 'tenso'.",
  },
  {
    num: "III",
    title: "Pitágoras, o Monocórdio e o Comma",
    desc: "A primeira teoria sistemática da música como matemática — e o problema inevitável que ela descobriu: o comma pitagórico de 23,46 cents.",
  },
  {
    num: "IV",
    title: "Semitons, Escalas e a Grade das 12 Notas",
    desc: "Como organizamos as alturas em escala: dos tetracordes gregos à grade cromática de 12 sons que conhecemos hoje.",
  },
  {
    num: "V",
    title: "A Quinta do Lobo e os Sistemas de Afinação",
    desc: "Por que instrumentos afinados 'perfeitos' soam desafinados em certos tons — e a engenharia dos temperamentos históricos para resolver o problema.",
  },
  {
    num: "VI",
    title: "O Cravo Bem Temperado e os Trastes",
    desc: "Bach, o temperamento igual e a revolução que permitiu tocar em qualquer tonalidade — com um custo matemático sutil.",
  },
  {
    num: "VII",
    title: "O Nome das Notas e Sistemas do Mundo",
    desc: "Por que Dó, Ré, Mi? Uma viagem pelos sistemas de nomenclatura e afinação: maqam árabe, makam turco, raga indiano e escalas chinesas.",
  },
  {
    num: "VIII",
    title: "O Blues e as Blue Notes",
    desc: "A terça menor cantada sobre um acorde maior — o desvio microtonal que o ouvido ocidental aprendeu a amar e que nenhuma grade de 12 notas consegue capturar.",
  },
];

export default function Topics() {
  return (
    <section className="relative z-[1] bg-[var(--bg-2)] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-16 text-center">
          <span className="font-[var(--font-jetbrains)] text-[0.65rem] uppercase tracking-[0.16em] text-[var(--gold-2)]">
            Conteúdo Programático
          </span>
          <h2 className="mt-3 font-[var(--font-cinzel)] text-[clamp(1.5rem,3vw,2.4rem)] font-normal leading-[1.1] text-[var(--cream)]">
            O que você vai aprender
          </h2>
        </div>

        <div className="grid gap-[1px] overflow-hidden rounded-sm border border-[var(--bg-3)] bg-[var(--bg-3)] sm:grid-cols-2">
          {TOPICS.map((t) => (
            <div
              key={t.num}
              className="reveal bg-[var(--bg)] p-7 transition-all duration-500 hover:bg-[var(--bg-2)]"
            >
              <span className="font-[var(--font-cinzel)] text-[2rem] leading-none text-[var(--gold-dim)]">
                {t.num}
              </span>
              <h3 className="mt-2 font-[var(--font-cinzel)] text-[1rem] font-medium leading-snug text-[var(--cream)]">
                {t.title}
              </h3>
              <p className="mt-2 font-[var(--font-cormorant)] text-[0.95rem] leading-[1.6] text-[var(--cream-dim)]">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
