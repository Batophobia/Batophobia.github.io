$(window).scroll(function() {
	var intScroll=$(window).scrollTop();
	if (intScroll > 60) {
		$('.banner h2').css('display', 'none');
		$('.banner .info').css('display', 'block');
	} else {
		$('.banner h2').css('display', 'block');
		$('.banner .info').css('display', 'none');
	}
	$("#anim").css({bottom: (intScroll*2), left: (intScroll*2.5)});
});