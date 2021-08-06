import FavoriteRestoIdb from '../src/scripts/data/favoriteresto-idb';
import * as TestFactory from './helper/testFactories';

describe('Liking A Restorants', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restorants has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    expect(document.querySelector('[aria-label="like this Restorant"]'))
      .toBeTruthy();
  });

  it('should show the Unlike button when the restorants has not been liked before', async () => {
    await TestFactory.createLikeButtonPresenterWithResto({ id: 1 });
    expect(document.querySelector('[aria-label="like this Restorant"]')).toBeFalsy();
  });

  it('should be able to like the restorants ', async () => {
    await TestFactory.createLikeButtonPresenterWithResto({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restoran = await FavoriteRestoIdb.getResto(1);

    expect(restoran).toEqual({ id: 1 });

    FavoriteRestoIdb.deleteResto(1);
  });

  it('should not add a restorant again when its alredy liked', async () => {
    await TestFactory.createLikeButtonPresenterWithResto({ id: 1 });

    await FavoriteRestoIdb.putResto({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }]);

    FavoriteRestoIdb.deleteResto(1);
  });

  xit('should not add a moviw when it has not id', async () => {
    await TestFactory.createLikeButtonPresenterWithResto({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
