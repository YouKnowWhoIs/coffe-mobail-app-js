function location() {
  const locationSelect = document.querySelector('#location');

  const dataLocation = JSON.parse(localStorage.getItem('dataLocation'));

  if (!dataLocation) {
    localStorage.setItem('dataLocation', JSON.stringify('Kiew'));
    locationSelect.value = 'Kiew';
  } else {
    locationSelect.value = dataLocation;
  }
  locationSelect.addEventListener('change', () => {
    const locationSelected = locationSelect.value;

    localStorage.setItem('dataLocation', JSON.stringify(locationSelected));
  });
}

location();
