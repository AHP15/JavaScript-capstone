const commentCounter = () => {
  const commentItem = document.querySelectorAll('.comment-item');
  const commentTitle = document.querySelector('#comment-title');
  commentTitle.innerHTML = `Comments(${commentItem.length})`;
}

exports.commentCounter = commentCounter;