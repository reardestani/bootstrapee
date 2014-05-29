(function(){
  "use strict";

  // Lightbox init
  $('.btn-lightbox').magnificPopup({ 
    type: 'image'
  });

  // Redirect 404 to homepage
  if( $( 'section' ).hasClass( 'not-found' ) ) {
  	window.location.href = 'http://bootstrapee.com'
  }

})();