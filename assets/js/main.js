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
var slideIndex = 1;
showSlides();

function currentSlide(n) {
  var test = n;
  showSlides(slideIndex = n-1);
  setTimeout(showSlides, 7000);
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slideshow-slide");
  var dots = document.getElementsByClassName("slideshow-indicator");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 7000); // Change image every 2 seconds
}
