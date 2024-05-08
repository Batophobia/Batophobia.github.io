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
    $("#content").on("click", "#btnAddRow", (e) => {
      sheet.addRow()
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

  addRow: async function () {
    priorityVal = $("#addRowPriority").val()
    productName = $("#addRowProduct").val()

    try {
      response = await gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId: goog.spreadsheet,
        range: sheet.sheetName,
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        resource: {
          "majorDimension": "ROWS",
          "values": [["", "8", priorityVal, productName]]
        },
      });
      console.log(response)
    } catch (err) {
      $('#content').hmtl(err.message);
      return;
    }
  }
};