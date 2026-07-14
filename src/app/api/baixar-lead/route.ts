import { NextRequest, NextResponse } from "next/server";

// POST /api/baixar-lead
// Recebe nome + email, salva no Google Sheets via Apps Script, retorna redirect pro PDF.
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nome, email } = body;

  if (!nome || !email) {
    return NextResponse.json({ ok: false, error: "Nome e email obrigatórios" }, { status: 400 });
  }

  // Salvar no Google Sheets via Apps Script web app (se configurado)
  const GAS_URL = process.env.GAS_WEBAPP_URL;
  if (GAS_URL) {
    try {
      await fetch(GAS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          email,
          fonte: "landing-musica",
          timestamp: new Date().toISOString(),
        }),
      });
    } catch {
      // Se falhar, não bloqueia o download
      console.error("Falha ao salvar no Sheets");
    }
  }

  // Sempre retorna o link do PDF
  return NextResponse.json({
    ok: true,
    pdfUrl: "/livro-musica-matematica.pdf",
    bonusUrl: "/ouvir-para-criar.pdf",
  });
}
