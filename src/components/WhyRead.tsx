"use client";

export default function WhyRead() {
  const items = [
    {
      icon: "🎸",
      title: "Instrumentistas",
      desc: "Entenda de onde vêm as escalas que você toca e por que o traste do seu violão está onde está.",
    },
    {
      icon: "🎧",
      title: "Produtores & Beatmakers",
      desc: "A física do timbre, a série harmônica e por que alguns acordes soam &lsquo;sujos&rsquo; em certos contextos.",
    },
    {
      icon: "📐",
      title: "Matemáticos & Cientistas",
      desc: "A música como laboratório vivo de proporções, logaritmos e séries — sem precisar de partitura.",
    },
    {
      icon: "🎓",
      title: "Educadores",
      desc: "Um roteiro interdisciplinar que conecta física, história e cultura através da música.",
    },
    {
      icon: "🌍",
      title: "Curiosos & Polimatas",
      desc: "Por que o blues &lsquo;entorta&rsquo; a nota? Como um músico indiano pensa em intervalos? O que Pitágoras tem a ver com tudo isso?",
    },
  ];

  return (
    <section id="para-quem" className="relative z-[1] px-6 py-28 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <span className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--gold)]">
            Público
          </span>
          <h2 className="mt-2 text-3xl font-light leading-[1.15] tracking-[-0.01em] text-[var(--fg)] md:text-4xl">
            Pra quem é este livro
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="group rounded-sm border border-[var(--border)] bg-[var(--bg-2)] p-6 transition-all duration-500 hover:border-[var(--gold)]/30 hover:bg-[var(--gold)]/[0.03] hover:shadow-[0_0_40px_-8px_rgba(184,135,63,0.08)]"
            >
              <span className="block text-2xl">{item.icon}</span>
              <h3 className="mt-3 text-sm font-semibold leading-snug text-[var(--fg)]">{item.title}</h3>
              <p className="mt-2 text-[0.82rem] leading-relaxed text-[var(--muted)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
