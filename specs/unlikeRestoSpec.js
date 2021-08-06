import FavoriteRestoIdb from '../src/scripts/data/favoriteresto-idb';
import * as TestFactory from './helper/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Restorant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoIdb.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto({ id: 1 });
  });

  it('should display unlike widget when the movie has been liked', async () => {
    await TestFactory.createLikeButtonPresenterWithResto({ id: 1 });
    expect(document.querySelector('[arial-label="like this restorants"]')).toBeTruthy();
  });

  it('should not display like widget when the retrorant has been liked', async () => {
    await TestFactory.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[arial-label="like this restorants"]')).toBeFalsy();
  });

  it('should be able to remove liked restorants from the list', async () => {
    await TestFactory.createLikeButtonPresenterWithResto({ id: 1 });
    document.querySelector('[aria-label="unlike this restorant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });

  it('should not throw error if the unliked restorants is not the list', async () => {
    await FavoriteRestoIdb.deleteResto(1);
    document.querySelector('[arial-label="unlike this restorant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
