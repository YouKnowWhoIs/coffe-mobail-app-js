function truncatName(name) {
  return name.length > 14 ? name.slice(0, 12) + '...' : name;
}

export function renderCoffeeList(coffee) {
  const coffeeList = document.querySelector('.coffees-list');

  if (!coffeeList) {
    console.error('Element with class "coffees-list" not found in the DOM.');
    return;
  }

  coffeeList.innerHTML = '';

  coffee.forEach(coffee => {
    coffeeList.innerHTML += `
    <li id="${coffee.id}" class="coffee-card">
      <span class="rating">
        <svg class="icon-rating">
          <use xlink:href="public/icon/symbol-defs.svg#icon-star1"/>
        </svg>
        <span class="rating-text">
        ${coffee.rating}
        </span>
      </span>

      <div class="conteiner-card-img">
        <img class="card-img" alt="${coffee.name}" src="${coffee.url}"/>
      </div>

      <div class="conteiner-card-text">
        <span class="card-name">${truncatName(coffee.name)}</span>
          <p class="card-type">${coffee.type}</p>
        <span class="card-price">$ ${coffee.price}</span>
        <button class="card-button">
          <svg class="icon-plus">
            <use xlink:href="public/icon/symbol-defs.svg#icon-plus"/>
          </svg>
        </button>
      </div>
    </li>`;
  });
}
