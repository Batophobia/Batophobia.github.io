var main = {
  ver: "0.13",

  init: function () {
    goog.init();
    sheet.init();
    site.init();
    this.load();
  },
  load: function () {
    console.log(main.ver);
    $("#version").text(`Version ${main.ver}`);

    $("#btnBegin").on("click", goog.decrypt);
    $("#pass").focus();
  }
};
