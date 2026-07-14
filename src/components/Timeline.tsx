const TIMELINE_ITEMS = [
  { year: "~2000 a.C.", name: "Sumérios" },
  { year: "~500 a.C.", name: "Pitágoras" },
  { year: "~1025 d.C.", name: "Guido d'Arezzo" },
  { year: "1722", name: "Bach" },
  { year: "1939", name: "A4 = 440 Hz" },
  { year: "Séc. XIX", name: "12-TET" },
];

export default function Timeline() {
  return (
    <section className="relative z-[1] border-b border-[var(--line)] overflow-hidden px-8 py-[76px]">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-11">
          <p className="eyebrow">4000 anos em uma linha</p>
          <h2 className="mt-3.5 font-[var(--font-cinzel)] text-[clamp(1.5rem,2.4vw,1.9rem)] font-medium leading-[1.2] tracking-[0.02em] text-[var(--gold-2)]">
            Dos sumérios ao temperamento igual
          </h2>
        </div>

        <div className="relative flex justify-between pt-[26px] max-md:flex-wrap max-md:gap-x-0 max-md:gap-y-8 max-md:justify-start max-md:[&>div]:!flex-none max-md:[&>div]:w-1/3 max-sm:[&>div]:w-1/2">
          {/* Horizontal line — hidden on mobile */}
          <div className="absolute top-[5px] left-0 right-0 h-px bg-[var(--line-bright)] max-md:hidden" />

          {TIMELINE_ITEMS.map((item) => (
            <div key={item.year} className="relative text-center px-1.5">
              {/* Dot */}
              <div className="absolute left-1/2 -top-[26px] -translate-x-1/2 h-[9px] w-[9px] rounded-full border-[1.5px] border-[var(--gold-2)] bg-[var(--bg)] max-md:hidden" />
              <p className="font-[var(--font-jetbrains)] text-[0.72rem] tracking-[0.03em] text-[var(--gold)]">
                {item.year}
              </p>
              <p className="mt-2 font-[var(--font-cinzel)] text-[0.86rem] tracking-[0.02em] text-[var(--cream)]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
