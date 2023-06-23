var store = {
	stock: {
		dish: { name: "Petri Dish", qty: 1, cost: 100, unlocked: true, onBuy: function () { store.buyDish() } },
		xray: { name: "X-Ray", qty: 1, cost: 100, unlocked: false, onBuy: function () { store.buyXRay() } },
		gamma: { name: "Gamma Ray", qty: 0, cost: 100, unlocked: true, onBuy: function () { store.buyGRay() } },
		clone: { name: "Clone", qty: 0, cost: 150, unlocked: false, onBuy: function () { store.buyClone() } },
	},

	init: function () {
		$("#btnStore").show();
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
		store.stock[itm].unlocked = true;
		store.stock[itm].qty++;
	},

	buyDish: function () {
		lab.addDish();
		store.addStock("clone");
		store.stock.dish.cost *= 2;
		main.alrt("Purchased " + store.stock.dish.name);
	},

	buyXRay: function () {
		store.stock.xray.cost *= 2;
		main.alrt("Purchased " + store.stock.xray.name);
	},

	buyGRay: function () {
		store.stock.xray.cost *= 2;
		main.alrt("Purchased " + store.stock.xray.name);
	},

	buyClone: function () {
		player.addSpecimen();
		store.stock.clone.cost *= 2;
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
		store.stock[itm].onBuy();
		store.updateDisplay();
	},

	updateDisplay: function () {
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