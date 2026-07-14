// ============================================
// APPS SCRIPT — Lead Capture para Landing Page
// ============================================
// INSTRUÇÕES:
// 1. Abra a planilha "Leads Landing Música"
// 2. Vá em Extensões > Apps Script
// 3. Cole TODO este código substituindo o que estiver lá
// 4. Clique em "Implantar" > "Nova implantação"
// 5. Tipo: "Aplicativo da Web"
// 6. Execute como: "Eu"
// 7. Quem tem acesso: "Qualquer pessoa"
// 8. Clique em "Implantar" e copie a URL
// 9. Cole a URL no campo APPS_SCRIPT_URL abaixo
// ============================================

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Se a planilha estiver vazia, adiciona cabeçalhos
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Data", "Nome", "Email", "WhatsApp", "Fonte"]);
      // Formata cabeçalho
      const headerRange = sheet.getRange(1, 1, 1, 5);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#1a1a1a");
      headerRange.setFontColor("#ffffff");
      sheet.setColumnWidths(1, 5, 200);
    }
    
    const now = new Date();
    const dataStr = now.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
    
    sheet.appendRow([
      dataStr,
      data.nome || "",
      data.email || "",
      data.whatsapp || "",
      data.fonte || "landing-musica"
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
