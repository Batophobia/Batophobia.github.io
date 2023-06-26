var store = {
	stock: {
		alpha: { // INT
			name: "α Pellet",
			qty: 0,
			cost: 100,
			sold: 0,
			unlocked: false,
			onBuy: function () { store.buyPellet("alpha") },
			setPrice: function () { this.cost = (this.sold + 1) * 30 }
		},
		beta: { // CON
			name: "β Pellet",
			qty: 0,
			cost: 100,
			sold: 0,
			unlocked: false,
			onBuy: function () { store.buyPellet("beta") },
			setPrice: function () { this.cost = (this.sold + 1) * 75 }
		},
		gamma: { // STR
			name: "γ Pellet",
			qty: 0,
			cost: 100,
			sold: 0,
			unlocked: false,
			onBuy: function () { store.buyPellet("gamma") },
			setPrice: function () { this.cost = (this.sold + 1) * 30 }
		},
		delta: { // DEX
			name: "δ Pellet",
			qty: 0,
			cost: 100,
			sold: 0,
			unlocked: false,
			onBuy: function () { store.buyPellet("delta") },
			setPrice: function () { this.cost = (this.sold + 1) * 100 }
		},
		epsilon: { // WIS
			name: "ε Pellet",
			qty: 0,
			cost: 100,
			sold: 0,
			unlocked: false,
			onBuy: function () { store.buyPellet("epsilon") },
			setPrice: function () { this.cost = (this.sold + 1) * 80 }
		},
		omega: { // CHA
			name: "ω Pellet",
			qty: 0,
			cost: 1000,
			sold: 0,
			unlocked: false,
			onBuy: function () { store.buyPellet("omega") },
			setPrice: function () { this.cost = (this.sold + 1) * 200 }
		},
		clone: {
			name: "Clone",
			qty: 0,
			cost: 150,
			sold: 0,
			unlocked: false,
			onBuy: function () { store.buyClone() },
			setPrice: function () { this.cost = 150 * (this.sold + 5) ^ 4 }
		},
	},

	init: function () {
		$("#btnStore").on('click', function () {
			store.updateDisplay();
			$(".mainBarItem").hide();
			$(".store").toggle();
		});

		$("#stock").on('click', '.item', function () {
			store.buy($(this).attr('itm'))
		});

		this.updateDisplay();
	},

	tick: function () {
		// TODO
	},

	addStock: function (itm) {
		$("#btnStore").show();
		if (!store.stock[itm].unlocked)
			main.alrt("New item added to store")
		//else if (!store.stock[itm].qty == 0)
		//	main.alrt(store.stock[itm].name + " restocked")
		store.stock[itm].unlocked = true;
		store.stock[itm].qty++;

		this.updateDisplay();
	},

	addStockIfNone: function (itm) {
		if (store.stock[itm].qty > 0) return;

		store.addStock(itm);
	},

	buyPellet: function (pType) {
		if (!store.stock[pType]) return;

		items.pellets[pType].num++;
		main.alrt("Purchased " + store.stock[pType].name);
	},

	buyClone: function () {
		player.addSpecimen();
		main.alrt("Purchased " + store.stock.clone.name);
		lab.updateDisplay();
	},

	buy: function (itm) {
		if (store.stock[itm].qty < 1 || !store.stock[itm].unlocked) {
			main.alrt(store.stock[itm].name + " is out of stock");
			return;
		}

		if (store.stock[itm].cost > player.money) {
			main.alrt("Insufficient funds to buy " + store.stock[itm].name);
			return;
		}

		player.money -= store.stock[itm].cost;
		store.stock[itm].qty--;
		store.stock[itm].sold++;
		store.stock[itm].onBuy();
		store.updateDisplay();
	},

	addPellet: function (stats) {
		var highest = "wisdom";
		for (var s in stats) {
			if (stats[highest] < stats[s])
				highest = s
		}

		switch (highest) {
			case "intelligence": this.addStockIfNone("alpha"); break;
			case "strength": this.addStockIfNone("gamma"); break;
			case "wisdom": this.addStockIfNone("epsilon"); break;
			case "dexterity": this.addStockIfNone("delta"); break;
			case "constitution": this.addStockIfNone("beta"); break;
			case "charisma": this.addStockIfNone("omega"); break;
		}
	},

	updateCosts: function () {
		for (var itm in this.stock) {
			this.stock[itm].setPrice();
			this.stock[itm].cost = Math.round(this.stock[itm].cost);
			var discount = 2 * Math.sqrt(player.getHighestStat("cha") - 1);
			if (discount > 100) discount = 100;
			this.stock[itm].cost -= this.stock[itm].cost * (discount / 100)
		}
	},

	updateDisplay: function () {
		this.updateCosts();
		var htmlStock = "";

		for (var item in this.stock) {
			if (!this.stock[item].unlocked) continue;

			htmlStock += "<div class='item " + (this.stock[item].qty > 0 ? "enabled" : "disabled") + "' itm='" + item + "'>"
			htmlStock += "<span class='qty'>" + this.stock[item].qty + "</span>"
			htmlStock += "<span class='name'>" + this.stock[item].name + "</span>"
			htmlStock += "<span class='price'>$" + this.stock[item].cost + "</span>"
			htmlStock += "</div>"
		}

		$("#stock").html(htmlStock);
	}
};