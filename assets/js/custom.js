//Navigation scroll
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll > 0) {
    $("header").addClass("navigation_fixed");
  } else {
    $("header").removeClass("navigation_fixed");
  }
});
