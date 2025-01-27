import coffees from './index.js';
import { renderCoffeeList } from './renderCoffeeList.js';

function searchCoffeeName() {
  const search = document.querySelector('#search');
  const coffeeList = document.querySelector('.coffees-list');

  renderCoffeeList(coffees);

  search.addEventListener('input', event => {
    const query = event.target.value.toLowerCase();

    const filteredByName = coffees.filter(item =>
      item.name.toLowerCase().includes(query)
    );

    if (filteredByName.length > 0) {
      renderCoffeeList(filteredByName);
    } else {
      coffeeList.innerHTML = `<p>No coffee matches your search.<p>`;
    }
  });
}

document.addEventListener('DOMContentLoaded', searchCoffeeName);
