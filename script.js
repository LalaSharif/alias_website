$(".services_slider").slick({
  arrows: true,
  prevArrow: $(".services_slider__left"),
  nextArrow: $(".services_slider__right"),
});

$(".customers__logos").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: $(".customers__slider_left"),
  nextArrow: $(".customers__slider_right"),
});
