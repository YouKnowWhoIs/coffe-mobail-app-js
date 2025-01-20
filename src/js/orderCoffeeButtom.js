export function orderCoffeeButtom() {
  const coffeeData = JSON.parse(localStorage.getItem('coffeeData')) || [];
  const dataLocation = JSON.parse(localStorage.getItem('dataLocation'));

  const orderButtom = document.querySelector('.order-button');

  if (coffeeData.length === 0) {
    orderButtom.classList.add('order-button-block');
    return;
  }

  orderButtom.addEventListener('click', () => {
    try {
      const orderCoffee = JSON.parse(
        localStorage.getItem('orderCoffee') || '[]'
      );
      const currentPrice =
        parseFloat(localStorage.getItem('currentPrice')) || 0;
      const dataPrice = parseFloat(localStorage.getItem('dataPrice')) || 0;

      JSON.parse(localStorage.getItem('orderLocation')) || [];

      const newTotalPrice = dataPrice + currentPrice;

      orderCoffee.push(...coffeeData);

      localStorage.setItem('orderCoffee', JSON.stringify(orderCoffee));
      localStorage.setItem('dataPrice', JSON.stringify(newTotalPrice));
      localStorage.setItem('orderLocation', JSON.stringify(dataLocation));

      localStorage.removeItem('coffeeData');
      localStorage.removeItem('currentPrice');
      localStorage.removeItem('dataLocation');

      console.log('Coffee order completed!');
    } catch (error) {
      console.log(error);
      return;
    }

    window.location.reload();
  });
}
