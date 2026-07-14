"use client";

import { useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "O livro", href: "#livro" },
  { label: "Conteúdo", href: "#conteudo" },
  { label: "Autor", href: "#autor" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!navRef.current) return;
      navRef.current.classList.toggle("nav-scroll", window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-[var(--font-cinzel)] text-[0.85rem] tracking-[0.1em] text-[var(--gold-2)] no-underline"
        >
          FELIPE SALVEGO
        </a>

        <div className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-[var(--font-jetbrains)] text-[0.72rem] tracking-[0.14em] uppercase text-[var(--cream-dim)] no-underline transition-colors duration-200 hover:text-[var(--gold-2)]"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#cta"
          className="rounded-[2px] border border-[var(--gold-dim)] px-4 py-[7px] font-[var(--font-jetbrains)] text-[0.7rem] uppercase tracking-[0.12em] text-[var(--gold-2)] no-underline transition-all duration-300 hover:bg-[var(--gold-2)] hover:text-[var(--bg)]"
        >
          Download
        </a>
      </div>
    </nav>
  );
}
