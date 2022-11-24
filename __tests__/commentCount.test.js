/**
 * @jest-environment jsdom
 */

import { commentCounter } from '../src/modules/commentCounter';

describe('Comment_counter_testing', () => {
  test('Comments inside the DOM are counted', () => {
    document.body.innerHTML = '<div>'
     + '<h3 id="comment-title"></h3>'
     + '<ul class="list-of-comments">'
     + '<li class="comment-item"></li>'
     + '<li class="comment-item"></li>'
     + '<li class="comment-item"></li>'
     + '</div>';
    const title = document.querySelector('#comment-title');
    commentCounter();
    expect(title.innerHTML).toBe('Comments(3)');
  });

  test('checks_for_wrong_input', () => {
    document.body.innerHTML = '<div>'
      + '<h3 id="comment-title">Comments(0)</h3>'
      + '<ul class="list-of-comments"></ul>'
      + '</div>';

    const title = document.querySelector('#comment-title');
    const counter = commentCounter();
    expect(title.innerHTML).toBe('Comments(0)');
    expect(counter).toEqual('No comment inside the DOM!');
  });
});