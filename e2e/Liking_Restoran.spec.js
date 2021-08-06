const assert = require('assert');

Feature('Liking Restoran');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restoran', ({ I } ) => {
    I.seeElement('#query');
    I.see('Tidak ada restoran yang ditampilkan', '.resto-item__not__found');
});
Scenario('liking one restoran', async ({ I }) => {
    I.see('Tidak ada restoran yang ditampilkan', '.resto-item__not__found');

    I.amObPage('/');
    
    I.seeElement('.resto__title a');

    const firstResto = locate('.resto__title a').first();
    const firstRestoTitle = await I.grabTextFrom(firstResto);
    I.click(firstResto);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.resto-item');
    const likedRestoTitle = await I.grabTextFrom('.resto__title');

     assert.strictEqual(firstRestoTitle, likedRestoTitle);
});
Scenario('searching restoran', async ({ I }) => {
    I.see('Tidak ada restoran yang ditampilkan', '.resto-item__not__found');

  I.amOnPage('/');

  I.seeElement('.resto__title a');

  const titles = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.resto__title a').at(i));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    titles.push(await I.grabTextFrom('.resto__title'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#query');

  const searchQuery = titles[1].substring(1, 3);
  const matchingRestorant = titles.filter((name) => name.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleLikedRestoran = await I.grabNumberOfVisibleElements('.resto-item');
  assert.strictEqual(matchingRestorant.length, visibleLikedRestoran);

  matchingRestorant.forEach(async (name, index) => {
    const visibleTitle = await I.grabTextFrom(locate('.resto__title').at(index + 1));
    assert.strictEqual(name, visibleTitle);
  });
});
