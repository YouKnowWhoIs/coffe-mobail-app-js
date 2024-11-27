const coffeeOptional = document.querySelectorAll('.coffee-optional');

export function selectCoffeeOptional() {
  coffeeOptional.forEach(select => {
    select.addEventListener('click', () => {
      coffeeOptional.forEach(active => {
        active.classList.remove('active-coffee-optional');
      });

      select.classList.add('active-coffee-optional');
    });
  });
}

selectCoffeeOptional();
