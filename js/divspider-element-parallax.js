(function ( $ ) {
 
    $.fn.divspidereleparallax = function( options ) {
		
        // This is the easiest way to have default options.
        var settings = $.extend({
            _left: 10,
			_top: 10,
			_width: '100px'
        }, options );
		
		this.css({ 'max-width': settings._width, 'top': settings._top + '%', 'left': settings._left + '%' });
		
		var _ele = $(this);
		$(window).on("load scroll", function() {
			var windowTop = $(window).scrollTop(),
			elementTop = _ele.offset().top,
			elementHeight = _ele.height(),
			viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
			scrolled = windowTop - elementTop + viewPortHeight;
			_ele.css({
				transform: "translate3d(0," + scrolled * -0.25 + "px, 0)"
			});
		});
 
    };
 
}( jQuery ));