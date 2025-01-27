import { orderCoffee } from './orderCoffee.js';
import { updatePrice } from './updatePrice.js';
import { orderCoffeeButtom } from './orderCoffeeButtom.js';
import { changeOrderLocation } from './changeOrderLocation.js';

function modalBasket() {
  const basketButton = document.querySelector('.icon-basket');
  const modalBasket = document.querySelector('.modal-basket-list');

  basketButton.addEventListener('click', () => {
    modalBasket.classList.add('open');
    document.body.classList.add('no-scroll');

    modalBasket.innerHTML = `
    <div class="modal-basket-conteiner">
        <div class="basket-header">
            <span class="close-button">
                <svg class="icon-back">
                <use href="../../public/icon/symbol-defs.svg#icon-back"/>
                </svg>
            </span>
            <span class="order">Order</span>
        </div>
        <div class="delivery-select">
            <button class="deliver-button delivery-select-active" type="button">Deliver</button>
            <button class="pick-up-button" type="button">Pick Up</button>
        </div>
        <div class="detail-address">
            <h4>Delivery Address</h4>
            <span>
                <h5 class="order-adress"></h5>
            </span>
            <span class="button-adres-conteiner">
                <button class="button-edit">
                    <svg class="icons-edit">
                        <use  href="../public/icon/symbol-defs.svg#icon-edit"/>
                    </svg>
                Edit Addres
                </button>
            </span>
        </div>

        <div class="order-coffee-list"></div>

        <div class="price-details-conteiner">
            <h5>Payment Summary</h5>
            <table class="table-price">
                <tr class="total-caffe-price">
                    <td>Price</td>
                    <td class="all-coffee-prise">$0.00</td>
                </tr>
                <tr class="total-delivery-price">
                    <td>Delivery</td>
                    <td class="delivery-prise">$0.00</td>
                </tr>
            </table>
        </div>
        <div class="total-price-conteiner">
            <svg class="icon-walet">
                <use  href="../public/icon/symbol-defs.svg#icon-wallet"/>
            </svg>
                <span class="cash">Cash/Wallet</span>
                <p class="total-price">$0.00</p>
            <button type="submit" class="order-button">Order</button>
        </div>
    </div>
      `;

    changeOrderLocation();

    orderCoffee();

    updatePrice();

    orderCoffeeButtom();

    const closeButton = document.querySelector('.close-button');

    closeButton.addEventListener('click', () => {
      modalBasket.classList.remove('open');
      document.body.classList.remove('no-scroll');
      modalBasket.innerHTML = '';
    });
  });
}

export default modalBasket();
