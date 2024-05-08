var main = {
  init: function () {
    goog.init();
    sheet.init();
    this.load();
  },
  load: function () {
    console.log("ver .40");

    $("#btnBegin").on("click", goog.decrypt);
  }
};
