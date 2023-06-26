var player = {
  spcmn: [],
  activeSpcmn: 0,
  money: 0,
  payday: 1,
  moneyTimer: 0,
  moneyDelay: 10,

  init: function () {
    if (this.spcmn.length < 1)
      this.addSpecimen();
  },

  load: function (data) {
    var idx = this.spcmn.length;
    this.addSpecimen();
    this.spcmn[idx].visual = data.v;
    this.spcmn[idx].stats = data.s;
    this.spcmn[idx].updateDisplay();
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

  boost: function (enemy) {
    var plyr = player.getActiveSpcmn();
    plyr.mutate();

    // INCREASE OPPOSITE STATS
    /* Brains v Brawn */
    if (enemy.stats.strength > enemy.stats.intelligence) { this.statIncFormula(enemy.stats, plyr.stats, "intelligence") }
    else { this.statIncFormula(enemy.stats, plyr.stats, "strength") }

    /* Consideration vs Reflex*/
    if (enemy.stats.wisdom > enemy.stats.dexterity) { this.statIncFormula(enemy.stats, plyr.stats, "dexterity") }
    else { this.statIncFormula(enemy.stats, plyr.stats, "wisdom") }

    /* Structure vs Charm */
    if (enemy.stats.constitution > enemy.stats.charisma) { this.statIncFormula(enemy.stats, plyr.stats, "charisma") }
    else { this.statIncFormula(enemy.stats, plyr.stats, "constitution") }
  },

  statIncFormula: function (enemyStats, playerStats, stat) {
    //playerStats[stat]++;
    // var diff = enemyStats[stat] - playerStats[stat];
    // if (diff < 0) diff = 0;
    // return diff / ((playerStats.level + enemyStats.level) / 2);
  },

  statInc: function (stat) {
    var plyr = player.getActiveSpcmn();
    plyr.mutate();
    plyr.stats[stat]++;
    plyr.stats.level++;
  },

  levelUp: function () {
    var tmp = batman(0, 5);

    switch (tmp) {
      case 0: player.statInc('intelligence'); break;
      case 1: player.statInc('strength'); break;
      case 2: player.statInc('wisdom'); break;
      case 3: player.statInc('dexterity'); break;
      case 4: player.statInc('charisma'); break;
      case 5:
      default: player.statInc('constitution');
    }

    var cloneMulti = 4;
    if (player.getHighestLevel() >= cloneMulti ^ store.stock.clone)
      store.addStock("clone");
  },

  getStat: function (statName) {
    return player.spcmn[player.activeSpcmn].getStat(statName);
  },

  getHighestStat: function (statName) {
    var highest = 0;
    for (var s in player.spcmn) {
      if (highest < player.spcmn[s].getStat(statName))
        highest = player.spcmn[s].getStat(statName);
    }
    return highest;
  },

  getHighestLevel: function () {
    var highest = 0;
    for (var s in player.spcmn) {
      if (highest < player.spcmn[s].stats.level)
        highest = player.spcmn[s].stats.level;
    }
    return highest;
  },

  getVisual: function () {
    if (!player.activeSpcmn) player.activeSpcmn = 0;
    return player.spcmn[player.activeSpcmn].getVisual();
  },

  getActiveSpcmn: function () {
    return player.spcmn[player.activeSpcmn];
  },

  updateDisplay: function () {
    $("#money").text("$" + this.money);
  }
};