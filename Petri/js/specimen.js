var speciminVisualSize = 25;

var specimen = {
  stats: {
    level: 1,
    // Brains v Brawn
    intelligence: 1,
    strength: 1,
    // Consideration vs Reflex
    wisdom: 1,
    dexterity: 1,
    // Structure vs Charm
    constitution: 1,
    charisma: 1,
  },
  curHP: 1,
  maxHP: 1,
  dishLoc: -1,
  visual: [],
  displayValues: [".',-ov", "_=^:;O8", "/\\|()[]", "{}@%#X$"],
  innerOdds: 75,

  init: function () {
    if (!this.visual)
      this.visual = [];

    // Create visual
    var temp = "";
    for (var i = 0; i < speciminVisualSize; i++) {
      temp += " ";
    }
    for (var i = 0; i < speciminVisualSize; i++) {
      this.visual[i] = temp;
    }
    mid = Math.floor(speciminVisualSize / 2);
    /*
        /#\
        #@#
        \#/
    */
    this.visual[mid - 1] = this.visual[mid - 1].replaceAt(mid - 1, "/#\\");
    this.visual[mid] = this.visual[mid - 1].replaceAt(mid - 1, "#@#");
    this.visual[mid + 1] = this.visual[mid - 1].replaceAt(mid - 1, "\\#/");

    this.updateHP();
    this.updateDisplay();
  },

  tick: function () {
    // TODO
  },

  getStat: function (statName) {
    switch (statName) {
      case "int":
      case "intelligence":
        return this.stats.intelligence;
      case "str":
      case "strength":
        return this.stats.strength;
      case "wis":
      case "wisdom":
        return this.stats.wisdom;
      case "dex":
      case "dexterity":
        return this.stats.dexterity;
      case "con":
      case "constitution":
        return this.stats.constitution;
      case "cha":
      case "charisma":
        return this.stats.charisma;
    }
    return 0;
  },

  mutate: function () {
    var positions = Object.values(this.getPositions());
    if (!positions.length) return;

    if (batman(0, 100) < this.innerOdds) // Not exact odds, but that's fine
      if (positions.filter(p => p[2] != 0).length)
        positions = positions.filter(p => p[2] != 0)

    pos = positions[batman(0, positions.length - 1)]
    char = this.displayValues[0][batman(0, this.displayValues[0].length - 1)]
    if (pos[2] != " ") {
      valSet = 0;
      for (; this.displayValues[valSet++].indexOf(pos[2]) < 0;);
      char = this.displayValues[valSet][batman(0, this.displayValues[valSet].length - 1)]
    }
    this.visual[pos[0]] = this.visual[pos[0]].replaceAt(pos[1], char);

    this.updateDisplay();
  },

  updateHP: function () {
    this.maxHP = 10 * Math.sqrt(this.stats.constitution)
    this.curHP = this.maxHP;
  },

  takeDamage: function (amt, type) {
    switch (type.toLowerCase()) {
      case "p":
      case "phy":
      case "phys":
      case "physical":
        amt = this.damageFormula(amt, this.stats.strength);
        break;
      case "m":
      case "mag":
      case "magic":
      case "magical":
        amt = this.damageFormula(amt, this.stats.intelligence);
        break;
    }

    this.curHP -= amt;
  },

  damageFormula: function (att, def) {
    return 2 * (att + def) / def - 1;
  },

  getPercentHP: function () {
    return Math.ceil(100 * this.curHP / this.maxHP);
  },

  getPositions: function () {
    possibilities = {}
    for (var i = 0; i < speciminVisualSize; i++) {
      // Left Edges
      matches = this.visual[i].match(/\s\S/gi)
      if (matches != null) {
        for (var m in matches) {
          idx = this.visual[i].indexOf(matches[m])
          if (idx > 0)
            possibilities[i + ',' + idx] = [i, idx, " "];
        }
      }

      // Right Edges
      matches = this.visual[i].match(/\S\s/gi)
      if (matches != null) {
        for (var m in matches) {
          idx = this.visual[i].indexOf(matches[m]) + 1
          if (idx < speciminVisualSize)
            possibilities[i + ',' + idx] = [i, idx, " "];
        }
      }

      matches = this.visual[i].match(/\S/gi)
      if (matches != null) {
        for (var m in matches) {
          // Will only match first when there's dupes, but don't care
          idx = this.visual[i].indexOf(matches[m])

          // Mid Upgrade
          if (this.displayValues[this.displayValues.length - 1].indexOf(matches[m]) < 0) {
            if (idx < speciminVisualSize)
              possibilities[i + ',' + idx] = [i, idx, this.visual[i][idx]];
          }

          // Top Edge
          if (i > 0 && this.visual[i - 1][idx] == " ") {
            possibilities[i + ',' + idx] = [i - 1, idx, " "];
          }
          // Bottom Edge
          if (i < speciminVisualSize - 1 && this.visual[i + 1][idx] == " ") {
            possibilities[i + ',' + idx] = [i + 1, idx, " "];
          }
        }
      }
    }
    return possibilities;
  },

  getVisual: function () {
    return this.visual.join('\n');
  },

  updateDisplay: function () {
    switch (this.dishLoc) {
      case 0: $('#enemySpecimenT').text(this.getVisual()); break;
      case 1: $('#enemySpecimenL').text(this.getVisual()); break;
      case 2: $('#enemySpecimenR').text(this.getVisual()); break;
      default: $('#playerSpecimen').text(this.getVisual()); break;
    }
  },
};