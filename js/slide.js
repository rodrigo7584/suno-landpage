var swiper = new Swiper('.tables', {
  slidesPerView: 1,

  pagination: {
    el: '.tables .swiper-pagination',
    clickable: true
  },
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    }
  }
})
