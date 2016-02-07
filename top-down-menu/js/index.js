$(function() {
	//listen for user to click the hamburger icon,
	//if menu is closed, slide down
	//if menu is open, slide up

	$('.hamburger').on('click', function () {
	// 	if ($('.menu').hasClass('open')) {
	// 		$('.menu').removeClass('open');
	// 	} else {
	// 		$('.menu').addClass('open');
	// 	}
		$('.menu').toggleClass('open');
	});

	




});