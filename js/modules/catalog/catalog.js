import Card from '../card/Card.js';
import { formatStockData } from '../../utils/formatStockData.js';
import { addItemToBasket } from '../basket/BasketManager.js';
import Basket from '../basket/Basket.js';
import { initTooltips } from '../tooltip/tooltipInit.js';

const catalogList = document.querySelector('.catalog__list');
const basketContainer = document.querySelector('.basket');
const basket = new Basket(basketContainer);

export function renderCatalog(products) {
  catalogList.innerHTML = '';

  products.forEach(productData => {
    const stockData = formatStockData(productData.availability);

    const cardInstance = new Card({
      title: productData.name,
      oldPrice: productData.price.old,
      price: productData.price.new,
      imageSrc: productData.image,
      alt: productData.name,
      stockData,
      onAddToBasket: () => {
        addItemToBasket(productData);
        basket.render();
      },
    });

    const li = document.createElement('li');
    li.className = 'catalog__item';
    li.appendChild(cardInstance.createCard());

    catalogList.appendChild(li);
  });

  initTooltips();
}
