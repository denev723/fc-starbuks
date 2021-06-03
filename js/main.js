const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

const handleClick = () => {
  searchInputEl.focus();
};

const handleFocus = () => {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
};

const handleBlur = () => {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
};

searchEl.addEventListener("click", handleClick);
searchInputEl.addEventListener("focus", handleFocus);
searchInputEl.addEventListener("blur", handleBlur);

const badgeEl = document.querySelector("header .badges");

const handleScroll = () => {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: "none",
    });
  } else {
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: "block",
    });
  }
};

window.addEventListener("scroll", _.throttle(handleScroll, 400));

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  // autoplay: {
  //   delay: 5000,
  // },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");

let isHidePromotion = false;

const handleToggle = () => {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
};

promotionToggleBtn.addEventListener("click", handleToggle);
