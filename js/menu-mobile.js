const menu = document.querySelector(".js-menu-mobile");
const nav = document.querySelector(".js-nav-itens");

menu.addEventListener("click", () => {
    nav.classList.toggle("ativo");
});