import Card from '../card/Card.js';
import { addItemToBasket } from '../basket/BasketManager.js';
import Basket from '../basket/Basket.js';
import { filterGoodsOfDay } from '../../utils/filters.js';
import { initTooltips } from '../tooltip/tooltipInit.js';

const basketContainer = document.querySelector('.basket');
const basket = new Basket(basketContainer);

export function renderDayCards(products, container) {
  container.innerHTML = '';

  const dayProducts = filterGoodsOfDay(products);

  dayProducts.forEach(product => {
    const card = new Card({
      id: product.id,
      title: product.name,
      oldPrice: product.price.old,
      price: product.price.new,
      imageSrc: product.image,
      alt: product.name,
      modifier: 'small',
      stockData: Object.entries(product.availability || {}).map(([city, count]) => ({
        city,
        count
      })),
      onAddToBasket: () => {
        addItemToBasket(product);
        basket.render();
      }
    });

    const li = document.createElement('li');
    li.classList.add('day-products__item', 'swiper-slide');
    li.appendChild(card.createCard());

    container.appendChild(li);
  });

  initTooltips();
}
