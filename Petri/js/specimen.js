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
  dishLoc: -1,
  visual: [],
  displayValues: [".',-ov", "_=^:;O8", "/\\|()[]", "{}@%#X$"],
  innerOdds: 75,

  init: function () {
    if (!this.visual)
      this.visual = [];

    this.updateDisplay();
  },

  tick: function () {
    // TODO
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

  updateDisplay: function () {
    switch (this.dishLoc) {
      case 0: $('#enemySpecimenT').text(this.visual.join('\n')); break;
      case 1: $('#enemySpecimenL').text(this.visual.join('\n')); break;
      case 2: $('#enemySpecimenR').text(this.visual.join('\n')); break;
      default: $('#playerSpecimen').text(this.visual.join('\n')); break;
    }
  },
};