// noinspection JSUnusedGlobalSymbols,ES6ConvertVarToLetConst,JSUnresolvedReference

/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    var	$window = $(window),
        $body = $('body'),
        $nav = $('#nav');

    // Breakpoints.
    breakpoints({
        xlarge:      [ '1281px',  '1680px' ],
        large:       [ '1025px',  '1280px' ],
        mediumLarge: [ '981px',   '1024px' ],
        medium:      [ '737px',   '980px'  ],
        small:       [ '601px',   '736px'  ],
        xsmall:      [ null,      '600px'  ]
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Scrolly.
    $('#nav a, .scrolly').scrolly({
        speed: 1000,
        offset: function() { return $nav.height(); }
    });

    // Cache mobile menu selectors
    var $hamburgerIcon = $('.hamburger-icon');
    var $navContainer = $('#nav ul.container');

    // Mobile Menu Toggle
    $hamburgerIcon.on('click', function() {
        var isExpanded = $(this).attr('aria-expanded') === 'true';
        $(this).toggleClass('active');
        $(this).attr('aria-expanded', !isExpanded);
        $navContainer.toggleClass('active');
    });

    // Close the mobile menu when a navigation item is clicked
    $navContainer.find('a').on('click', function() {
        $hamburgerIcon.removeClass('active');
        $hamburgerIcon.attr('aria-expanded', 'false');
        $navContainer.removeClass('active');
    });

    // Close the mobile menu when clicking outside
    $(document).on('click', function(event) {
        if (!$(event.target).closest('#nav').length) {
            $hamburgerIcon.removeClass('active');
            $hamburgerIcon.attr('aria-expanded', 'false');
            $navContainer.removeClass('active');
        }
    });

})(jQuery);