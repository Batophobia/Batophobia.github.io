var main = {
  init: function () {
    goog.init();
    sheet.init();
    this.load();
  },
  load: function () {
    console.log("ver .5");

    $("#btnBegin").on("click", goog.decrypt);
  }
};
