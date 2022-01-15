/* ============================== typing animation ============================ */
var typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer","Graphic Designer","YouTuber"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

// =========================== nav-toggler =====================================
var menu = document.querySelector('.aside');
var toggleMenu = () => menu.classList.toggle('active');


// ========================== Up_arrow .active ================================
var arrow = document.querySelector('.up_Arrow');
window.addEventListener('scroll',() => arrow.classList.toggle('active', window.scrollY > 1000) )