import * as components from '../../components/basketComponents.js';
import BasketItem from './BasketItem.js';
import { basketManager } from './BasketManager.js';

export default class Basket {
    constructor(basketContainerEl) {
        this.basketContainerEl = basketContainerEl;
        this.basketListEl = this.basketContainerEl.querySelector('.basket__list');
    }

    render() {
        this.basketListEl.innerHTML = '';

        const items = basketManager.getItems();

        const checkoutBtn = this.basketContainerEl.querySelector('.basket__checkout-button');

        if (items.length === 0) {
            this.basketContainerEl.querySelector('.basket__empty-block').style.display = 'block';

            if (checkoutBtn) {
                checkoutBtn.remove();
            }
        } else {
            this.basketContainerEl.querySelector('.basket__empty-block').style.display = 'none';
        }

        items.forEach(item => {
            const basketItem = new BasketItem(
                item.id,
                item.name,
                item.price,
                item.imageSrc,
                () => {
                    this.removeItemFromBasket(item);
                }
            );
            const basketItemEl = basketItem.createBasketItem();
            this.basketListEl.appendChild(basketItemEl);
        });

        const existingCheckoutBtn = this.basketContainerEl.querySelector('.basket__checkout-button');
        if (!existingCheckoutBtn && items.length > 0) {
            const checkoutBtn = components.getCheckoutButton({
                text: 'Ir al pago',
                classes: ['basket__link', 'btn', 'basket__checkout-button'],
                href: '#',
                onClick: () => {
                    console.log('Redirigiendo al pago');
                }
            });
            this.basketContainerEl.appendChild(checkoutBtn);
        }

        this.updateItemCount();
    }

    updateItemCount() {
        const itemCount = basketManager.count;
        const countEl = document.querySelector('.header__user-count');
        countEl.textContent = itemCount;
    }

    clearBasket() {
        basketManager.clearBasket();
        this.render();
    }

    removeItemFromBasket(item) {
        basketManager.removeItem(item);
        this.render();
    }

    renderBasketStructure() {
        if (!this.basketContainerEl.querySelector('.basket__list')) {
            const basketList = components.getBasketList();
            this.basketContainerEl.appendChild(basketList);
        }

        if (!this.basketContainerEl.querySelector('.basket__empty-block')) {
            const emptyBlock = components.getEmptyBlock();
            this.basketContainerEl.appendChild(emptyBlock);
        }
    }
}
