var main = {
  init: function () {
    goog.init();
    sheet.init();
    site.init();
    this.load();
  },
  load: function () {
    console.log("ver .6");

    $("#btnBegin").on("click", goog.decrypt);
  }
};
