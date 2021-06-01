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
