var settings = {
	options: {
		//randomize: true
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
		// $("#optionRandom").prop('checked', this.options.randomize);
		// $("#option1").prop('checked', this.options.useAcronyms);
		// $("#option2").prop('checked', this.options.useWords);
	},

	saveVals: function () {
		//this.options.randomize = $("#optionRandom").prop('checked');
		//this.options.useAcronyms = $("#option1").prop('checked');
		//this.options.useWords = $("#option2").prop('checked');
		//this.save();
	},

	storageName: "ToolsSave",
	save: function () {
		localStorage[this.storageName] = JSON.stringify(this.options);
	},

	load: function () {
		if (this.storageName in localStorage) {
			this.options = JSON.parse(localStorage[this.storageName]);
		}
	},
};
