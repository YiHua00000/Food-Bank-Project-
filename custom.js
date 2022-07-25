/*
  file name : custom.js
*/

$(function() {
  // This button will increment the value
  $('.qtyplus').click(function(e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr('field');
    // Get its current value
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    // If is not undefined
    if (!isNaN(currentVal)) {
      // Increment
      $('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
      // Otherwise put a 0 there
      $('input[name=' + fieldName + ']').val(0);
    }
  });
  // This button will decrement the value till 0
  $(".qtyminus").click(function(e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr('field');
    // Get its current value
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    // If it isn't undefined or its greater than 0
    if (!isNaN(currentVal) && currentVal > 0) {
      // Decrement one
      $('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
      // Otherwise put a 0 there
      $('input[name=' + fieldName + ']').val(0);
    }
  });
});

(function($) {
	"use strict";
	
	/*==================================================
        wow
	  ===================================================*/
		new WOW().init();
	/*==================================================
        Slider
	 ===================================================*/
	 $('.slider').slick({
		//dots: true,
		infinite: true,
		centerMode: true,
		centerPadding: '12%',
		slidesToShow: 4,
		prevArrow: false,
    	nextArrow: false,
		autoplay: true,
  		autoplaySpeed: 2000,
		speed: 500,
		responsive: [
		     {
			  	breakpoint: 1200,
			    settings: {
				slidesToShow: 3
			  }
			},
				{
			  	breakpoint: 992,
			    settings: {
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			  }
			}
		]
	});
	
	/*==================================================
        Sidebar
	 ===================================================*/
	 $("#menu-close").click(function(e) {
		e.preventDefault();
		$("#sidebar").toggleClass("active");
	  });
	  $("#top-menu").click(function(e) {
		e.preventDefault();
		$(this).toggleClass('collapsed');
		$("#sidebar").toggleClass("active");
	  });
	  
	
	/*==================================================
        Toggle
	 ===================================================*/
	 
	 $(".navbar-toggle").on("click", function() {
        $(this).toggleClass("active");
        $("#header").toggleClass("head-add");
    });
	
	/*==================================================
        fixed menu
	  ===================================================*/
		$(window).on('scroll', function () {
			if ($(window).scrollTop() > 50) {
				$('.top-head').addClass('fixed-menu');
			} else {
				$('.top-head').removeClass('fixed-menu');
			}
		});
		
	/*==================================================
		Select2
	===================================================*/
	
		$(".select2").select2();
	
	
	
	/*==================================================
        selectpicker 
	 ===================================================*/
		$('.selectpicker').selectpicker();
	
	
	
	
	
	
	
})(jQuery);


