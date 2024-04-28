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
      $('#content').text(err.message);
      return;
    }

    sheet.data = response.result;
    if (!sheet.data || !sheet.data.values || sheet.data.values.length == 0) {
      $('#content').text('No values found.');
      return;
    }

    sheet.data.values = sheet.data.values.filter(arr => arr.length && arr[1] != "9" && arr[1] != "")
    sheet.updateDisplay()
  },

  updateDisplay: function () {
    let tmpHtml = "<table>"
    for (let idx in sheet.data.values) {
      tmpHtml += "<tr class='" + sheet.data.values[idx][2] + "'>"
      tmpHtml += "<td><input type='checkbox' id='row" + idx.toString() + "'></td>"
      tmpHtml += "<td>" + sheet.data.values[idx][2] + "</td>"
      tmpHtml += "<td>" + sheet.data.values[idx][3] + "</td>"
      tmpHtml += "</tr>"
    }
    tmpHtml += "</table>"
  }
};