 
// Declaring variables

window.addEventListener("scroll", function () {

    let header = document.querySelector('header');
    header.classList.toggle('active', window.scrollY > 0);

    let wrapper = document.querySelector('.wrapper');
    wrapper.classList.toggle('active', window.scrollY > 0);
})

function show() {
    let menu = document.querySelector('.menu-icons');
    menu.classList.toggle('active');

    let nav = document.querySelector('nav');
    nav.classList.toggle('active');
}
