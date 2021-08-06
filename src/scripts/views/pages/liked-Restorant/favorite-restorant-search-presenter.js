class FavoriteRestoSearchPresenter {
  constructor({ favoriteRetoran, view }) {
    this._view = view;
    this._listenToSearchRequestByUser();
    this._favoriteRestorant = favoriteRetoran;
  }

  _listenToSearchRequestByUser() {
        this._view.runWhenUserIsSearching((latestQuery) => {
            this._searchResto(latestQuery);
        })
    }
    async _searchResto(latestQuery) {
       this._latestQuery = latestQuery.trim();

       let foundResto;
       if (this.latestQuery.length > 0) {
           foundResto =await this._favoriteRestorant._searchResto(this.latestQuery);
       } else {
           foundResto = await this._favoriteRestorant.getAllResto();
       }
        this._showFoundRestorant(foundResto);
    }
    
    _showFoundRestorant(Restorant) {
        this._view._showFoundRestorant(Restorant);
    }
       
    get latestQuery() {
        return this._latestQuery;
  }
}

export default FavoriteRestoSearchPresenter;
