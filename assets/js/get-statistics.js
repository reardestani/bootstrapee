(function(){
  "use strict";

    $( ".item" ).each(function() {

      var item = $( this ),
          fn   = item.data("fn"),
          id   = item.data("id");

      $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://api.bootstrapee.com/ajax",
        data: { fn : fn, id : id }
      })

      .done(function( msg ) {
        if (msg) {
          item.find('.counter-views').html(msg.views);
          item.find('.counter-downloads').html(msg.downloads);
        } else {
          item.find('.counter-views').html("error");
          item.find('.counter-downloads').html("error");
        }
      }); // done

    });

})();