import FavoriteRestoSearchView from '../src/scripts/views/pages/liked-Restorant/favorite-resto-search-view';
import FavoriteRestoShowPresenter from '../src/scripts/views/pages/liked-Restorant/favorite-restorant-search-presenter';
import FavoriteRestoIdb from '../src/scripts/data/favoriteresto-idb';

describe('Showing all favorite Resto', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestoSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no Restoran have been liked', () => {
    it('should ask for the favorite Restoran', () => {
      const favoriteresto = spyOnAllFunctions(FavoriteRestoIdb);

      new FavoriteRestoShowPresenter({
        view,
        favoriteresto,
      });

      expect(favoriteresto.getAllResto).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no Restoran have been liked', (done) => {
      document.getElementById('restoran').addEventListener('Restoran:updated', () => {
        expect(document.querySelectorAll('.resto-item__not__found').length)
          .toEqual(1);

        done();
      });

      const favoriteresto = spyOnAllFunctions(FavoriteRestoIdb);
      favoriteresto.getAllResto.and.returnValues([]);

      new FavoriteRestpShowPresenter({
        view,
        favoriteresto,
      });
    });
  });

  describe('When favorite restoran exist', () => {
    it('should show the restoran', (done) => {
      document.getElementById('restoran').addEventListener('restoran:updated', () => {
        expect(document.querySelectorAll('.restoran-item').length).toEqual(2);
        done();
      });

      const favoriterestoran = spyOnAllFunctions(FavoriteMovieIdb);
      favoriterestoran.getAllrestoran.and.returnValues([
        {
          id: 11, title: 'A', vote_average: 3, overview: 'Sebuah film A',
        },
        {
          id: 22, title: 'B', vote_average: 4, overview: 'Sebuah film B',
        },
      ]);

      new FavoriterestoranhowPresenter({
        view,
        favoriterestoran,
      });
    });
  });
});
