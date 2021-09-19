/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const sections = document.querySelectorAll('section');
const navMenu = document.getElementById('navbar__list');
const myButton = document.getElementById("myBtn");

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
//create list items 
function createListItems(){
  for (var section of sections) {
    //getting section name
    sectionName = section.getAttribute('data-nav');
    //getting section id
    sectionId = section.getAttribute('id');
    //creating list item
    listItem = document.createElement('li');
    //Adding name and id
    listItem.innerHTML = `<a class='menu__link' href='#${sectionId}'>${sectionName}</a>`;
    //append menu item to the navMenu
    navMenu.append(listItem);
  }
}

// using the getBoundingClientRect to insure that section in view port and getting the largest value by using the Math.floor
const offset = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};

// remove the active class
const removeActive = (section) => {
  section.classList.remove('your-active-class');
  section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
};
// adding the active class
const addActive = (conditional, section) => {
  if(conditional){
      section.classList.add('your-active-class');
      section.style.cssText = "background-color: amber;";
  };
};

//implementating the toggle function

const toggleSectionActivation = () => {
  sections.forEach(section => {
      const elementOffset = offset(section);

      inviewport = () => elementOffset < 200 && elementOffset >= -200;

      removeActive(section);
      addActive(inviewport(),section);
  });
};

window.addEventListener('scroll' ,toggleSectionActivation);

// When the user scrolls down 40px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function goToTopFunction() {
  document.body.scrollTop = 0;
}
  

// build the nav
createListItems();
