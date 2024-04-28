var main = {
  init: function () {
    goog.init();
    sheet.init();
    this.load();
  },
  load: function () {
    console.log("ver .101");

    $("#btnBegin").on("click", goog.decrypt);
  }
};
