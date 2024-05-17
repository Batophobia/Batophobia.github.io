var site = {

  init: function () {
    $("#content").on("click", "#btnImportOrderData", (e) => {
      site.importOrder();
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

  importOrder: function () {
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
      for (; !/\$\d+.\d\d/.test(orderData[orderEnd]); orderEnd++) { }
      orderEnd += 2;

      site.convertProduct(orderData.filter((v, i) => i >= idx && i <= orderEnd))
      /*
      6: "Bubbles - Sticker Sheeth"
      7: "Choose One: White Matte"
      8: "$4.00"
      9: "X 2"
      10: "$8.00"
      */
      idx = orderEnd + 1;
    }

    console.log({ orderNum, numItems, idx })
  },

  convertProduct: function (row) {
    const prodName = row[0].trim();
    const extra = row.filter((v, i) => i > 0 && i < row.length - 3)

    let isSticker = false;
    if (prodName.indexOf("Sticker Sheet") ||
      (extra.length && /: (White Matte|Transparent)/.test(extra[0]))
    )
      isSticker = true;

    if (isSticker)
      console.log("It's a sticker")

    console.log({ prodName, extra, isSticker })
  }
};