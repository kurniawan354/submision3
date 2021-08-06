import RestorantDbSource from '../../data/restorantdb-resource';
import { createRestoItem } from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
        <div class="content">
        <div id="Resto" class="Restoran">
        </div>
      </div>`;
  },
  async afterRender() {
    const Restoran = await RestorantDbSource.homePageResto();
    const RestoranContainer = document.querySelector('#Resto');
    Restoran.forEach((restoran) => {
      RestoranContainer.innerHTML += createRestoItem(restoran);
    });
  },
};

export default HomePage;
