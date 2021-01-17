const navLinks = document.querySelector(".nav-links");
const menuOpen = document.querySelector(".open-menu");
const menuClose = document.querySelector(".close-menu");
const body = document.querySelector("body");

menuOpen.addEventListener("click", () => {
  navLinks.classList.add("nav-open");
  menuOpen.style.display = "none";
  menuClose.style.display = "block";
});

menuClose.addEventListener("click", () => {
  navLinks.classList.remove("nav-open");
  menuOpen.style.display = "block";
  menuClose.style.display = "none";
});
