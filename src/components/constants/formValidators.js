export const NAME_FORM_VALIDATOR = {
  required: "campo obligatorio*",
  maxLength: {
    value: 60,
    message: "El nombre debe ser menor a 60 caracteres*",
  },
  pattern: {
    value: /^[a-záéíóúñ '-]+$/i,
    message: "Nombre o apellido contiene caracteres extraños*",
  },
};

export const EMAIL_FORM_VALIDATOR = {
  required: "Campo obligatorio*",
  max: 45,
  pattern: {
    value:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
    message: "Correo electrónico inválido*",
  },
};

export const PASSWORD_FORM_VALIDATOR = {
  required: "Campo obligatorio*",
  pattern: {
    value: /^(?=.*[A-Za-z])[A-Za-z@$!%*#?&\d]{8,}$/,
    message:
      "Tu contraseña es insegura, prueba a usar mayúsculas, minúsculas y números*",
  },
};

export const DNI_FORM_VALIDATOR = {
  required: "Campo obligatorio*",
  pattern: {
    value: /^\d{8}$/,
    message: "Documento de identidad inválido*",
  },
};

export const PHONE_FORM_VALIDATOR = {
  required: "Campo obligatorio*",
  pattern: {
    value: /^[90]\d{8}$/,
    message: "Número telefónico inválido*",
  },
};
