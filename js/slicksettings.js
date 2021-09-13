$('.portfolio-carusel').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	mobileFirst: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			},
		},

		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			},
		},
	],
});
