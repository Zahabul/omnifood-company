jQuery(document).ready(function($) {
	/* For the sticky navigation */
	$('.js--section-features').waypoint(function(direction){
		if(direction == 'down'){
			$('nav').addClass('sticky');
		}else {
			$('nav').removeClass('sticky');
		}
	},{
		offset: '60px'
	});

	/* Scroll button */
	$('.js--scroll-to-plans').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
	});
	$('.js--scroll-to-start').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
	});

	/* Scroll */
	$('a[href*="#"]')
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      if (target.length) {
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000, function() {
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) {
	            return false;
	          } else {
	            $target.attr('tabindex','-1'); 
	            $target.focus();
	          };
	        });
	      }
	    }
	  });

	  /* Animation CSS */

	  $('.js--wp-1').waypoint(function(direction){
	  	$('.js--wp-1').addClass('animate__animated animate__fadeIn');
	  }, {
	  	offset: '70%'
	  });
	  $('.js--wp-2').waypoint(function(direction){
	  	$('.js--wp-2').addClass('animate__animated animate__backInUp');
	  }, {
	  	offset: '70%'
	  });
	  $('.js--wp-3').waypoint(function(direction){
	  	$('.js--wp-3').addClass('animate__animated animate__fadeInUp');
	  }, {
	  	offset: '70%'
	  });
	  $('.js--wp-4').waypoint(function(direction){
	  	$('.js--wp-4').addClass('animate__animated animate__fadeInDown');
	  }, {
	  	offset: '70%'
	  });
	  $('.js--wp-5').waypoint(function(direction){
	  	$('.js--wp-5').addClass('animate__animated animate__zoomIn');
	  }, {
	  	offset: '70%'
	  });
	  $('.js--wp-6').waypoint(function(direction){
	  	$('.js--wp-6').addClass('animate__animated animate__lightSpeedInLeft');
	  }, {
	  	offset: '70%'
	  });

	 
	/* Mobile Nav*/
	$('.js--nav-icon').click(function(){
		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon ion-icon').attr('name');

		if(icon == 'menu-outline'){
			$('.js--nav-icon ion-icon').attr('name', 'close-outline' );
		}else if (icon == 'close-outline'){
			$('.js--nav-icon ion-icon').attr('name', 'menu-outline' );
		}

		nav.slideToggle(200);
	});


});