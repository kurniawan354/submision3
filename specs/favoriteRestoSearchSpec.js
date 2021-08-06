import FavoriteRestoSearchPresenter from '../src/scripts/views/pages/liked-Restorant/favorite-restorant-search-presenter';
import FavoriteRestoIdb from '../src/scripts/data/favoriteresto-idb';
import FavoriteRestoSearchView from '../src/scripts/views/pages/liked-Restorant/favorite-resto-search-view';

describe('searching restoran', () => {
  beforeEach(() => {
    let presenter;
    let favoriteresto;
    let view;

    const searchResto = (query) => {
      const queryElement = document.getElementById('query');
      queryElement.value = query;
      queryElement.dispatchEvent(new Event('change'));
    };
    const setRestoSearchContainer = () => {
      view = new FavoriteRestoSearchView();
      document.body.innerHTML = view.getTemplate();
    };

    const constructPresenter = () => {
      favoriteresto = spyOnAllFunctions(FavoriteRestoIdb);
      presenter = new FavoriteRestoSearchPresenter({
        favoriteRetoran,
        view,

      });
    };
    beforeEach(() => {
      setRestoSearchContainer();
      constructPresenter();
    });
    describe('When query is not empty', () => {
      it('should be able to capture the query typed by the user', () => {
        searchResto('resto a');
      });
      expect(presenter.latestQuery).toEqual('resto a');
    });

    it('should ask the model to search for liked Restoran', () => {
      searchResto('resto a');
      expect(favoriteresto.searchResto).toHaveBeenCalledWith('resto a');
    });

    it('should show the found Restoran', () => {
      presenter._showFoundRestoran([{ id: 1 }]);
      expect(document.querySelectorAll('.resto-item').length)
        .toEqual(1);

      presenter._showFoundRestoran([{
        id: 1,
        title: 'Satu',
      }, {
        id: 2,
        title: 'Dua',
      }]);
      expect(document.querySelectorAll('.resto-item').length)
        .toEqual(2);
    });

    it('should show the title of the found Restoran', () => {
      presenter._showFoundRestoran([{
        id: 1,
        title: 'Satu',
      }]);
      expect(document.querySelectorAll('.resto__title')
        .item(0).textContent)
        .toEqual('Satu');
    });

    it('should show - when the restoran returned does not contain a title', (done) => {
      document.getElementById('restoran').addEventListener('restoran:updated', () => {
        const RestoTitles = document.querySelectorAll('.resto__title');
        expect(RestoTitles.item(0).textContent).toEqual('-');
        done();
      });

      FavoriterestoranIdb.searchRestoran.withArgs('resto a').and.returnValues([
        { id: 444 },
      ]);

      searchRestoran('resto a');
    });
  });
  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      searchResto(' ');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchResto('    ');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchResto('');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchResto('\t');
      expect(presenter.latestQuery.length)
        .toEqual(0);
    });
    it('should show all favorite Restoran', () => {
      searchResto('    ');

      expect(favoriteRetoran.getAllResto)
        .toHaveBeenCalled();
    });
  });
  describe('When no favorite Restorant could be found', () => {
    it('should show the empty message', (done) => {
      document.getElementById('restoran').addEventListener('restoran:updated', () => {
        expect(document.querySelectorAll('.resto-item__not__found').length).toEqual(1);

        done();
      });
      favoriteRetoran.searchRestow.withArgs('resto a').and.returnValues([]);

      searchResto('resto a');
    });

    it('should not show any Restorant', (done) => {
      document.getElementById('restoran').addEventListener('restoran:updated', () => {
        expect(document.querySelectorAll('.resto-item__not__found').length).toEqual(0);

        done();
      });

      favoriteresto.searchResto.withArgs('resto a').and.returnValues([]);

      searchM('resto a');
    });
  });
});
