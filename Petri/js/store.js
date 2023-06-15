var store = {
	stock: {
	},

	init: function () {
		$("#btnStore").show();
		$("#btnStore").on('click', function () {
			$(".mainBarItem").hide();
			$(".store").toggle();
			main.storeID = "";
		});
	},

	tick: function () {
		// TODO
	},
};