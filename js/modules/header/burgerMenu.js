export function initBurgerMenu() {
  const burgerBtn = document.querySelector('.header__catalog-btn');
  const menu = document.querySelector('.main-menu');
  const closeBtn = document.querySelector('.main-menu__close');

  if (!burgerBtn || !menu || !closeBtn) return;

  burgerBtn.addEventListener('click', () => {
    menu.classList.toggle('main-menu--active');
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('main-menu--active');
  });
}
