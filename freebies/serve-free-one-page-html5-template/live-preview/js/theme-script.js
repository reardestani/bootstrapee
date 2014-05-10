$(document).ready( function() {
	
	// Activate One Page Nav
	$('.navbar-nav').onePageNav({
		currentClass: 'active',
		scrollOffset: 90
	});

	// Activate Nice Scroll
	$("html").niceScroll({
		styler:"fb",
		cursorcolor:"#000",
		cursorborder : "1px solid #fff",
		cursorwidth: "10"
	});

	// Members
	$('.members li').click(function() {
		$('.members li').removeClass('member-active');
		$(this).addClass('member-active');

		// Get data- values
		var member_name = $(this).data('name');
		var member_title = $(this).data('title');

		// Replace gotten values with current name and title
		$('.member-name').html(member_name);
		$('.member-title').html(member_title);

	});

	// ajax contact form
  $('.contact-form').submit(function(){
    $.post('contact-form.php', $(this).serialize(), function(data){
      $('.form-message').html(data);
      $('.contact-form input, .contact-form textarea').val('');
    });				
    return false;
  });

});

// Make navber fix after scrolling
$(window).scroll(function () {
	var scrollTop = $(window).scrollTop();
	if ( scrollTop > 200 ) {
		$('.navbar').addClass('navbar-fixed-top');
		$('.navbar-nav').addClass('sticky');
	} else {
		$('.navbar').removeClass('navbar-fixed-top');
		$('.navbar-nav').removeClass('sticky');
	}
 });