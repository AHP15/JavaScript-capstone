import './styles/global.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';

import footer from './modules/footer';

import Header from './modules/header';

import main from './modules/main';
import { menuCloser, menuOpener } from './modules/navMenuCloser';

// list of movies: `${process.env.MOVIES_URL}?api_key=${process.env.API_KEY}`

// movie detail: `${process.env.MOVIES_URL}/${movieId}?api_key=${process.env.API_KEY}`

// movie image: `${process.env.IMAGE_URL}/imageId.jpg`

const render = () => {
  const header = document.querySelector('.header');
  header.innerHTML = Header();
  const footerEle = document.querySelector('.footer');
  const mainEle = document.getElementById('main');

  window.addEventListener('load', () => {
    window.addEventListener('load_content', (e) => {
      mainEle.insertAdjacentHTML('beforeend', main(e.detail.home));
    });

    window.dispatchEvent(new CustomEvent('load_content', {
      detail: {
        home: true,
      },
    }));
  });

  footerEle.replaceChildren('');
  footerEle.insertAdjacentHTML('beforeend', footer());
};

render();

// Mobile navigation
const navMenuOpen = document.querySelector('.open');
const navMenuClose = document.querySelector('.close');

navMenuOpen.addEventListener('click', () => {
  menuOpener();
});

navMenuClose.addEventListener('click', () => {
  menuCloser();
});
