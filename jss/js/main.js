var main = {
  init: function () {
    goog.init();
    sheet.init();
    site.init();
    csv.init();
    this.load();
  },
  load: function () {
    console.log("ver .91");

    $("#btnBegin").on("click", goog.decrypt);
    $("#pass").focus();
  }
};
