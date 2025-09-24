export function initFormValidation(form) {

    const validation = new JustValidate(form, {
        errorLabelStyle: {
            color: 'rgb(201, 0, 0)',
            fontSize: '14px',
        },
    });

    validation
        .addField('#name', [
            {
                rule: 'required',
                errorMessage: 'Ingrese su nombre',
            },
            {
                rule: 'minLength',
                value: 2,
                errorMessage: 'Mínimo 2 caracteres',
            },
            {
                rule: 'maxLength',
                value: 20,
                errorMessage: 'Máximo 20 caracteres',
            },
        ])
        .addField('#email', [
            {
                rule: 'required',
                errorMessage: 'Ingrese su correo electrónico',
            },
            {
                rule: 'email',
                errorMessage: 'Correo electrónico incorrecto',
            },
        ])
        .addField('#agree', [
            {
                rule: 'required',
                errorMessage: 'El consentimiento es obligatorio',
            },
        ])

    return validation;
}
