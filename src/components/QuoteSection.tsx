export default function QuoteSection() {
  return (
    <section className="relative z-[1] border-b border-[var(--line)] px-8 py-[100px] text-center">
      <div className="mx-auto max-w-[1180px]">
        <blockquote className="mx-auto max-w-[760px] font-[var(--font-cormorant)] text-[clamp(1.4rem,3vw,2rem)] italic leading-[1.5] text-[var(--cream)]">
          &ldquo;A música é a matemática que pode ser ouvida, e a matemática é música que pode ser
          pensada.&rdquo;
        </blockquote>
        <cite className="mt-6 block font-[var(--font-jetbrains)] text-[0.78rem] not-italic uppercase tracking-[0.08em] text-[var(--gold)]">
          James Joseph Sylvester
        </cite>
      </div>
    </section>
  );
}
