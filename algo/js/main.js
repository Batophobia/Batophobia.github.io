var main = {
	init: function () {
		settings.init();

		cards.getNext();

		$(".btnSumbit").on('click', function () {
			const correct = cards.checkAnswer();
			console.log(correct);
			answerEvent(correct);
			if (correct) {
				cards.getNext();
			}
		});

		$(".btnSkip").on('click', function () {
			main.alrt(correctString(cards.curr));
			cards.getNext();
		});

		$(document).bind('keypress', function (e) {
			if (e.keyCode == 13) {
				$('.btnSumbit').trigger('click');
			}
		});
	},

	alrt: function (input) {
		var alert = $("<div class='alert'>" + input + "</div>");
		$('#alerts').append(alert);
		setTimeout(function () {
			alert.fadeOut('slow', function () {
				$(this).remove();
			});
		}, 3000);
	}
};

function answerEvent(correct) {
	let clr = "#933";
	if (correct)
		clr = "#393";

	$(".answer").css('background-color', clr);
	setTimeout(() =>
		$(".answer").css('background-color', '#333')
		, 500
	);
}