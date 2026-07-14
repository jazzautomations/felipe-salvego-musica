import { NextRequest, NextResponse } from "next/server";
import { after } from "next/server";

const SPREADSHEET_ID = "1CUOucmYt8UM0zhq4hJsFWlIkKkGdsjPpzfAwOwamS04";

async function saveLeadToSheet(nome: string, email: string) {
  const zoApiKey = process.env.ZO_API_KEY;
  if (!zoApiKey) {
    console.log(`[LEAD] sem ZO_API_KEY configurada | ${nome} | ${email}`);
    return;
  }

  const timestamp = new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });

  try {
    const res = await fetch("https://api.zo.computer/zo/ask", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${zoApiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        input:
          `Use a ferramenta google_sheets-add-rows para adicionar UMA linha na planilha ` +
          `com spreadsheetId "${SPREADSHEET_ID}", sheetName "Sheet1", hasHeaders=false. ` +
          `A linha (array de 4 valores, nesta ordem) é: ["${timestamp}", "${nome.replace(/"/g, "'")}", "${email.replace(/"/g, "'")}", "landing-musica"]. ` +
          `Não faça mais nada além de chamar essa ferramenta uma vez.`,
      }),
    });
    if (!res.ok) {
      console.error("Zo API respondeu com erro:", res.status, await res.text());
    }
  } catch (err) {
    console.error("Erro ao registrar lead no Google Sheets:", err);
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nome, email } = body;

  if (!nome || !email) {
    return NextResponse.json(
      { ok: false, error: "Nome e email obrigatórios" },
      { status: 400 }
    );
  }

  // Grava na planilha depois de responder ao usuário — não atrasa o download do PDF.
  after(() => saveLeadToSheet(nome, email));

  return NextResponse.json({
    ok: true,
    pdfUrl: "/livro-musica-matematica.pdf",
  });
}
