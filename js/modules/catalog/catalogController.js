import { renderCatalog } from './catalog.js';
import { getFilteredProducts } from '../../utils/filters.js';
import { getSortedProducts } from '../../utils/sorting.js';
import { renderPagination } from '../pagination/pagination.js';

let products = [];
let currentPage = 1;
const itemsPerPage = 6;

function updateTypeCounts(filteredProducts) {
  const counts = {};

  filteredProducts.forEach(product => {
    if (Array.isArray(product.type)) {
      product.type.forEach(type => {
        counts[type] = (counts[type] || 0) + 1;
      });
    } else {
      counts[product.type] = (counts[product.type] || 0) + 1;
    }
  });

  const checkboxes = document.querySelectorAll('.catalog-form .custom-checkbox__field');
  checkboxes.forEach(checkbox => {
    const type = checkbox.value;
    const label = document.querySelector(`label[for="${checkbox.id}"]`);
    const countSpan = label?.querySelector('.custom-checkbox__count');

    if (countSpan) {
      countSpan.textContent = counts[type] || 0;
    }
  });
}

export async function loadCatalog() {
  try {
    const response = await fetch('data/data.json');
    if (!response.ok) {
      throw new Error(`Error al cargar los datos: ${response.statusText}`);
    }
    const data = await response.json();

    products = data.products;
    if (Array.isArray(products) && products.length > 0) {
      initFilters();
      updateCatalog();
    } else {
      console.error('Error: no se encontraron productos o la estructura de datos es incorrecta');
    }
  } catch (error) {
    console.error('Error al cargar los productos:', error);
  }
}

function updateCatalog() {
  const typeCheckboxes = document.querySelectorAll('.custom-checkbox__field:checked');
  const selectedTypes = Array.from(typeCheckboxes).map(cb => cb.value);

  const statusRadio = document.querySelector('input[name="status"]:checked');
  const selectedStatus = statusRadio?.value || 'all-item';

  const sortSelect = document.querySelector('.catalog__sort-select');
  const selectedSort = sortSelect?.value || 'rating-max';

  const filterParams = {
    types: selectedTypes,
    status: selectedStatus,
  };

  const filtered = getFilteredProducts(products, filterParams);
  updateTypeCounts(products);
  const sorted = getSortedProducts(filtered, selectedSort);

  const start = (currentPage - 1) * itemsPerPage;
  const end = currentPage * itemsPerPage;
  const paginatedProducts = sorted.slice(start, end);

  renderCatalog(paginatedProducts);

  if (sorted.length > itemsPerPage) {
    renderPagination(sorted.length, itemsPerPage, (page) => {
      currentPage = page;
      updateCatalog();
    });
  } else {
    document.querySelector('.catalog__pagination').innerHTML = '';
  }
}

export function initFilters() {
  const checkboxes = document.querySelectorAll('.catalog-form .custom-checkbox__field');
  const sortSelect = document.querySelector('.catalog__sort-select');
  const statusRadios = document.querySelectorAll('input[name="status"]');
  const resetButton = document.querySelector('.catalog-form__reset');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateCatalog);
  });

  statusRadios.forEach(radio => {
    radio.addEventListener('change', updateCatalog);
  });

  sortSelect?.addEventListener('change', updateCatalog);

  resetButton?.addEventListener('click', () => {

    checkboxes.forEach(cb => cb.checked = false);

    statusRadios.forEach(radio => {
      if (radio.value === 'all-item') {
        radio.checked = true;
      } else {
        radio.checked = false;
      }
    });

    if (sortSelect) {
      sortSelect.value = 'rating-max';
    }

    updateCatalog();
  });
}

