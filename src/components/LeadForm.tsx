"use client";

import { useState, FormEvent } from "react";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function LeadForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [consentiu, setConsentiu] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!consentiu) {
      setErrorMsg("Você precisa aceitar os termos LGPD.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("https://jazzautomations.zo.space/api/baixar-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, whatsapp, consentiu }),
      });

      const data = await res.json();
      if (!data.ok) {
        setErrorMsg(data.error || "Erro ao registrar. Tente novamente.");
        setStatus("error");
        return;
      }

      setStatus("success");

      // Inicia download do PDF
      const link = document.createElement("a");
      link.href = "https://jazzautomations.zo.space/assets/livro-musica-matematica.pdf";
      link.download = "A-Musica-e-a-Matematica-da-Natureza-Felipe-Salvego.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      setErrorMsg("Erro de conexão. Verifique sua internet e tente de novo.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <CheckCircle className="size-12 text-emerald-400" />
        <p className="text-lg font-medium text-emerald-300">Tudo pronto! O download já começou 🎵</p>
        <p className="text-sm text-stone-400">
          Se o download não iniciar,{" "}
          <a
            href="https://jazzautomations.zo.space/assets/livro-musica-matematica.pdf"
            className="underline hover:text-emerald-300"
            download
          >
            clique aqui
          </a>
          .
        </p>
        <p className="mt-2 text-xs text-stone-500">
          Bons estudos — e lembre-se: a música é a matemática que pode ser ouvida.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-md space-y-4">
      <div>
        <label htmlFor="nome" className="mb-1 block text-sm font-medium text-stone-300">
          Seu nome <span className="text-red-400">*</span>
        </label>
        <input
          id="nome"
          type="text"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Felipe Salvego"
          className="w-full rounded-lg border border-stone-700 bg-stone-800/60 px-4 py-3 text-stone-100 placeholder-stone-500 outline-none transition focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-stone-300">
          Melhor e-mail <span className="text-red-400">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="felipe@exemplo.com"
          className="w-full rounded-lg border border-stone-700 bg-stone-800/60 px-4 py-3 text-stone-100 placeholder-stone-500 outline-none transition focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label htmlFor="whatsapp" className="mb-1 block text-sm font-medium text-stone-300">
          WhatsApp (opcional)
        </label>
        <input
          id="whatsapp"
          type="tel"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          placeholder="(11) 99999-8888"
          className="w-full rounded-lg border border-stone-700 bg-stone-800/60 px-4 py-3 text-stone-100 placeholder-stone-500 outline-none transition focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-stone-400">
        <input
          type="checkbox"
          checked={consentiu}
          onChange={(e) => setConsentiu(e.target.checked)}
          className="mt-0.5 size-4 accent-emerald-500"
        />
        <span>
          Aceito receber novidades e concordo com a{" "}
          <a
            href="https://jazzautomations.zo.space/privacidade"
            target="_blank"
            className="underline hover:text-emerald-300"
          >
            política de privacidade
          </a>
          .
        </span>
      </label>

      {status === "error" && (
        <div className="flex items-start gap-2 rounded-lg bg-red-900/30 px-4 py-3 text-sm text-red-300">
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="size-5 animate-spin" /> Enviando…
          </>
        ) : (
          "Quero baixar grátis →"
        )}
      </button>
    </form>
  );
}
