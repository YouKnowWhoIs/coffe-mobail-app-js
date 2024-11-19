import coffees from './index.js';

const coffeeList = document.querySelector('.coffees-list');

function truncatName(name) {
  return name.length > 14 ? name.slice(0, 12) + '...' : name;
}

function renderCoffeeList() {
  coffeeList.innerHTML = '';

  coffees.forEach(coffee => {
    coffeeList.innerHTML += `
    <li class="coffee-card">
      <span class="rating">
        <svg class="icon-rating">
          <use href="../../public/icon/symbol-defs.svg#icon-star1"/>
        </svg>
        <span class="rating-text">
        ${coffee.rating}
        </span>
      </span>

      <div class="conteiner-card-img">
        <img class="card-img" src="${coffee.url}"/>
      </div>

      <div class="conteiner-card-text">
        <span class="card-name">${truncatName(coffee.name)}</span>
          <p class="card-type">${coffee.type}</p>
        <span class="card-price">$ ${coffee.price}</span>
        <button class="card-button" type="button">
          <svg class="icon-plus">
            <use href="../../public/icon/symbol-defs.svg#icon-plus"/>
          </svg>
        </button>
      </div>
    </li>`;
  });
}

renderCoffeeList();
