var site = {

  init: function () {
    csv.init();

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

  importOrder: async function () {
    orderData = $("#importOrder").val()
    if (orderData == "") return;

    orderData = orderData.substring(orderData.indexOf("Order #"), orderData.indexOf("Delivery method")).split('\n')
    let idx = 0;

    const orderNum = orderData[0].split("#")[1];

    while (!/Items \(\d+\)/.test(orderData[idx]))
      idx++;

    const numItems = orderData[idx].split("(")[1].split(")")[0];
    let sanityCheck = 0;

    idx += 2;
    while (orderData[idx].trim() == "")
      idx++;

    while (orderData[idx] != "Payment info") {
      let orderEnd = idx;
      for (; !/\$\d+.\d\d/.test(orderData[orderEnd]); orderEnd++) { }
      orderEnd += 2;

      site.convertProduct(orderData.filter((v, i) => i >= idx && i <= orderEnd))
      sanityCheck++;
      /*
      6: "Bubbles - Sticker Sheeth"
      7: "Choose One: White Matte"
      8: "$4.00"
      9: "X 2"
      10: "$8.00"
      */
      idx = orderEnd + 1;
    }

    if (sanityCheck != numItems) console.log(`Expected ${numItems} items, but made ${sanityCheck}`)

    sheet.updateOrderNum(orderNum)
    await sheet.fullUpdate();
    site.cancelImportOrder();
  },

  convertProduct: function (row) {
    if (row[0].trim() == "")
      row = row.slice(1)
    var prodName = row[0].trim();
    var extra = row.filter((v, i) => i > 0 && i < row.length - 3)
    var num = parseInt(row[row.length - 2].substring(1).trim()) || 1;

    let priority = sheet.options.indexOf("Low")

    let isSticker = false;
    if (
      prodName.toLowerCase().indexOf("sticker sheet") > -1 ||
      prodName.toLowerCase().indexOf("micro sheet") > -1 ||
      prodName.toLowerCase().indexOf("die cut") > -1 ||
      prodName.toLowerCase().indexOf("diecut") > -1 ||
      (extra.length && /: (White Matte|Transparent)/.test(extra[0]))
    ) {
      let type = prodName.split("-");
      prodName = type[0].trim();
      if (type.length > 1) {
        type = type[1].trim().toLowerCase();
        if (type.indexOf("micro") > -1)
          prodName += " (micro)"
        else if (type.indexOf("mini") > -1)
          prodName += " (mini)"
        else if (type.indexOf("die cut") > -1 || type.indexOf("diecut") > -1)
          prodName += " (diecut)"
      }
      isSticker = true;
    }

    // Sticker block
    if (isSticker) {
      priority = sheet.options.indexOf("White")
      if (extra.length && extra[0].indexOf("Transparent") > 0)
        priority = sheet.options.indexOf("Clear")
      else if (prodName.toLowerCase().indexOf("die cut") > 0 || prodName.indexOf("diecut") > 0)
        priority = sheet.options.indexOf("Diecut")
    } else {

      // High block
      if (prodName.indexOf("Contact Cards") > -1) {
        num *= parseInt(extra[0].split(":")[1].trim() || 1)
        priority = sheet.options.indexOf("High")
      } else if (prodName.indexOf("Custom") == 0
        || prodName.indexOf("Cover") > -1
        || prodName.indexOf("Bundle") > -1) {
        priority = sheet.options.indexOf("High")
      }
      else if (prodName.indexOf("Vellum") > -1
        || prodName.indexOf("Storage") > -1) {
        priority = sheet.options.indexOf("Normal")
      }

      if (extra.length) {
        prodName += "\n" + extra.join("\n")
      }
    }

    sheet.addProduct(prodName, priority, num, extra)
  }
};
