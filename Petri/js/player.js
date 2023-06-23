var player = {
  spcmn: [],
  activeSpcmn: 0,
  money: 0,
  payday: 1,
  moneyTimer: 0,
  moneyDelay: 10,

  init: function () {
    this.addSpecimen();
  },

  tick: function () {
    this.moneyTimer--;
    if (this.moneyTimer < 0) {
      this.moneyTimer = this.moneyDelay;
      this.money += this.payday;
      this.updateDisplay();
    }
  },

  addSpecimen: function () {
    var idx = this.spcmn.length;
    //if (idx < 1 || !this.spcmn[idx].visual) {
    // Clone specimen template
    this.spcmn[idx] = jQuery.extend(true, {}, specimen);
    this.spcmn[idx].dishLoc = -1;

    // Create visual
    var temp = "";
    for (var i = 0; i < speciminVisualSize; i++) {
      temp += " ";
    }
    for (var i = 0; i < speciminVisualSize; i++) {
      this.spcmn[idx].visual[i] = temp;
    }
    mid = Math.floor(speciminVisualSize / 2);
    /*
        /#\
        #@#
        \#/
    */
    this.spcmn[idx].visual[mid - 1] = this.spcmn[idx].visual[mid - 1].replaceAt(mid - 1, "/#\\");
    this.spcmn[idx].visual[mid] = this.spcmn[idx].visual[mid - 1].replaceAt(mid - 1, "#@#");
    this.spcmn[idx].visual[mid + 1] = this.spcmn[idx].visual[mid - 1].replaceAt(mid - 1, "\\#/");
    //}
    this.spcmn[idx].updateDisplay();
  },

  selectSpcmn: function (increment) {
    this.activeSpcmn += increment;
    if (this.activeSpcmn < 0)
      this.activeSpcmn = this.spcmn.length - 1
    else if (this.activeSpcmn >= this.spcmn.length)
      this.activeSpcmn = 0;
    lab.updateDisplay();
  },

  getStat: function (statName) {
    return player.spcmn[player.activeSpcmn].getStat(statName);
  },

  getVisual: function () {
    return player.spcmn[player.activeSpcmn].getVisual();
  },

  getActiveSpcmn: function () {
    return player.spcmn[player.activeSpcmn];
  },

  updateDisplay: function () {
    $("#money").text("$" + this.money);
  }
};