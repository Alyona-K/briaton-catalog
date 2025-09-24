import { cityNamesMap } from '../utils/cityNamesMap.js';

function getCityName(cityKey) {
    return cityNamesMap[cityKey] || cityKey;
}

function getCardEl(classes = []) {
    const formCardEl = document.createElement("div");
    formCardEl.classList.add(...classes);
    return formCardEl;
}

function getTitleEl(text, classes = []) {
    const titleEl = document.createElement("h2");
    titleEl.textContent = text;
    titleEl.classList.add(...classes);
    return titleEl;
}

function getButtonEl({ text, classes = [], iconHref = null, onClick = null }) {
    const el = document.createElement('a');
    el.href = '#';
    el.classList.add(...classes);

    const span = document.createElement('span');
    span.textContent = text;
    span.classList.add('btn__text');
    el.appendChild(span);

    if (iconHref) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '24');
        svg.setAttribute('height', '24');
        svg.setAttribute('aria-hidden', 'true');

        const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        use.setAttributeNS(null, 'href', iconHref);

        svg.appendChild(use);
        el.appendChild(svg);
    }

    if (onClick) {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            onClick();
        });
    }

    return el;
}

function getImage({ src, alt, width, height, classes = [] }) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.width = width;
    img.height = height;
    img.loading = 'lazy';
    img.classList.add(...classes);
    return img;
}

function getVisualBlock({ imageSrc, alt, onAddToBasket }) {
    const visual = document.createElement('div');
    visual.className = 'visual';

    const img = getImage({ src: imageSrc, alt, width: 290, height: 436 });

    const more = document.createElement('div');
    more.className = 'more';

    const addBtn = getButtonEl({
        text: 'Añadir al carrito',
        classes: ['link', 'btn', 'btn--icon'],
        iconHref: './images/sprite.svg#icon-basket',
        onClick: onAddToBasket
    });

    const moreBtn = getButtonEl({
        text: 'Más detalles',
        classes: ['link', 'btn', 'btn--secondary']
    });

    more.append(addBtn, moreBtn);
    visual.append(img, more);

    return visual;
}

function getInfoBlock({ title, oldPrice, price }) {
    const info = document.createElement('div');
    info.className = 'info';

    const titleEl = getTitleEl(title);

    const oldSpan = document.createElement('span');
    oldSpan.className = 'old';
    oldSpan.innerHTML = `
      <span class="old-number">${oldPrice}</span>
      <span class="old-add">€</span>
    `;

    const priceSpan = document.createElement('span');
    priceSpan.className = 'price';
    priceSpan.innerHTML = `
      <span class="price-number">${price}</span>
      <span class="price-add">€</span>
    `;

    info.append(titleEl, oldSpan, priceSpan);
    return info;
}

function getTooltipBlock(stockData) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';

    const btn = document.createElement('button');
    btn.setAttribute('aria-label', 'Mostrar información');
    btn.innerHTML = ` 
      <svg width="5" height="10" aria-hidden="true">
        <use xlink:href="./images/sprite.svg#icon-i"></use>
      </svg>
    `;

    const content = document.createElement('div');
    content.className = 'content';
    content.innerHTML = `<span class="text">Disponibilidad del producto por ciudad:</span>`;

    const list = document.createElement('ul');
    list.className = 'list';

    if (stockData && stockData.length > 0) {
        stockData.forEach(({ city, count }) => {
            const li = document.createElement('li');
            li.className = 'item';
            li.innerHTML = `
              <span class="text">${getCityName(city)}: <span class="count">${count}</span></span>
            `;
            list.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.className = 'item';
        li.innerHTML = '<span class="text">No hay información sobre la disponibilidad</span>';
        list.appendChild(li);
    }

    content.appendChild(list);
    tooltip.append(btn, content);

    return tooltip;
}

function getStockList(stockData) {
    const stockList = document.createElement('ul');
    stockList.classList.add('card__stock-list');

    stockData.forEach(stock => {
        const stockItem = document.createElement('li');
        stockItem.textContent = `${stock.city}: ${stock.count} uds.`;
        stockList.append(stockItem);
    });

    return stockList;
}

export {
    getCityName,
    getCardEl,
    getTitleEl,
    getButtonEl,
    getImage,
    getVisualBlock,
    getInfoBlock,
    getTooltipBlock,
    getStockList
}

