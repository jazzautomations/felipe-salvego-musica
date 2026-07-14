import { Download } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative z-[1] px-6 py-28 md:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <span className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--gold)]">
          Série Fundamentos da Música • Volume I
        </span>
        <h2 className="mt-4 text-balance text-3xl font-light leading-[1.2] tracking-[-0.01em] text-[var(--fg)] md:text-5xl">
          A música é matemática que se ouve.
          <br />
          <span className="text-[var(--gold)]">A matemática é música que se pensa.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[0.88rem] leading-relaxed text-[var(--muted)]">
          PDF interativo com links, diagramas, notações e faixas de áudio explicativas.
          <br />
          Leia no computador, tablet ou celular.
        </p>

        <a
          href="#"
          className="mt-10 inline-flex items-center gap-3 rounded-sm border border-[var(--gold)] bg-[var(--gold)] px-8 py-4 text-sm font-medium uppercase tracking-[0.12em] text-[var(--bg)] transition-all duration-300 hover:bg-transparent hover:text-[var(--gold)]"
        >
          <Download className="size-4" />
          Comprar — R$ 47
        </a>
        <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[var(--muted-2)]">
          PDF • 54 páginas • entrega imediata
        </p>
      </div>
    </section>
  );
}
