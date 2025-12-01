'use strict';
$( document ).ready(function() {
	/**
	 * remove the attributes and classes from collapsible navbar when the window is resized
	 */
	$( window ).on( 'resize', _.debounce( function () {
		if ( Modernizr.mq( '(min-width: 992px)' ) ) {
			$( '#renotheme-navbar-collapse' )
				.removeAttr( 'style' )
				.removeClass( 'in' );
		}
	}, 500 ) );

	
	$( '[data-toggle="tooltip"]' ).tooltip();



    $("a[data-rel^='prettyPhoto']").prettyPhoto({
        theme: 'pp_default',
		hook: 'data-rel',
		social_tools: ''
    });

/* ---------------------------------------------------
	Isotope Portfolio
-------------------------------------------------- */

$(document).ready(function() {
    // Simple portfolio initialization
    if ($('#portfolio-content').length > 0) {
        $('#portfolio-content').show();

        // Simple filter functionality without isotope
        $('#filters a').click(function(e) {
            e.preventDefault();
            var filter = $(this).attr('data-filter');

            // Remove active class from all
            $('#filters li').removeClass('active');
            // Add active class to clicked
            $(this).parent().addClass('active');

            // Simple show/hide based on filter
            if (filter === '*') {
                $('.project-post').show();
            } else {
                $('.project-post').hide();
                $(filter).show();
            }

            return false;
        });
    }
});
} );