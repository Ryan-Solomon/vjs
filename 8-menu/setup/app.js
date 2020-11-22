const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.jpeg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: './images/item-2.jpeg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: './images/item-3.jpeg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: './images/item-4.jpeg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: './images/item-5.jpeg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: './images/item-6.jpeg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: './images/item-7.jpeg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: './images/item-8.jpeg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: './images/item-9.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// Creating Items

const createMenuItem = (item) => {
  const { title, category, price, desc, img } = item;

  // Create Article
  const article = document.createElement('article');
  article.classList.add('menu-item');

  // Create Image and append to article
  const image = document.createElement('img');
  image.src = img;
  img.alt = title;
  article.appendChild(image);

  // Create item info and append to article
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('item-info');
  // Create info for item info container
  const header = document.createElement('header');
  const h4Title = document.createElement('h4');
  h4Title.textContent = title;
  const h4Price = document.createElement('h4');
  h4Price.classList.add('price');
  h4Price.textContent = price;
  header.appendChild(h4Title);
  header.appendChild(h4Price);
  const pDesc = document.createElement('p');
  pDesc.classList.add('item-text');
  pDesc.textContent = desc;

  infoContainer.appendChild(header);
  infoContainer.appendChild(pDesc);
  article.appendChild(infoContainer);

  return article;
};

const createMenuItems = (itemContainer, category = 'all') => {
  itemContainer.innerHTML = '';
  const documentFragment = document.createDocumentFragment();

  menu.forEach((item) => {
    console.log(category);
    if (category === 'all' || item.category === category) {
      documentFragment.appendChild(createMenuItem(item));
    }
  });
  itemContainer.appendChild(documentFragment);
};

const itemContainer = document.querySelector('.section-center');
createMenuItems(itemContainer);

// Event Listeners
const buttonContainer = document.querySelector('.btn-container');
buttonContainer.addEventListener('click', (e) => {
  if (e.target.type !== 'button') return;
  createMenuItems(itemContainer, e.target.textContent.trim());
});
