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
const bodyRef = document.body;

themeRefs.addEventListener('change', switchTheme);

checkTheme();

function checkTheme() {
  if (localStorage.theme === 'dark-theme') {
    bodyRef.classList.add(Theme.DARK);
    themeRefs.checked = true;
  } else {
    bodyRef.classList.add(Theme.LIGHT);
  }
}

function switchTheme(event) {
  bodyRef.classList.toggle(Theme.LIGHT);
  bodyRef.classList.toggle(Theme.DARK);
  if (event.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
}