export function getSortedProducts(products, selectedSort) {
  let sortedProducts = [...products];

  switch (selectedSort) {
    case 'price-min':
      sortedProducts.sort((a, b) => a.price.new - b.price.new);
      break;
    case 'price-max':
      sortedProducts.sort((a, b) => b.price.new - a.price.new);
      break;
    case 'rating-max':
    default:
      sortedProducts.sort((a, b) => b.rating - a.rating);
      break;
  }

  return sortedProducts;
}
