function updatePrice(size, coffee) {
  const priseElement = document.querySelector('.price-text');

  const prices = {
    S: coffee.sizes.s,
    M: coffee.sizes.m,
    L: coffee.sizes.l,
  };

  if (priseElement) {
    priseElement.textContent = `$${prices[size].toFixed(1)}`;
  } else {
    console.error('error');
  }
}

export function sizeSelected(coffee) {
  const buttons = document.querySelectorAll('.detail-size-button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => {
        btn.classList.remove('detail-size-button-active');
      });

      button.classList.add('detail-size-button-active');

      const size = button.querySelector('input').value;

      updatePrice(size, coffee);
    });
  });
}
