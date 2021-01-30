const openMenu = document.getElementById('open');
const closeMenu = document.getElementById('close');
const container = document.getElementById('container');

openMenu.addEventListener('click', () => {
  container.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  container.classList.remove('active');
});