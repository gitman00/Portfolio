const searchIcon = document.querySelector('.searchIcon')
const menu = document.querySelector('.menu');
const option = document.querySelector('.options');
const list = document.querySelector('.list');
const navbar = document.querySelector('nav');
const header = document.querySelector('header');
const uparrow = document.querySelector('.UpArrow');

// ============={==={{{==================
let func = () => {
	navbar.classList.toggle('active');
	menu.classList.toggle('active');
};
menu.addEventListener('click',func);

// ***************************************
let display = () => {
  option.classList.toggle('active')
  list.classList.toggle('active');
}
option.addEventListener('click',display);

// _______________SearchIcon_____________________


// ##########£££££££#£##################
window.addEventListener('scroll', () => {
//	uparrow.classList.toggle('active', window.scrollY > 1000)
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