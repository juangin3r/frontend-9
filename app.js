const nav = document.querySelector(".navbar-m");
const menu = document.querySelector(".menu-m");
const hamburguer = document.querySelector(".icon-hamburger");
hamburguer.addEventListener("click", () => {
    nav.classList.toggle("activo");
})