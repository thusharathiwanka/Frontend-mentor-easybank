const navLinks = document.querySelector(".nav-links");
const menuOpen = document.querySelector(".open-menu");
const menuClose = document.querySelector(".close-menu");
const body = document.querySelector("body");

menuOpen.addEventListener("click", () => {
  menuOpen.style.visibility = "hidden";
  navLinks.classList.toggle("nav-open");
  menuClose.style.visibility = "visible";
});

menuClose.addEventListener("click", () => {
  navLinks.classList.toggle("nav-open");
  menuOpen.style.visibility = "visible";
  menuClose.style.visibility = "hidden";
});
