import movie from './Movie';
import getMovies from '../api/movieList';

import { displayModal, closeModal } from './displayModal';
import getSingleMovie from '../api/getSingleMovie';
import getLikes from '../api/likeList';


const alertError = (message) => {
  const main = document.getElementById('main');
  main.insertAdjacentHTML('beforeend', `<p class="error">${message}</p>`);
};

const contentPending = () => {
  let content = '';
  Array(20).fill(null).forEach(() => {
    content += `<div class="card-container">${movie()}</div>`;
  });
  return content;
};

const contentLoaded = async () => {
  const main = document.getElementById('main');
  const responses = await Promise.allSettled([getMovies(), getLikes()]);
  const { data: data1, success: success1 } = responses[0].value;
  const { data: data2, success: success2 } = responses[1].value;

  if (success1 && success2) {
    main.replaceChildren('');

    const movieList = data1.results;
    const likesList = data2;

    let likes;
    movieList.forEach((movieElement) => {
      likes = likesList.find((ele) => ele.item_id === movieElement.id);
      const movieData = { ...movieElement, likes: likes?.likes ?? 0 };
      main.insertAdjacentHTML('beforeend', movie(movieData));
    });
  } else {
    alertError(responses[0].value.message ?? responses[1].value.error);
  }
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
