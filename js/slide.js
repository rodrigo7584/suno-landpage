var swiper = new Swiper('.tables', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: '.tables .swiper-pagination',
    clickable: true
  },
  breakpoints: {
    610: {
      slidesPerView: 2,
      centeredSlides: true
    },
    768: {
      centeredSlides: false,
      slidesPerView: 2
    },
    900: {
      centeredSlides: false,
      slidesPerView: 3
    },
    1200: {
      centeredSlides: false,
      slidesPerView: 4
    }
  }
})
