export default function QuoteSection() {
  return (
    <section className="relative z-[1] px-6 py-28 md:px-12">
      {/* decorative */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.015]">
        <span className="select-none text-[clamp(8rem,20vw,16rem)] font-bold leading-none text-[var(--gold)]">
          &ldquo;
        </span>
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <blockquote className="text-balance text-2xl font-light leading-[1.4] tracking-[-0.01em] text-[var(--fg)] md:text-3xl">
          &ldquo;A música é a matemática que pode ser ouvida e a matemática é a música que pode ser
          pensada.&rdquo;
        </blockquote>
        <cite className="mt-6 block font-mono text-[0.75rem] not-italic uppercase tracking-[0.15em] text-[var(--muted)]">
          James Joseph Sylvester — Matemático, 1814–1897
        </cite>
      </div>
    </section>
  );
}
