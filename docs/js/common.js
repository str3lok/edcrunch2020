$(document).ready(function(){
try {
 // var grid = $('.grid').packery({
 //   // options
 //   itemSelector: '.grid-item',
 //   gutter: 20
 // });  
} catch (e) {}




}); //- end ready

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

