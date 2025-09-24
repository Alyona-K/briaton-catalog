import * as components from '../../components/cardComponents.js';

export default class Card {
  #id = null;
  #title = 'Sin título';
  #oldPrice = '';
  #price = '';
  #imageSrc = './images/no-image.jpg';
  #alt = 'Imagen del producto';
  #modifier = '';
  #stockData = [];
  #onAddToBasket = () => { };

  constructor({
    id = null,
    title = 'Sin título',
    oldPrice = '',
    price = '',
    imageSrc = './images/no-image.jpg',
    alt = 'Imagen del producto',
    modifier = '',
    stockData = [],
    onAddToBasket = () => { }
  } = {}) {
    this.#id = id;
    this.#title = title;
    this.#oldPrice = oldPrice;
    this.#price = price;
    this.#imageSrc = imageSrc;
    this.#alt = alt;
    this.#modifier = modifier;
    this.#stockData = stockData;
    this.#onAddToBasket = onAddToBasket;
  }

  // Getters
  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  get price() {
    return this.#price;
  }

  get imgUrl() {
    return this.#imageSrc;
  }

  get alt() {
    return this.#alt;
  }

  get stockData() {
    return this.#stockData;
  }

  get onAddToBasket() {
    return this.#onAddToBasket;
  }

  // Setters
  set title(value) {
    this.#title = value;
    if (this.titleEl) {
      this.titleEl.textContent = this.#title;
    }
  }

  set price(value) {
    this.#price = value;
    if (this.priceEl) {
      this.priceEl.textContent = this.#price + ' €';
    }
  }

  set imgUrl(value) {
    this.#imageSrc = value;
    if (this.imgEl) {
      this.imgEl.src = this.#imageSrc;
    }
  }

  set alt(value) {
    this.#alt = value;
    if (this.imgEl) {
      this.imgEl.alt = this.#alt;
    }
  }

  set stockData(value) {
    this.#stockData = value;
  }

  set onAddToBasket(callback) {
    this.#onAddToBasket = callback;
    if (this.addButtonEl) {
      this.addButtonEl.onclick = this.#onAddToBasket;
    }
  }

  createCard() {
    const card = document.createElement('div');
    card.className = 'product-card';

    if (this.#modifier) {
      card.classList.add(`product-card--${this.#modifier}`);
    }

    // Visual block
    const visual = document.createElement('div');
    visual.className = 'product-card__visual';

    this.imgEl = components.getImage({
      src: this.#imageSrc,
      alt: this.#alt,
      width: 290,
      height: 436,
    });
    this.imgEl.classList.add('product-card__img');

    const more = document.createElement('div');
    more.className = 'product-card__more';

    this.addButtonEl = components.getButtonEl({
      text: 'Añadir al carrito',
      classes: ['product-card__link', 'btn', 'btn--icon'],
      iconHref: 'images/sprite.svg#icon-basket',
      onClick: this.#onAddToBasket,
    });

    this.addButtonEl.dataset.id = this.#id;

    this.moreButtonEl = components.getButtonEl({
      text: 'Más información',
      classes: ['product-card__link', 'btn', 'btn--secondary'],
    });

    more.append(this.addButtonEl, this.moreButtonEl);
    visual.append(this.imgEl, more);

    // Info block
    const info = document.createElement('div');
    info.className = 'product-card__info';

    this.titleEl = components.getTitleEl(this.#title);
    this.titleEl.className = 'product-card__title';

    const old = document.createElement('span');
    old.className = 'product-card__old';
    old.innerHTML = `
    <span class="product-card__old-number">${this.#oldPrice}</span>
    <span class="product-card__old-add">€</span>
  `;

    this.priceEl = document.createElement('span');
    this.priceEl.className = 'product-card__price';
    this.priceEl.innerHTML = `
    <span class="product-card__price-number">${this.#price}</span>
    <span class="product-card__price-add">€</span>
  `;

    this.tooltipEl = components.getTooltipBlock(this.#stockData);
    this.tooltipEl.classList.add('product-card__tooltip', 'tooltip');

    const btn = this.tooltipEl.querySelector('button');
    btn.classList.add('tooltip__btn');

    const icon = this.tooltipEl.querySelector('svg');
    icon.classList.add('tooltip__icon');

    const content = this.tooltipEl.querySelector('.content');
    content.classList.add('tooltip__content');

    const text = this.tooltipEl.querySelector('.text');
    text.classList.add('tooltip__text');

    const list = this.tooltipEl.querySelector('.list');
    list.classList.add('tooltip__list');

    const items = list.querySelectorAll('.item');
    items.forEach(item => item.classList.add('tooltip__item'));

    const counts = list.querySelectorAll('.count');
    counts.forEach(count => count.classList.add('tooltip__count'));

    info.append(this.titleEl, old, this.priceEl, this.tooltipEl);
    card.append(visual, info);

    return card;
  }
}

