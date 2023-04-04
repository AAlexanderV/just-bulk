// Для открывания бургер-меню (три полоски или Х)
const nav_menu = document.querySelector(".nav_menu");
const burger_button = document.querySelector(".nav_burger");
// const header_slogan = document.querySelector(".header_slogan");
// const header_logo = document.querySelector(".header_logo");

burger_button.addEventListener("click", function () {
  if (!burger_button.classList.contains("active")) {
    // чтобы сделать актив = крестик
    burger_button.classList.add("active");
    // присвоить актив для menu
    nav_menu.classList.add("burger_mode");
  } else {
    // чтобы убрать актив = три полоски
    burger_button.classList.remove("active");
    // убрать актив для нав_2
    nav_menu.classList.remove("burger_mode");
  }
});

// Для элементов навигации, когда кликаешь по ним, чтобы свернуло бургер-меню обратно
const nav_links = document.querySelectorAll(".nav_link");

nav_links.forEach(function (link) {
  link.addEventListener("click", function () {
    burger_button.classList.remove("active");
    nav_menu.classList.remove("burger_mode");
  });
});

if (document.location.pathname === "/") {
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
    },
  });
}
