var sheet = {
  data: {},
  options: {},
  sheetNames: ["Plan", "Options"],
  id: "2089227185",
  offset: 1,
  updateTimeout: null,
  times: ["Breakfast", "Lunch", "Dinner"],

  init: function () {
    //$(".dayTasks ").on("change", ".rowBox", (e) => {
    //  sheet.rowClick(e.target);
    //});
    $(".dayTasks ").on("click", ".taskX", (e) => {
      sheet.toggleTask(e.target)
    });
  },

  getData: async function () {
    sheet.getPlan();
    sheet.getOptions();
  },

  getSheetData: async function (idx) {
    let response;
    try {
      response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: goog.spreadsheet,
        range: sheet.sheetNames[idx],
        majorDimension: idx == 0 ? "COLUMNS" : "ROWS",
      });
    } catch (err) {
      console.error(err);
      return;
    }

    return response.result;
  },

  getPlan: async function () {
    sheet.data = await sheet.getSheetData(0);
    if (!sheet.data || !sheet.data.values || sheet.data.values.length == 0) {
      sheet.data = { values: [] }
    }
    site.updateDisplay()
  },

  getOptions: async function () {
    sheet.options = await sheet.getSheetData(1);
    sheet.sortOptions()
  },

  getMealsForDate: function (date, day) {
    retVal = ""
    for (var i = 1; i < sheet.data.values[day].length; i++) {
      if (i % 2 == 1) {
        time = Math.floor((i - 1) / 2)
        retVal += `<div class="dayTime day${sheet.times[time]}">${sheet.times[time]}`
        retVal += `<div class="forD" id='task-${idx}' draggable="true" ondragstart="site.onDrag(event)">${sheet.data.values[day][i]}</div>`
      } else {
        retVal += `<div class="forC" id='task-${idx}' draggable="true" ondragstart="site.onDrag(event)">${sheet.data.values[day][i]}</div>`
        retVal += `</div>`
      }
    }
    return retVal
  },

  makeOptionHtml: function (idx) {
    retVal = `<div id='task-${idx}' draggable="true" ondragstart="site.onDrag(event)"`
    retVal += ` class='task ${sheet.data.values[idx][1]}${(sheet.data.values[idx][0].toLowerCase() == 'x') ? " complete" : ""}'`
    retVal += `>${sheet.data.values[idx][1]} ${sheet.data.values[idx][2]}`
    retVal += `<div class='taskX'>X</div>`
    retVal += `</div>`

    return retVal
  },

  resetMeals: async function () {
    //TODO: Consider only resetting tasks on current view
    sheet.data.values = sheet.data.values.map(v => ["", ...v.slice(1)])
    sheet.fullUpdate()
  },

  btnAddMeal: async function () {
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

  sortOptions: function () {
    sheet.options.values = sheet.options.values.sort((a, b) => a[0] > b[0]).sort((a, b) => a[4] > b[4])
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
};