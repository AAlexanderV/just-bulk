// SLIDER-WIPER
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Default parameters
  slidesPerView: 1,
  spaceBetween: 30,
  // Responsive breakpoints

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    1000: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1500: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
