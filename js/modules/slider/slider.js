import { renderDayCards } from './renderDayCards.js';
import { initDayProductsSwiper } from './initSwiper.js';
import { filterGoodsOfDay } from '../../utils/filters.js';

export async function initDaySlider() {
  try {
    const response = await fetch('data/data.json');
    if (!response.ok) {
      throw new Error(`Error de carga: ${response.statusText}`);
    }

    const data = await response.json();
    const products = data.products || [];

    const container = document.querySelector('.day-products__list, swiper-wrapper');
    const filtered = filterGoodsOfDay(products);

    renderDayCards(filtered, container);
    initDayProductsSwiper();
  } catch (error) {
    console.error('Error al inicializar el deslizador:', error);
  }
}
