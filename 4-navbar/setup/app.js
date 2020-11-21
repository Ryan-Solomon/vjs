// Elements
const navToggleButton = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

// Event Listeners

navToggleButton.addEventListener('click', toggleButton);

// Functions

function toggleButton() {
  links.classList.toggle('show-links');
  console.log(links.classList);
}
