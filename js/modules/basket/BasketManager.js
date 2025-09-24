import BasketItem from './BasketItem.js';

class BasketManager {
  #items = [];

  constructor(counterEl, emptyBlockEl) {
    this.counterEl = counterEl;
    this.emptyBlockEl = emptyBlockEl;

    this.#items = [];
    this.updateUI();

    this.loadFromStorage();
  }

  addItem(item) {
    this.#items.push(item);
    this.saveToStorage();
    this.updateUI();
  }

  removeItem(item) {
    const index = this.#items.findIndex(i => i.id === item.id);
    if (index !== -1) {
      this.#items.splice(index, 1);
      this.saveToStorage();
      this.updateUI();
    }
  }

  clearBasket() {
    this.#items = [];
    this.saveToStorage();
    this.updateUI();
  }

  saveToStorage() {
    const plainItems = this.#items.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      imageSrc: item.imageSrc
    }));
    localStorage.setItem('basketItems', JSON.stringify(plainItems));
  }

  loadFromStorage() {
    const savedItems = localStorage.getItem('basketItems');
    if (savedItems) {
      const parsedItems = JSON.parse(savedItems);

      this.#items = parsedItems.map(itemData => {
        return new BasketItem(
          itemData.id,
          itemData.name,
          itemData.price,
          itemData.imageSrc,
          () => {
            this.removeItem(itemData);
          }
        );
      });
    }
    this.updateUI();
  }

  getItems() {
    return this.#items;
  }

  get count() {
    return this.#items.length;
  }

  updateUI() {
    const itemCount = this.#items.length;
    this.counterEl.textContent = itemCount;
  }
}

const counterEl = document.querySelector('.header__user-count');
const emptyBlockEl = document.querySelector('.basket__empty-block');

export const basketManager = new BasketManager(counterEl, emptyBlockEl);

export function addItemToBasket(itemData) {
  const basketItem = new BasketItem(
    itemData.id,
    itemData.name,
    itemData.price.new,
    itemData.image,
    () => {
      removeItemFromBasket(itemData);
    }
  );
  basketManager.addItem(basketItem);
}
