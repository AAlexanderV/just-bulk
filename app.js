// Для открывания бургер-меню (три полоски или Х)
const nav_menu = document.querySelector(".nav_menu");
const burger_button = document.querySelector(".nav_burger");
const header_logo = document.querySelector(".logo");

burger_button.addEventListener("click", function () {
  if (!burger_button.classList.contains("active")) {
    // чтобы сделать актив = крестик
    burger_button.classList.add("active");
    // присвоить актив для menu
    nav_menu.classList.add("burger_mode");
    if (window.screen.width < 500) {
      header_logo.classList.add("hide");
    }
  } else {
    // чтобы убрать актив = три полоски
    burger_button.classList.remove("active");
    // убрать актив для нав_2
    nav_menu.classList.remove("burger_mode");
    header_logo.classList.remove("hide");
  }
});

// Для элементов навигации, когда кликаешь по ним, чтобы свернуло бургер-меню обратно
const nav_links = document.querySelectorAll(".nav_link");

nav_links.forEach(function (link) {
  link.addEventListener("click", function () {
    burger_button.classList.remove("active");
    nav_menu.classList.remove("burger_mode");
    header_logo.classList.remove("hide");
  });
});

// SLIDER-WIPER
if (document.location.pathname === "/" || document.location.pathname === "/index.html") {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: false,

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
      900: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1500: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}
