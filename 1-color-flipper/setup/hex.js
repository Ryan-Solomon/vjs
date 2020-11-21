const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// Constants

const buttonElement = document.querySelector('#btn');
const mainElement = document.querySelector('main');

// Event Listeners

buttonElement.addEventListener('click', getNewColor);

// Functions

function getNewColor() {
  const newHex = [];
  for (let i = 0; i < 6; i++) {
    newHex.push(hex[getRandomNumber()]);
  }

  mainElement.style.backgroundColor = `#${newHex.join('')}`;
}

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
