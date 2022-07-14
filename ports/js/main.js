var main = {
	init: function () {
		ports.getRandom();

		$(".btnSumbit").on('click', function () {
			const correct = ports.checkAnswer();
			if (correct) {
				ports.getRandom();
			} else {
				$("#userInput").css('background-color', '#933');
				setTimeout(() =>
					$("#userInput").css('background-color', '#333')
					, 500
				);
			}
		});
	}
};