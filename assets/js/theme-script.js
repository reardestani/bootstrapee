(function(){
  "use strict";

  // Count no. of featured post
	var featuredPostNo = '0;' +  $('div.item').length;
	$(".featured-range").val(featuredPostNo);

	// Set 1st slide to active
	$(".item").first().addClass('active');

  // Carousel init
  $('.featured-carousel').carousel({
  	interval: 0
  });

  // Bind carousel to ran
	$(".featured-range").ionRangeSlider({
		onChange: function (obj) { // callback, is called on every change
			$('.featured-carousel').carousel(obj["fromNumber"]);
		}
	 });

	// Count no. of featured post
	var featuredPostNo = $('.carousel.inner').count;

	// Nested init
	$('.grid-container').nested({
		selector: '.nested-item',
    minWidth: 183,
  	gutter: 5,
  	resizeToFit: false,
  }); 

  // Lightbox init
  $('.btn-lightbox').magnificPopup({ 
    type: 'image'
    // other options
  });

  // Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Popover 
  $('[data-toggle="popover"]').popover();

  // Affix
  $('#affix').affix({
    offset: {
      top: 350, 
      bottom: 350,
      right: 100
    }
  })

	// Dismiss download modal & fix body overflow
	$('.gumroad-button.btn').click( function() {
		$('#downloadModal').modal('hide');
		$('body').css('overflow', 'hidden');
	});

})();

// It needs to be before document loading otherwise it acts buggy
// Affix - avoid floating left
var affixWidth = $('.col-xs-3').position().left;

$(window).on( "scroll", function() {
  $('.col-xs-3.affix').css('left', affixWidth);
});