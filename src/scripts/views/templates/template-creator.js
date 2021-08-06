import CONFIG from '../../globals/config';

const createRestoDetail = (Restorant) => `
<h2 class="resto__title">${Restorant.name}</h2>
    <img class="resto__image lazyload"data-src="${CONFIG.BASE_IMAGE_URL + Restorant.pictureId}"alt="${Restorant.name}">
       <br></br>
<button type="button" class="button-detail">Informasion</button>
<div class="content">
    <p>${Restorant.description}</p>
</div>
<br></br>
<button type="button" class="button-detail">address</button>
<div class="content">
    <p>${Restorant.city},${Restorant.address}</p>
</div>
<br></br>
<button type="button" class="button-detail">Catagorie Menu</button>
<div class="content">
    <ul>${Restorant.categories.map((CatagorieMenu) => `
      <li>${CatagorieMenu.name}</li>
      `)}</ul> 
</div>
  <br></br>
  <button type="button" class="button-detail">Menu Makanan</button>
  <div class="content">
      <ul>${Restorant.menus.foods.map((menumakanan) => `
      <li>${menumakanan.name}</li>`)}
    </ul>
  </div>
</div>
<br></br>
<button type="button" class="button-detail">Menu Minuman</button>
<div class="content">
<ul>${Restorant.menus.drinks.map((menuminuman) => `
<li>${menuminuman.name}</li>`)
}</ul>
</div>
<br></br>
<button type="button" class="button-detail">Rating</button>
<div class="content">
<p>${Restorant.rating}</p>
</div>
<br></br>
<button type="button" class="button-detail">Customer Reviews</button>
<div class="content">
<div class = "reviews">
<ul>${Restorant.customerReviews.map((riviews) => `
<li>${riviews.name}</li>
<li>${riviews.review}</li>`)}</ul>
</div>
</div>



`;

const createRestoItem = (Restorant) => `
 <div class ="resto-item">
 <div class ="resto-item__header">
 <div class ="resto-item__header__city">
 <p><span class ="resto-item__header__city__name">${Restorant.city || '-'}</span></p>
 </div>

 <figure>
 <img class = "resto-item__header__image lazyload" alt ="${Restorant.name}"data-src="${CONFIG.BASE_IMAGE_URL + Restorant.pictureId}">
 </figure>
 
 <div class = "resto-item__header__rating">
 <p>⭐️<span class="resto-item__header__rating__score">${Restorant.rating || '-'}</span></p>
 </div>
 </div>
 <div class="resto-item__content">
        <h3 class="resto__title"> <a href="${`/#/detail/${Restorant.id}`}">${Restorant.name || '-'}</a></h3>
        <p>${Restorant.description || '-'}</p>
    </div>
 </div>
 `;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnLikedRestoButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItem,
  createRestoDetail,
  createLikeRestoButtonTemplate,
  createUnLikedRestoButtonTemplate,
};
