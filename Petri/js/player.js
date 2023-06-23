var player = {
  spcmn: [],
  money: 0,
  payday: 1,
  moneyTimer: 0,
  moneyDelay: 10,

  init: function () {
    $("#btnDish").show();
    $("#btnDish").on('click', function () {
      $(".mainBarItem").hide();
      $(".dish").toggle();
    });
    $(".dish").show();

    if (this.spcmn.length < 1 || !this.spcmn[0].visual) {
      this.spcmn[0] = jQuery.extend(true, {}, specimen);
      this.spcmn[0].dishLoc = -1;
      var temp = "";
      for (var i = 0; i < speciminVisualSize; i++) {
        temp += " ";
      }
      for (var i = 0; i < speciminVisualSize; i++) {
        this.spcmn[0].visual[i] = temp;
      }
      mid = Math.floor(speciminVisualSize / 2);
      /*
          /#\
          #@#
          \#/
      */
      this.spcmn[0].visual[mid - 1] = this.spcmn[0].visual[mid - 1].replaceAt(mid - 1, "/#\\");
      this.spcmn[0].visual[mid] = this.spcmn[0].visual[mid - 1].replaceAt(mid - 1, "#@#");
      this.spcmn[0].visual[mid + 1] = this.spcmn[0].visual[mid - 1].replaceAt(mid - 1, "\\#/");
    }

    this.spcmn[0].updateDisplay();
  },

  tick: function () {
    this.moneyTimer--;
    if (this.moneyTimer < 0) {
      this.moneyTimer = this.moneyDelay;
      this.money += this.payday;
      this.updateDisplay();
    }
  },

  updateDisplay: function () {
    $("#money").text("$" + this.money);
  }
};