var settings = {
	options: {
		useAcronyms: true,
		useWords: true,
		randomize: false
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
		$("#optionRandom").prop('checked', this.options.randomize);
		$("#option1").prop('checked', this.options.useAcronyms);
		$("#option2").prop('checked', this.options.useWords);
	},

	saveVals: function () {
		this.options.randomize = $("#optionRandom").prop('checked');
		this.options.useAcronyms = $("#option1").prop('checked');
		this.options.useWords = $("#option2").prop('checked');

		if (!this.options.useAcronyms && !this.options.useWords) {
			this.options.useWords = true;
			main.alrt(`Acronyms or Words required.  Words has been enabled.`);
		}

		this.save();
	},

	save: function () {
		localStorage["AcronymSave"] = JSON.stringify(this.options);
	},

	load: function () {
		if ('AcronymSave' in localStorage) {
			this.options = JSON.parse(localStorage['AcronymSave']);
		}
	},
};
