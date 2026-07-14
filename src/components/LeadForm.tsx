"use client";

import { useState, type FormEvent } from "react";
import { Download, Check, Loader2, Mail, User } from "lucide-react";

export default function LeadForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [lgpd, setLgpd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const [bonusUrl, setBonusUrl] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!nome.trim() || !email.trim() || !lgpd || loading) return;

    setLoading(true);
    try {
      const res = await fetch("/api/baixar-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome: nome.trim(), email: email.trim() }),
      });
      const data = await res.json();
      if (data.ok && data.pdfs) {
        setPdfUrl(data.pdfs[0]?.url || '/livro-musica-matematica.pdf');
        setBonusUrl(data.pdfs[1]?.url || '/ouvir-para-criar.pdf');
        setDone(true);
      }
    } catch {
      // Mesmo se falhar, liberar o download
      setPdfUrl("/livro-musica-matematica.pdf");
      setBonusUrl("/ouvir-para-criar.pdf");
      setDone(true);
    } finally {
      setLoading(false);
    }
  }

  // Estado: download disponível
  if (done) {
    return (
      <div className="space-y-4">
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
          <Check className="mx-auto mb-3 h-8 w-8 text-emerald-400" />
          <p className="text-lg font-semibold text-emerald-300">Pronto! Seus livros estão aqui:</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={pdfUrl}
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-black transition-colors hover:bg-amber-400"
            >
              <Download className="h-5 w-5" />
              Baixar: Música & Matemática
            </a>
            {bonusUrl && (
              <a
                href={bonusUrl}
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 px-6 py-3 font-semibold text-amber-300 transition-colors hover:bg-amber-500/20"
              >
                <Download className="h-5 w-5" />
                Bônus: Ouvir para Criar
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Estado: formulário
  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4">
      <div className="relative">
        <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/30" />
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white placeholder-white/40 outline-none transition-colors focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30"
        />
      </div>
      <div className="relative">
        <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/30" />
        <input
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white placeholder-white/40 outline-none transition-colors focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30"
        />
      </div>

      <label className="flex cursor-pointer items-start gap-3 text-sm text-white/50">
        <input
          type="checkbox"
          checked={lgpd}
          onChange={(e) => setLgpd(e.target.checked)}
          required
          className="mt-0.5 h-4 w-4 rounded border-white/20 bg-white/5 accent-amber-500"
        />
        <span>
          Concordo com a{" "}
          <a href="/privacidade" className="underline decoration-white/30 hover:text-white/70">
            Política de Privacidade
          </a>{" "}
          e autorizo o uso dos meus dados conforme a LGPD.
        </span>
      </label>

      <button
        type="submit"
        disabled={!nome.trim() || !email.trim() || !lgpd || loading}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 py-3.5 font-semibold text-black transition-all hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {loading ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <>
            <Download className="h-5 w-5" />
            Baixar Grátis
          </>
        )}
      </button>

      <p className="text-center text-xs text-white/30">
        Sem spam. Apenas seus livros.
      </p>
    </form>
  );
}
