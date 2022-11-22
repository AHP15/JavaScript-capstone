import '../styles/movie.css';
import heart from '../Assets/heart.png';

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
  return `
      <div class="movie-card">
        <div class="image-container">
          <img src=${`${process.env.IMAGE_URL}/${image}`} alt="${movie.original_title}" />
        </div>

        <div class="movie-info">
          <h4>${movie.original_title.slice(0, 15)}...</h4>

          <div class="likes-container">
            <img src="${heart}" alt="" />
            <p>${movie.likes} likes</p>
          </div>
        </div>

        <button data-id="${movie.id}" class="btn">Comments</button>
        <button class="btn">Reservations</button>
      </div>
    `;
};
export default movie;