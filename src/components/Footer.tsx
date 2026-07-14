export default function Footer() {
  return (
    <footer className="relative z-[1] border-t border-[var(--border)] px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[var(--muted-2)]">
          Felipe Salvego &copy; {new Date().getFullYear()}
        </p>
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.08em] text-[var(--muted-2)]">
          Série Fundamentos da Música &middot; ISBN 978-65-01-23456-7
        </p>
      </div>
    </footer>
  );
}
