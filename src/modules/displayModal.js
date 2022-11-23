import '../styles/modal.css';

const closeModal = () => {
  const closeBtn = document.querySelector('.modal-close');
  const main = document.querySelector('#main');
  closeBtn.addEventListener('click', () => {
    main.removeChild(main.lastChild);
  });
};

const displayModal = (details) => {
  const image = details.poster_path ?? details?.backdrop_path;
  console.log(details);
  return `<div class="modal-window">
  <div class="picture">
    <img src="${process.env.IMAGE_URL}/${image}" alt="${
    details.original_title
  }" />
    <svg class="svg-inline--fa fa-xmark fa-3x modal-close" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"></path></svg>
  </div>
  <div class="movie-info">
    <h2 id="title">${details.title}</h2>
    <div class="desc">
      <p><strong>Released:</strong> ${details.release_date}</p>
      <p><strong>Genre:</strong> ${details.genres.map(
        (genre) => genre.name
      )}</p>
      <p><strong>Budget:</strong> ${details.budget}</p>
      <p><strong>Ratings:</strong> ${details.vote_average}</p>
    </div>
    <div class="comments">
      <ul class="list-of-comments">
        <li>I really enjoyed the movie</li>
        <li>yeah same here</li>
      </ul>
      <form action="">
        <h3>Add a comment</h3>
        <input type="text" required placeholder="Your name" />
        <textarea
          id=""
          cols="10"
          rows="5"
          placeholder="Your insights"
        ></textarea>
        <input type="submit" value="Comment" />
      </form>
    </div>
  </div>
</div>`;
};

export { displayModal, closeModal };
