export function deliveryCard() {
  const deliveryList = document.querySelector('.delivery-list');
  const orderCoffee = JSON.parse(localStorage.getItem('orderCoffee')) || [];
  const orderCoffeeLength = orderCoffee.length;

  if (orderCoffeeLength === 0) {
    deliveryList.innerHTML += `<p>No coffee order yet!</p>`;
    return;
  }

  const allOrdercoffeePrice = orderCoffee.reduce((acc, coffee) => {
    let price = parseFloat(coffee.price.replace('$', '').trim());
    return acc + (isNaN(price) ? 0 : price);
  }, 0);

  const coffeeImg = orderCoffee[0].url;

  deliveryList.innerHTML = `
        <div class="delivery-card">
        <img class="coffee-delivery-img" alt="coffee" src="${coffeeImg}"/>
            <span class="text-name">Coffee delivery:</span> <span class="text-number">(${orderCoffeeLength})</span>
            <span class="prise-delivery-coffee">$${allOrdercoffeePrice.toFixed(2)}</span>
        <div>
    `;
}
