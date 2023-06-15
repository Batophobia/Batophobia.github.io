var items = {
	init: function () {
		$("#btnItems").show();
		$("#btnItems").on('click', function () {
			$(".mainBarItem").hide();
			$(".items").toggle();
			main.itemID = "";
		});
	},
};