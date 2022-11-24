import movie from './Movie';

import getMovies from '../api/movieList';
import getLikes from '../api/likeList';
import getLastest from '../api/getLastest';

import { displayModal, closeModal, injectComment } from './displayModal';
import getSingleMovie from '../api/getSingleMovie';

import addComment from '../api/addComment';
import { commentCounter } from './commentCounter';

const alertError = (message) => {
  const main = document.getElementById('main');
  main.insertAdjacentHTML('beforeend', `<p class="error">${message}</p>`);
};

export const contentLoaded = async (home) => {
  const main = document.getElementById('main');
  const responses = await Promise.allSettled([home ? getMovies() : getLastest(), getLikes()]);
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
    window.dispatchEvent(new CustomEvent('movies_loaded'));
  } else {
    alertError(responses[0].value.message ?? responses[1].value.error);
  }
};

export const intializeModel = () => {
  const commentButtons = document.querySelectorAll('.comment-btn');
  commentButtons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const movieID = event.target.dataset.id;
      getSingleMovie(movieID).then(async (obj) => {
        const main = document.querySelector('#main');
        main.insertAdjacentHTML('beforeend', displayModal(obj.data));
        closeModal();
        await injectComment(movieID);
        commentCounter();

        // Form event listener to create a comment
        const commentForm = document.querySelector('#form');
        const name = document.querySelector('#name');
        const insight = document.querySelector('#insight');
        commentForm.addEventListener('submit', async (event) => {
          event.preventDefault();
          await addComment(movieID, name.value, insight.value);
          commentForm.reset();
          await injectComment(movieID);
          commentCounter();
        });
      });
    });
  });
};