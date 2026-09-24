const menu = document.querySelector('.hamburguer');
const nav = document.querySelector('.pm-header-nav-list');

menu.addEventListener('click', () => {
  menu.classList.toggle('open');
  nav.classList.toggle('open');
})
