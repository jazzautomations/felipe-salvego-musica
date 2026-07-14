const TOPICS = [
  { num: "01", title: "A série harmônica", desc: "Por que toda nota é, na verdade, um acorde de frequências tocando ao mesmo tempo." },
  { num: "02", title: "A quinta do lobo", desc: "O intervalo que \"uiva\" — e por que ele é matematicamente inevitável em qualquer afinação de 12 notas." },
  { num: "03", title: "Os temperamentos", desc: "2500 anos de soluções: pitagórico, meantone, well-temperament e o temperamento igual." },
  { num: "04", title: "O Cravo Bem Temperado", desc: "O que Bach demonstrou em 1722 — e por que isso ainda define como pianos são afinados hoje." },
  { num: "05", title: "Sistemas do mundo", desc: "Como o maqam árabe, o makam turco e o raga indiano resolveram o mesmo problema de outro jeito." },
  { num: "06", title: "A origem das blue notes", desc: "Por que elas não são notas \"desafinadas\" — são a física de outro sistema, o dos harmônicos naturais." },
  { num: "07", title: "Ritmo e harmonia", desc: "A prova matemática de que uma polirritmia 3:2, acelerada, vira uma quinta justa." },
  { num: "08", title: "Os trastes do violão", desc: "Por que a posição de cada traste é uma consequência direta da raiz 12ª de 2." },
  { num: "09", title: "O nome das notas", desc: "Como um monge beneditino, olhando pra um hino do século XI, criou Dó–Ré–Mi–Fá–Sol–Lá–Si." },
];

export default function Topics() {
  return (
    <section className="relative z-[1] border-b border-[var(--line)] px-8 py-[90px]">
      <div className="mx-auto max-w-[1180px]">
        <div className="max-w-[640px] mb-12">
          <p className="eyebrow">O que você vai entender</p>
          <h2 className="mt-4 font-[var(--font-cinzel)] text-[clamp(1.6rem,2.6vw,2.1rem)] font-medium leading-[1.2] tracking-[0.02em] text-[var(--gold-2)]">
            Oito ideias que mudam como você ouve música
          </h2>
          <p className="mt-3.5 text-[var(--cream-dim)]">
            Cada capítulo parte de um fenômeno que todo músico já percebeu — mas nunca soube explicar.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
          {TOPICS.map((t) => (
            <div key={t.num} className="bg-[var(--bg)] p-[30px_28px]">
              <p className="font-[var(--font-jetbrains)] text-[0.78rem] tracking-[0.1em] text-[var(--gold-dim)]">
                {t.num}
              </p>
              <h3 className="my-3 font-[var(--serif-body)] text-[1.05rem] font-semibold tracking-normal text-[var(--cream)]">
                {t.title}
              </h3>
              <p className="text-[0.92rem] text-[var(--cream-dim)]">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
