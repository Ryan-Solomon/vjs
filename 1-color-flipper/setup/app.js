// Constants

let currentColorIdx = 0;
const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

// Elements

const buttonElement = document.querySelector('#btn');
const mainElement = document.querySelector('main');

// Functions

const changeColor = () => {
  if (currentColorIdx === colors.length - 1) {
    currentColorIdx = 0;
  } else {
    currentColorIdx += 1;
  }

  mainElement.style.backgroundColor = `${colors[currentColorIdx]}`;
};

// Event Listeners

buttonElement.addEventListener('click', changeColor);
