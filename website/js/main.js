(function ($) {
	"use strict";
	$(window).on('load', function () {
		$('#preloader').fadeOut();
		$(window).on('scroll', function () {
			if ($(window).scrollTop() > 200) {
				$('.scrolling-navbar').addClass('top-nav-collapse');
			} else {
				$('.scrolling-navbar').removeClass('top-nav-collapse');
			}
		});
		jQuery('#clock').countdown('2019/03/10', function (event) {
			var $this = jQuery(this).html(event.strftime('' +
				'<div class="time-entry days"><span>%-D</span> Days</div> ' +
				'<div class="time-entry hours"><span>%H</span> Hours</div> ' +
				'<div class="time-entry minutes"><span>%M</span> Minutes</div> ' +
				'<div class="time-entry seconds"><span>%S</span> Seconds</div> '));
		});

		$('.mobile-menu').slicknav({
			prependTo: '.navbar-header',
			parentTag: 'liner',
			allowParentLinks: true,
			duplicate: true,
			label: '',
		});
		var wow = new WOW({
			mobile: false
		});
		wow.init();
		$('.lightbox').nivoLightbox({
			effect: 'fadeScale',
			keyboardNav: true,
		});
		$('.navbar-nav').onePageNav({
			currentClass: 'active'
		});
		var offset = 200;
		var duration = 500;
		$(window).scroll(function () {
			if ($(this).scrollTop() > offset) {
				$('.back-to-top').fadeIn(400);
			} else {
				$('.back-to-top').fadeOut(400);
			}
		});
		$('.back-to-top').on('click', function (event) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: 0
			}, 600);
			return false;
		});
		$(".page-scrool").on("click",function(event) {
    	console.log("tese");
    			if ($(".slicknav_btn").css('display')!='none')
        	    $(".slicknav_btn").click();
		});

	});
}(jQuery));