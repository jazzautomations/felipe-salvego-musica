import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nome, email } = body;

  if (!nome || !email) {
    return NextResponse.json({ ok: false, error: "Nome e email obrigatórios" }, { status: 400 });
  }

  // Enviar para Google Sheets via Apps Script
  const gasUrl = process.env.GAS_WEBAPP_URL;
  if (gasUrl) {
    try {
      await fetch(gasUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          email,
          livro: "A Música e a Matemática da Natureza",
          ip: req.headers.get("x-forwarded-for") || "",
        }),
      });
    } catch (err) {
      console.error("Erro ao enviar para Apps Script:", err);
    }
  } else {
    console.log(`[LEAD] ${new Date().toISOString()} | ${nome} | ${email}`);
  }

  return NextResponse.json({
    ok: true,
    pdfUrl: "/livro-musica-matematica.pdf",
  });
}
