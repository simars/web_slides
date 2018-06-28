/**
 * @author Simar Singh
 */
var currentSlide = 0;

$(function(){
	$(document).keyup(function(e) {
		 if(e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 32) next();
		 else if(e.keyCode == 37 || e.keyCode == 38) back();
	});
	
	$('.slides').swipe({
		swipe:function(event, direction, distance, duration, fingerCount) {
			switch(direction) {
				case "left":
					next();
					break;
				case "right":
					back();
					break;	
			}
		}
	});

	$('.next').click(function (e) {
		e.preventDefault();
    e.stopPropagation();
		next();
  });

  $('.previous').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
  	back();
  });

	initSlides();
});

function initSlides(){
	$('section').eq(currentSlide).addClass('active');
}

function next(){
	goto(currentSlide+1);
}

function back(){
	goto(currentSlide-1);
}

function goto(n){
	if(n > -1 && n < $('section').length) currentSlide = n;
	else return;
	$('section').removeClass('active').eq(currentSlide).addClass('active');
}


