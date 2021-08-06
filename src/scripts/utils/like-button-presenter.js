import FavoriteRestoIdb from "../data/favoriteresto-idb";
import { createLikeRestoButtonTemplate, createUnLikedRestoButtonTemplate } from "../views/templates/template-creator";

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRetoran, restoran }) {
    this._likeButtonContainer = likeButtonContainer;
    this._Restoran = restoran;
    this._favoriteRetoran = favoriteRetoran;

    await this._renderButton();
  },
  async _renderButton() {
    const { id } = this._Restoran;
    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const resto = await this._favoriteRetoran.getResto(id);
    return !!resto;
  },
  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestoButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRetoran.putResto(this._Restoran);
      this._renderButton();
    });
  },
  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnLikedRestoButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRetoran.deleteResto(this._Restoran.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
