// Show & Hidden Nav Menu Mobile Version
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

// Remove Nav Menu When Clicked [Nav Link]
const navLink = document.querySelectorAll(".nav__link");
navLink.forEach((event) => {
  event.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});
