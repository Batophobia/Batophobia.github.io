var sheet = {
  data: {},
  sheetName: "Cricut",

  getData: async function () {
    let response;
    try {
      response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: goog.spreadsheet,
        range: sheet.sheetName,
      });
    } catch (err) {
      document.getElementById('content').innerText = err.message;
      return;
    }

    sheet.data = response.result;
    if (!sheet.data || !sheet.data.values || sheet.data.values.length == 0) {
      document.getElementById('content').innerText = 'No values found.';
      return;
    }

    console.log({ data: sheet.data });
  },
};