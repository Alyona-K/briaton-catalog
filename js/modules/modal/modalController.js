import Modal from './Modal.js';

const MODAL_TYPES = {
  success: {
    iconHref: 'images/sprite.svg#icon-success',
    title: '¡Gracias por contactarnos!',
    description: 'Hemos recibido su solicitud y nos pondremos en contacto con usted en breve',
  },
  error: {
    iconHref: 'images/sprite.svg#icon-warning',
    title: 'No se pudo enviar la solicitud',
    description: 'Algo salió mal, intente enviar el formulario nuevamente. Si el error persiste, póngase en contacto con el servicio de soporte.',
  },
};

export function openModal(type = 'success') {
  const data = MODAL_TYPES[type];
  if (!data) return;

  let overlay = null;

  const modalInstance = new Modal({
    ...data,

    onClose: () => {

      if (overlay?.remove) {
        try {
          overlay.remove();
        } catch (e) {
          console.error('Error al eliminar la ventana modal:', e);
        }
      }
    }
  });

  overlay = modalInstance.createModal();
  document.body.append(overlay);

  requestAnimationFrame(() => {
    const modalContent = overlay.querySelector('.message__content');
    if (modalContent) {
      modalContent.classList.add('visible');
    }
  });
}
