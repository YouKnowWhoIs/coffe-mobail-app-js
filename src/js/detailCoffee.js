import coffees from './index.js';
import addBasket from './addBasket.js';
import { sizeSelected } from './sizeSelected.js';
import { favoriteCoffee } from './favoriteCoffee.js';

const coffeeList = document.querySelector('.coffees-list');
const modal = document.querySelector('.modal-detail-coffee');

coffeeList.addEventListener('click', event => {
  const card = event.target.closest('.coffee-card');

  if (card && card.id) {
    const coffee = coffees.find(item => String(item.id) === card.id);

    if (coffee) {
      modal.classList.add('open');
      document.body.classList.add('no-scroll');

      modal.innerHTML = `
      <div id=${coffee.id} class="detail-container">
        <div class="detail-header">
          <span class="close-button">
            <svg class="icon-back">
              <use href="../../public/icon/symbol-defs.svg#icon-back"/>
            </svg>
          </span>
        <span class="details">Detail</span>
        <svg class="icon-not-like">
          <use href="../../public/icon/symbol-defs.svg#icon-heart1"/>
        </svg>
        </div>
        <div>
          <img class="img-details" src="${coffee.url}" alt="${coffee.name}"/>
          <h4 class="coffee-name">${coffee.name}</h4>
          <p class="details-type">${coffee.type}</p>
          <div class="details-rating-conteiner">
            <svg class="details-rating">
              <use href="../../public/icon/symbol-defs.svg#icon-star1"/>
            </svg>
            <span class="details-coffee-raiting">${coffee.rating}</span>
            <span class="details-coments"> (${coffee.coments})</span>
            </div>
            <div class="details-text-top"></div>
        <div class="details-description">
          <h5 class="text-name-des">Description</h5>
          <p class="details-coments">${coffee.description}</p>
        </div>
        <div class="details-size">
          <h5 class="text-name-size">Size</h5>
          <div class="details-button-conteiner">
            <span class="detail-size-button detail-size-button-active">
              <input class="input-decoration" type="radio" name="size" value="S">
              <label class="details-button-text" for="S">S</label>
            </span>
            <span class="detail-size-button">
              <input class="input-decoration" type="radio" name="size" value="M">
              <label class="details-button-text" for="M">M</label>
            </span>
            <span class="detail-size-button">
              <input class="input-decoration" type="radio" name="size" value="L">
              <label class="details-button-text" for="L">L</label>
            </span>
          </div>
        </div>
        </div>
        <div class="details-panel">
          <div class="details-price">
            <span class="text-price">Price</span>
            <div class="price-text"> $${coffee.price}</div>
          </div>
          <div class="button-conteiner">
          <button class="details-button" type="submit">Order</button>
          </div>
        </div>
      </div>`;

      const closeButton = modal.querySelector('.close-button');

      closeButton.addEventListener('click', () => {
        modal.classList.remove('open');
        document.body.classList.remove('no-scroll');
        modal.innerHTML = '';
      });

      sizeSelected(coffee);

      favoriteCoffee();

      addBasket();
    }
  }
});
