import { updatePrice } from './updatePrice.js';

export function orderCoffee() {
  const orderConteiner = document.querySelector('.basket-list');

  const coffeeData = JSON.parse(localStorage.getItem('coffeeData')) || [];

  if (coffeeData.length === 0) {
    orderConteiner.innerHTML += `<p>No coffee order yet!</p>`;
    return;
  }

  const coffeeCount = coffeeData.reduce((acc, coffee) => {
    const key = `${coffee.id}-${coffee.size}`;
    if (!acc[key]) {
      acc[key] = { ...coffee, count: 0 };
    }
    acc[key].count += 1;
    return acc;
  }, {});

  const uniqueCoffeeData = Object.values(coffeeCount);

  uniqueCoffeeData.forEach(coffee => {
    orderConteiner.innerHTML += `
            <div class="order-card-coffee" data-id="${coffee.id}" data-size="${coffee.size}">
                <img class="order-img" alt=${coffee.name} src=${coffee.url} />
                <span class="order-info-card">
                    <h4>${coffee.name} <span class="order-size-inf">(${coffee.size})</span></h4>
                    <p>${coffee.type}</p>
                </span>
                <span class="number-order-coffee">
                    <svg class="icons-order button-minus">
                        <use href="../../public/icon/symbol-defs.svg#icon-minus" />
                    </svg>
                    <span class="order-number">${coffee.count}</span>
                    <svg class="icons-order button-plus">
                        <use href="../../public/icon/symbol-defs.svg#icon-plus" />
                    </svg>
                </span>
            </div>
            `;
  });

  const plusButtons = document.querySelectorAll('.button-plus');

  plusButtons.forEach(button => {
    button.addEventListener('click', event => {
      const orderCard = event.target.closest('.order-card-coffee');
      const id = orderCard.dataset.id;
      const size = orderCard.dataset.size;

      const isDeliberySelect = true;

      const coffeeData = JSON.parse(localStorage.getItem('coffeeData')) || [];
      const newCoffeeData = [
        ...coffeeData,
        coffeeData.find(coffee => coffee.id === id && coffee.size === size),
      ];

      localStorage.setItem('coffeeData', JSON.stringify(newCoffeeData));

      const orderNumber = orderCard.querySelector('.order-number');
      orderNumber.textContent = parseInt(orderNumber.textContent) + 1;

      updatePrice(isDeliberySelect);
    });
  });

  const minusButtons = document.querySelectorAll('.button-minus');

  minusButtons.forEach(button => {
    button.addEventListener('click', event => {
      const orderCard = event.target.closest('.order-card-coffee');
      const id = orderCard.dataset.id;
      const size = orderCard.dataset.size;

      const coffeeData = JSON.parse(localStorage.getItem('coffeeData')) || [];

      const indexToRemove = coffeeData.findIndex(
        coffee => coffee.id === id && coffee.size === size
      );

      if (indexToRemove !== -1) {
        coffeeData.splice(indexToRemove, 1);
      }

      const orderNumber = orderCard.querySelector('.order-number');
      const newCount = parseInt(orderNumber.textContent) - 1;

      if (newCount <= 0) {
        orderCard.remove();
      } else {
        orderNumber.textContent = newCount;
      }

      if (coffeeData.length === 0) {
        orderConteiner.innerHTML += `<p>No coffee order yet!</p>`;
      }

      localStorage.setItem('coffeeData', JSON.stringify(coffeeData));

      updatePrice();
    });
  });
}
