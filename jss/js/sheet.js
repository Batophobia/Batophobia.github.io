var sheet = {
  data: {},

  load: function (tableData) {
    sheet.data = tableData;
    console.log({ data: sheet.data });
  }
};