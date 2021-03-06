$(function() {
	//open the menu
	$('#hamburger').click(function() {

		$('#content').css('min-height', $(window).height());

		$('nav').css('opacity', 1);

		//set the width of primary content container -> content should not scale while animating
		var contentWidth = $('#content').width();

		//set the content with the width that it has originally
		$('#content').css('width', contentWidth);

		//display a layer to disable clicking and scrolling on the content while menu is shown
		$('#content-layer').css('display', 'block');

		//disable all scrolling on mobile devices while menu is shown 
		$('#container').bind('touchmove', function (e) {
			e.preventDefault()
		});

		//set margin for the whole container with a jQuery UI animation
		$('#container').animate({'marginLeft':['70%', 'easeOutExpo']}, {
			duration: 700
		});

	});

	//close the menu
	$('#content-layer').click(function() {

		//enable all scrolling on mobile devices when menu is closed
		$('#container').unbind('touchmove');

		//set margin for the whole container back to original state with a jQuery UI animation
		$('#container').animate({'marginLeft':['-1', 'easeOutExpo']}, {
			duration: 700,
			complete: function() {
				$('#content').css('width', 'auto');
				$('#content-layer').css('display', 'none');
				$('nav').css('opacity', 0);
				$('#content').css('min-height', 'auto');
			}
		});

	});

});