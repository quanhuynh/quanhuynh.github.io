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

$(window).scroll(function() {

	var wScroll = $(this).scrollTop();

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    
	} else {
		$('#name').css({
    	'transform' : 'translate(0px, ' + wScroll/2 + '%)'
  	});
	  $('#slogan').css({
	    'transform' : 'translate(0px, ' + wScroll+ '%)'
	  });
	}

	

	

/*
  if(wScroll > $('.work-slider').offset().top - $(window).height()){
    var offset = Math.min(0, wScroll - $('.work-slider').offset().top + $(window).height()-350);
    $('.left-units').css({'transform': 'translate('+offset+'px, '+ -offset*0.5 +'px)'});
    $('.right-units').css({'transform': 'translate('+Math.abs(offset)+'px, '+Math.abs(offset*0.5)+'px)'});
  }
*/

})