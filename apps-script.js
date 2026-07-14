// ============================================================
// GOOGLE SHEETS — APPS SCRIPT PARA CAPTURA DE LEADS
// ============================================================
//
// COMO USAR:
// 1. Crie uma nova Google Sheet
// 2. Vá em Extensões > Apps Script
// 3. Cole TODO este código substituindo o que estiver lá
// 4. Clique em "Implantar" > "Nova implantação"
// 5. Tipo: Aplicativo da Web
// 6. Execute como: Eu (seu email)
// 7. Quem tem acesso: Qualquer pessoa
// 8. Copie a URL gerada e cole no campo APPS_SCRIPT_URL do LeadForm.tsx
//
// A planilha terá as colunas:
// Data | Nome | Email | WhatsApp | Fonte
// ============================================================

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Se a planilha estiver vazia, cria o cabeçalho
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Data", "Nome", "Email", "WhatsApp", "Fonte"]);
    }

    const now = new Date();
    const brTime = Utilities.formatDate(now, "America/Sao_Paulo", "dd/MM/yyyy HH:mm:ss");

    sheet.appendRow([
      brTime,
      data.nome || "",
      data.email || "",
      data.whatsapp || "",
      data.fonte || "landing-musica"
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
