"use client";

import { useEffect, useRef } from "react";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!navRef.current) return;
      navRef.current.classList.toggle("nav-scroll", window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#"
          className="font-[var(--font-cinzel)] text-xs font-semibold tracking-[0.2em] text-[var(--gold-2)] uppercase"
        >
          Felipe Salvego
        </a>
        <div className="flex items-center gap-6">
          {[
            { href: "#livro", label: "O Livro" },
            { href: "#autor", label: "Autor" },
            { href: "#faq", label: "FAQ" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden font-[var(--font-jetbrains)] text-[0.65rem] font-medium uppercase tracking-[0.12em] text-[var(--cream-dim)] transition-colors hover:text-[var(--gold-2)] md:block"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#comprar"
            className="rounded-[2px] border border-[var(--gold)] px-4 py-1.5 font-[var(--font-jetbrains)] text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[var(--gold)] transition-all duration-300 hover:bg-[var(--gold)] hover:text-[var(--bg)]"
          >
            Comprar
          </a>
        </div>
      </div>
    </nav>
  );
}
