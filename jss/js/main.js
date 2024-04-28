var main = {
  init: function () {
    goog.init();
    sheet.init();
    this.load();
  },
  load: function () {
    console.log("ver .2");

    $("#btnBegin").on("click", goog.decrypt);
  }
};
