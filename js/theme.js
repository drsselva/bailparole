/* Counter Definition */
$.fn.divspidercounter = function( options ) {
	var settings = $.extend({
		start:  0,
		end:    100,
		easing: 'swing',
		duration: 400,
		complete: ''
	}, options );

	var thisElement = $(this);

	$({count: settings.start}).animate({count: settings.end}, {
		duration: settings.duration,
		easing: settings.easing,
		step: function() {
			var mathCount = Math.ceil(this.count);
			thisElement.text(mathCount);
		},
		complete: settings.complete
	});
};

/* Site js works */
(function ( $ ) {
	
	"use strict";
	
	var sticky_bar = $(".set-header-sticky");
	var sticky = $(sticky_bar).length ? $(sticky_bar).offset().top : 0;
	var _one_page_menu = $('.one-page-menu').length ? $('.one-page-menu') : '';
	var nav_offset = $('body').data("nav-offset");
	//var mega_menu_parent = 
	nav_offset = nav_offset ? nav_offset : 60;
	
	/* Window on Scroll Event */	
	window.onscroll = function(){ divspider_page_scroll() };
	
	/* Window Resize Event */	
	window.onresize = function(){ divspider_page_resize() };
	
	/* Window On Load Event */	
	window.onload = function(){ divspider_page_onload() };
	
	/* Document Ready */
	$(document).ready(function(){
		
		/* Mobile Menu Toggle */
		if( $(".mobile-menu-wrapper").length ){
			$(".mobile-menu-wrapper").append($("ul.site-menu").clone());
			$(".mobile-menu-wrapper").find("ul.site-menu").attr("class", "nav flex-column mobile-menu");
			$(".mobile-menu-wrapper").find(".mega-menu-parent .mega-menu > li").addClass("menu-item-has-children");
			$(".mobile-menu-wrapper").find(".menu-item-has-children").append('<a href="#" class="mobile-submenu-toggle"><span class="ti-plus"></span></a>');			
			$(".mobile-menu-wrapper").find(".menu-widget").remove();
			$(".mobile-menu-wrapper").find(".mega-menu-parent").removeClass("mega-menu-parent");
			$(".mobile-menu-wrapper").find(".sub-menu, .mega-menu, .mega-menu-child").removeClass("mega-menu-parent mega-menu mega-cols-4 sub-menu flex-column mega-menu-child").addClass("mobile-sub-menu");
			$(".mobile-menu-wrapper").find("ul.mobile-sub-menu").slideUp(0);
			$( ".mobile-menu-wrapper .mobile-menu a.mobile-submenu-toggle" ).on( "click", function(){
				$(this).parent("li.menu-item-has-children").children("ul.mobile-sub-menu").slideToggle(350);
				$(this).children("span").toggleClass("ti-plus ti-minus");
				return false;
			});
			$( ".mobile-menu-wrapper .mobile-menu li > a:not(.mobile-submenu-toggle)" ).on( "click", function(){
				$( "a.mobile-menu-toggle, .mobile-menu-wrapper" ).removeClass("active");
				return true;
			});
		}
		$( "a.mobile-menu-toggle" ).on( "click", function(){
			$( "a.mobile-menu-toggle, .mobile-menu-wrapper" ).toggleClass("active");
			return false;
		});
		
		/* Set Setion Bg */
		if( $( ".set-as-background" ).length ){
			$( ".set-as-background" ).each(function() {
				$(this).css({ "background-image" : "url("+ $(this).data("bgimg") +")" });	
			});
		}
		
		/* Topbar Toggle */
		if( $( ".set-mobile-top-sliding" ).length ){
			$( ".mobile-top-sliding" ).on( "click", function() {
				$(".set-mobile-top-sliding").toggleClass("active");
				return false;
			});
		}
		
		/* Target Scroll */
		if( $( ".target-scroll-trigger" ).length ) {
			$( ".target-scroll-trigger" ).on( "click", function(){
				var _target_ele = $(this).data("target");
				var _scroll_pos = _target_ele ? $(_target_ele).offset().top : 0;
				_scroll_pos -= $(this).data("offset") ? parseInt( $(this).data("offset") ) : 0;
				$('html,body').animate({ scrollTop : _scroll_pos }, 1000);
				return false;
			});
		}
		
		/* Search Overlay Trigger */
		if( $( ".overlay-search-trigger" ).length ) {
			$( ".overlay-search-trigger" ).on( "click", function(){
				$(".search-overlay-wrap").toggleClass("active");
				setTimeout(function(){
					$(".search-overlay-wrap").find("input").focus();
				}, 500);
				return false;
			});
		}
		
		/* Login/Register Trigger */
		if( $( ".signin-form-trigger" ).length ) {
			$( ".signin-form-trigger" ).on( "click", function(){
				$(".user-login-form-wrap").toggleClass("active");
				return false;
			});
		}
		
		/* Login Form Trigger */
		if( $( ".trigger-login-form" ).length ) {
			$( ".trigger-login-form" ).on( "click", function(){
				$(".user-login-inner").children("div").removeClass("active");
				$(".user-login-wrap").addClass("active");
				return false;
			});
		}
		
		/* Forget Form Trigger */
		if( $( ".trigger-forget-form" ).length ) {
			$( ".trigger-forget-form" ).on( "click", function(){
				$(".user-login-inner").children("div").removeClass("active");
				$(".forget-password-wrap").addClass("active");				
				return false;
			});
		}
		
		/* Register Form Trigger */
		if( $( ".trigger-register-form" ).length ) {
			$( ".trigger-register-form" ).on( "click", function(){
				$(".user-login-inner").children("div").removeClass("active");
				$(".user-registration-wrap").addClass("active");				
				return false;
			});
		}
		
		/* Secondary Menu Trigger */
		if( $( ".secondary-menu-trigger" ).length ) {
			$( ".secondary-menu-trigger" ).on( "click", function(){
				$( ".secondary-trigger-wrap .secondary-menu-trigger" ).toggleClass("active");
				$(".secondary-bar-wrap").toggleClass("active");				
				return false;
			});
		}
		
		/* Counter Calling */
		if( $( ".counter-wrapper .counter-value" ).length ){
			$( ".counter-wrapper .counter-value" ).appear(function(){
				var end_va = $( this ).data( "counter" );
				if( end_va ){
					$(this ).divspidercounter({
						start:  0,
						end:    end_va,
						duration: 2000
					});
				}
			});
		}
		
		/* Carousel Maginific Popup */
		if( $('.owl-carousel.popup-gallery').length ){
			$('.owl-carousel.popup-gallery a').magnificPopup({
				type: 'image',
				mainClass: 'mfp-img-mobile',
				gallery: {
					enabled: true
				}
			});
		}
		
		/* Image Maginific Popup */
		if( $('.magnific-wrapper a.zoom-link').length ){
			$('.magnific-wrapper a.zoom-link').magnificPopup({
				type: 'image',
				mainClass: 'mfp-img-mobile',
				gallery: {
					enabled: true
				}
			});
		}
		
		/* Video Maginific Popup */
		if( $('.popup-video, .popup-gmaps').length ){
			$('.popup-video, .popup-gmaps').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false
			});
		}
		
		/* Portfolio Maginific Popup */
		if( $('.portfolio-wrapper a.overlay-zoom').length ){
			$('.portfolio-wrapper a.overlay-zoom').magnificPopup({
				type: 'image',
				mainClass: 'mfp-img-mobile',
				gallery: {
					enabled: true
				}
			});
		}
		
		/* Progress Bar */
		if( $( ".progress .progress-bar" ).length ) {
			$( ".progress .progress-bar" ).appear(function(){
				$( this ).css( "width",
						function() {
							
							if( $( this ).parents(".progress-wrapper").hasClass("progress-classic") ){
								//console.log($( this ).parents(".progress-wrapper").attr("class"));
								$( this ).parents(".progress-wrapper").find(".progress-value").css("left", $( this ).attr( "aria-valuenow" ) + "%");
							}
							return $( this ).attr( "aria-valuenow" ) + "%";
						}
				);
			});
		}
		
		/* Circle Progress Bar */
		if( $( ".circle-progress-bar" ).length ) {
			divspider_circle_progress();
		}
		
		/* Day Counter */
		if( $( ".divspider-day-counter" ).length ) {
			$( ".divspider-day-counter" ).each(function() {
				var _day_counter = $( this );
				var c_date = _day_counter.attr('data-date');
				_day_counter.countdown( c_date, function(event) {
					if( _day_counter.find('.counter-day').length ){
						_day_counter.find('.counter-day .counter-val').text( event.strftime('%D') );
					}
					if( _day_counter.find('.counter-hour').length ){
						_day_counter.find('.counter-hour .counter-val').text( event.strftime('%H') );
					}
					if( _day_counter.find('.counter-min').length ){
						_day_counter.find('.counter-min .counter-val').text( event.strftime('%M') );
					}
					if( _day_counter.find('.counter-sec').length ){
						_day_counter.find('.counter-sec .counter-val').text( event.strftime('%S') );
					}
					if( _day_counter.find('.counter-week').length ){
						_day_counter.find('.counter-week .counter-val').text( event.strftime('%w') );
					}
				});
			});
		}
		
		/* Divspider Animation */
		if( $( ".divspider-animate" ).length ) {
			var _ani_dur = 50;
			$( ".divspider-animate:not(.animate-done)" ).appear(function(){
				var _ele = $(this);
				var _ani_name = _ele.data("animate");
				var _ani_dur = _ele.data("duration") ? _ele.data("duration") : 50;
				_ele.addClass("").delay(_ani_dur).queue(function(next){
					_ele.addClass(_ani_name);
					_ele.addClass("animate-done");
					next();
				});
				//_ani_dur += 50;
			});
		}
		
		/* Subscribe Form Validation and Submit */
		if( $('.subscribe-form').length ){
			$( ".subscribe-form" ).each(function() {
				$(this).bootstrapValidator({
					message: 'This value is not valid',
					feedbackIcons: {
						valid: 'fa fa-check',
						invalid: 'fa fa-times',
						validating: 'fa fa-refresh'
					},
					fields: {
						mcemail: {
							validators: {
								notEmpty: {
									message: 'The email address is required'
								},
								emailAddress: {
									message: 'The email address is not valid'
								}
							}
						}
					},
					onSuccess: function(e) {
						e.preventDefault();
			
						var $form = $(e.target);
			
						// Use Ajax to submit form data
						$.ajax({
							url: $form.attr('action'),
							type: 'POST',
							data: $form.serialize(),
							success: function(result) {
								$form.find('.subscribe-status-msg').html(result);
								$form.find('.subscribe-status-msg').fadeIn(500);
								$form.find('.subscribe-status-msg').removeClass('hide');
								$form.find('.subscribe-btn').removeAttr('disabled');
							}
						});
					}
				});
			});
		}
		
		/* Contact Form Validation and Submit */	
		if( $( "form.contact-form" ).length ){
			$( "form.contact-form" ).each(function() {
				$(this).bootstrapValidator({
					message: 'This value is not valid',
					feedbackIcons: {
						valid: 'fa fa-check',
						invalid: 'fa fa-times',
						validating: 'fa fa-refresh'
					},
					fields: {
						name: {
							validators: {
								notEmpty: {
									message: 'The Name is required and cannot be empty'
								}
							}
						},
						email: {
							validators: {
								notEmpty: {
									message: 'The email address is required'
								},
								emailAddress: {
									message: 'The email address is not valid'
								}
							}
						},
						message: {
							validators: {
								notEmpty: {
									message: 'The Message is required and cannot be empty'
								}
							}
						}
					},
					onSuccess: function(e) {
						e.preventDefault();
			
						var $form = $(e.target);
			
						// Use Ajax to submit form data
						$.ajax({
							url: $form.attr('action'),
							type: 'POST',
							data: $form.serialize(),
							success: function(result) {
								$form.find(".contact-status-msg").html(result);
								$form.find(".contact-status-msg").fadeIn(500);
								$form.find(".contact-status-msg").removeClass('hide');
								$form.find('.contact-btn').removeAttr('disabled');
							}
						});
					}
				});
			});
		}
		
		/*Back to top*/
		$('#back-to-top').click(function(){
			$('html,body').animate({scrollTop:0}, 1000);return false;
		});
		$(document).scroll(function() {
			var y = $(this).scrollTop();
			if ( y > 300 )
				$('#back-to-top').fadeIn();
			else
				$('#back-to-top').fadeOut();
		});
		
	});
	
	function divspider_page_scroll(){
		
		// Set Header Sticky
		if( $(sticky_bar).length ){
			if( window.pageYOffset > sticky ){
				$(sticky_bar).next().css( "margin-top", $(sticky_bar).outerHeight() + "px" );
				$(sticky_bar).addClass("header-sticky");
			}else{
				$(sticky_bar).next().css( "margin-top", "" );
				$(sticky_bar).removeClass("header-sticky");
			}
		}
		
		
		// Scroll Spy
		if( _one_page_menu ) divspider_scroll_spy();
		
	}
	
	function divspider_page_resize(){
		
		var win_width = $(window).width();
		
		// Set Megamenu 
		setTimeout(function(){ divspider_set_megamanu_position(); }, 100);
		
		// Set sticky part height
		if( $(sticky_bar).length ){
			$(sticky_bar).removeClass("header-sticky");
			sticky = $(sticky_bar).offset().top;
		}
		
		// Reset Mobile Menu Toggle
		$( "a.mobile-menu-toggle, .mobile-menu-wrapper" ).removeClass("active");
		
		// Masonry
		if( $(".masonry-grid").length ){
			divspider_isotope_process();
		}
		
		if( $(".float-parallax").length ){
			if( win_width > 767 ){
				$(".float-parallax").fadeIn(350);
				divspider_floating_parallax();
			}else{
				$(".float-parallax").fadeOut(0);
			}
		}
		
		if( $(".ele-parallax").length ){
			if( win_width > 767 ){
				$(".ele-parallax").fadeIn(350);
				divspider_ele_parallax();
			}else{
				$(".ele-parallax").fadeOut(0);
			}
		}
		
	}
	
	function divspider_page_onload(){
		
		var win_width = $(window).width();	

		// Set Megamenu 
		divspider_set_megamanu_position();
		
		// Owl Carousel
		if( $('.owl-carousel').length ){
			$( ".owl-carousel" ).each(function() {				
				var _cur_owl = $(this);
				var owl_loop = _cur_owl.data("loop");
				var owl_nav = _cur_owl.data("nav");
				var owl_dots = _cur_owl.data("dots");
				var owl_items = _cur_owl.data("items");
				var owl_tab = _cur_owl.data("tab");
				var owl_mobile = _cur_owl.data("mobile");
				var owl_margin = _cur_owl.data("margin");	
				var owl_autoplay = _cur_owl.data("autoplay");
				var autoplaytime = _cur_owl.data("autoplaytime");
				var autoplaypause = _cur_owl.data("autoplaypause");
				var owl_ani_in = _cur_owl.data("animation-in") ? _cur_owl.data("animation-in") : '';
				var owl_ani_out = _cur_owl.data("animation-out") ? _cur_owl.data("animation-out") : '';
				
				$(_cur_owl).owlCarousel({
					animateOut: owl_ani_out,
					animateIn: owl_ani_in,
					loop: owl_loop,
					nav: owl_nav,
					dots: owl_dots,
					items: owl_items,
					margin: owl_margin,
					autoplay: owl_autoplay,
					autoplayTimeout: autoplaytime,
					autoplayHoverPause: autoplaypause,
					navText: [ '<span class="ti-angle-left"></span>', '<span class="ti-angle-right"></span>' ],
					responsive : {
						0:{
							items: owl_mobile
						},
						768:{
							items: owl_tab
						},
						1024:{
							items: owl_items
						}
					}
				});
				
				// Check animation
				$(_cur_owl).on('changed.owl.carousel', function(event) {
					if( $(this).find(".divspider-animate").length ){
						var _ani_dur = 0;
						$(this).find(".divspider-animate" ).each(function(){
							var _ele = $(this);
							var _ani_name = _ele.data("animate");
							var _ani_dur = _ele.data("duration") ? _ele.data("duration") : 50;
							_ele.removeClass(_ani_name +" "+ "animate-done");
							_ele.addClass("").delay(_ani_dur).queue(function(next){
								_ele.addClass(_ani_name);
								_ele.addClass("animate-done");
								next();
							});
							//_ani_dur += 50;
						});
					}
				});
				$(document).ready(function() {
					var owl = $('.owl-carousel');
					owl.owlCarousel({
					  autoplay: false,
					  autoplayTimeout: 7000,
					  autoplayHoverPause: false
					});
					$('.play').on('click', function() {
					  owl.trigger('play.owl.autoplay', [7000]);
					});
					$('.stop').on('click', function() {
					  owl.trigger('stop.owl.autoplay');
					});
				  });
			});
			
		}	
		
		// Set Parallax
		if( $(".set-as-parallax").length ){
			$(".set-as-parallax").each(function() {
				var _par_ele = $(this);
				var par_img = _par_ele.data("bgimg");
				if( par_img ){
					var par_speed = _par_ele.data("speed");
					par_speed = par_speed ? par_speed : 0.2;
					_par_ele.css( "background-image", "url("+ par_img +")" );
					_par_ele.parallaxie({
						speed: par_speed
					});
				}
			});
		}
		
		// Element Parallax
		if( $(".ele-parallax").length ){
			if( win_width > 767 ){
				$(".ele-parallax").fadeIn(350);
				divspider_ele_parallax();
			}else{
				$(".ele-parallax").fadeOut(0);
			}
		}
		
		// Floating Parallax
		if( $(".float-parallax").length ){
			if( win_width > 767 ){
				$(".float-parallax").fadeIn(350);
				divspider_floating_parallax();
			}else{
				$(".float-parallax").fadeOut(0);
			}
		}
		
		if( $(".set-as-bg-video").length ){
			$(".set-as-bg-video").each(function() {
				var _video_ele = $(this);
				var _video_url = _video_ele.data("video");
				var _video_autoplay = _video_ele.data("autoplay");
				var _video_mute = _video_ele.data("mute");
				var _video_controls = _video_ele.data("controls");
				_video_ele.YTPlayer({
					videoURL: _video_url,
					containment: _video_ele,
					autoplay: _video_autoplay,
					mute: _video_mute,
					startAt: 0,
					opacity: 1,
					showControls: _video_controls
				});
			});
		}
		
		/* Scroll Code */
		//var nav_height = $( ".set-header-sticky" ).outerHeight();
		$('.one-page-menu a[href^="#"], a.navigate-smooth').on('click',function (e) {
			e.preventDefault();	
			var target = this.hash;
			var $target = $(target);
			var pos = 0;
			
			if( target != '#top' ){
				pos = parseInt( $target.offset().top ) - nav_offset;
			}
			
			$('html, body').stop().animate({
				'scrollTop': pos
			}, 900, 'easeInOutExpo' );
			
			//Trigger after one page scroll
			//$( ".navbar-toggle" ).trigger( "click" );
			
			return false;
		});
		
		
		
		// Masonry
		if( $(".masonry-grid").length ){
			divspider_isotope_process();
			setTimeout(function(){ $(window).trigger('resize') }, 200);			
		}
		
		// Scroll Spy
		if( _one_page_menu ) divspider_scroll_spy();	
		
		//Page loader
		if( $(".page-loader").length ){
			$(".page-loader").fadeOut("slow");
		}
		
		
		
	}
	
	function divspider_set_megamanu_position(){
		$("ul li.mega-menu-parent").each(function() {
			var _mega_li = $(this);
			var _mega_parent_l = _mega_li.parents(".header-parts-wrap").parent(".container").offset().left;
			var _mega_l = _mega_li.parent("ul.nav").parent().offset().left;
			var _mega_left_pos = _mega_l - _mega_parent_l;
			if( _mega_left_pos ) _mega_li.children("ul.sub-menu.mega-menu").css("left", "-"+ _mega_left_pos +"px");
		});
	}
	
	function divspider_scroll_spy() {
		var _stop = $(window).scrollTop();
		$('section').each(function() {
			if( $(this).attr('id') ){
				var id = $(this).attr('id'),
				offset = $(this).offset().top - ( nav_offset + 10 ),
				height = $(this).height();				
				
				if( _stop >= offset ){
					_one_page_menu.children("li").removeClass('active');
					_one_page_menu.find('li a[href="#' + id + '"]').parent("li").addClass('active');
				}
			}
		});
	}
	
	function divspider_circle_progress(){
		//$('.circle-progress-bar').each(function() {
			//var _circle_ele = $(this);
			$('.circle-progress-bar').appear(function() {						  
				var c_circle = $( this );
				var c_value = c_circle.attr( "data-value" );
				var c_size = c_circle.attr( "data-size" );
				var c_thickness = c_circle.attr( "data-thickness" );
				var c_duration = c_circle.attr( "data-duration" );
				var c_empty = c_circle.attr( "data-empty" ) != '' ? c_circle.attr( "data-empty" ) : 'transparent';
				var c_scolor = c_circle.attr( "data-scolor" );
				var c_ecolor = c_circle.attr( "data-ecolor" ) != '' ? c_circle.attr( "data-ecolor" ) : c_scolor;
									
				c_circle.circleProgress({
					value: Math.floor( c_value ) / 100,
					size: Math.floor( c_size ),
					thickness: Math.floor( c_thickness ),
					emptyFill: c_empty,
					animation: {
						duration: Math.floor( c_duration )
					},
					lineCap: 'round',
					fill: {
						gradient: [c_scolor, c_ecolor]
					}
				}).on( 'circle-animation-progress', function( event, progress ) {
					$( this ).find( '.progress-value' ).html( Math.round( c_value * progress ) + '%' );
				});
			});
		//});
	}
	
	function divspider_floating_parallax(){
		$(".float-parallax").each(function() {
			var _fp_ele = $(this);
			var _fp_img = _fp_ele.data("img");
			if( _fp_img ){
				var _fp_alt = _fp_ele.data("alt");
				var _fp_top = _fp_ele.data("top");
				var _fp_left = _fp_ele.data("left");
				var _fp_distance = _fp_ele.data("distance");
				var _fp_mouse = _fp_ele.data("mouse");
				var _fp_width = _fp_ele.data("width") ? _fp_ele.data("width") : 30;		
				$(_fp_ele).html('<img alt="'+  _fp_alt  +'" src="'+ _fp_img  +'" />');
				$(_fp_ele).divspiderparallax({
					t_top: _fp_top,
					t_left: _fp_left,
					x_level: _fp_distance,
					mouse_animation: _fp_mouse,
					ele_width: _fp_width
				});
			}
		});
	}
	
	function divspider_ele_parallax(){
		$(".ele-parallax").each(function() {
			var _parallax_ele = $(this);
			_parallax_ele.parents("section").addClass("ele-parallax-appear");	
			var _ele_top = _parallax_ele.data("top");
			var _ele_left = _parallax_ele.data("left");
			var _ele_width = _parallax_ele.data("width") ? _parallax_ele.data("width") : 100;	
			$(_parallax_ele).divspidereleparallax({
				_top: _ele_top,
				_left: _ele_left,
				_width: _ele_width
			});
		});
	}
		
	function divspider_isotope_process(){
		$(".masonry-grid").each(function() {
			var _cur_masonry = $(this);
			var grid_width = _cur_masonry.width(); 
			var gutter_size = _cur_masonry.data( "gutter" );
			var grid_col = _cur_masonry.data( "col" );
			
			if( $( window ).width() < 768 )
				grid_col = 1;
			
			var net_width = Math.floor( ( grid_width - ( gutter_size * ( grid_col - 1 ) ) ) / grid_col );
			_cur_masonry.children( ".grid-item" ).css({ 'width' : net_width + 'px', 'margin-bottom' : gutter_size + 'px' });

			var $grid = _cur_masonry.isotope({
				itemSelector: '.grid-item',
				filter: "*",
				resizable: true,
				masonry: {
					gutter: gutter_size
				}
			});
			_cur_masonry.addClass("masonry-framed");
			
			if( _cur_masonry.parent(".portfolio-wrapper").children(".portfolio-filter-wrapper").length ){
				_cur_masonry.parent(".portfolio-wrapper").find(".portfolio-filter").removeClass("active");
				_cur_masonry.parent(".portfolio-wrapper").find(".portfolio-filter").click(function() {
					$(this).parents(".portfolio-filter-list").find(".portfolio-filter").removeClass("active");
					$(this).addClass( "active" );
					var filterValue = $(this).data( "filter" );
					$grid.isotope({ filter: filterValue });
					return false;
				});
			}
		});
	}
	 
}( jQuery ));

function init_bailparole_gmap(){
		var map_styles = '{ "Aubergine" : [	{"elementType":"geometry","stylers":[{"color":"#1d2c4d"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#8ec3b9"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#1a3646"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#64779e"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"color":"#334e87"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#023e58"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#283d6a"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#6f9ba5"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#023e58"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#3C7680"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#304a7d"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#2c6675"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#255763"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#b0d5ce"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#023e58"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"color":"#283d6a"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#3a4762"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#0e1626"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#4e6d70"}]}], "Silver" : [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}], "Retro" : [{"elementType":"geometry","stylers":[{"color":"#ebe3cd"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#523735"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f1e6"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#c9b2a6"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.stroke","stylers":[{"color":"#dcd2be"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#ae9e90"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#93817c"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#a5b076"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#447530"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#f5f1e6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#fdfcf8"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#f8c967"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#e9bc62"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#e98d58"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.stroke","stylers":[{"color":"#db8555"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#806b63"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"transit.line","elementType":"labels.text.fill","stylers":[{"color":"#8f7d77"}]},{"featureType":"transit.line","elementType":"labels.text.stroke","stylers":[{"color":"#ebe3cd"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#b9d3c2"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#92998d"}]}], "Dark" : [{"elementType":"geometry","stylers":[{"color":"#212121"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#212121"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#757575"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"administrative.land_parcel","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#181818"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"poi.park","elementType":"labels.text.stroke","stylers":[{"color":"#1b1b1b"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#8a8a8a"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#373737"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#3c3c3c"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#4e4e4e"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#033A5B"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#3d3d3d"}]}], "Night" : [{"elementType":"geometry","stylers":[{"color":"#242f3e"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#746855"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#242f3e"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#263c3f"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#6b9a76"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#38414e"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#212a37"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#9ca5b3"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#746855"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#1f2835"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#f3d19c"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#2f3948"}]},{"featureType":"transit.station","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#17263c"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#515c6d"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#17263c"}]}] }'; 
		
		var map_style_obj = JSON.parse(map_styles);
		
		var map_style_mode = [];
		var map_mode = '';
		
		$(".bailparole-gmap").each(function() {
			
			var _map_ele = $(this);
			if( _map_ele.attr( "data-map-style" ) ){
				map_mode = _map_ele.data("map-style");
				if( map_mode == 'Aubergine' )
					map_style_mode = map_style_obj.Aubergine;
				else if( map_mode == 'Silver' )
					map_style_mode = map_style_obj.Silver;
				else if( map_mode == 'Retro' )
					map_style_mode = map_style_obj.Retro;
				else if( map_mode == 'Dark' )
					map_style_mode = map_style_obj.Dark;
				else if( map_mode == 'Night' )
					map_style_mode = map_style_obj.Night;
			}
			
			_lat = _map_ele.data("lat") ? _map_ele.data("lat") : 51.508742;
			_lng = _map_ele.data("lng") ? _map_ele.data("lng") : -0.120850;

			var LatLng = {lat: _lat, lng: _lng};
			
			var mapProp= {
				center: LatLng,
				scrollwheel: false,
				zoom:9,
				styles: map_style_mode
			};

			var map = new google.maps.Map( _map_ele[0], mapProp);
			
			var marker = new google.maps.Marker({
			  position: LatLng,
			  icon: 'images/marker.png',
			  map: map
			});
		
			google.maps.event.addDomListener(window, 'resize', function() {
				map.setCenter(LatLng);
			});
			
		});
	}