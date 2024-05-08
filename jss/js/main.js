var main = {
  init: function () {
    goog.init();
    sheet.init();
    this.load();
  },
  load: function () {
    console.log("ver .43");

    $("#btnBegin").on("click", goog.decrypt);
  }
};
