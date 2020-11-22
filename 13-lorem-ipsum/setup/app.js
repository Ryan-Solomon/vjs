// Event Listeners

const generateButton = document.querySelector('.btn');
generateButton.addEventListener('click', (e) => {
  e.preventDefault();
  const amountOfParagraphs = document.querySelector('#amount').value;
  console.log(amountOfParagraphs);
  getIpsum(amountOfParagraphs);
});

async function getIpsum(amount) {
  const res = await fetch(
    `https://baconipsum.com/api/?type=all-meat&sentences=${amount}&start-with-lorem=1`
  );
  const data = await res.json();
  generateContent(data);
}

function generateContent(data) {
  const parentContainer = document.querySelector('.lorem-text');
  parentContainer.innerHTML = '';
  const documentFragment = document.createDocumentFragment();

  data.forEach((item) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = item;
    documentFragment.appendChild(paragraph);
  });

  parentContainer.appendChild(documentFragment);
}
