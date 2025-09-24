export function initDayProductsSwiper() {
  new Swiper('.day-products__slider', {
    slidesPerView: 4,
    spaceBetween: 40,
    navigation: {
      nextEl: '.day-products__navigation-btn--next',
      prevEl: '.day-products__navigation-btn--prev',
    },
  });
}
