// Elements
const plusIcons = document.querySelectorAll('.plus-icon');
const minusIcons = document.querySelectorAll('.minus-icon');
const questionTextBlocks = document.querySelectorAll('.question-text');
const questionsSection = document.querySelector('.questions');

// Event Listeners

questionsSection.addEventListener('click', hideOrShowAnswer);

// Functions

function hideOrShowAnswer(event) {
  if (event.target.classList.contains('fa-plus-square')) {
    const questionBlock =
      event.target.parentElement.parentElement.parentElement.parentElement;
    questionBlock.classList.add('show-text');

    questionTextBlocks.forEach((block) => {
      if (block.parentElement.id !== questionBlock.id) {
        block.parentElement.classList.remove('show-text');
      }
    });
  } else if (event.target.classList.contains('fa-minus-square')) {
    event.target.parentElement.parentElement.parentElement.parentElement.classList.remove(
      'show-text'
    );
  }
}
