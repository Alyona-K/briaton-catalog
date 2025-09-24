export function formatStockData(availability) {
  return Object.keys(availability).map(city => ({
    city,
    count: availability[city]
  }));
}
