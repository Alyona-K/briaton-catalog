import * as components from '../../components/modalComponents.js';

export default class Modal {
    constructor({ iconHref, title, description, onClose }) {
        this.iconHref = iconHref;
        this.title = title;
        this.description = description;
        this.onClose = onClose;
    }

    createModal() {

        const overlay = document.createElement('div');
        overlay.classList.add('modal-overlay');

        const modalEl = document.createElement('div');
        modalEl.className = 'message';
        modalEl.setAttribute('role', 'dialog');
        modalEl.setAttribute('aria-modal', 'true');
        modalEl.setAttribute('tabindex', '-1');

        const card = components.getModalCardEl(['message__content']);

        const img = components.getIcon({
            classes: ['message__icon'],
            iconHref: this.iconHref,
        });

        const textWrapper = components.getTextWrapper(['message__text-wrap']);
        const mainText = components.getMainText(['message__main-text']);
        mainText.textContent = this.title;

        const descriptionText = components.getDescriptionText(['message__description']);
        descriptionText.textContent = this.description;

        textWrapper.append(mainText, descriptionText);

        const closeBtn = components.getCloseButton({
            classes: ['message__close'],
            iconHref: 'images/sprite.svg#icon-close',
            onClick: this.onClose,
        });

        card.append(img, textWrapper, closeBtn);
        modalEl.append(card);

        overlay.append(modalEl);
        return overlay;
    }
}
