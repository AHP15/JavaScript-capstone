import movie from './Movie';
import { contentLoaded, intializeModel } from './loadMovies';

const contentPending = () => {
  let content = '';
  Array(20).fill(null).forEach(() => {
    content += `<div class="card-container">${movie()}</div>`;
  });
  return content;
};

const main = (home) => {
  contentLoaded(home).then(intializeModel);

  return contentPending();
};

export default main;
