import { Download } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative z-[1] px-8 py-[110px] text-center" id="download">
      <div className="mx-auto max-w-[1180px]">
        <p className="eyebrow mb-4 justify-center">
          Volume I · Fundamentos da Música
        </p>
        <h2 className="mx-auto mb-5 max-w-[700px] font-[var(--font-cinzel)] text-[clamp(1.8rem,3.4vw,2.6rem)] font-medium leading-[1.15] tracking-[0.02em] text-[var(--gold-2)]">
          Comece pelo problema que Pitágoras não conseguiu resolver.
        </h2>
        <p className="mx-auto mb-9 max-w-[50ch] text-[1.12rem] text-[var(--cream-dim)]">
          Download gratuito, direto no seu e-mail. Sem cartão, sem pegadinha.
        </p>
        <a
          href="https://pay.kirvano.com/checkout/seu-produto"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Baixar o e-book grátis
          <Download size={16} />
        </a>
        <p className="cta-note">PDF · 51 páginas · entrega imediata</p>
      </div>
    </section>
  );
}
