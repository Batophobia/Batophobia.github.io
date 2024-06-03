var sheet = {
  data: {},
  sheetName: "Schedule",
  id: "1195235392",
  offset: 1,
  updateTimeout: null,

  init: function () {
    //$(".dayTasks ").on("change", ".rowBox", (e) => {
    //  sheet.rowClick(e.target);
    //});
    $(".dayTasks ").on("click", ".taskX", (e) => {
      sheet.toggleTask(e.target)
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
    return retVal
  },

  makeTaskHtml: function (idx) {
    retVal = `<div id='task-${idx}' draggable="true" ondragstart="site.onDrag(event)"`
    retVal += ` class='task ${sheet.data.values[idx][1]}${(sheet.data.values[idx][0].toLowerCase() == 'x') ? " complete" : ""}'`
    retVal += `>${sheet.data.values[idx][1]} ${sheet.data.values[idx][2]}`
    retVal += `<div class='taskX'>X</div>`
    retVal += `</div>`

    return retVal
  },

  toggleTask: async function (elem) {
    console.log($(elem).parent(".task").attr("id"))
    return
    if (sheet.updateTimeout)
      clearTimeout(sheet.updateTimeout)

    const elemIdx = parseInt($(elem).attr('id').slice(3))
    const isChecked = $(elem).is(":checked")

    sheet.data.values[elemIdx][0] = isChecked ? "TRUE" : "FALSE"
    sheet.data.values[elemIdx][1] = isChecked ? "8" : sheet.options.indexOf(sheet.data.values[elemIdx][2]).toString()

    $(elem).closest("tr").toggleClass("completed", isChecked)

    origIdx = (sheet.offset + 1).toString()

    sheet.updateTimeout = setTimeout(() => sheet.fullUpdate(), 10000); // 10 second delay
  },

  resetTasks: async function () {
    //TODO: Consider only resetting tasks on current view
    sheet.data.values = sheet.data.values.map(v => ["", ...v.slice(1)])
    sheet.fullUpdate()
  },

  btnAddTask: async function () {
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

  fullUpdate: async function () {
    $("#loading").show();
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