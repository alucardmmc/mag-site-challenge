const emptyValue = "Valor Requerido";

const isCardVisa = (card) => {
  const regexVisa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  if (card.match(regexVisa)) {
    return true;
  } else {
    return false;
  }
};

const isCardMastercard = (card) => {
  const regexMaster = /^(?:5[1-5][0-9]{14})$/;
  if (card.match(regexMaster)) {
    return true;
  } else {
    return false;
  }
};

const isDate = (date) => {
  const regexDate = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
  if (date.match(regexDate)) {
    return true;
  } else {
    return false;
  }
}

const isSecurityCode = (code) => {
  const regexCode = /^[0-9]{3}$/;
  if (code.match(regexCode)) {
    return true;
  } else {
    return false;
  }
}

const validateForm = (values) => {
  let errors = {};

  // Name
  if (!values.name.trim()) {
    errors.name = emptyValue;
  }

  // Credit Card
  if (!values.creditCard.trim()) {
    errors.creditCard = emptyValue;
  } else if (
    !(isCardVisa(values.creditCard) || isCardMastercard(values.creditCard))
  ) {
    errors.creditCard = 'Por favor ingresar una tarjeta válida';
  }

  // Expiration Date
  if (!values.expirationDate.trim()) {
    errors.expirationDate = emptyValue;
  } else if (!isDate(values.expirationDate)) {
    errors.expirationDate = 'Ingrese Fecha válida.';
  }

  // CVC
  if (values.securityCode.trim() === '') {
    errors.securityCode = emptyValue;
  } else if (!isSecurityCode(values.securityCode)) {
    errors.securityCode = 'Ingrese CVV válido.'
  }

  return errors;
};

export default validateForm;