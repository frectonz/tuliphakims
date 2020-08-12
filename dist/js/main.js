const navMenu = document.querySelector(".header-nav-menu > img");
const fullscreenNav = document.querySelector(".fullscreen-nav");
const fullscreenNavClose = document.querySelector(".fullscreen-nav__close");

navMenu.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto"
    });
    fullscreenNav.style.display = "grid";
    document.body.style.overflowY = "hidden";
});

fullscreenNavClose.addEventListener("click", () => {
    fullscreenNav.style.display = "none";
    document.body.style.overflowY = "scroll";
});