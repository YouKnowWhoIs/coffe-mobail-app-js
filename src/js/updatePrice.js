export function updatePrice() {
  const coffeePrice = JSON.parse(localStorage.getItem('coffeeData')) || [];

  const allCoffeePriceElement = document.querySelector('.all-coffee-prise');
  const deliveryPriceElement = document.querySelector('.delivery-prise');
  const totalPriceElement = document.querySelector('.total-price');

  if (coffeePrice.length > 0) {
    const allcoffeePrice = coffeePrice.reduce((acc, coffee) => {
      const price = parseFloat(coffee.price.replace('$', '').trim());
      return acc + (isNaN(price) ? 0 : price);
    }, 0);

    allCoffeePriceElement.textContent = `$${allcoffeePrice.toFixed(2)}`;

    const deliveryPrice = coffeePrice.length;
    const deliveryPromoPrice =
      coffeePrice.length > 1 ? deliveryPrice - 1 : deliveryPrice;

    if (coffeePrice.length > 1) {
      deliveryPriceElement.innerHTML = `<span class="promo-delivery-prise">$${deliveryPrice.toFixed(1)}</span>  $${deliveryPromoPrice.toFixed(1)}`;
    } else {
      deliveryPriceElement.textContent = `$${deliveryPrice.toFixed(2)}`;
    }

    const totalPrise = allcoffeePrice + deliveryPromoPrice;
    totalPriceElement.textContent = `$${totalPrise.toFixed(2)}`;
  } else {
    allCoffeePriceElement.textContent = `$0.00`;
    deliveryPriceElement.textContent = `$0.00`;
    totalPriceElement.textContent = `$0.00`;
  }
}
