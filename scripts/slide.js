let init = false;
let swiper = undefined;
let swiperFeatures = undefined;
let swiperGallery = undefined;

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
    swiperFeatures = new Swiper(".swiper-galleryHotel",{
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
    init = true;
  }
  else if (init){
    swiper.destroy();
    swiperFeatures.destroy();
    swiperGallery.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize" ,swiperCard);

