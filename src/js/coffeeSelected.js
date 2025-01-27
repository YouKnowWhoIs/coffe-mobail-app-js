export function selectCoffeeOptional() {
  const coffeeOptional = document.querySelectorAll('.coffee-optional');

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
