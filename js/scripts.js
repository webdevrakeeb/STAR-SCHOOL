(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});

		//HUMBARGER ACTIVATION
		jQuery(".hamburger").click(function(){
			jQuery(this).toggleClass("is-active");
		});
		jQuery(".btn-close").click(function(){
			jQuery('.hamburger').removeClass("is-active");
		});


		//MOBILE SUB MENU ACTIVATION
		jQuery('.sub-btn').click(function(){
			jQuery(this).next('.mobile-submenu').slideToggle();
		});

		//TURSTED SLIDER ACTIVATION
		$('.trusted-carousel').owlCarousel({
			items: 3,
			margin: 80,
			autoplay: true,
			loop: true,
			autoplayTimeout: 3000,
			smartSpeed: 1000,
			responsive : {
				1200: {
					items: 6
				},
				992: {
					items: 5
				},
				768: {
					items: 4
				},
				500: {
					items: 3
				},
				0: {
					items: 2
				}


			}
		});


		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);