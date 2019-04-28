// Flyout Menu Functions
var flyoutmenus = {
  ".lang-toggle": "#lang-menu",
  ".share-toggle": "#share-menu",
  ".nav-toggle": "#site-nav-menu"
};

$.each(flyoutmenus, function( key, value ) {
  $(key).on("click", function() {
    $(".flyout-menu").not($(value + ".flyout-menu")).removeClass("active");
    if ($("#wrapper").hasClass('overlay') && $(value).hasClass('active')) {
      $("#wrapper").removeClass('overlay');
    } else {
      $("#wrapper").addClass('overlay');
    }
    $(value).toggleClass('active');
  });
});


// Click anywhere outside a flyout to close
$(document).on("click", function(e) {
  if ($(e.target).is(".lang-toggle, .lang-toggle span, #lang-menu, .share-toggle, .share-toggle i, #share-menu, .search-toggle, search.toggle i, #search-menu, .nav-toggle, .nav-toggle i, #site-nav") === false) {
    $(".flyout-menu").removeClass("active");
    $("#wrapper").removeClass('overlay');
  }
});

// Scroll to Top TODO: Glitch coming up.
$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});

$("#back-to-top").click(function () {
   //1 second of animation time
   //html works for FFX but not Chrome
   //body works for Chrome but not FFX
   //This strange selector seems to work universally
   $("html, body").animate({scrollTop: 0}, 1000);
});
