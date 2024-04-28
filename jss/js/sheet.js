var sheet = {
  data: {},
  sheetName: "Cricut",
  options: [
    "Info",
    "High",
    "Normal",
    "Low",
    "White",
    "Clear",
  ],

  init: function () {
    $("#content").on("change", ".rowBox", (e) => {
      sheet.rowClick(e.target);
    });
    $("#content").on("change", "#btnAddRow", sheet.addRow);
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
    tmpHtml += "<td><button id='btnAddRow'>ADD</button></td>"
    tmpHtml += "<td><select id='addRowPriority'>"
    for (let idx in sheet.options) {
      tmpHtml += "<option>" + sheet.options[idx] + "</option>"
    }
    tmpHtml += "</select></td>"
    tmpHtml += "<td><input id='addRowProduct' type='text' placeholder='Product'/></td>"
    tmpHtml += "</tr>"
    tmpHtml += "</table>"
    $('#content').html(tmpHtml);
  },

  rowClick: function (elem) {
    const rowIdx = parseInt($(elem).attr('id').slice(3))
    const isChecked = $(elem).is(":checked")
    console.log({ rowIdx, isChecked })
    // TODO, update sheet
  },

  addRow: function () {
    console.log($("#addRowPriority").val())
    console.log($("#addRowProduct").val())
    console.log($("#addRowProduct").text())
  }
};