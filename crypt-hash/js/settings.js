var settings = {
	options: {
		askBlock: true,
		askKey: true,
		askType: true,
		askSymmetric: true
	},

	init: function () {
		this.load();

		$("#btnSettings").on('click', function () {
			settings.setVals();
			$("#settings").toggle();
		});

		$(".modalClose").on('click', function () {
			$("#settings").hide();
		});

		$(".btnSaveSettings").on('click', function () {
			settings.saveVals();
			$("#settings").hide();
		});
	},

	setVals: function () {
		$("#option1").prop('checked', this.options.askSymmetric);
		$("#option2").prop('checked', this.options.askType);
		$("#option3").prop('checked', this.options.askKey);
		$("#option4").prop('checked', this.options.askBlock);
	},

	saveVals: function () {
		this.options.askSymmetric = $("#option1").prop('checked');
		this.options.askType = $("#option2").prop('checked');
		this.options.askKey = $("#option3").prop('checked');
		this.options.askBlock = $("#option4").prop('checked');

		this.updateUI();
		this.save();
	},

	save: function () {
		localStorage["AlgoSave"] = JSON.stringify(this.options);
	},

	load: function () {
		if ('AlgoSave' in localStorage) {
			this.options = JSON.parse(localStorage['AlgoSave']);
		}
		this.updateUI();
	},

	updateUI: function () {
		this.options.askBlock ? $("#blockInput").show() : $("#blockInput").hide();
		this.options.askKey ? $("#sizeInput").show() : $("#sizeInput").hide();
		this.options.askType ? $("#typeInput").show() : $("#typeInput").hide();
		this.options.askSymmetric ? $("#symmetricInput").show() : $("#symmetricInput").hide();
	}
};
