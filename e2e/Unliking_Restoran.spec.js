const assert = require('assert');

Feature('Unliking Restauran');
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});
Scenario('showing empty liked menu restauran', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restoran yang ditampilkan', '.resto-item__not__found');
});

Scenario('unliking one restauran', async ({ I }) => {
  I.see('Tidak ada restoran yang ditampilkan', '.resto-item__not__found');
  I.amOnPage('/');
  I.seeElement('.resto__title a');

  const firstRestaurant = locate('.resto__title a').first();
  const firstRestaurantsTitles = await I.grabTextFrom(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');
  
  const unlikedRestaurantsTitles = await I.grabTextFrom('.resto__title a');
  assert.strictEqual(firstRestaurantsTitles, unlikedRestaurantsTitles);

  I.seeElement('.resto__title a');
  await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.see('Tidak ada restoran yang ditampilkan', '.resto-item__not__found');
});
