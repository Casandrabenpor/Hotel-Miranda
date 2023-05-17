let init = false;
let swiper = undefined;
let swiperFeatures = undefined;
let swiperGallery = undefined;
let swiperSection = undefined;
let swiperHotel = undefined;

function swiperCard(){
  if(window.innerWidth < 1000 && !init){
    
    swiper = new Swiper(".swiper-gallery", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    swiperFeatures = new Swiper(".swiper-features",{
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    swiperGallery = new Swiper(".swiper-galleryHotel",{
      spaceBetween: 30,
      centeredSlides: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
    });
    swiperSection = new Swiper(".swiper-section",{
      spaceBetween: 30,
      centeredSlides: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    swiperHotel = new Swiper(".swiper-hotel",{
      spaceBetween: 60,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    init = true;
  }
  else if (init){
    swiper.destroy();
    swiperFeatures.destroy();
    swiperGallery.destroy();
    swiperSection.destroy();
    swiperHotel.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize" ,swiperCard);

