import { itActsAsFavoriteRestoModel } from './contarct/favoriteRestoContarct';
import FavoritRestoIdb from '../src/scripts/data/favoriteresto-idb';

describe('Favorite Restorant Idb Contract Test Implemtation', () => {
  afterEach(async () => {
    (await FavoritRestoIdb.getAllResto()).forEach(async (Restorant) => {
      await FavoritRestoIdb.deleteResto(Restorant.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoritRestoIdb);
});
