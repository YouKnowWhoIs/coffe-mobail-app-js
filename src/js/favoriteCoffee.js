import { toggleFavorite } from './toggleFavorite.js';

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
