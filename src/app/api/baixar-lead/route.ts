import { NextRequest, NextResponse } from "next/server";

const ZO_SPACE_API = "https://jazzautomations.zo.space/api/baixar-lead";
const PDF_URL = "/livro-musica-matematica.pdf";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // validação básica
    if (!body?.nome || !body?.email) {
      return NextResponse.json({ error: "nome e email são obrigatórios" }, { status: 400 });
    }
    if (!body?.consentiu) {
      return NextResponse.json({ error: "aceite os termos LGPD" }, { status: 400 });
    }

    // salva lead no Zo Space (persistente)
    const response = await fetch(ZO_SPACE_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      // se já existe (email duplicado), libera download mesmo assim
      if (data.error?.includes("UNIQUE") || response.status === 409) {
        return NextResponse.json({ ok: true, download_url: PDF_URL });
      }
      return NextResponse.json({ error: data.error || "erro ao salvar" }, { status: 500 });
    }

    return NextResponse.json({
      ok: true,
      download_url: PDF_URL,
    });
  } catch (err: any) {
    console.error("baixar-lead error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
