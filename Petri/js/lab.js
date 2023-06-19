var lab = {
	dishes: [],

	init: function () {
		$("#btnLab").show();
		$("#btnLab").on('click', function () {
			$(".mainBarItem").hide();
			$(".lab").toggle();
			main.labID = "";
		});
		$(".slideArrow").on('click', function () {
			console.log("TODO")
			// Get side
			// Change specimen visual
		});

		if (this.dishes.length <= 0)
			this.addDish();

		this.updateDisplay();
	},

	tick: function () {
		// TODO
	},

	addDish: function () {
		this.dishes.push({
			food: 0,
			type: 0,
			spcmn: ""
		})

		this.updateDisplay();
	},

	getDishVisual: function (idx) {
		return "DISH-" + idx
	},

	updateDisplay: function () {
		var tmpCritters = "";
		for (var s in player.spcmn) {
			tmpCritters += "<div class='critter'>" + player.spcmn[s].getVisual() + "</div>"
		}
		$('#microscope').html(tmpCritters);

		var tmpDishes = "";
		for (var d in this.dishes) {
			tmpDishes += "<div class='labDish'>" + this.getDishVisual(d) + "</div>"
		}
		$('#labDishes').html(tmpDishes);
	},
};