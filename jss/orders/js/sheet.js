var sheet = {
  data: {},
  sheetName: "Cricut",
  id: "683326268",
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
  updateTimeout: null,

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
      goog.handleError(err)
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

    sheet.data.values = sheet.data.values.filter(arr => arr.length && arr[1] != "9" && arr[1] != "")
    sheet.data.maxOrder = parseInt(sheet.data.values[0][3].split("#")[1]) || 0
    sheet.sortTable()
  },

  updateDisplay: function () {
    let tmpHtml = "<div id='upToOrder'>" + sheet.data.values[0][3] + "</div>"
    tmpHtml += "<table id='toDoTable'>"
    for (let idx = 1; idx < sheet.data.values.length; idx++) {
      tmpHtml += sheet.makeRowHtml(idx)
    }
    tmpHtml += "<tr class='addEntry'>"
    tmpHtml += "<td class='colBox'><button id='btnAddRow'>ADD</button></td>"
    tmpHtml += "<td class='colType'><select id='addRowPriority'>"
    for (let idx in sheet.options) {
      tmpHtml += "<option>" + sheet.options[idx] + "</option>"
    }
    tmpHtml += "</select></td>"
    tmpHtml += "<td class='colNum'><input id='addRowProductNum' type='number' value='1'/></td>"
    tmpHtml += "<td class='colItem'><input id='addRowProduct' type='text' placeholder='Product'/></td>"
    tmpHtml += "</tr>"
    tmpHtml += "</table>"
    $('#content').html(tmpHtml);
  },

  makeRowHtml: function (idx) {
    let numItem = parseInt(sheet.data.values[idx][4]);
    if (numItem == NaN || numItem == null)
      numItem = 1;

    retVal = "<tr class='" + sheet.data.values[idx][2] + (sheet.data.values[idx][0] == "TRUE" ? " completed" : "") + (numItem > 2 ? " multiPrint" : "") + "'>"
    retVal += "<td class='colBox'><input type='checkbox' class='rowBox' id='row" + idx.toString() + "' " + (sheet.data.values[idx][0] == "TRUE" ? "checked" : "") + "></td>"
    retVal += "<td class='colType'>" + sheet.data.values[idx][2] + "</td>"
    retVal += "<td class='colNum'>x" + sheet.data.values[idx][4] + "</td>"
    let prodName = sheet.data.values[idx][3].split("\n")
    if (prodName.length > 1) {
      prodName = prodName[0] + "\n<i>" + prodName.filter((v, i) => i > 0).join("</i>\n<i>")
    }
    retVal += "<td class='colItem'>" + prodName + "</td>"
    retVal += "</tr>"

    return retVal
  },

  rowClick: async function (elem) {
    if (sheet.updateTimeout)
      clearTimeout(sheet.updateTimeout)

    const rowIdx = parseInt($(elem).attr('id').slice(3))
    const isChecked = $(elem).is(":checked")

    sheet.data.values[rowIdx][0] = isChecked ? "TRUE" : "FALSE"
    sheet.data.values[rowIdx][1] = isChecked ? "8" : sheet.options.indexOf(sheet.data.values[rowIdx][2]).toString()

    $(elem).closest("tr").toggleClass("completed", isChecked)

    origIdx = (sheet.offset + 1).toString()

    sheet.updateTimeout = setTimeout(() => sheet.fullUpdate(), 10000); // 10 second delay
    // try {
    //   //sheet.deleteEmptyRows()

    //   response = await gapi.client.sheets.spreadsheets.values.batchUpdate({
    //     spreadsheetId: goog.spreadsheet,
    //     resource: {
    //       data: {
    //         range: `${sheet.sheetName}!A${origIdx}:E`,
    //         values: sheet.data.values.map((v, i) => sheet.getFormulaRow(v, sheet.offset + 1 + i))
    //       },
    //       valueInputOption: "USER_ENTERED"
    //     }
    //   });
    // } catch (err) {
    //   console.error(err);
    //   return;
    // }
  },

  addRow: async function () {
    priorityVal = $("#addRowPriority").val()
    productName = $("#addRowProduct").val()
    productNum = parseInt($("#addRowProductNum").val()) || 1
    newRow = ["FALSE", sheet.bColFormula(sheet.origLength + 1), priorityVal, productName, productNum.toString()]

    try {
      //sheet.deleteEmptyRows()

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
      sheet.sortTable()
    } catch (err) {
      goog.handleAuthClick();
      console.error(err);
      alert("Session timed out, try again")
      return;
    }
  },

  clearDone: function () {
    sheet.data.values = sheet.data.values.filter(v => v[1] != "8")
    sheet.sortTable()
    sheet.deleteEmptyRows()
  },

  sortTable: function () {
    sheet.data.values = sheet.data.values.sort((a, b) => a[3] > b[3]).sort((a, b) => a[1] > b[1])
    sheet.updateDisplay()
  },

  addProduct: function (prodName, priority, num, extra) {
    let existingIdx = sheet.data.values.findIndex(v => v[1] == priority.toString() && v[3] == prodName)
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
    sheet.sortTable()
    updateData = sheet.data.values.map((v, i) => sheet.getFormulaRow(v, sheet.offset + 1 + i))

    try {
      if (newLength > sheet.origLength) {
        response = await gapi.client.sheets.spreadsheets.batchUpdate({
          spreadsheetId: goog.spreadsheet,
          resource: {
            requests: [{
              updateSheetProperties: {
                properties: {
                  sheetId: sheet.id,
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
          values: updateData
        }
      });

      //sheet.deleteEmptyRows();
    } catch (err) {
      goog.handleAuthClick();
      console.error(err);
      alert("Session timed out, try again")
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
                sheetId: sheet.id,
                dimension: "ROWS",
                startIndex: sheet.offset + sheet.data.values.length,
                endIndex: sheet.origLength
              }
            }
          }]
        }
      })
    } catch (err) {
      goog.handleAuthClick();
      console.error(err);
      alert("Session timed out, try again")
      return;
    }
  },

  getFormulaRow: function (row, idx) {
    return [row[0], sheet.bColFormula(idx), row[2], row[3], row[4]]
  }
};