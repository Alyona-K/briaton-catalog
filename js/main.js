import { initHeader } from './modules/header/header.js';
import { loadCatalog } from './modules/catalog/catalogController.js';
import Basket from './modules/basket/Basket.js';
import { initDaySlider } from './modules/slider/slider.js';
import { initForm } from './modules/form/form.js';

window.addEventListener('DOMContentLoaded', () => {
  const basketContainerEl = document.querySelector('.basket');
  const basket = new Basket(basketContainerEl);
  basket.renderBasketStructure(); 

  initHeader(basket); 

  loadCatalog();
  initDaySlider();
  initForm();
});

