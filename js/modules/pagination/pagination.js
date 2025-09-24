export function renderPagination(totalItems, itemsPerPage, onPageChange) {
  const paginationContainer = document.querySelector('.catalog__pagination');
  paginationContainer.innerHTML = '';

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement('li');
    li.classList.add('catalog__pagination-item');

    const button = document.createElement('button');
    button.classList.add('catalog__pagination-link');
    button.textContent = i;

    button.addEventListener('click', () => {
      onPageChange(i);
    });

    li.appendChild(button);
    paginationContainer.appendChild(li);
  }
}
