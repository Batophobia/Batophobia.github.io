var main = {
  init: function () {
    goog.init();
    sheet.init();
    this.load();
  },
  load: function () {
    console.log("ver .32");

    $("#btnBegin").on("click", goog.decrypt);
  }
};
