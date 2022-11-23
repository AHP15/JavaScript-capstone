import movie from './Movie';
import getMovies from '../api/movieList';
import { displayModal, closeModal } from './displayModal';
import { getSingleMovie } from '../api/getSingleMovie';

const alertError = (message) => {
  const main = document.getElementById('main');
  main.insertAdjacentHTML('beforeend', `<p class="error">${message}</p>`);
};

const contentPending = () => {
  let content = '';
  Array(20)
    .fill(null)
    .forEach(() => {
      content += `<div class="card-container">${movie()}</div>`;
    });
  return content;
};

const contentLoaded = () => {
  const movieCrads = document.querySelectorAll('.card-container');
  getMovies().then((obj) => {
    if (!obj.success) {
      alertError(obj.message);
    } else {
      const movieList = obj.data.results;
      movieCrads.forEach((movieCard, i) => {
        const movieData = movieList[i];
        movieCard.replaceChildren('');
        movieCard.insertAdjacentHTML('beforeend', movie(movieData));
      });
    }
  });
};

const main = () => {
  window.addEventListener('load', () => {
    contentLoaded();
    const commentButtons = document.querySelectorAll('.card-container');
    commentButtons.forEach((btn) => {
      let details = '';
      btn.addEventListener('click', (event) => {
        getSingleMovie(event.target.dataset.id).then((obj) => {
          details = obj.data;
          const main = document.querySelector('#main');
          main.insertAdjacentHTML('beforeend', displayModal(details));
          closeModal();
        });
      });
    });
  });
  return contentPending();
};

export default main;
