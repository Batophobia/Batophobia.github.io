var main = {
  init: function () {
    goog.init();
    sheet.init();
    site.init();
    this.load();
  },
  load: function () {
    console.log("ver .71");

    $("#btnBegin").on("click", goog.decrypt);
    $("#pass").focus();
  }
};
