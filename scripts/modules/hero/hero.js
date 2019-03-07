"use strict";

var activeClass = 'slick-active',
ariaAttribute = 'aria-hidden';
$('.hero').on('init', function() {
    $('.slick-dots li:first-of-type').addClass( activeClass ).attr( ariaAttribute, false );
}).on( 'afterChange', function( event, slick, currentSlide ) {
    var $dots = $( '.slick-dots' );
    $( 'li', $dots ).removeClass( activeClass ).attr( ariaAttribute, true );
    $dots.each( function() {
        $( 'li', $( this ) ).eq( currentSlide ).addClass( activeClass ).attr( ariaAttribute, false );
    } );
} );

$(document).ready(function(){
    $('.hero').slick({
        arrows: false,
        dots: true,
        infinite: true,
        lazyLoad: true,
        appendDots: $('.nav')
    });
});