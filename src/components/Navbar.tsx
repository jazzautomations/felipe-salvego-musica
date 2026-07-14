"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "O livro", href: "#livro" },
  { label: "Autor", href: "#autor" },
  { label: "Dúvidas", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-stone-800/60 bg-stone-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#" className="text-sm font-semibold tracking-wider text-stone-100 uppercase">
          Felipe Salvego
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-stone-400 transition hover:text-stone-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#baixar"
            className="rounded-lg bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
          >
            Baixar grátis
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-stone-400 md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-stone-800/60 bg-stone-950/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2 px-4 py-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-stone-400 transition hover:bg-stone-800 hover:text-stone-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#baixar"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-emerald-600 px-3 py-2.5 text-center text-sm font-semibold text-white"
            >
              Baixar grátis
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
