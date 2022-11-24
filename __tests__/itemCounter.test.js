import itemCounter from '../src/modules/itemCounter';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

describe('Test the item counter function', () => {
  test('It should display the number of movies', () => {
    const dom = new JSDOM(
      `<!DOCTYPE html>
       <body>
         <li><a href="" class="movie-counter">Movies</a></li>
         <div class="movie-card"></div>
         <div class="movie-card"></div>
         <div class="movie-card"></div>
         <div class="movie-card"></div>
         <div class="movie-card"></div>
         <script src="../src/modules/itemCounter"></script>
       </body>
      `,
    );
    const { document, CustomEvent, window } = dom.window;
    const movie = window.document.querySelector('.movie-counter');
    window.addEventListener('movies_loaded', () => itemCounter(document));

    // Act
    window.dispatchEvent(new CustomEvent('movies_loaded'));

    // Assertion
    expect(movie.textContent).toBe('Movies (5)');
  });

  test('It should indicate that there are no movies', () => {
    const dom = new JSDOM(
      `<!DOCTYPE html>
       <body>
         <li><a href="" class="movie-counter">Movies</a></li>
         <script src="../src/modules/itemCounter"></script>
       </body>
      `,
    );
    const { document, CustomEvent, window } = dom.window;
    const movie = window.document.querySelector('.movie-counter');
    window.addEventListener('movies_loaded', () => itemCounter(document));

    // Act
    window.dispatchEvent(new CustomEvent('movies_loaded'));

    // Assertion
    expect(movie.textContent).toBe('No movies');
  });
});
