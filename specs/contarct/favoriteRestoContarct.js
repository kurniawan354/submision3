const itAsctAsFavoriteRestoModel = (favoriteRestorant) => {
  it('should retrun the Restorant that been added', async () => {
    favoriteRestorant.putResto({ id: 1 });
    favoriteRestorant.putResto({ id: 2 });

    expect(await favoriteRestorant.getResto(1))
    .toEqual({ id: 1 });
    expect(await favoriteRestorant.getResto(1))
    .toEqual({ id: 2 });
    expect(await favoriteRestorant.getResto(1))
    .toEqual(undefined);
  });

  it('should refuse a restorant from being added if it does not have the correct property', async () => {
    favoriteRestorant.putResto({ aProperty: 'property' });

    expect(await favoriteRestorant.getAllResto())
    .toEqual([]);
  });

  it('can retrunt all of the restorant that have been added', async () => {
    favoriteRestorant.putResto({ id: 1 });
    favoriteRestorant.putResto({ id: 2 });

    expect(await favoriteRestorant.getAllResto())
    .toEqual([
      { id: 1 },
       { id: 2 },
      ]);
  });

  it('should remove favorite Restorant', async () => {
    favoriteRestorant.putResto({ id: 1 });
    favoriteRestorant.putResto({ id: 2 });
    favoriteRestorant.putResto({ id: 3 });

    await favoriteRestorant.deleteResto(1);

    expect(await favoriteRestorant.getAllResto())
    .toEqual([
      { id: 2 },
       { id: 3 },
      ]);
  });
  it('should handle request to remove a restorant even though the restorant has not been added', async () => {
    favoriteRestorant.putResto({ id: 1 });
    favoriteRestorant.putResto({ id: 2 });
    favoriteRestorant.putResto({ id: 3 });

    await favoriteRestorant.deleteResto(4);

    expect(await favoriteRestorant.getAllResto())
    .toEqual([
      { id: 1 },
       { id: 2 },
        { id: 3 },
      ]);
  });
  it('should be able to search for Restoran', async () => {
    favoriteRestorant.putResto({ id: 1, title: 'resto a' });
    favoriteRestorant.putResto({ id: 2, title: 'resto b' });
    favoriteRestorant.putResto({ id: 3, title: 'resto abc' });
    favoriteRestorant.putResto({ id: 4, title: 'ini mah resto abcd' });

    expect(await favoriteRestorant.searchResto('resto a')).toEqual([
      { id: 1, title: 'resto a' },
      { id: 3, title: 'resto abc' },
      { id: 4, title: 'ini mah resto abcd' },
    ]);
  });
};
export { itAsctAsFavoriteRestoModel };
