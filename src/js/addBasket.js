function AddBacket() {
  const button = document.querySelector('.button-conteiner');

  button.addEventListener('click', () => {
    const conteiner = document.querySelector('.detail-container');
    const size = document.querySelector('.detail-size-button-active');

    const coffeeData = {
      id: conteiner.id,
      name: conteiner.querySelector('.coffee-name').textContent,
      type: conteiner.querySelector('.details-type').textContent,
      size: size.textContent.trim(),
      price: conteiner.querySelector('.price-text').textContent,
      url: conteiner.querySelector('.img-details').src,
    };

    try {
      const addCoffeeData =
        JSON.parse(localStorage.getItem('coffeeData')) || [];

      addCoffeeData.push(coffeeData);

      localStorage.setItem('coffeeData', JSON.stringify(addCoffeeData));

      iziToast.success({
        position: 'topRight',
        message: 'Coffee has been added to the basket',
      });
    } catch (error) {
      iziToast.error({
        position: 'topRight',
        message: 'Something went wrong',
      });
    }
  });
}

export default AddBacket;
