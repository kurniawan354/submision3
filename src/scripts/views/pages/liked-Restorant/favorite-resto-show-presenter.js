class FavoriteRestoShowPresenter {
  constructor({ view, favoriteresto }) {
    this._view = view;
    this._favoriteresto = favoriteresto;

    this._showFavoriteResto();
  }

  async _showFavoriteResto() {
    const resto = await this._favoriteresto.getAllResto();
    this._displayrestoran(resto);
  }

  _displayrestoran(resto) {
    this._view.showFavoriteResto(resto);
  }
}

export default FavoriteRestoShowPresenter;
