const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".mobile-menu--list");

toggle.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("active");
}
