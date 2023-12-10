const header = document.querySelector("header");
const menuIcon = document.querySelector("#menu-icon");
const navBar = document.querySelector(".nav");

window.addEventListener("scroll", (e) => {
    e.preventDefault();
    header.classList.toggle("sticky", window.scrollY > 0);
})
menuIcon.addEventListener("click", (e) => {
    e.preventDefault();
    menuIcon.classList.toggle("bx-x");
    navBar.classList.toggle("open");
});
window.onscroll = (e) => {
    e.preventDefault();
    menuIcon.classList.remove("bx-x");
    navBar.classList.remove("open");
}
// scrollReveal code

const scroll = ScrollReveal ({
    distance: "60px",
    duration: 2500,
    delay: 600,
    reset: true
})
scroll.reveal(".home-text", {delay: 200, origin: "top"});
scroll.reveal(".home-img img", {delay:200, origin: "bottom"});