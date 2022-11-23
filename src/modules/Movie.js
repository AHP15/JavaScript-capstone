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

const movie = (movie = null) => {
  if (!movie) {
    return sketelon();
  }

  const image = movie?.poster_path ?? movie?.backdrop_path;

  window.addEventListener('movies_loaded', () => {
    const likeBtn = document.getElementById(`img_${movie.id}`);
    const likeNumber = document.getElementById(`number_${movie.id}`);
    likeBtn.addEventListener('click', () => {
      likeNumber.textContent = Number(likeNumber.textContent) + 1;
      addLike(movie.id);
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
            <img id="img_${movie.id}" src="${heart}" alt="like ${movie.original_title}" />
            <p><span id="number_${movie.id}">${movie.likes}</span> likes</p>
          </div>
        </div>

        <button data-id="${movie.id}" class="btn">Comments</button>
        <button class="btn">Reservations</button>
      </div>
    `;
};
export default movie;