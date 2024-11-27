export function WelkomeModal() {
  const modal = document.querySelector('.modal-welcome ');
  const buttonClose = document.querySelector('.welcome-button');

  buttonClose.addEventListener('click', () => {
    modal.classList.add('welcome-container-hidden');
  });
}
