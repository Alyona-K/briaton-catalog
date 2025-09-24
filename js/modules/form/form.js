import { initFormValidation } from './formValidation.js';
import { openModal } from '../modal/modalController.js';

export function initForm() {
  const form = document.querySelector('.questions__form');
  if (!form) {
    console.warn('Formulario no encontrado en la página');
    return;
  }

  const validation = initFormValidation(form);

  validation.onSuccess(async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(form);

      const response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }

      form.reset();

      openModal('success');

    } catch (error) {
      openModal('error');
    }
  });
}
