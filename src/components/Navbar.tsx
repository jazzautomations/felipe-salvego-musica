"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "O Livro", href: "#livro" },
  { label: "Autor", href: "#autor" },
  { label: "Perguntas", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-[var(--border)] bg-[rgba(10,8,6,0.85)] backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#topo" className="font-[var(--font-cinzel)] text-xs font-semibold tracking-[0.15em] uppercase text-[var(--cream)]">
          Felipe Salvego
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.72rem] tracking-[0.1em] uppercase text-[var(--cream-dim)] transition-colors hover:text-[var(--gold)]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#baixar"
            className="btn-primary !py-2 !px-5 !text-[0.65rem]"
          >
            Baixar Grátis
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-[var(--cream-dim)] md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[var(--border)] bg-[rgba(10,8,6,0.95)] backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded px-3 py-2.5 text-[0.78rem] text-[var(--cream-dim)] transition-colors hover:bg-[var(--bg-2)] hover:text-[var(--cream)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#baixar"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 justify-center !text-[0.68rem]"
            >
              Baixar Grátis
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
