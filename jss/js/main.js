var main = {
  init: function () {
    goog.init();
    sheet.init();
    site.init();
    csv.init();
    this.load();
  },
  load: function () {
    console.log("ver .92");

    $("#btnBegin").on("click", goog.decrypt);
    $("#pass").focus();
  }
};
