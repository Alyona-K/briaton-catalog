import { initBurgerMenu } from './burgerMenu.js';
import { initCitySelector } from './citySelector.js';
import { initBasketToggle } from '../basket/basketToggle.js'
import { initAccordion } from '../accordion/accordion.js';

export function initHeader(basket) {
  initBurgerMenu();
  initCitySelector();
  initBasketToggle(basket);
  initAccordion();
}
