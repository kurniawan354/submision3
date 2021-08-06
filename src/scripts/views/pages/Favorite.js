import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import FavoriteRestoSearchView from './liked-Restorant/favorite-resto-search-view';
import FavoriteRestoShowPresenter from './liked-Restorant/favorite-resto-show-presenter';
import FavoriteRestoSearchPresenter from './liked-Restorant/favorite-restorant-search-presenter';

const view = new FavoriteRestoSearchView();

const favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestoShowPresenter({ view, favoriteresto: FavoriteRestoIdb });
    new FavoriteRestoSearchPresenter({ view, favoriteresto: FavoriteRestoIdb });
  },
};
export default favorite;
