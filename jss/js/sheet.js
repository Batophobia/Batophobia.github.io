var sheet = {
  data: {},
  sheetName: "Cricut",
  options: [
    "Info",
    "White",
    "Clear",
    "Diecut",
    "High",
    "Normal",
    "Low",
  ],
  offset: 0,
  bColVal: '=IF(A***,8,IF(C***="High",4,IF(C***="Normal",5,IF(C***="Low",6,IF(C***="Info",0,IF(C***="White",1,IF(C***="Clear",2,IF(C***="Diecut",3,9))))))))',

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
      sheet.data = { maxOrder: 0, values: [] }
      sheet.updateDisplay()
      return;
    }

    sheet.offset = sheet.data.values.findIndex(v => v.length && v[1] != "9" && v[1] != "")
    sheet.origLength = sheet.data.values.length

    sheet.data.values = sheet.data.values.filter(arr => arr.length && arr[1] != "9" && arr[1] != "").sort((a, b) => a[1] > b[1])
    sheet.data.maxOrder = parseInt(sheet.data.values[0][3].split("#")[1]) || 0
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
    tmpHtml += "<td><input id='addRowProductNum' type='number' value='1'/></td>"
    tmpHtml += "</tr>"
    tmpHtml += "</table>"
    $('#content').html(tmpHtml);
  },

  makeRowHtml: function (idx) {
    retVal = "<tr class='" + sheet.data.values[idx][2] + (sheet.data.values[idx][0] == "TRUE" ? " completed" : "") + "'>"
    retVal += "<td><input type='checkbox' class='rowBox' id='row" + idx.toString() + "' " + (sheet.data.values[idx][0] == "TRUE" ? "checked" : "") + "></td>"
    retVal += "<td>" + sheet.data.values[idx][2] + "</td>"
    let prodName = sheet.data.values[idx][3].split("\n")
    if (prodName.length > 1) {
      prodName = prodName[0] + "\n<i>" + prodName.filter((v, i) => i > 0).join("</i>\n<i>")
    }
    retVal += "<td>" + prodName + "</td>"
    retVal += "<td>x" + sheet.data.values[idx][4] + "</td>"
    retVal += "</tr>"

    return retVal
  },

  rowClick: async function (elem) {
    const rowIdx = parseInt($(elem).attr('id').slice(3))
    const isChecked = $(elem).is(":checked")

    sheet.data.values[rowIdx][0] = isChecked ? "TRUE" : "FALSE"
    sheet.data.values[rowIdx][1] = isChecked ? "8" : sheet.options.indexOf(sheet.data.values[rowIdx][2]).toString()

    $(elem).closest("tr").toggleClass("completed", isChecked)

    origIdx = sheet.offset.toString()

    try {
      sheet.deleteEmptyRows()

      response = await gapi.client.sheets.spreadsheets.values.batchUpdate({
        spreadsheetId: goog.spreadsheet,
        resource: {
          data: {
            range: `${sheet.sheetName}!A${origIdx}:D`,
            values: sheet.data.values.map((v, i) => [v[0], sheet.bColFormula(sheet.offset + i), v[2], v[3]])
          },
          valueInputOption: "USER_ENTERED"
        }
      });
    } catch (err) {
      $('#content').hmtl(err.message);
      return;
    }
  },

  addRow: async function () {
    priorityVal = $("#addRowPriority").val()
    productName = $("#addRowProduct").val()
    productNum = parseInt($("#addRowProductNum").val()) || 1
    newRow = ["FALSE", sheet.bColFormula(sheet.origLength + 1), priorityVal, productName, productNum.toString()]

    try {
      sheet.deleteEmptyRows()

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

      newRow[1] = sheet.options.indexOf(priorityVal).toString()
      sheet.data.values.push(newRow)
      sheet.data.values = sheet.data.values.sort((a, b) => a[1] > b[1])
      sheet.updateDisplay()
    } catch (err) {
      $('#content').hmtl(err.message);
      return;
    }
  },

  clearDone: function () {
    //TODO
  },

  addProduct: function (prodName, priority, num, extra) {
    let existingIdx = sheet.data.values.filter(v => v[1] == priority.toString()).map(v => v[3]).indexOf(prodName)
    if (existingIdx < 0)
      sheet.data.values.push(["FALSE", priority.toString(), sheet.options[priority], prodName, num])
    else
      sheet.data.values[existingIdx][4] = parseInt(sheet.data.values[existingIdx][4]) + parseInt(num)
  },

  updateOrderNum: function (orderNum) {
    let orderInt = parseInt(orderNum);
    if (isNaN(orderInt)) {
      console.log(`Invalid order number ${orderNum}`)
      return;
    }

    if (orderInt > sheet.data.maxOrder) {
      sheet.data.maxOrder = orderInt
      sheet.data.values[0][3] = `Up to order #${orderInt.toString()}`
    }
  },

  fullUpdate: async function () {
    let newLength = sheet.offset + sheet.data.values.length;

    try {
      if (newLength > sheet.origLength) {
        response = await gapi.client.sheets.spreadsheets.batchUpdate({
          spreadsheetId: goog.spreadsheet,
          resource: {
            requests: [{
              updateSheetProperties: {
                properties: {
                  sheetId: goog.sheet,
                  gridProperties: {
                    rowCount: newLength
                  }
                },
                fields: 'gridProperties(rowCount)'
              }
            }]
          }
        });
      }

      response = await gapi.client.sheets.spreadsheets.values.update({
        spreadsheetId: goog.spreadsheet,
        range: `${sheet.sheetName}!A${sheet.offset + 1}:${String.fromCharCode(65 + sheet.data.values.length[0] - 1)}${newLength}`,
        valueInputOption: 'USER_ENTERED',
        resource: {
          values: sheet.data.values
        }
      });

      //sheet.deleteEmptyRows();
    } catch (err) {
      console.error(err);
      return;
    }
  },

  bColFormula: function (idx) {
    return sheet.bColVal.replaceAll("***", idx.toString())
  },

  deleteEmptyRows: async function () {
    try {
      response = await gapi.client.sheets.spreadsheets.batchUpdate({
        spreadsheetId: goog.spreadsheet,
        resource: {
          requests: [{
            deleteDimension: {
              range: {
                sheetId: goog.sheet,
                dimension: "ROWS",
                startIndex: sheet.offset + sheet.data.values.length,
                endIndex: sheet.origLength
              }
            }
          }]
        }
      })
    } catch (err) {
      $('#content').hmtl(err.message);
      return;
    }
  }
};