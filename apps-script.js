// ============================================================
// APPS SCRIPT — Leads: Livro Música e Matemática da Natureza
// ============================================================
// COMO INSTALAR:
// 1. Abra a planilha "Leads Livro Música" no Google Sheets
// 2. Vá em Extensões → Apps Script
// 3. Cole TODO este código substituindo o que estiver lá
// 4. Clique em "Salvar"
// 5. Clique em "Implantar" → "Implantar nova implantação"
//    - Tipo: Aplicativo da Web
//    - Executar como: Eu (seu email)
//    - Quem tem acesso: Qualquer pessoa
// 6. Clique em "Implantar" e copie a URL gerada
// 7. No Vercel, vá em Settings → Environment Variables
//    e adicione: GAS_WEBAPP_URL = <URL copiada>
// ============================================================

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Se a planilha estiver vazia, adiciona cabeçalho
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Data/Hora',
        'Nome',
        'Email',
        'Livro Baixado',
        'IP (se disponível)'
      ]);
      // Formata cabeçalho
      const headerRange = sheet.getRange(1, 1, 1, 5);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#d8a657');
      headerRange.setFontColor('#1a1a18');
      sheet.setColumnWidth(1, 180);
      sheet.setColumnWidth(2, 200);
      sheet.setColumnWidth(3, 250);
      sheet.setColumnWidth(4, 200);
      sheet.setColumnWidth(5, 150);
    }

    const timestamp = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    const nome = data.nome || '';
    const email = data.email || '';
    const livro = data.livro || 'Música e Matemática + Ouvir para Criar';
    const ip = data.ip || '';

    sheet.appendRow([timestamp, nome, email, livro, ip]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, message: 'Lead salvo com sucesso' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Suporte a OPTIONS para CORS
function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.JSON);
}
