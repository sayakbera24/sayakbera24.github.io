// Shared dark-mode toggle, used by every page. Single source of truth so the
// behaviour (and the persisted preference) is identical across the site.
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  var isDark = document.body.classList.contains('dark-theme');
  try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch (e) {}
}

(function () {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-theme');
    }
  } catch (e) {}
})();
