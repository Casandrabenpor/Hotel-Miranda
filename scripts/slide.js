

let swiperPagination = new Swiper(".swiper-custom-pagination", {
  loop: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
});

let swiperButton = new Swiper(".swiper-custom-button", {
    loop: true,
    slidesPerView: 1,
    spacesBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
        1000: {
          slidesPerView: 1,
          spaceBetween: 100,
        },
      },
  });

// var swiper = new Swiper(".swiper-gallery", {
//   loop: false,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });