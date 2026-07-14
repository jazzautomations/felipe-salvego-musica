export default function Footer() {
  return (
    <footer className="relative z-[1] border-t border-[var(--line)] px-8 py-[34px]">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-3">
        <p className="font-[var(--font-jetbrains)] text-[0.72rem] tracking-[0.03em] text-[var(--muted)]">
          © Felipe Salvego · Série Fundamentos da Música · Volume I
        </p>
        <p className="font-[var(--font-jetbrains)] text-[0.72rem] tracking-[0.03em] text-[var(--muted)]">
          ISBN 978-65-01-23456-7
        </p>
      </div>
    </footer>
  );
}
