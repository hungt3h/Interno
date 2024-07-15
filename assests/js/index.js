function showSearch() {
  document.querySelector('#search').classList.toggle('active-search');
}

function showSearchRps() {
  document.querySelector('#search-rps').classList.toggle('active-search');
}

function showNav() {
  document.querySelector('.main-menu').classList.toggle('active-search');
}

const menuItems = document.querySelectorAll('li');

menuItems.forEach(item => {
  const submenu = item.querySelector('.drop-item');
  item.addEventListener('click', () => {
    submenu.classList.toggle('active-search');
  });
});


