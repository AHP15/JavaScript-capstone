import '../styles/movie.css';

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

  const image = movie.poster_path ?? movie?.backdrop_path;
  return `
      <div class="movie-card">
        <div class="image-container">
          <img src=${`${process.env.IMAGE_URL}/${image}`} alt="${movie.original_title}" />
        </div>

        <div class="movie-info">
          <h4>${movie.original_title.slice(0, 20)}...</h4>

          <div class="likes-container">
            <img src="./test" alt="" />
            <p>5 likes</p>
          </div>
        </div>

        <button data-id="${movie.id}" class="btn">Comments</button>
        <button class="btn">Reservations</button>
      </div>
    `;
};
export default movie;
