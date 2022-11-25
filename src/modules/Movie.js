import '../styles/movie.css';
import heart2 from '../Assets/heart2.png';
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
  // console.log(movie)

  const image = movie?.poster_path ?? movie?.backdrop_path;
  window.addEventListener('movies_loaded', () => {
    const likeBtn = document.getElementById(`img_${movie.id}`);
    const likeNumber = document.getElementById(`number_${movie.id}`);
    if (likeBtn && likeNumber) {
      likeBtn.addEventListener('click', () => {
        likeNumber.textContent = Number(likeNumber.textContent) + 1;
        addLike(movie.id);
      });
    }
  });

  return `
      <div class="movie-card">
        <div class="image-container">
          <img src=${`${process.env.IMAGE_URL}/${image}`} alt="${movie.original_title}" />
        </div>
       <div class="movie-info">

        <div class="movie-info-holder">  
          <h4>${movie.title || movie.original_name}</h4>

          <div class="likes-container">
            <img id="img_${movie.id}" src="${heart2}" alt="like ${movie.original_title}" />
            <p><span id="number_${movie.id}">${movie.likes}</span></p>
          </div>
         </div>
         <div class="buttons-holder">
         <button data-id="${movie.id}" class="btn comment-btn">Comments</button>
         <button class="btn">Reservations</button>
         </div>
       </div>
      </div>
    `;
};
export default movie;
