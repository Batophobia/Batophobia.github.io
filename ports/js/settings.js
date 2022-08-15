var settings = {
	options: {
		useNumbers: true,
		useProtocols: true,
		requireSecure: false,
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
		$("#optionNumber").prop('checked', this.options.useNumbers);
		$("#optionProtocol").prop('checked', this.options.useProtocols);
		$("#optionSecure").prop('checked', this.options.requireSecure);
	},

	saveVals: function () {
		this.options.randomize = $("#optionRandom").prop('checked');
		this.options.useNumbers = $("#optionNumber").prop('checked');
		this.options.useProtocols = $("#optionProtocol").prop('checked');
		this.options.requireSecure = $("#optionSecure").prop('checked');

		if (!this.options.useNumbers && !this.options.useProtocols) {
			this.options.useProtocols = true;
			main.alrt(`Numbers or Protocol required.  Protocol has been enabled.`);
		}

		this.save();
	},

	save: function () {
		localStorage["PortSave"] = JSON.stringify(this.options);
	},

	load: function () {
		if ('PortSave' in localStorage) {
			this.options = JSON.parse(localStorage['PortSave']);
		}
	},
};
