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
    if (orderData == "") return;

    orderData = orderData.substring(orderData.indexOf("Order #"), orderData.indexOf("Delivery method")).split('\n')
    console.log(orderData)
    let idx = 0;

    const orderNum = orderData[0].split("#")[1];

    while (!/Items \(\d+\)/.test(orderData[idx]))
      idx++;

    const numItems = orderData[idx].split("(")[1].split(")")[0];

    idx += 2;

    while (orderData[idx] != "Payment info") {
      let orderEnd = idx;
      for (; /\$\d+.\d\d/.test(orderData[orderEnd]); orderEnd++) { }
      orderEnd++;

      console.log(orderData.filter((v, i) => i >= idx && i <= orderEnd))
      /*
      */
      idx = orderEnd + 1;
    }

    console.log({ orderNum, numItems, idx })
  },
};