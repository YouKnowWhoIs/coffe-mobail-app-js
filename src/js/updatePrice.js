export function updatePrice() {
  const coffeeData = JSON.parse(localStorage.getItem('coffeeData')) || [];

  const allCoffeePriceElement = document.querySelector('.all-coffee-prise');
  const deliveryPriceElement = document.querySelector('.delivery-prise');
  const deliveryElement = document.querySelector('.total-delivery-price');
  const totalPriceElement = document.querySelector('.total-price');
  const selectDeliveryButton = document.querySelector('.deliver-button');
  const selectPickUpButton = document.querySelector('.pick-up-button');

  if (!allCoffeePriceElement || !deliveryPriceElement || !totalPriceElement) {
    console.error('One or more price elements are missing in the DOM.');
    iziToast.error({
      position: 'topRight',
      message: 'Something went wrong, please restart the site',
    });
    return;
  }

  if (!selectDeliveryButton || !selectPickUpButton) {
    console.error('Delivery buttons are missing in the DOM.');
    iziToast.error({
      position: 'topRight',
      message: 'Something went wrong, please restart the site',
    });
    return;
  }

  const updateElementText = (element, text) => {
    if (element) {
      element.textContent = text;
    }
  };

  const updateInfo = (isDeliverySelected, allcoffeePrice) => {
    const deliveryPrice = coffeeData.length;
    const deliveryTotalPrice =
      deliveryPrice > 1 ? deliveryPrice - 1 : deliveryPrice;

    if (isDeliverySelected) {
      if (deliveryPrice > 1) {
        deliveryPriceElement.innerHTML = `<span>$${deliveryTotalPrice.toFixed(2)}<span class="promo-delivery-prise"> $${deliveryPrice.toFixed(2)}`;
      } else {
        updateElementText(
          deliveryPriceElement,
          `$${deliveryTotalPrice.toFixed(2)}`
        );
      }
    } else {
      updateElementText(deliveryPriceElement, `$0.00`);
    }

    const totalPrice = isDeliverySelected
      ? allcoffeePrice + deliveryTotalPrice
      : allcoffeePrice;

    updateElementText(totalPriceElement, `$${totalPrice.toFixed(2)}`);
  };

  if (coffeeData.length > 0) {
    const secondCoffeePrise =
      coffeeData.length > 1
        ? parseFloat(coffeeData[1].price.replace('$', '').trim())
        : 0;

    const allcoffeePrice = coffeeData.reduce((acc, coffee) => {
      let price = parseFloat(coffee.price.replace('$', '').trim());
      return acc + (isNaN(price) ? 0 : price);
    }, 0);

    const allcoffeePricePromo =
      coffeeData.length > 1
        ? allcoffeePrice - secondCoffeePrise
        : allcoffeePrice;

    if (coffeeData.length > 1) {
      allCoffeePriceElement.innerHTML = `<span>$${allcoffeePricePromo.toFixed(2)}<span class="promo-delivery-prise"> $${allcoffeePrice.toFixed(2)}`;
    } else {
      updateElementText(
        allCoffeePriceElement,
        `$${allcoffeePricePromo.toFixed(2)}`
      );
    }

    selectDeliveryButton.addEventListener('click', () => {
      selectPickUpButton.classList.remove('delivery-select-active');
      selectDeliveryButton.classList.add('delivery-select-active');
      deliveryElement.classList.remove('pick-up-select');
      updateInfo(true, allcoffeePricePromo);
    });

    selectPickUpButton.addEventListener('click', () => {
      selectDeliveryButton.classList.remove('delivery-select-active');
      selectPickUpButton.classList.add('delivery-select-active');
      deliveryElement.classList.add('pick-up-select');
      updateInfo(false, allcoffeePricePromo);
    });

    updateInfo(true, allcoffeePricePromo);
  } else {
    updateElementText(allCoffeePriceElement, `$0.00`);
    updateElementText(deliveryPriceElement, `$0.00`);
    updateElementText(totalPriceElement, `$0.00`);
  }
}
