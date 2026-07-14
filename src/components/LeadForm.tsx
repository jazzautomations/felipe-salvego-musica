"use client";

import { useState } from "react";

// COLE AQUI A URL DO SEU APPS SCRIPT IMPLANTADO
// (após "Implantar > Nova implantação > Aplicativo da Web")
const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPSCRIPT_URL || "";

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
      // Tenta enviar pro Google Sheets
      if (APPS_SCRIPT_URL) {
        await fetch(APPS_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nome: nome.trim(),
            email: email.trim(),
            whatsapp: whatsapp.trim(),
            fonte: "landing-musica"
          }),
        });
      }

      setStatus("success");
      // Dispara download do PDF
      const link = document.createElement("a");
      link.href = "/livro-musica-matematica.pdf";
      link.download = "musica-e-matematica-felipe-salvego.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      // Mesmo se o Sheets falhar, libera o download (livro é grátis)
      setStatus("success");
      const link = document.createElement("a");
      link.href = "/livro-musica-matematica.pdf";
      link.download = "musica-e-matematica-felipe-salvego.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Estado de sucesso
  if (status === "success") {
    return (
      <div className="rounded-xl border border-emerald-800/40 bg-emerald-950/30 p-8 text-center">
        <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-emerald-500/15 text-2xl text-emerald-400">
          ✓
        </div>
        <p className="text-base font-medium text-stone-100">
          Download iniciado!
        </p>
        <p className="mt-1 text-sm text-stone-400">
          Se o PDF não baixou, {" "}
          <a
            href="/livro-musica-matematica.pdf"
            className="underline underline-offset-2 text-emerald-400 hover:text-emerald-300"
            download
          >
            clique aqui
          </a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-sm space-y-4">
      {/* Nome */}
      <div>
        <label htmlFor="nome" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-stone-400">
          Nome <span className="text-red-400">*</span>
        </label>
        <input
          id="nome"
          type="text"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Seu nome"
          className="w-full rounded-lg border border-stone-700/60 bg-stone-800/50 px-4 py-3 text-sm text-stone-100 placeholder-stone-500 outline-none transition focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600/50"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-stone-400">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
          className="w-full rounded-lg border border-stone-700/60 bg-stone-800/50 px-4 py-3 text-sm text-stone-100 placeholder-stone-500 outline-none transition focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600/50"
        />
      </div>

      {/* WhatsApp */}
      <div>
        <label htmlFor="whatsapp" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-stone-400">
          WhatsApp <span className="text-stone-600">(opcional)</span>
        </label>
        <input
          id="whatsapp"
          type="tel"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          placeholder="(11) 99999-8888"
          className="w-full rounded-lg border border-stone-700/60 bg-stone-800/50 px-4 py-3 text-sm text-stone-100 placeholder-stone-500 outline-none transition focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600/50"
        />
      </div>

      {/* LGPD */}
      <label className="flex items-start gap-3 text-xs leading-relaxed text-stone-500">
        <input
          type="checkbox"
          checked={consentiu}
          onChange={(e) => setConsentiu(e.target.checked)}
          className="mt-0.5 size-4 shrink-0 rounded border-stone-600 bg-stone-800 accent-emerald-600"
        />
        <span>
          Concordo com a{" "}
          <a
            href="/privacidade"
            className="underline underline-offset-2 text-stone-400 hover:text-stone-300"
          >
            política de privacidade (LGPD)
          </a>{" "}
          e aceito receber novidades sobre música e matemática.
        </span>
      </label>

      {/* Erro */}
      {status === "error" && (
        <p className="text-xs text-red-400">{msg || "Erro ao enviar. Tente novamente."}</p>
      )}

      {/* Botão */}
      <button
        type="submit"
        disabled={status === "loading" || !nome.trim() || !email.trim() || !consentiu}
        className="relative w-full overflow-hidden rounded-lg bg-emerald-600 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <span className={status === "loading" ? "opacity-0" : "opacity-100"}>
          Baixar Grátis
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

      <p className="text-center text-[0.65rem] text-stone-600">
        Sem spam. Seus dados são tratados conforme a LGPD.
      </p>
    </form>
  );
}
