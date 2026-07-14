"use client";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(10,8,6,0.86)] backdrop-blur-[10px]">
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-8 py-4">
        <a href="#" className="font-[var(--font-cinzel)] text-[0.95rem] tracking-[0.14em] uppercase text-[var(--cream)] no-underline">
          Fundamentos <span className="text-[var(--gold)]">da Música</span>
          <span className="hidden sm:inline"> · Vol. I</span>
        </a>
        <a
          href="#download"
          className="whitespace-nowrap rounded-[2px] bg-[var(--gold-2)] px-5 py-2.5 font-[var(--font-jetbrains)] text-[0.78rem] uppercase tracking-[0.05em] text-[var(--bg)] no-underline transition-all duration-200 hover:-translate-y-[1px] hover:bg-[var(--cream)]"
        >
          Baixar grátis
        </a>
      </nav>
    </header>
  );
}
