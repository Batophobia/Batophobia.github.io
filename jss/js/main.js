var main = {
  init: function () {
    goog.init();
    sheet.init();
    this.load();
  },
  load: function () {
    console.log("ver .51");

    $("#btnBegin").on("click", goog.decrypt);
  }
};
