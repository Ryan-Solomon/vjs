// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text:
      'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text:
      'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text:
      'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

// Constants

let dataIdx = 0;

// Elements

const imageElement = document.querySelector('#person-img');
const authorElement = document.querySelector('#author');
const jobElement = document.querySelector('#job');
const infoElement = document.querySelector('#info');
const buttonContaner = document.querySelector('.button-container');

// Event Listeners

buttonContaner.addEventListener('click', showReview);

// Functions

function showReview(event) {
  if (event.target.classList.contains('fa-chevron-right')) {
    dataIdx = dataIdx < reviews.length - 1 ? dataIdx + 1 : 0;
  } else if (event.target.classList.contains('fa-chevron-left')) {
    dataIdx = dataIdx > 0 ? dataIdx - 1 : reviews.length - 1;
  } else {
    dataIdx = Math.floor(Math.random() * reviews.length);
  }
  const { name, job, img, text } = reviews[dataIdx];
  imageElement.src = img;
  authorElement.textContent = name;
  jobElement.textContent = job;
  infoElement.textContent = text;
}
