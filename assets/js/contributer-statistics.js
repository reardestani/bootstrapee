(function(){
  "use strict";

    // Varibles
    var freebiesViews      = [],
        freebiesDownloads  = [];

    $( ".item" ).each(function() {

      // Freebies counter

      // Ajax request, "async: false" credit http://goo.gl/P22ZvW 
      var item = $( this ),
          fn   = item.data( "fn" ),
          id   = item.data( "id" );

      $.ajax({
        type: "GET",
        dataType: "json",
        async: false,
        url: "http://api.bootstrapee.com/ajax",
        data: { fn : fn, id : id }
      })

      .done(function( msg ) {
        if (msg) {
          item.find( ".counter-views" ).html(msg.views);
          item.find( ".counter-downloads" ).html(msg.downloads);
          freebiesViews.push(msg.views);
          freebiesDownloads.push(msg.downloads);
        } else {
          item.find( ".counter-views" ).html( "error" );
          item.find( ".counter-downloads ").html( "error" );
        }
      }); // done

    }); //.each

    // Total freebies views, credit http://goo.gl/H3r8Pb
    var totalViews = 0;

    for ( var i = 0; i < freebiesViews.length; i++ ) {
      totalViews += +freebiesViews[i];
    }

    $( ".freebies-views" ).find( "span" ).html( totalViews );

    // Total freebies downloads
    var totalDownloads = 0;

    for ( var i = 0; i < freebiesDownloads.length; i++ ) {
      totalDownloads += +freebiesDownloads[i];
    }
    
    $( ".freebies-downloads" ).find( "span" ).html( totalDownloads );

})();