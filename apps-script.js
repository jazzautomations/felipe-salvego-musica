// ============================================
// APPS SCRIPT — Lead Capture (Leads Livro Música)
// ============================================
// Planilha oficial: "Leads Livro Música"
// https://docs.google.com/spreadsheets/d/1CUOucmYt8UM0zhq4hJsFWlIkKkGdsjPpzfAwOwamS04/edit
//
// COMO INSTALAR (2 minutos, uma vez só):
// 1. Abra a planilha no link acima
// 2. Menu Extensões → Apps Script
// 3. Apague o conteúdo padrão e cole ESTE arquivo inteiro
// 4. Clique no ícone de disquete (salvar)
// 5. Clique em "Implantar" (Deploy) → "Nova implantação"
// 6. Tipo: "App da Web" (Web app)
// 7. Executar como: "Eu" (seu e-mail)
// 8. Quem tem acesso: "Qualquer pessoa" (Anyone)
// 9. Clique em "Implantar" → autorize as permissões pedidas
// 10. Copie a URL que termina em /exec — essa é a NEXT_PUBLIC_GAS_URL
// ============================================

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1")
    || SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Data", "Nome", "Email", "Fonte"]);
  }

  const data = JSON.parse(e.postData.contents);
  const timestamp = Utilities.formatDate(
    new Date(),
    "America/Sao_Paulo",
    "dd/MM/yyyy HH:mm:ss"
  );

  sheet.appendRow([
    timestamp,
    data.nome || "",
    data.email || "",
    data.fonte || "landing-musica",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
