import './styles/global.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';

import footer from './modules/footer.js';
import Header from './modules/header.js';
// list of movies: `${process.env.MOVIES_URL}?api_key=${process.env.API_KEY}`

// movie detail: `${process.env.MOVIES_URL}/${movieId}?api_key=${process.env.API_KEY}`

// movie image: `${process.env.IMAGE_URL}/imageId.jpg`

const render = () => {
  const header = document.querySelector('.header');
  header.innerHTML = Header();
  const footerEle = document.querySelector('.footer');
  footerEle.replaceChildren('');
  footerEle.insertAdjacentHTML('beforeend', footer());
};

render();

const navMenuOpen = document.querySelector('.open');
const navMenuClose = document.querySelector('.close');
const list = document.querySelector('.list');

navMenuOpen.addEventListener('click', () => {
  list.classList.add('on');
  navMenuOpen.style.display = 'none';
  navMenuClose.style.display = 'block';
});

navMenuClose.addEventListener('click', () => {
  list.classList.remove('on');
  navMenuOpen.style.display = 'block';
  navMenuClose.style.display = 'none';
});
