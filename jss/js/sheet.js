var sheet = {
  data: {},
  sheetName: "Cricut",

  init: function () {
    $("#content").on("change", ".rowBox", (e) => {
      console.log({ e });
      sheet.rowClick(e.target);
    });
  },

  getData: async function () {
    let response;
    try {
      response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: goog.spreadsheet,
        range: sheet.sheetName,
      });
    } catch (err) {
      $('#content').hmtl(err.message);
      return;
    }

    sheet.data = response.result;
    if (!sheet.data || !sheet.data.values || sheet.data.values.length == 0) {
      sheet.data = { values: [] }
      sheet.updateDisplay()
      return;
    }

    sheet.data.values = sheet.data.values.filter(arr => arr.length && arr[1] != "9" && arr[1] != "")
    sheet.updateDisplay()
  },

  updateDisplay: function () {
    let tmpHtml = "<table>"
    for (let idx in sheet.data.values) {
      tmpHtml += "<tr class='" + sheet.data.values[idx][2] + "'>"
      tmpHtml += "<td><input type='checkbox' class='rowBox' id='row" + idx.toString() + "'></td>"
      tmpHtml += "<td>" + sheet.data.values[idx][2] + "</td>"
      tmpHtml += "<td>" + sheet.data.values[idx][3] + "</td>"
      tmpHtml += "</tr>"
    }
    tmpHtml += "<tr class='addEntry'>"
    tmpHtml += "<td>ADD</td>"
    tmpHtml += "<td>DROPDOWN</td>"
    tmpHtml += "<td>NAME</td>"
    tmpHtml += "</tr>"
    tmpHtml += "</table>"
    $('#content').html(tmpHtml);
  },

  rowClick: function (elem) {
    console.log(elem);
    console.log($(elem).attr('id'));
  }
};