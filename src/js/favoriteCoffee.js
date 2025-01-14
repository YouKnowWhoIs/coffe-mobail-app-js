import { coffeeList } from './coffeeList.js';

function toggleFavorite(itemId) {
  const conteiner = document.querySelector('.detail-container');
  const favorite = document.querySelector('.icon-not-like');

  const coffeeFavoriteData = {
    id: conteiner.id,
    name: conteiner.querySelector('.coffee-name').textContent,
  };

  let addCoffeeFavorite =
    JSON.parse(localStorage.getItem('favoriteCoffees')) || [];

  if (addCoffeeFavorite.some(coffee => coffee.id === itemId)) {
    addCoffeeFavorite = addCoffeeFavorite.filter(
      coffee => coffee.id !== itemId
    );

    if (addCoffeeFavorite.length === 0) {
      localStorage.removeItem('favoriteCoffees');
    } else {
      localStorage.setItem(
        'favoriteCoffees',
        JSON.stringify(addCoffeeFavorite)
      );
    }

    favorite.innerHTML =
      '<use href="../../public/icon/symbol-defs.svg#icon-heart1"/>';

    iziToast.success({
      position: 'topRight',
      message: 'Coffee has been deleted from favorites',
    });
  } else {
    addCoffeeFavorite.push(coffeeFavoriteData);
    localStorage.setItem('favoriteCoffees', JSON.stringify(addCoffeeFavorite));

    favorite.innerHTML =
      '<use href="../../public/icon/symbol-defs.svg#icon-heart" fill="#c67c4e" />';

    iziToast.success({
      position: 'topRight',
      message: 'Coffee has been selected in favorites',
    });
  }

  coffeeList();
}

export function favoriteCoffee() {
  const favorite = document.querySelector('.icon-not-like');
  const conteiner = document.querySelector('.detail-container');

  const itemId = conteiner.id;

  let addCoffeeFavorite =
    JSON.parse(localStorage.getItem('favoriteCoffees')) || [];

  if (addCoffeeFavorite.some(coffee => coffee.id === itemId)) {
    favorite.innerHTML =
      '<use href="../../public/icon/symbol-defs.svg#icon-heart" fill="#c67c4e" />';
  } else {
    favorite.innerHTML =
      '<use href="../../public/icon/symbol-defs.svg#icon-heart1"/>';
  }

  favorite.addEventListener('click', () => {
    toggleFavorite(itemId);
  });
}
