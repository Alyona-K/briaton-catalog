function getModalCardEl(classes = []) {
    const modalCardEl = document.createElement("div");
    modalCardEl.classList.add(...classes);
    return modalCardEl;
}

function getIcon({ classes = [], iconHref }) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '44');
    svg.setAttribute('height', '44');
    svg.setAttribute('aria-hidden', 'true');
    svg.classList.add(...classes);

    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', iconHref);
    svg.appendChild(use);

    return svg;
}

function getTextWrapper(classes = []) {
    const textWrapper = document.createElement('div');
    textWrapper.classList.add(...classes);
    return textWrapper;
}

function getMainText(classes = []) {
    const mainText = document.createElement('span');
    mainText.classList.add(...classes);
    return mainText;
}

function getDescriptionText(classes = []) {
    const descriptionText = document.createElement('span');
    descriptionText.classList.add(...classes);
    return descriptionText;
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

export {
    getModalCardEl,
    getIcon,
    getTextWrapper,
    getMainText,
    getDescriptionText,
    getCloseButton
}
