(function () {
  if (!window.localStorage.getItem('hasVisited')) {
    document.querySelector('.Tour').classList.add('is-active');
    window.localStorage.setItem('hasVisited', 'true');
  }
}());
