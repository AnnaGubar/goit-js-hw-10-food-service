import itemsTemplate from './template.hbs';
import cards from './menu.json';
import './styles.css';

const galleryRef = document.querySelector('.js-menu');

const markup = itemsTemplate(cards);
galleryRef.insertAdjacentHTML('beforeend', markup);


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeRefs = document.querySelector('#theme-switch-toggle');

themeRefs.addEventListener('change', changeThemeHandler);

checkThemeHandler();

function changeThemeHandler(event) {
  document.body.classList.toggle(Theme.LIGHT);
  document.body.classList.toggle(Theme.DARK);
  if (event.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function checkThemeHandler() {
  if (localStorage.theme === 'dark-theme') {
    document.body.classList.add(Theme.DARK);
    themeRefs.checked = true;
  } else {
    document.body.classList.add(Theme.LIGHT);
  }
}