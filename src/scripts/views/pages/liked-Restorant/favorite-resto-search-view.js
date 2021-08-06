import { createRestoItem } from '../../templates/template-creator';

class FavoriteRestoSearchView {
  getTemplate() {
  return `
      <div class="content">
      <input id="query" type="text">
      <h2 class="content__heading">your liked restorant</h2>
      <div id="restoran" class="Restoran">
      </div>
      </div>`;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showResto(restoran) {
    this.showFavoriteResto(restoran);
  }

  showFavoriteResto(restoran = []) {
    let html;
    if (restoran.length) {
      html = restoran.reduce((carry, Restorant) => carry.concat(createRestoItem(Restorant)), ' ');
    } else {
      html = this._getEmptyTemplate();
    }

    document.getElementById('restoran').innerHTML = html;

    document.getElementById('restoran').dispatchEvent(new Event('restoran:updated'));
  }

  _getEmptyTemplate() {
    return '<div class="resto-item__not__found resto__not__found">Tidak ada restoran yang ditampilkan</div>';
  }
}

export default FavoriteRestoSearchView;
