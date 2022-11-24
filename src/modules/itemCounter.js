const itemCounter = () => {
  const movies = document.querySelectorAll('.movie-card');
  const movie = document.querySelector('.movie-counter');
  const text = movies.length > 0 ? `Movies (${movies.length})` : 'No movies';
  movie.textContent = text;
};

export default itemCounter;