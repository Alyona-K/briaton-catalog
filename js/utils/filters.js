export function getFilteredProducts(products, { types, status }) {
  return products.filter(product => {

    const matchesType =
      types.length === 0 ||
      (Array.isArray(product.type)
        ? product.type.some(type => types.includes(type))
        : types.includes(product.type));

    const matchesAvailability =
      status === 'all-item' ||
      (status === 'instock' &&
        product.availability &&
        Object.values(product.availability).some(count => Number(count) > 0));

    return matchesType && matchesAvailability;
  });
}

export function filterGoodsOfDay(products) {
  return products.filter(product => product.goodsOfDay === true);
}
