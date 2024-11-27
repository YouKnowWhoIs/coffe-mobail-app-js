const panel = document.querySelectorAll('.icon');

export function panelActiveIcon() {
  panel.forEach(select => {
    select.addEventListener('click', () => {
      panel.forEach(active => {
        active.classList.remove('active-icon');
      });

      select.classList.add('active-icon');
    });
  });
}

panelActiveIcon();
