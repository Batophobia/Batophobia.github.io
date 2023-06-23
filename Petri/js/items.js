var items = {
	init: function () {
		$("#btnItems").show();
		$("#btnItems").on('click', function () {
			$(".mainBarItem").hide();
			$(".items").toggle();
			main.itemID = "";
		});

		this.updateDisplay();
	},

	updateDisplay: function () {
		var htmlInv = "";
		$("#inventory").html(htmlInv);
	}
};