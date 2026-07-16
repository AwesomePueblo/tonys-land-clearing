(function () {
  var current = document.documentElement.getAttribute('data-theme') || 'green';

  function setActiveSwatch() {
    document.querySelectorAll('.theme-swatch').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.themeChoice === current);
    });
  }

  document.querySelectorAll('.theme-swatch').forEach(function (btn) {
    btn.addEventListener('click', function () {
      current = btn.dataset.themeChoice;
      if (current === 'green') {
        document.documentElement.removeAttribute('data-theme');
      } else {
        document.documentElement.setAttribute('data-theme', current);
      }
      localStorage.setItem('site-theme', current);
      setActiveSwatch();
    });
  });

  setActiveSwatch();
})();
