import coffees from './index.js';
import { renderCoffeeList } from './renderCoffeeList.js';

function filterType() {
  const selectCoffeeType = document.querySelector('.select-coffee');
  const coffeeList = document.querySelector('.coffees-list');

  selectCoffeeType.addEventListener('click', event => {
    const selectType = event.target.closest('.coffee-optional');

    if (selectType) {
      const select = selectType.querySelector('input').value;

      if (select) {
        let dataCoffeesType;

        if (select.toLowerCase() === 'all coffee') {
          dataCoffeesType = coffees;
        } else {
          dataCoffeesType = coffees.filter(
            items => items.type.toLowerCase() === select.toLowerCase()
          );
        }
        renderCoffeeList(dataCoffeesType);
      } else {
        coffeeList.innerHTML = `
            <p>Something went wrong, please restart the site</p>
          `;
      }
    }
  });
}

export default filterType();
