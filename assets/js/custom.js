//Navigation scroll
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll > 0) {
    $("header").addClass("navigation_fixed");
  } else {
    $("header").removeClass("navigation_fixed");
  }
});

//open and close modal
const modal = $('#myModal');
const close = $('#modalClose');

const openModal = function () {
  modal.css('display', "block");
}
close.click(function () {
  modal.css('display', "none");
})
