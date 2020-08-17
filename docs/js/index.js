$(document).ready(function(){
try {
 // var grid = $('.grid').packery({
 //   // options
 //   itemSelector: '.grid-item',
 //   gutter: 20
 // });  
} catch (e) {}






//- тригеры по клику
$('.year-triger-btn').on('click', function(evnTriger) {
	evnTriger.preventDefault();
	var windowWidth = $(window).outerWidth(); 

	if (($('html').hasClass('is-device-tablet')) || ($('html').hasClass('is-device-mobile')) || (windowWidth <= 1279)) {
		var parentItemTriger = $(this).closest('li'),
				mainTrigerList = $(this).closest('.last-year-triger-list');
		if(!$(parentItemTriger).hasClass('is-active')) {
			$(mainTrigerList).find('.is-active').removeClass('is-active');
			$(parentItemTriger).addClass('is-active');
		}
		else {
			$(parentItemTriger).removeClass('is-active');
		}

		evnTriger.stopPropagation()

	}

});

$(".year-triger-content").on('click', function(evnTriger){
	if (($('html').hasClass('is-device-tablet')) || ($('html').hasClass('is-device-mobile'))) {
		evnTriger.stopPropagation()
	}
});

$("body").on('click', function(){
	if (($('html').hasClass('is-device-tablet')) || ($('html').hasClass('is-device-mobile'))) {
		$('.last-year-triger-list').find('.is-active').removeClass('is-active');
	}
});




// show/hide ДЛЯ ВСЕХ УЧАСТНИКОВ ОБРАЗОВАТЕЛЬНОГО ПРОЦЕССА
$('.btn-tl-js').on('click', function(e) {   
	e.preventDefault();
	var parentList = $(this).closest('.themes-list'),
					parentItem = $(this).closest('li');

	if($(this).hasClass('is-active')) {
		$(this).removeClass('is-active');
		$(parentItem).find('.tl-link').slideUp();
	}
	else {
		var activeItem = $(parentList).find('.is-active').closest('li');
		$(activeItem).find('.tl-link').slideUp();
		$(activeItem).find('.is-active').removeClass('is-active');

		$(this).addClass('is-active');
		$(parentItem).find('.tl-link').slideDown();		
	}

});

}); //- end ready



//- таймер
function getTimeRemaining(endtime) {
		const total = Date.parse(endtime) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
		const days = Math.floor(total / (1000 * 60 * 60 * 24));
		
		return {
				total,
				days,
				hours,
				minutes,
				seconds
		};
}

function initializeClock(id, endtime) {
		var clock = document.getElementById(id);
		var daysSpan = clock.querySelector('.days');
		var hoursSpan = clock.querySelector('.hours');
		var minutesSpan = clock.querySelector('.minutes');
		var secondsSpan = clock.querySelector('.seconds');

		function updateClock() {
				var t = getTimeRemaining(endtime);

				daysSpan.innerHTML = t.days;
				hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
				minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
				secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

				if (t.total <= 0) {
						clearInterval(timeinterval);
				}
		}

		updateClock();
		var timeinterval = setInterval(updateClock, 1000);
}

//- запуск обратного отсчета
var deadline = '2020-08-31';
initializeClock('clockdiv', deadline);

function sliderInit(slider) {
 $('.' + slider).slick({
 	centerMode: true,
		variableWidth: true,
		dots: false,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		touchThreshold: 50,
 });  
}
function sliderDestroy(slider) {
 $('.' + slider).slick('unslick');
}

try {

var grid = document.querySelector('.grid');
var packeryOptions = {
   itemSelector: '.grid-item',
   gutter: 20
}


function loadPageJs() {
	var windowWidth = $(window).outerWidth(); 

		try {
			if(windowWidth >= 768 ){
				$(grid).packery( packeryOptions );
				$(grid).addClass('gridInit');
			}
			if(windowWidth <= 767 ) {
				sliderInit('participantsSlider');
			}
		} catch (e) {}
}//end loadPage
window.addEventListener("load", loadPageJs);

// participantsSlider


function resizePageJs() {
		var windowWidth = $(window).outerWidth(); 


		if(windowWidth >= 768 ) {

			if (!$(grid).hasClass('gridInit')) {
				//- remove slider for Grid ЧТО ГОВОРЯТ УЧАСТНИКИ EDCRUNCH
				sliderDestroy('participantsSlider');

				//- reInit Grid ЧТО ГОВОРЯТ УЧАСТНИКИ EDCRUNCH
				setTimeout(function(){
			  $(grid).packery( packeryOptions );
			  $(grid).addClass('gridInit');
				}, 500);

			}						

			
		}

		if(windowWidth <= 767 ) {
			if ($(grid).hasClass('gridInit')) {
				//- remove for Grid ЧТО ГОВОРЯТ УЧАСТНИКИ EDCRUNCH
			  $(grid).packery('destroy');
			  $(grid).removeClass('gridInit');

			  //- reInit slider for Grid ЧТО ГОВОРЯТ УЧАСТНИКИ EDCRUNCH
				setTimeout(function(){
			  sliderInit('participantsSlider');
				}, 500);
			  
			}			
		}		

}//end resizePageJs
window.addEventListener("resize", resizePageJs);

} catch (e) {}


AOS.init();