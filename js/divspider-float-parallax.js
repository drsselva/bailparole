(function ( $ ) {
 
    $.fn.divspiderparallax = function( options ) {
		
        // This is the easiest way to have default options.
        var settings = $.extend({
            left: 100,
			t_top: 100,
			t_left: 100,
			y_level: 20,
			x_level: 40,
			mouse_animation: 0,
			ele_width: '20'
        }, options );
		var ele = this;
		ele.css({ 'width': settings.ele_width + 'px', 'top': settings.t_top + '%', 'left': settings.t_left + '%' });
		ele.addClass("parallax-started");
		var parent_section = ele.parent("section") ? ele.parents("section") : '';
				
		if( settings.mouse_animation == '1' ){
			var last_X = this.offset().left;
			var last_Y = this.offset().top - $(parent_section).offset().top;
			setTimeout(function(){
				if( ele.hasClass("parallax-started") ){
					$( window ).mousemove( function( e ) {
						var xpos = e.clientX;
						var ypos = e.clientY;			
						xpos = xpos * 2; ypos = ypos * 2;				
						var last_x = ( last_X + ( xpos / settings.x_level ) );	
						var last_y = ( last_Y + ( ypos / settings.y_level ) );	
						ele.css('left',( last_x + "px" ) );
						ele.css('top',( last_y + "px" ) );					
					});
				}
				if( !parent_section.hasClass('float-parallax-started') ) parent_section.addClass("float-parallax-started");
			}, 500);
		}else{
			if( !parent_section.hasClass('float-parallax-started') ) parent_section.addClass("float-parallax-started");
		}
 
    };
 
}( jQuery ));