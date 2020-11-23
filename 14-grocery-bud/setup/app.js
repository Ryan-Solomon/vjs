// Elements
const form = document.querySelector('.grocery-form');
const input = form.querySelector('#grocery');
const groceryListContainer = document.querySelector('.grocery-list');
const groceryContainer = document.querySelector('.grocery-container');
const clearItemsButton = document.querySelector('.clear-btn');

// Event Listeners

form.addEventListener('submit', (e) => {
  e.preventDefault();
  handleFormSubmit(e);
});

clearItemsButton.addEventListener('click', clearItems);
window.addEventListener('load', initializeFromLocalStorage);

// Functions

function initializeFromLocalStorage() {
  console.log('initializing');
  if (localStorage.getItem('groceryList')) {
    const groceryItems = JSON.parse(localStorage.getItem('groceryList'));
    localStorage.removeItem('groceryList');
    groceryItems.forEach((item) => createElement(item.text));
  }
}

function clearItems() {
  const groceryItems = Array.from(groceryListContainer.children);
  while (groceryItems.length > 0) {
    let currentItem = groceryItems.pop();
    currentItem.remove();
  }
  localStorage.removeItem('groceryList');
}

function handleFormSubmit(e) {
  const inputText = input.value;
  createElement(inputText);

  input.value = '';
}

function createElement(text) {
  // Create article container
  const article = document.createElement('article');
  article.classList.add('grocery-item');

  // Create ID
  const id = Math.random();
  article.dataset.id = id;

  // Create text paragraph and append to article
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  paragraph.classList.add('title');
  article.appendChild(paragraph);
  // Create button container and append to article
  const buttonContainer = document.createElement('button');
  buttonContainer.classList.add('btn-container');
  article.appendChild(buttonContainer);
  // Create buttons and icons and append to button container
  const editButton = document.createElement('button');
  editButton.type = 'button';
  editButton.classList.add('edit-btn');
  const editIcon = document.createElement('i');
  editIcon.classList.add('fas', 'fa-edit');
  editButton.appendChild(editIcon);
  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.classList.add('delete-btn');
  deleteButton.addEventListener('click', (e) => removeElement(e));
  const deleteIcon = document.createElement('i');
  deleteIcon.classList.add('fas', 'fa-trash');
  deleteButton.appendChild(deleteIcon);
  buttonContainer.appendChild(deleteButton);
  buttonContainer.appendChild(editButton);

  // Place item text in local storage
  addToLocalStorage(text, id);

  groceryListContainer.appendChild(article);
  groceryContainer.classList.add('show-container');
}

function removeElement(e) {
  const container = e.target.closest('.grocery-item');
  const id = container.dataset.id;
  console.log(id);
  const groceryItems = JSON.parse(localStorage.getItem('groceryList'));
  const filteredGroceryItems = groceryItems.filter((item) => {
    if (Math.round(item.id) !== Math.round(id)) {
      console.log(item.id);
      return item;
    }
  });
  localStorage.removeItem('groceryList');
  localStorage.setItem('groceryList', JSON.stringify(filteredGroceryItems));

  container.remove();
}

function addToLocalStorage(text, id) {
  if (localStorage.getItem('groceryList')) {
    const groceryListItems = JSON.parse(localStorage.getItem('groceryList'));
    groceryListItems.push({ id, text });
    localStorage.setItem('groceryList', JSON.stringify(groceryListItems));
  } else {
    localStorage.setItem('groceryList', JSON.stringify([{ id, text }]));
  }
}
