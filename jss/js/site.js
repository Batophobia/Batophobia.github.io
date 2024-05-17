var site = {

  init: function () {
    $("#content").on("click", "#btnImportOrderData", (e) => {
      site.convertRows();
    });
  },

  startImportOrder: function () {
    let tmpHtml = "<textarea id='importOrder'></textarea><button id='btnImportOrderData'>Add</button>"
    $('#content').html(tmpHtml);
    $('.btnWrapper .sheet').hide();
    $('.btnWrapper .import').show();
  },

  cancelImportOrder: function () {
    $('.btnWrapper .import').hide();
    $('.btnWrapper .sheet').show();
    sheet.updateDisplay();
  },

  convertRows: function () {
    orderData = $("#importOrder").val()
    console.log(orderData)
  },
};