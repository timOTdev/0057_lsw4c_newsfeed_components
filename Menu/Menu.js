
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', () => {
  toggleMenu();
})

TweenMax.from(".menu", 2, {x:-600, opacity:0})
TweenMax.staggerFrom(".menu li", 1, {x:-600, opacity: 0}, 0.2)

// const slideout = function() {
//   TweenMax.to(".menu", 2, {x:-1500})
// }

document.querySelector('body').addEventListener('click', (e) => {
  e.stopPropagation()
  console.log("clicked")
})