$(document).ready(function() {
	slickSlider();
	testimonialsSlider();
});

function slickSlider() {
	$('.sliderShow').slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll:1,
		autoplay: true,
		autoplaySpeed: 7000,
		prevArrow: '<img class="prevArrow" src="Img/prev.png">',
		nextArrow: '<img class="nextArrow" src="Img/next.png">',
	});
};


var num = 1;

function testimonialsSlider() {

	if(num + 1 > 2) {
		num = 0;
	}
	num++;

	$('.testi_h_p p').hide();
	$('.testi_h_p p').eq(num - 1).show();
}


setInterval(function() {
	testimonialsSlider();
},5000);