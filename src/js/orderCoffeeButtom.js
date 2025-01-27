export function orderCoffeeButtom() {
  const coffeeData = JSON.parse(localStorage.getItem('coffeeData')) || [];

  const orderButtom = document.querySelector('.order-button');

  if (coffeeData.length === 0) {
    orderButtom.classList.add('order-button-block');
    return;
  }

  orderButtom.addEventListener('click', () => {
    try {
      const coffeeData = JSON.parse(localStorage.getItem('coffeeData')) || [];
      const orderCoffee = JSON.parse(
        localStorage.getItem('orderCoffee') || '[]'
      );
      const currentPrice =
        parseFloat(localStorage.getItem('currentPrice')) || 0;
      const dataLocation =
        JSON.parse(localStorage.getItem('dataLocation')) || '';

      const orders = {
        coffee: coffeeData,
        location: dataLocation,
        price: currentPrice,
      };

      const previousOrders = JSON.parse(localStorage.getItem('orders')) || [];
      localStorage.setItem(
        'orders',
        JSON.stringify([...previousOrders, orders])
      );

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
