var main = {
  init: function () {
    goog.init();
    sheet.init();
    site.init();
    this.load();
  },
  load: function () {
    console.log("ver .74");

    $("#btnBegin").on("click", goog.decrypt);
    $("#pass").focus();
  }
};
