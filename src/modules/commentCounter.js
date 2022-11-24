const commentCounter = () => {
  const commentItem = document.querySelectorAll('.comment-item');
  const commentTitle = document.querySelector('#comment-title');
  if (commentItem.length === 0) return 'No comment inside the DOM!';
  commentTitle.innerHTML = `Comments(${commentItem.length})`;
  return commentItem.length;
};

exports.commentCounter = commentCounter;