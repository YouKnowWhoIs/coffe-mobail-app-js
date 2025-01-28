import { deliveryCard } from './deliveryCard.js';

function modalDelivery() {
  const buttonBell = document.querySelector('.icon-bell');
  const modal = document.querySelector('.modal-delivery');

  buttonBell.addEventListener('click', () => {
    modal.classList.add('open-delivery-modal');
    document.body.classList.add('no-scroll');

    modal.innerHTML = `
      <div class="modal-delivery-conteiner">
        <div class="delivery-header">
            <span class="close-button">
                <svg class="icon-back">
                    <use xlink:href="public/icon/symbol-defs.svg#icon-back"/>
                 </svg>
            </span>
            <span class="delivery">Delivery</span>
        </div>

        <div class="delivery-text">
            <h3>Thanks for order</h3>
        </div>

        <div class="delivered-conteiner">
          <span>
            <svg class="icon-delivery">
              <use xlink:href="public//icon/symbol-defs.svg#icon-delivery">
            </svg>
          </span>
          <div>
          <h3>Delivered your order</h3>
          <p>We will deliver your goods to you in the shortes possible time.</p>
          </div>
        </div>

        <div class="delivery-list"></div>

        <div class="delivery-courier-card">
            <img class="delivery-courier-img" alt="courier" src="../../public/image/courier.jpg"/>
            <div class="courier-details">
              <h4>Brooklyn Simmons</h4>
              <span class="personal-courier">Personal Courier</span>
            </div>

            <button class="button-phone">
                <svg class="icon-phone">
                    <use xlink:href="public/icon/symbol-defs.svg#icon-phone">
                </svg>
            </button>
        </div>
      </div>
      `;

    deliveryCard();

    const closeButton = document.querySelector('.close-button');

    closeButton.addEventListener('click', () => {
      modal.classList.remove('open-delivery-modal');
      document.body.classList.remove('no-scroll');
      modal.innerHTML = '';
    });
  });
}

export default modalDelivery();
