function getBasketItem(classes = []) {
    const basketItem = document.createElement("li");
    basketItem.classList.add(...classes);
    return basketItem;
}

function getNameEl(text, classes = []) {
    const nameEl = document.createElement("span");
    nameEl.textContent = text;
    nameEl.classList.add(...classes);
    return nameEl;
}

function getPriceEl(text, classes = []) {
    const priceEl = document.createElement("span");
    priceEl.textContent = text;
    priceEl.classList.add(...classes);
    return priceEl;
}

function getCheckoutButton({ text, classes = [], href = '#', onClick = null }) {
    const link = document.createElement('a');
    link.href = href;
    link.textContent = text;
    link.classList.add(...classes);

    if (onClick) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            onClick(e);
        });
    }

    return link;
}

function getCloseButton({ classes = [], iconHref, onClick = null }) {
    const btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', classes.join(' '));

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '24');
    svg.setAttribute('height', '24');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('class', 'main-menu__icon');

    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', iconHref);
    svg.appendChild(use);
    btn.appendChild(svg);

    if (onClick) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            onClick(e);
        });
    }

    return btn;
}

function getImageWrapper({ src, alt, width, height, wrapperClass = 'basket__img' }) {
    const wrapper = document.createElement('div');
    wrapper.classList.add(wrapperClass);

    const img = getImage({ src, alt, width, height });
    wrapper.appendChild(img);

    return wrapper;
}

function getImage({ src, alt, width, height, classes = [] }) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.width = width;
    img.height = height;
    img.classList.add(...classes);
    return img;
}

export {
    getBasketItem,
    getNameEl,
    getPriceEl,
    getCheckoutButton,
    getCloseButton,
    getImageWrapper,
    getImage,
}
