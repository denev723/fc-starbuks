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
