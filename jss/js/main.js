var main = {
  init: function () {
    goog.init();
    sheet.init();
    this.load();
  },
  load: function () {
    console.log("ver .33");

    $("#btnBegin").on("click", goog.decrypt);
  }
};
