const searchIcon = document.querySelector('.searchIcon')
const menu = document.querySelector('.menu');
const option = document.querySelector('.options');
const list = document.querySelector('.list');
const navbar = document.querySelector('nav');
const header = document.querySelector('header');
const uparrow = document.querySelector('.UpArrow');
var r = document.querySelector(':root');
var refresh = document.querySelector('.refresh');


// ============={==={{{==================
let func = () => {
  navbar.classList.toggle('active');
  menu.classList.toggle('active');
};
menu.addEventListener('click', func);

// ***************************************
let display = () => {
  option.classList.toggle('active')
  list.classList.toggle('active');
}
option.addEventListener('click', display);

// _______________SearchIcon_____________________


// ##########£££££££#£##################
window.addEventListener('scroll', () => {
  uparrow.classList.toggle('active', window.scrollY > 1000)
  header.classList.toggle('show', window.scrollY > 0)
});

// Skills section
const dropDownArrow = document.querySelector(".dropDownArrow");
const dropDownArrow2 = document.querySelector(".dropDownArrow2");
const dropDownArrow3 = document.querySelector(".dropDownArrow3");

const upArrow = document.querySelector(".upArrow");
const upArrow3 = document.querySelector(".upArrow3");
const upArrow2 = document.querySelector(".upArrow2");

const DropDownMenu = document.querySelector('.DropDownMenu');
const DropDownMenu3 = document.querySelector('.DropDownMenu3');
const DropDownMenu2 = document.querySelector('.DropDownMenu2');

function show() {
  upArrow.classList.toggle('active');
  DropDownMenu.classList.toggle('drop');
}
function show2() {
  upArrow2.classList.toggle('active');
  DropDownMenu2.classList.toggle('drop');
}
function show3() {
  upArrow3.classList.toggle('active');
  DropDownMenu3.classList.toggle('drop');
}
// Change Color
function Change() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  r.style.setProperty('--clr', `rgb( ${red}, ${green}, ${blue})`);
}

// Show current skin color 
function showCurrentSkinColor() {
  var rs = getComputedStyle(r);
  var CurrentColor = rs.getPropertyValue('--clr');
  alert(CurrentColor);
}

window.onload = () => {
  Change();
}

// auto text typing
var typing = new Typed(".TXT", {
   strings: [ "Web Designer", "Freelancer", "Graphics Designer", "Web Developer"],
   typeSpeed: 100,
   backSpeed: 10,
   loop: true,
 });
 