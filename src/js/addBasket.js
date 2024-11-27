const buttons = document.querySelector('.coffees-list');

buttons.addEventListener('click', event => {
  const button = event.target.closest('.card-button');

  if (button) {
    const coffeeCard = button.closest('.coffee-card');

    if (coffeeCard && coffeeCard.id) {
      const coffeeData = {
        id: coffeeCard.id,
        name: coffeeCard.querySelector('.card-name').textContent,
        price: coffeeCard.querySelector('.card-price').textContent,
        rating: coffeeCard.querySelector('.rating-text').textContent,
      };
      console.log(coffeeData);

      try {
        const addCoffeeData =
          JSON.parse(localStorage.getItem('coffeeData')) || [];

        addCoffeeData.push(coffeeData);

        localStorage.setItem('coffeeData', JSON.stringify(addCoffeeData));

        iziToast.success({
          position: 'topRight',
          message: 'Coffee has been added to the basket',
        });
      } catch (error) {
        iziToast.error({
          position: 'topRight',
          message: 'Something went wrong',
        });
      }
    }
  }
});
