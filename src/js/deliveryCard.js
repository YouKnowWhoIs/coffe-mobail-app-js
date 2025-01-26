export function deliveryCard() {
  const deliveryList = document.querySelector('.delivery-list');
  const previousOrders = JSON.parse(localStorage.getItem('orders')) || [];

  if (previousOrders.length === 0) {
    deliveryList.innerHTML += `<p>No coffee order yet!</p>`;
    return;
  }

  deliveryList.innerHTML = '';

  previousOrders.forEach(coffee => {
    const coffeeImg = coffee.coffee[0].url;
    const coffeeLength = coffee.coffee.length;
    const location = coffee.location;
    const coffeeprice = coffee.price;

    deliveryList.innerHTML += `
      <div>
        <img class="coffee-delivery-img" alt="coffee" src="${coffeeImg}"/>
        <span class="text-name">Coffee delivery:</span>
        <span class="text-number">(${coffeeLength})</span>
        <span class="text-delivery-location">Delivery to: ${location}</span>
        <span class="prise-delivery-coffee">$${coffeeprice}</span>
      </div>
    `;
  });
}
