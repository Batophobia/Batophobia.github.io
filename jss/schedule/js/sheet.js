var sheet = {
  data: {},
  sheetName: "Schedule",
  id: "1195235392",
  offset: 1,
  updateTimeout: null,

  init: function () {
    //$("#content").on("change", ".rowBox", (e) => {
    //  sheet.rowClick(e.target);
    //});
    //$("#content").on("click", "#btnAddRow", (e) => {
    //  sheet.addRow()
    //});
  },

  getData: async function () {
    let response;
    try {
      response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: goog.spreadsheet,
        range: sheet.sheetName,
      });
    } catch (err) {
      console.error(err);
      return;
    }

    sheet.data = response.result;
    if (!sheet.data || !sheet.data.values || sheet.data.values.length == 0) {
      sheet.data = { values: [] }
      site.updateDisplay()
      return;
    }

    sheet.origLength = sheet.data.values.length
    sheet.data.values = sheet.data.values.slice(sheet.offset)
    sheet.sortTable()
  },

  getTasksForDate: function (date, day) {
    sheet.makeTaskHtml()
    tempTasks = sheet.data.values.map((v, i) => {
      if (
        (v[3].toLowerCase() == "weekly" && v[4] == day)
        || (v[3].toLowerCase() == "monthly" && v[4] == date.getDate())
        || (v[3].toLowerCase() == "monthly" && v[4].toLowerCase() == `sp${Math.floor(date.getDate() / 7)}.${day}`)
      )
        return i
    }).filter(v => v)

    retVal = ""
    for (var i in tempTasks) {
      retVal += sheet.makeTaskHtml(tempTasks[i])
    }
  },

  makeTaskHtml: function (idx) {
    retVal = `<div id='task-${idx}' draggable="true" ondragstart="site.onDrag(event)"`
    retVal += ` class='task ${sheet.data.values[idx][1]}${(sheet.data.values[idx][0].toLowerCase() == 'x') ? " complete" : ""}'`
    retVal += `>${sheet.data.values[idx][1]} ${sheet.data.values[idx][2]}</div>`

    return retVal
  },

  rowClick: async function (elem) {
    // if (sheet.updateTimeout)
    //   clearTimeout(sheet.updateTimeout)

    // const rowIdx = parseInt($(elem).attr('id').slice(3))
    // const isChecked = $(elem).is(":checked")

    // sheet.data.values[rowIdx][0] = isChecked ? "TRUE" : "FALSE"
    // sheet.data.values[rowIdx][1] = isChecked ? "8" : sheet.options.indexOf(sheet.data.values[rowIdx][2]).toString()

    // $(elem).closest("tr").toggleClass("completed", isChecked)

    // origIdx = (sheet.offset + 1).toString()

    // sheet.updateTimeout = setTimeout(() => sheet.fullUpdate(), 10000); // 10 second delay
  },

  addRow: async function () {
    // priorityVal = $("#addRowPriority").val()
    // productName = $("#addRowProduct").val()
    // productNum = parseInt($("#addRowProductNum").val()) || 1
    // newRow = ["FALSE", sheet.bColFormula(sheet.origLength + 1), priorityVal, productName, productNum.toString()]

    // try {
    //   sheet.deleteEmptyRows()

    //   response = await gapi.client.sheets.spreadsheets.values.append({
    //     spreadsheetId: goog.spreadsheet,
    //     range: sheet.sheetName,
    //     valueInputOption: 'USER_ENTERED',
    //     insertDataOption: 'INSERT_ROWS',
    //     resource: {
    //       "majorDimension": "ROWS",
    //       "values": [newRow]
    //     },
    //   });

    //   newRow[1] = sheet.options.indexOf(priorityVal).toString()
    //   sheet.data.values.push(newRow)
    //   sheet.sortTable()
    // } catch (err) {
    //   console.error(err);
    //   return;
    // }
  },

  sortTable: function () {
    sheet.data.values = sheet.data.values.sort((a, b) => a[0] > b[0]).sort((a, b) => a[3] > b[3])
    site.updateDisplay()
  },

  addProduct: function (prodName, priority, num, extra) {
    //let existingIdx = sheet.data.values.findIndex(v => v[1] == priority.toString() && v[3] == prodName)
    //if (existingIdx < 0)
    //  sheet.data.values.push(["FALSE", priority.toString(), sheet.options[priority], prodName, num])
    //else
    //  sheet.data.values[existingIdx][4] = parseInt(sheet.data.values[existingIdx][4]) + parseInt(num)
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
    } catch (err) {
      console.error(err);
      return;
    }
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
      console.error(err);
      return;
    }
  },
};