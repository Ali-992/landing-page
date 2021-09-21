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


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function createListItems (){
  for (const section of sections) {
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

//when section is in view port
const sectionInViewPort = (section) => {
  let sectionPostion = section.getBoundingClientRect();
  return (sectionPostion.top >=0); }

//when section is not in view port

  const sectionNotInViewPort = (section) => {
    let sectionPostion = section.getBoundingClientRect();
    return (sectionPostion.top >= 200); }

// Add class 'active' to section when near top of viewport
function addActiveSection(){
  for (const section of sections) {
    //if section in viewport
    if (sectionInViewPort(section)) {
      //and doesn't have the class
      if(!section.classList.contains('your-active-class')){
        //then add it
        section.classList.add('your-active-class');
      } 
    } else {
      //else remove the class
      section.classList.remove('your-active-class');
    }
    //removes the class when you scroll to top of the page
    if(sectionNotInViewPort(section)) {
      section.classList.remove('your-active-class');
    }
    
  }
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
createListItems();
// Scroll to section on link click

// Set sections as active
document.addEventListener('scroll', addActiveSection);

//button
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