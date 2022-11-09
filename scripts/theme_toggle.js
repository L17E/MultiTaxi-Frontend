const LIGHT = 'light';
const DARK = 'dark';

function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName + "_theme";
}

function toggleTheme() {
  if (localStorage.getItem('theme') === DARK) {
    setTheme(LIGHT);
  } else {
    setTheme(DARK);
  }
}

const theme_toggle = document.querySelector('.theme_toggle');
theme_toggle.addEventListener('click', toggleTheme);

function setDefaultTheme() {
  const theme = localStorage.getItem('theme') || DARK;
  setTheme(theme)
}

setDefaultTheme();