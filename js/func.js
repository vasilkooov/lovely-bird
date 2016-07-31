$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	$('.logo').css({
		'transform' : 'translate(0px, '+ wScroll  /2 +'%)'
	});

	$('.back-heart').css({
		'transform' : 'translate(0px, '+ wScroll  /1.4 +'%)'

	});

	$('.fore-bird').css({
		'transform' : 'translate(0px, -'+ wScroll  /38 +'%)'
	});

	if(wScroll > $('.photos').offset().top - ($(window).height() / 1.2)) {

		$('.photos img').each(function(i){

			setTimeout(function(){
				$('.photos img').eq(i).addClass('is-showing');
			}, 150 * (i+1));

		});
	}

	if(wScroll > $('.large-window').offset().top - $(window).height()){
	
		$('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});
	
		var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 8)

		$('.window-tint').css({'opacity': opacity})


	}


});