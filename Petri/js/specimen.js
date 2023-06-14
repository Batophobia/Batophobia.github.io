var speciminVisualSize = 25;

var specimen = {
  stats: {
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
  visual: null,
  displayValues: [".',-ov", "_=^:;O8", "/\\|()[]", "{}@%#X$"],

  init: function () {
    if (!this.visual) {
      this.visual = [];
      var temp = "";
      for (i = 0; i < speciminVisualSize; i++) {
        temp += " ";
      }
      for (i = 0; i < speciminVisualSize; i++) {
        this.visual[i] = temp;
      }
      mid = Math.floor(speciminVisualSize / 2);
      /*
          /#\
          #@#
          \#/
      */
      this.visual[mid - 1] = this.visual[mid - 1].replaceAt(mid - 1, "/#\\");
      this.visual[mid] = this.visual[mid - 1].replaceAt(mid - 1, "###");
      this.visual[mid + 1] = this.visual[mid - 1].replaceAt(mid - 1, "\\#/");
    }

    this.updateDisplay();
  },

  tick: function () {
    // TODO
  },

  mutate: function () {
    var edges = Object.values(this.getEdges());
    if (!edges.length) return;

    pos = edges[batman(0, edges.length - 1)]
    char = this.displayValues[0][batman(0, this.displayValues[0].length - 1)]
    this.visual[pos[0]] = this.visual[pos[0]].replaceAt(pos[1], char);

    this.updateDisplay();
  },

  getEdges: function () {
    possibilities = {}
    for (i = 0; i < speciminVisualSize; i++) {
      matches = specimen.visual[i].match(/\s\S/gi)
      if (matches != null) {
        for (m in matches) {
          idx = specimen.visual[i].indexOf(matches[m])
          if (idx > 0)
            possibilities[i + ',' + idx] = [i, idx];
        }
      }

      matches = specimen.visual[i].match(/\S\s/gi)
      if (matches != null) {
        for (m in matches) {
          idx = specimen.visual[i].indexOf(matches[m]) + 1
          if (idx < speciminVisualSize)
            possibilities[i + ',' + idx] = [i, idx];
        }
      }
    }
    return possibilities;
  },

  updateDisplay: function () {
    $('.specimen').text(this.visual.join('\n'));
  },
};