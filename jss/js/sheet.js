var sheet = {
  data: {},
  sheetName: "Cricut",
  options: [
    "Info",
    "White",
    "Clear",
    "High",
    "Normal",
    "Low",
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

    sheet.data.values = sheet.data.values.filter(arr => arr.length && arr[1] != "9" && arr[1] != "").sort((a, b) => a[1] > b[1])
    sheet.updateDisplay()
  },

  updateDisplay: function () {
    let tmpHtml = "<table id='toDoTable'>"
    for (let idx in sheet.data.values) {
      tmpHtml += sheet.makeRowHtml(idx)
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

  makeRowHtml: function (idx) {
    retVal = "<tr class='" + sheet.data.values[idx][2] + (sheet.data.values[idx][0] == "TRUE" ? " completed" : "") + "'>"
    retVal += "<td><input type='checkbox' class='rowBox' id='row" + idx.toString() + "' " + (sheet.data.values[idx][0] == "TRUE" ? "checked" : "") + "></td>"
    retVal += "<td>" + sheet.data.values[idx][2] + "</td>"
    retVal += "<td>" + sheet.data.values[idx][3] + "</td>"
    retVal += "</tr>"

    return retVal
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
    newRow = ["FALSE", "8", priorityVal, productName]

    try {
      response = await gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId: goog.spreadsheet,
        range: sheet.sheetName,
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        resource: {
          "majorDimension": "ROWS",
          "values": [newRow]
        },
      });

      sheet.data.values.push(newRow)
      sheet.data.values = sheet.data.values.sort((a, b) => a[1] > b[1])
      $("#toDoTable").append(sheet.data.values.length - 1)
      console.log(response)
    } catch (err) {
      $('#content').hmtl(err.message);
      return;
    }
  }
};