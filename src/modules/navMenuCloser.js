const menuCloser = () => {
  const navMenuOpen = document.querySelector('.open');
  const navMenuClose = document.querySelector('.close');
  const list = document.querySelector('.list');

  list.classList.remove('on');
  navMenuOpen.style.display = 'block';
  navMenuClose.style.display = 'none';
};

const menuOpener = () => {
  const navMenuOpen = document.querySelector('.open');
  const navMenuClose = document.querySelector('.close');
  const list = document.querySelector('.list');

  list.classList.add('on');
  navMenuOpen.style.display = 'none';
  navMenuClose.style.display = 'block';
};

export { menuCloser, menuOpener };