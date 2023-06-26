var items = {
	pellets: {
		alpha: { display: "α", num: 0 }, // INT
		beta: { display: "β", num: 0 }, // CON
		gamma: { display: "γ", num: 0 }, // STR
		delta: { display: "δ", num: 0 }, // DEX
		epsilon: { display: "ε", num: 0 }, // WIS
		omega: { display: "ω", num: 0 }, // CHA
	},
	delay: 1,
	maxDelay: 10,

	init: function () {
		this.delay = this.maxDelay * 10;
	},

	tick: function () {
		if (--this.delay > 0) return;
		this.delay = this.maxDelay * 10;

		var foodList = Object.keys(this.pellets);
		var food = foodList[batman(0, foodList.length - 1)];

		if (store.stock[food].unlocked)
			store.addStock(food);
	},

	usePellet: function (pType) {
		if (!this.pellets[pType] || this.pellets[pType].num < 1) return;
		this.pellets[pType].num--;

		var stat = this.pTypeToStat(pType);
		if (stat == "") return;
		player.statInc(stat);
	},

	pTypeToStat: function (pType) {
		switch (pType) {
			case "alpha": return "intelligence";
			case "beta": return "constitution";
			case "gamma": return "strength";
			case "delta": return "dexterity";
			case "epsilon": return "wisdom";
			case "omega": return "charisma";
			default: return "";
		}
	},

	getPelletDisplay: function (pType) {
		if (!items.pellets[pType]) return;

		return items.pellets[pType].display + " " + items.pellets[pType].num;
	},
};