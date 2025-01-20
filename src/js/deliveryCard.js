export function deliveryCard() {
  const deliveryList = document.querySelector('.delivery-list');
  const orderCoffee = JSON.parse(localStorage.getItem('orderCoffee')) || [];
  const orderLocation = JSON.parse(localStorage.getItem('orderLocation')) || [];

  const dataPrice = parseFloat(localStorage.getItem('dataPrice')) || 0;

  const orderCoffeeLength = orderCoffee.length;

  if (orderCoffeeLength === 0) {
    deliveryList.innerHTML += `<p>No coffee order yet!</p>`;
    return;
  }

  const allOrdercoffeePrice = JSON.parse(dataPrice);

  const coffeeImg = orderCoffee[0].url;

  deliveryList.innerHTML = `
        <div class="delivery-card">
        <img class="coffee-delivery-img" alt="coffee" src="${coffeeImg}"/>
            <span class="text-name">Coffee delivery:</span> <span class="text-number">(${orderCoffeeLength})</span>
            <span class="text-delivery-location">Delivery to: ${orderLocation}</span>
            <span class="prise-delivery-coffee">$${allOrdercoffeePrice}</span>
        <div>
    `;
}
