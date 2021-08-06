import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import filter from 'lodash.filter';
import Apps from './views/apps';
import swRegister from './utils/sw-register';

const apps = new Apps({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  apps.renderPage();
});

window.addEventListener('load', () => {
  apps.renderPage();
  swRegister();
});
