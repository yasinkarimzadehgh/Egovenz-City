$(document).ready(function () {
  // WELCOME SLIDER
  $("#welcome-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    items: 1,
    smartSpeed: 1000,
    responsive: {
      0: {},
      600: {},
      1000: {},
    },
  });
});
