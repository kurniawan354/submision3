import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

import FavoriteRestoIdb from '../../src/scripts/data/favoriteresto-idb';

const createLikeButtonPresenterWithResto = async (restoran) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRetoran: FavoriteRestoIdb,
    restoran,
  });
};

export { createLikeButtonPresenterWithResto };
