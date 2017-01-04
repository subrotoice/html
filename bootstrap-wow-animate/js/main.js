// Navebar Out after 500 px scroll
$('.navbar').show();
$(window).scroll(function() {
  if ($(this).scrollTop() > 500) {
    $('.navbar').fadeOut();
  } else {
    $('.navbar').fadeIn();
  }
});

// Carousel Speed
$('.carousel').carousel({
  interval: 3000,
  pause: false
});

// WOW JS http://mynameismatthieu.com/WOW
new WOW().init();
