"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const LINKS = [
  { label: "O Livro", href: "#livro" },
  { label: "Autor", href: "#autor" },
  { label: "Conteúdo", href: "#conteudo" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav-base">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#"
          className="font-[var(--font-cinzel)] text-sm font-bold tracking-widest text-[var(--cream)] no-underline hover:text-[var(--gold-1)]"
        >
          FELIPE SALVEGO
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://jazzautomations.zo.space/download"
            target="_blank"
            className="btn-primary text-xs"
          >
            Baixar Grátis
          </a>
        </div>

        <button
          className="relative z-50 text-[var(--cream)] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[var(--bg)] md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-lg tracking-widest text-[var(--cream)] no-underline"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://jazzautomations.zo.space/download"
            target="_blank"
            className="btn-primary"
            onClick={() => setOpen(false)}
          >
            Baixar Grátis
          </a>
        </div>
      )}
    </nav>
  );
}
