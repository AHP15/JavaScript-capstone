import '../styles/movie.css';
import heart from '../Assets/heart.png';
import addLike from '../api/addLike';

const sketelon = () => `
<div class="sketelone">
  <div></div>
  <div></div>
  <div></div>
</div>
`;

const handleHeartClick = () => {

};

const movie = (movie = null) => {
  if (!movie) {
    return sketelon();
  }

  const image = movie?.poster_path ?? movie?.backdrop_path;
  let { likes } = movie;

  window.addEventListener('movies_loaded', () => {
    const likeBtns = document.querySelectorAll('.like-btn');
    const likeNumbers = document.querySelectorAll('.likes-number');

    likeBtns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        const element = likeNumbers[i];
        /*
        console.log(Number(element.textContent) + 1);
        element.textContent = Number(element.textContent) + 1;
        */
        console.log(element, likeNumbers);
        handleHeartClick(movie.id);
      });
    });
  });

  return `
      <div class="movie-card">
        <div class="image-container">
          <img src=${`${process.env.IMAGE_URL}/${image}`} alt="${movie.original_title}" />
        </div>

        <div class="movie-info">
          <h4>${movie.original_title.slice(0, 15)}...</h4>

          <div class="likes-container">
            <img class="like-btn" src="${heart}" alt="like ${movie.original_title}" />
            <p><span class="likes-number">${likes}</span> likes</p>
          </div>
        </div>

        <button data-id="${movie.id}" class="btn">Comments</button>
        <button class="btn">Reservations</button>
      </div>
    `;
};
export default movie;