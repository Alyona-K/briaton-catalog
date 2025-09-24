import * as components from '../../components/basketComponents.js';

export default class BasketItem {
    #name = 'Sin nombre';
    #price = '';
    #imageSrc = '../images/no-image.jpg';
    #alt = 'Imagen del producto';
    #id = null;

    constructor(id, name, price, imageSrc, onRemove) {
        this.#id = id;
        this.#name = name;
        this.#price = price;
        this.onRemove = onRemove;
        if (imageSrc) {
            this.#imageSrc = imageSrc;
        }
    }

    get id() {
        return this.#id;
    }

    set name(value) {
        this.#name = value;

        if (this.nameEl) {
            this.nameEl.textContent = this.#name;
        }
    }

    get name() {
        return this.#name;
    }

    set price(value) {
        this.#price = value;

        if (this.priceEl) {
            this.priceEl.textContent = `${this.#price} €`;
        }
    }

    get price() {
        return this.#price;
    }

    set imageSrc(value) {
        this.#imageSrc = value

        if (this.img) {
            this.img.src = this.#imageSrc
        }
    }

    get imageSrc() {
        return this.#imageSrc
    }

    set alt(value) {
        this.#alt = value;

        if (this.img) {
            this.img.alt = this.#alt;
        }
    }

    get alt() {
        return this.#alt;
    }

    createBasketItem() {
        this.basketItem = components.getBasketItem(['basket__item']);

        this.imageWrapper = components.getImageWrapper({
            src: this.#imageSrc,
            alt: this.#alt,
            width: 60,
            height: 60,
            wrapperClass: 'basket__img'
        });

        this.img = this.imageWrapper.querySelector('img');
        this.nameEl = components.getNameEl(this.#name, ['basket__name']);
        this.priceEl = components.getPriceEl(`${this.#price} €`, ['basket__price']);
        this.closeButtonEl = this.getCloseButtonEl();

        this.basketItem.append(
            this.imageWrapper,
            this.nameEl,
            this.priceEl,
            this.closeButtonEl
        );

        return this.basketItem;
    }

    getCloseButtonEl() {
        return components.getCloseButton({
            classes: ['basket__item-close'],
            iconHref: 'images/sprite.svg#icon-close',
            onClick: (e) => {
                this.handleRemove(e);
            }
        });
    }

    handleRemove(e) {
        this.basketItem.remove();
        this.onRemove?.();
    }
}
