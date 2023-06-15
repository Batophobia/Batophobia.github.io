var player = {
  spcmn: {},

  init: function () {
    $("#btnDish").show();
    $("#btnDish").on('click', function () {
      $(".mainBarItem").hide();
      $(".dish").toggle();
    });
    $(".dish").show();

    if (!this.spcmn.visual) {
      this.spcmn = jQuery.extend(true, {}, specimen);
      this.spcmn.dishLoc = -1;
      var temp = "";
      for (var i = 0; i < speciminVisualSize; i++) {
        temp += " ";
      }
      for (var i = 0; i < speciminVisualSize; i++) {
        this.spcmn.visual[i] = temp;
      }
      mid = Math.floor(speciminVisualSize / 2);
      /*
          /#\
          #@#
          \#/
      */
      this.spcmn.visual[mid - 1] = this.spcmn.visual[mid - 1].replaceAt(mid - 1, "/#\\");
      this.spcmn.visual[mid] = this.spcmn.visual[mid - 1].replaceAt(mid - 1, "#@#");
      this.spcmn.visual[mid + 1] = this.spcmn.visual[mid - 1].replaceAt(mid - 1, "\\#/");
    }

    this.spcmn.updateDisplay();
  },

  tick: function () {
    // TODO
  },
};