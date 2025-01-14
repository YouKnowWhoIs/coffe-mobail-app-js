import coffees from './index.js';
import { renderCoffeeList } from './renderCoffeeList.js';

export function coffeeList() {
  const coffeeList = document.querySelector('.coffees-list');
  const iconFavorite = document.querySelector('.icon-heart');
  const iconHome = document.querySelector('.icon-home');

  if (iconHome.classList.contains('active-icon')) {
    renderCoffeeList(coffees);
  }

  iconHome.addEventListener('click', () => {
    iconHome.classList.add('active-icon');
    iconFavorite.classList.remove('active-icon');

    renderCoffeeList(coffees);
  });

  iconFavorite.addEventListener('click', () => {
    const coffeeFavorite =
      JSON.parse(localStorage.getItem('favoriteCoffees')) || [];
    iconFavorite.classList.add('active-icon');
    iconHome.classList.remove('active-icon');

    if (coffeeFavorite.length > 0) {
      const favoriteId = coffeeFavorite.map(item => String(item.id));

      const selectedCoffees = coffees.filter(coffee =>
        favoriteId.includes(String(coffee.id))
      );

      renderCoffeeList(selectedCoffees);
    } else {
      coffeeList.innerHTML = `
            <p class="not-favorite-text">You don't have favorite coffee!</p>
          `;
    }
  });
}

coffeeList();
