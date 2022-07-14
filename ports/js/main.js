var main = {
	init: function () {
		ports.getRandom();

		$(".btnSumbit").on('click', function () {
			const correct = ports.checkAnswer();
			answerEvent(correct);
			if (correct) {
				$("#userInput").val("");
				ports.getRandom();
			}
		});

		$(".btnSkip").on('click', function () {
			$("#userInput").val("");
			main.alrt(`Port(s) ${ports.curr.ports.join(",")} are used for ${ports.curr.protocol}.`);
			ports.getRandom();
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

	$("#userInput").css('background-color', clr);
	setTimeout(() =>
		$("#userInput").css('background-color', '#333')
		, 500
	);
}