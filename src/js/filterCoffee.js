import coffees from './index.js';
import renderCoffeeList from './coffeeList.js';

const selectCoffeeType = document.querySelector('.select-coffee');

function filterType() {
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
        console.warn('Елемент не знайдено!');
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderCoffeeList(coffees);
  filterType();
});

filterType();
