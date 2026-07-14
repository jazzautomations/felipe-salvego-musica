"use client";

const TIMELINE = [
  { year: "~2000 a.C.", title: "Sumérios", desc: "Primeiros registros de notação musical em tabletes de argila. A música como fenômeno matemático começa a ser documentada." },
  { year: "~550 a.C.", title: "Pitágoras", desc: "Descobre as relações numéricas entre intervalos musicais usando o monocórdio. Nasce a teoria musical como matemática." },
  { year: "~350 a.C.", title: "Aristóxeno", desc: "Discípulo de Aristóteles propõe uma abordagem perceptual da música, rivalizando com a visão puramente matemática de Pitágoras." },
  { year: "~850 d.C.", title: "Música Enchiriadis", desc: "Primeiros tratados de música polifônica ocidental. O organum paralelo documenta a harmonia como fenômeno físico." },
  { year: "~1026", title: "Guido d'Arezzo", desc: "Inventa a pauta musical e o sistema hexacordal. Nomes das notas (Ut, Re, Mi, Fa, Sol, La) baseados no hino a São João Batista." },
  { year: "~1300", title: "Ars Nova", desc: "Surgimento da notação rítmica precisa. Philippe de Vitry formaliza o compasso e a proporção na música." },
  { year: "1596", title: "Zarlino & a Série Harmônica", desc: "Gioseffo Zarlino publica as relações da série harmônica como fundamento da consonância musical." },
  { year: "1691", title: "Werckmeister", desc: "Andreas Werckmeister publica seus sistemas de temperamento, uma solução prática para o comma pitagórico." },
  { year: "1722", title: "Bach — O Cravo Bem Temperado", desc: "Bach demonstra na prática que o temperamento igual funciona em todos os tons. Marco zero da música ocidental moderna." },
  { year: "1885", title: "Padrão A4=440Hz", desc: "Conferência Internacional define o Lá central como 440 Hz. A afinação se uniformiza globalmente." },
  { year: "Séc. XX", title: "Blues & Microtonalidade", desc: "O blues revela as blue notes — intervalos que não cabem na grade de 12 semitons. Música árabe, turca e indiana usam sistemas microtonais vivos." },
];

export default function Timeline() {
  return (
    <section id="timeline" className="relative z-[1] px-6 py-28 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="relative flex flex-col gap-0">
          {TIMELINE.map((item, i) => (
            <div
              key={i}
              className="group relative flex items-start gap-6 md:gap-10"
            >
              {/* Line + dot */}
              <div className="flex shrink-0 flex-col items-center">
                <div className="z-10 size-3 rounded-full border-2 border-[var(--gold)] bg-[var(--bg)] transition-all duration-500 group-hover:scale-150 group-hover:bg-[var(--gold)]" />
                {i < TIMELINE.length - 1 && (
                  <div className="mt-0 h-full w-px bg-gradient-to-b from-[var(--gold)] to-[var(--gold)] opacity-20" />
                )}
              </div>
              {/* Content */}
              <div className="pb-14 pt-0 md:pb-20">
                <span className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.15em] text-[var(--gold)]">
                  {item.year}
                </span>
                <h3 className="mt-1 text-base font-semibold leading-snug tracking-[0.01em] text-[var(--fg)] md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-1.5 max-w-lg text-[0.82rem] leading-relaxed text-[var(--muted)]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
