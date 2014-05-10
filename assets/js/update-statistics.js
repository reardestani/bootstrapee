(function(){
  "use strict";

  // Update views
  var itemViews	= $('.item-single'),
      fn        = itemViews.data("fn"),
      id        = itemViews.data("id");

  $.ajax({
    type: "GET",
    url: "http://api.bootstrapee.com/ajax",
    data: { fn : fn, id : id }
  });

  // Update downloads
  $(document).on('click', '.btn-download', function(){

    // Variables
    var itemDownloads = $(this),
        download      = itemDownloads.data("download"),
        fn            = itemDownloads.data("fn"),
        id            = itemDownloads.data("id");

    // Send ajax request
    $.ajax({
      type: "GET",
      url: "http://api.bootstrapee.com/ajax",
      data: { fn : fn, id : id }
    })

    // Download
    itemDownloads.text('Downloading...')
    setTimeout( function() {
      window.location.href = download;
      itemDownloads.text('Download This');
    }, 500);

  });

})();