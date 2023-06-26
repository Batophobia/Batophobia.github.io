var lab = {
	selectedFood: "",

	init: function () {
		$("#btnLab").show();
		$("#btnLab").on('click', function () {
			$(".mainBarItem").hide();
			lab.updateDisplay();
			$(".lab").toggle();
		});

		$(".slideArrow").on('click', function () {
			player.selectSpcmn(parseInt($(this).attr('dir')))
		});

		$("#labPellets").on('click', '.labFood', function () {
			lab.selectFood(this);
		});

		$("#labFeedBtn").on('click', function () {
			lab.feed();
		});

		this.updateDisplay();
	},

	tick: function () {
		// TODO
	},

	selectFood: function (elem) {
		$(".labFood").removeClass("selected");
		if (items.pellets[$(elem).attr("pType")].num < 1) {
			lab.selectedFood = "";
			return;
		}

		$(elem).addClass("selected");
		lab.selectedFood = $(elem).attr("pType");
		$("#labFeedBtn").show();
	},

	feed: function () {
		if (!items.pellets[lab.selectedFood] || items.pellets[lab.selectedFood].num < 1) return;
		items.usePellet(lab.selectedFood);

		if (items.pellets[lab.selectedFood].num < 1) {
			lab.selectedFood = "";
			$(".labFood").removeClass("selected");
			$("#labFeedBtn").hide();
		}
		this.updateDisplay();
	},

	updateDisplay: function () {
		var tmpCritters = "";
		//for (var s in player.spcmn) {
		tmpCritters += "<div class='critter'>" + player.getVisual() + "</div>"
		//}
		$('#microscope').html(tmpCritters);

		var tmpFood = "";
		for (var p in items.pellets) {
			if (store.stock[p].unlocked)
				tmpFood += "<div class='labFood' pType='" + p + "'>" + items.getPelletDisplay(p) + "</div>"
		}
		$('#labPellets').html(tmpFood);
	},
};