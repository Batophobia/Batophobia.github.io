var site = {

  init: function () {
    $("#content").on("click", "#btnImportOrderData", (e) => {
      site.convertRows();
    });
    $("#content").on("click", "#btnImportCancel", (e) => {
      sheet.updateDisplay();
    });
  },

  startImportOrder: function () {
    let tmpHtml = "<textarea id='importOrder'></textarea><button id='btnImportOrderData'>Add</button><button id='btnImportCancel'>Cancel</button>"
    $('#content').html(tmpHtml);
  },

  convertRows: function () {
    orderData = $("#importOrder").val()
    console.log(orderData)
  },
};