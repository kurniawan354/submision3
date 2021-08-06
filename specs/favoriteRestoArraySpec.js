import { itActsAsFavoriteRestoModel } from './contarct/favoriteRestoContarct';

let favoriteRestoraunt = [];

const FavoriteRestoArray = {
  getRestot(id) {
    if (!id) {
      return;
    }
    return favoriteRestoraunt.find((Restoran) => Restoran.id === id);
  },
  getAllResto() {
    return favoriteRestoraunt;
  },

  putResto(Restoran) {
    if (!Restoran.hasOwnProperty('id')) {
      return;
    }

    if (this.getRestorant(Restoran.id)) {
      return;
    }

    favoriteRestoraunt.push(Restoran);
  },

  deleteResto(id) {
    favoriteRestoraunt = favoriteRestoraunt.filter((Restorant) => Restorant.id !== id);
  },

  searchResto(query) {
    return this.getAllResto()
      .filter((Restorant) => {
        const loweredCaseRestoTitle = (Restorant.title || '-').toLowerCase();
        const jammedRestoTitle = loweredCaseRestoTitle.replace(/\s/g, '');

        const loweredCaseQuery = query.toLowerCase();
        const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

        return jammedRestoTitle.indexOf(jammedQuery) !== -1;
      });
  },
};
describe('Favorite Restorant Array Contarct Test Implemenation', () => {
  afterEach(() => favoriteRestoraunt = []);

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
