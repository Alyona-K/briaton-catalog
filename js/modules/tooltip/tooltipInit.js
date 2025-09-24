export function initTooltips() {
  tippy.delegate(document.body, {
    target: '.tooltip__btn',
    allowHTML: true,
    interactive: true,
    placement: 'top',
    trigger: 'mouseenter focus',
    offset: [0, 10],
    theme: 'lightwhite',
    appendTo: document.body,
    popperOptions: {
      modifiers: [
        {
          name: 'preventOverflow',
          options: {
            boundary: 'document.body',
          },
        },
      ],
    },
    content(reference) {
      const tooltipWrapper = reference.closest('.tooltip');
      const content = tooltipWrapper?.querySelector('.tooltip__content');
      return content ? content.innerHTML : '';
    }
  });
}
