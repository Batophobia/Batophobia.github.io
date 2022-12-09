var settings = {
	options: {
		useName: false,
		randomize: true
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
		$("#option1").prop('checked', this.options.useName);
		$("#optionRandom").prop('checked', this.options.randomize);
	},

	saveVals: function () {
		this.options.useName = $("#option1").prop('checked');
		this.options.randomize = $("#optionRandom").prop('checked');
		this.updateUI();
		this.save();
	},

	storageName: "ToolsSave",
	save: function () {
		localStorage[this.storageName] = JSON.stringify(this.options);
	},

	load: function () {
		if (this.storageName in localStorage) {
			this.options = JSON.parse(localStorage[this.storageName]);
		}
		this.updateUI();
	},

	updateUI: function () {
		if (this.options.useName) {
			$(".side1").hide();
			$(".side2").show();
		} else {
			$(".side2").hide();
			$(".side1").show();
		}
		cards.getNext();
	}
};
