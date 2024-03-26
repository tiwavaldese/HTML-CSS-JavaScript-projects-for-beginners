// Select the element with the class "navbar" and store it in the variable navbarEl
let navbarEl = document.querySelector('.navbar');

// Select the element with the class "bottom-container" and store it in the variable bottomContainerEl
let bottomContainerEl = document.querySelector('.btm-container')

// Log the height of the navbar element to the console
console.log(navbarEl.offsetHeight);

// Log the offset top position of the bottom container element to the console
console.log(bottomContainerEl.offsetTop);

// Add a scroll event listener to the window
window.addEventListener('scroll', () =>{


  // Check if the vertical scroll position is greater than the offset top position of the bottom container element
  // minus the height of the navbar element minus 50 pixels
  if(window.scrollY >
    bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50 ){

    // If the condition is true, add the class "active" to the navbar element
    navbarEl.classList.add('active')
    }
    // If the condition is false, remove the class "active" from the navbar element
    else{
      navbarEl.classList.remove('active')
    }
})