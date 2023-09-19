import Swiper from "swiper";

const swiper = new Swiper(someHTMLElement, {
  var: (mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,

    pagination: ".swiper-pagination",
    paginationClickable: ".swiper-pagination",
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
  })),
});
