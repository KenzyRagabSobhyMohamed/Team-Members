const membersSlider = new Swiper('.slide-content', {
  slidesPerView:5,
  spaceBetween: 25,
  grabCursor: true,
  centeredSlides: true,
  fade:true,
  loop: true,
  slideActiveClass: 'swiper-slide-active',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 3,
    },

    992: {
      slidesPerView: 5,
    },
  }
});
