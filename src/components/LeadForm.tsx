"use client";

import { useState } from "react";

const API_URL = "/api/baixar-lead";

export default function LeadForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [consentiu, setConsentiu] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim() || !email.trim() || !consentiu) return;

    setStatus("loading");
    setMsg("");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: nome.trim(),
          email: email.trim(),
          whatsapp: whatsapp.trim() || null,
          consentiu,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMsg(data.error || "Erro ao processar. Tente novamente.");
        return;
      }

      setStatus("success");
      // redireciona pro PDF
      window.location.href = data.download_url || "/livro-musica-matematica.pdf";
    } catch {
      setStatus("error");
      setMsg("Erro de conexão. Tente novamente.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 text-center backdrop-blur-sm">
        <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-emerald-500/20 text-3xl text-emerald-400">
          ✓
        </div>
        <p className="text-lg font-medium text-[var(--color-fg)]">
          Se o download não iniciar,{" "}
          <a
            href="/livro-musica-matematica.pdf"
            className="underline underline-offset-2 hover:text-[var(--color-accent)]"
            download
          >
            clique aqui
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-md space-y-4">
      <div>
        <label htmlFor="nome" className="mb-1 block text-sm font-medium text-[var(--color-muted)]">
          Nome <span className="text-red-400">*</span>
        </label>
        <input
          id="nome"
          type="text"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Seu nome"
          className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-3 text-[var(--color-fg)] placeholder-[var(--color-muted)] outline-none transition focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-[var(--color-muted)]">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
          className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-3 text-[var(--color-fg)] placeholder-[var(--color-muted)] outline-none transition focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]"
        />
      </div>

      <div>
        <label htmlFor="whatsapp" className="mb-1 block text-sm font-medium text-[var(--color-muted)]">
          WhatsApp <span className="text-zinc-500">(opcional)</span>
        </label>
        <input
          id="whatsapp"
          type="tel"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          placeholder="(11) 99999-8888"
          className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-3 text-[var(--color-fg)] placeholder-[var(--color-muted)] outline-none transition focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]"
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-[var(--color-muted)]">
        <input
          type="checkbox"
          checked={consentiu}
          onChange={(e) => setConsentiu(e.target.checked)}
          className="mt-0.5 size-4 rounded border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-accent)] accent-[var(--color-accent)]"
        />
        <span>
          Aceito receber conteúdos sobre música e matemática e concordo com a{" "}
          <a
            href="https://jazz-automations.vercel.app/privacidade"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-[var(--color-fg)]"
          >
            política de privacidade
          </a>
          .
        </span>
      </label>

      {status === "error" && (
        <p className="text-sm text-red-400">{msg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading" || !nome.trim() || !email.trim() || !consentiu}
        className="group relative w-full overflow-hidden rounded-lg bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-[var(--color-bg)] transition-all duration-300 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <span className={status === "loading" ? "opacity-0" : "opacity-100"}>
          {status === "loading" ? "Enviando…" : "Baixar Grátis"}
        </span>
        {status === "loading" && (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg className="size-5 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          </span>
        )}
      </button>

      <p className="text-center text-xs text-[var(--color-muted)]">
        Seus dados não serão compartilhados. Download 100% gratuito.
      </p>
    </form>
  );
}
