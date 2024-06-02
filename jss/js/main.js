var main = {
  init: function () {
    goog.init();
    sheet.init();
    site.init();
    this.load();
  },
  load: function () {
    console.log("ver 1.2");

    $("#btnBegin").on("click", goog.decrypt);
    $("#pass").focus();
  }
};
