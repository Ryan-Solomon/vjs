// Elements

const buttonContainer = document.querySelector('.button-container');
const counterValue = document.querySelector('#value');

// Event Listeners

buttonContainer.addEventListener('click', handleCounterClick);

// Functions

function handleCounterClick(event) {
  switch (event.target.textContent) {
    case 'increase':
      counterValue.innerText = parseInt(counterValue.innerText) + 1;
      checkColor(counterValue.innerText);
      break;
    case 'decrease':
      counterValue.innerText = parseInt(counterValue.innerText) - 1;
      checkColor(counterValue.innerText);

      break;
    case 'reset':
      counterValue.innerText = 0;
      checkColor(0);
      break;
    default:
      return;
  }
}

function checkColor(value) {
  const number = parseInt(value);
  if (value === 0) {
    counterValue.style.color = 'black';
  } else if (value > 0) {
    counterValue.style.color = 'green';
  } else {
    counterValue.style.color = 'red';
  }
}
