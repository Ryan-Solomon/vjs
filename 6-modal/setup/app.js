// Elements
const openModalButton = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModalButton = document.querySelector('.close-btn');

// Event Listeners

openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);

// Functions

function openModal() {
  modalOverlay.classList.add('open-modal');
}

function closeModal() {
  modalOverlay.classList.remove('open-modal');
}
