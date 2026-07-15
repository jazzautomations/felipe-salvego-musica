"use client";

import { useState, type FormEvent } from "react";
import { Download, Check, Loader2, Mail, User } from "lucide-react";

// URL do Apps Script implantado (termina em /exec) — ver apps-script.js na raiz do repo.
// Pode ser sobrescrita via NEXT_PUBLIC_GAS_URL no ambiente da Vercel.
const GAS_URL =
  process.env.NEXT_PUBLIC_GAS_URL ||
  "https://script.google.com/macros/s/AKfycbyblKvsYvDSbEYgfRYJ3hHuz9_LoAcxXbSefmj_puAXpiPg7zcEG5K2az-HXhdBxshS/exec";

export default function LeadForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [lgpd, setLgpd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!nome.trim() || !email.trim() || !lgpd || loading) return;

    setLoading(true);

    if (GAS_URL) {
      try {
        // Apps Script Web Apps não devolvem CORS legível pelo browser — usamos
        // no-cors e seguimos em frente independente da resposta. A gravação
        // acontece do lado do Apps Script mesmo sem lermos o corpo aqui.
        await fetch(GAS_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify({
            nome: nome.trim(),
            email: email.trim(),
            fonte: "landing-musica",
          }),
        });
      } catch {
        // segue o fluxo mesmo se a gravação falhar — o livro é grátis
      }
    }

    setLoading(false);
    setDone(true);
  }

  if (done) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-center gap-2 rounded border border-[color-mix(in_srgb,#4ade80,transparent_60%)] bg-[color-mix(in_srgb,#4ade80,transparent_92%)] px-4 py-3 text-[0.82rem] text-[#86efac]">
          <Check className="size-4" />
          Pronto! Seu livro está pronto para download.
        </div>

        <a
          href="/livro-musica-matematica.pdf"
          download
          className="btn-primary flex w-full items-center justify-center gap-2"
        >
          <Download className="size-4" />
          Baixar: A Música e a Matemática da Natureza
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4">
      <div className="relative">
        <User className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[var(--muted)]" />
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className="w-full rounded border border-[var(--border)] bg-[var(--bg-3)] py-3 pl-12 pr-4 text-[0.85rem] text-[var(--cream)] placeholder-[var(--muted)] outline-none transition-colors focus:border-[var(--gold-dim)] focus:ring-1 focus:ring-[var(--gold-dim)]"
        />
      </div>

      <div className="relative">
        <Mail className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[var(--muted)]" />
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded border border-[var(--border)] bg-[var(--bg-3)] py-3 pl-12 pr-4 text-[0.85rem] text-[var(--cream)] placeholder-[var(--muted)] outline-none transition-colors focus:border-[var(--gold-dim)] focus:ring-1 focus:ring-[var(--gold-dim)]"
        />
      </div>

      <label className="flex cursor-pointer items-start gap-3 text-[0.78rem] text-[var(--muted)]">
        <input
          type="checkbox"
          checked={lgpd}
          onChange={(e) => setLgpd(e.target.checked)}
          required
          className="mt-0.5 size-4 rounded border-[var(--border)] bg-[var(--bg-3)] accent-[var(--gold)]"
        />
        <span>
          Concordo com a{" "}
          <a href="/privacidade" className="underline decoration-[var(--muted)]/30 hover:text-[var(--cream-dim)]">
            Política de Privacidade
          </a>{" "}
          e autorizo o uso dos meus dados conforme a LGPD.
        </span>
      </label>

      <button
        type="submit"
        disabled={!nome.trim() || !email.trim() || !lgpd || loading}
        className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-40"
      >
        {loading ? (
          <Loader2 className="size-5 animate-spin" />
        ) : (
          <>
            <Download className="size-4" />
            Baixar Grátis
          </>
        )}
      </button>

      <p className="text-center font-[var(--font-jetbrains)] text-[0.6rem] tracking-[0.1em] uppercase text-[var(--muted)]">
        Sem spam. Apenas seu livro.
      </p>
    </form>
  );
}
