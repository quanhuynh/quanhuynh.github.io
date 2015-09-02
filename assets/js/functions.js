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

$(window).scroll(function() {

	var wScroll = $(this).scrollTop();

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    
	} else {
		$('.title-container').css({
    	'transform' : 'translate(0px, ' + wScroll/3 + '%)'
  	});
		
		if(wScroll > $('#window-about').offset().top - $(window).height()){
	    var opacity = (wScroll - $('#window-about').offset().top + 400) / (wScroll / 2)
	    $('#tint-about').css({'opacity': opacity})
	  }

	  if(wScroll > $('#window-work').offset().top - $(window).height()){
	    var opacity = (wScroll - $('#window-work').offset().top + 500) / (wScroll / 3.6)
	    $('#tint-work').css({'opacity': opacity})
	  }
		
	}

})
