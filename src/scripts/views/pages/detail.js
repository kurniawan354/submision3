import UrlParser from '../../routes/url-parser';
import RestodbSource from '../../data/restorantdb-resource';
import { createRestoDetail } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestoIdb from '../../data/favoriteresto-idb';

const Detail = {
  async render() {
    return `
       <div id="Resto" class="resto"></div>
       <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const Restorant = await RestodbSource.detailResto(url.id);
    const restoanContainer = document.querySelector('#Resto');
    restoanContainer.innerHTML = createRestoDetail(Restorant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRetoran: FavoriteRestoIdb,
      restoran: Restorant,
    });
  },
};

export default Detail;
