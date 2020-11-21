// Elements

const closeButton = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

// Event Listeners

closeButton.addEventListener('click', toggleSidebar);

// Functions

function toggleSidebar() {
  sidebar.classList.toggle('show-sidebar');
  console.log(links.classList);
}
