export function orderLocation() {
  const orderLocation = document.querySelector('.order-adress');
  const editAdressButton = document.querySelector('.button-edit');

  const dataLocation = JSON.parse(localStorage.getItem('dataLocation'));

  orderLocation.innerHTML = `${dataLocation}`;

  editAdressButton.addEventListener('click', () => {
    let cityDropdown = document.querySelector('.city-dropdown');
    if (cityDropdown) {
      cityDropdown.remove();
      return;
    }

    cityDropdown = document.createElement('select');
    cityDropdown.classList.add('city-dropdown');
    cityDropdown.innerHTML = `
      <option value="Kiew">Kiew</option>
      <option value="Lviv">Lviv</option>
      <option value="Rivne">Rivne</option>
      <option value="Odesa">Odesa</option>
    `;

    editAdressButton.after(cityDropdown);

    cityDropdown.addEventListener('change', () => {
      const selectedCity = cityDropdown.value;

      localStorage.setItem('dataLocation', JSON.stringify(selectedCity));
      orderLocation.innerHTML = selectedCity;

      cityDropdown.remove();
    });
  });
}
