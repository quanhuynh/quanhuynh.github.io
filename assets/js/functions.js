$(function() {
	smoothScroll(1000);
	workContainer();
	workLoad();
})

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {
		var target = $( $(this).attr('href') );

		if (target.length) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, duration);
		}
		
	});
}

function workContainer() {
	$('.thumbnail-unit').click(function() {
		$('.work-slider').css('left', '-100%')
		$('.work-container').show();
	});
	$('.work-return').click(function() {
		$('.work-slider').css('left', '0%')
		$('.work-container').hide(500);
	});
}

function workLoad() {
	$.ajaxSetup({ cache: true });
	$('.thumbnail-unit').click(function() {
		var $this = $(this),
				newTitle = $this.find('strong').text(),
				newPath = $this.data('folder'),
				newHTML = '../../work/'+ newPath +'.html';
		$('.project-load').load(newHTML);
		$('.project-title').text(newTitle);

	})


}

//implementation of nicescroll.js
$(document).ready(
  function() { 
    $("html").niceScroll();
  }
);

$("#mydiv").getNiceScroll().hide();