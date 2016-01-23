(function () {
  var doc = document.documentElement;

  doc.classList.remove('no-js');
  doc.classList.add('js');
}());
(function () {
  if (!window.localStorage.getItem('hasVisited')) {
    document.querySelector('.Tour').classList.add('is-active');
    window.localStorage.setItem('hasVisited', 'true');
  }
}());
