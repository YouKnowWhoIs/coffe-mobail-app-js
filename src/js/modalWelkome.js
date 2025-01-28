function modalWelkome() {
  const isModalOpen = JSON.parse(localStorage.getItem('isModalOpen')) || false;

  console.log(isModalOpen);

  const modal = document.querySelector('.modal-welcome');

  if (!isModalOpen) {
    document.body.classList.add('no-scroll');

    modal.innerHTML = `
      <div class="welcome-container">
        <img
          class="welcome-background-image"
          src="/public/image/6.jpg"
          alt="Coffee Shops Home Page"
        />
        <div class="welcome-content">
          <h1 class="welcome-title">
            Fall in Love with Coffee in Blissful Delight!
          </h1>
          <p class="welcome-description">
            Welcome to our cozy coffee corner, where every cup is a delightful
            for you.
          </p>
          <button class="welcome-button" type="button">Get Started</button>
        </div>
      </div>
    `;

    const buttonClose = document.querySelector('.welcome-button');

    buttonClose.addEventListener('click', () => {
      modal.classList.add('welcome-container-hidden');
      document.body.classList.remove('no-scroll');

      localStorage.setItem('isModalOpen', JSON.stringify(true));
    });
  } else {
    modal.classList.add('welcome-container-hidden');
  }
}

export default modalWelkome();
