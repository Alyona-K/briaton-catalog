export function initBasketToggle(basket) {
    const basketBtn = document.querySelector('.header__user-btn');
    const basketDropdown = document.querySelector('.basket');

    if (!basketBtn || !basketDropdown) return;

    basketBtn.addEventListener('click', () => {
        basketDropdown.classList.toggle('basket--active');
        basket.render();
    });
}
