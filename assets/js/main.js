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

// Check to see if the window is top if not then display button
$(window).scroll(function() {
  if ($(this).scrollTop()) {
    $('#back-to-top').fadeIn();
  } else {
    $('#back-to-top').fadeOut();
  }
});

// Click event to scroll to top
$('#back-to-top').click(function() {
  $('html, body').animate({scrollTop: 0}, 1000);
  return false;
});

// Featured slideshow
var slideIndex = 0;
var timer = null;
showSlides();

function showSlides() {
  clearTimeout(timer)
  timer = null;
  var i;
  slideIndex++;
  if (slideIndex > $(".slideshow-slide").length) {slideIndex = 1}
  $(".slideshow-slide:eq("+(slideIndex-1)+")").addClass("on");
  $(".slideshow-indicator:eq("+(slideIndex-1)+")").addClass("on");
  $(".slideshow-slide:eq("+(slideIndex-1)+")").siblings().removeClass("on");
  $(".slideshow-indicator:eq("+(slideIndex-1)+")").siblings().removeClass("on");
  timer = setTimeout(showSlides, 7000); // Change image every 2 seconds
}
