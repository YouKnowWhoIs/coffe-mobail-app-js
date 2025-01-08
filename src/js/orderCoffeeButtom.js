export function orderCoffeeButtom() {
  const coffeeData = JSON.parse(localStorage.getItem('coffeeData')) || [];

  const orderButtom = document.querySelector('.order-button');

  if (coffeeData.length === 0) {
    orderButtom.classList.add('order-button-block');
    return;
  }

  orderButtom.addEventListener('click', () => {
    try {
      const orderCoffee = JSON.parse(localStorage.getItem('orderCoffee')) || [];

      orderCoffee.push(...coffeeData);

      localStorage.setItem('orderCoffee', JSON.stringify(orderCoffee));

      localStorage.removeItem('coffeeData');
    } catch (error) {
      console.log(error);
      return;
    }

    window.location.reload();
  });
}
