/* eslint-disable */
(() => {
  const PATTERNS = {
    username: /[A-Za-z]{2,20}/g,
    email: /^([,a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/g,
    subject: /[\s\S]{0,30}$/g
  };

  const VALID_CLASSNAME = 'valid';
  const ERROR_CLASSNAME = 'error';

  initForms(['login-form', 'contact-form']);

  function initForms(forms) {
    forms.forEach(formId => handleFormValidation(formId));
  }

  function handleFormValidation(formName) {
    const form = document.forms[formName];

    form.addEventListener('keyup', e => validateInput(e.target), true);
  }

  function validateInput(input) {
    const { value, name } = input;

    const pattern = PATTERNS[name];

    const isValid = isValidValue(value, pattern);

    const addClass = isValid ? VALID_CLASSNAME : ERROR_CLASSNAME;
    const removeClass = !isValid ? VALID_CLASSNAME : ERROR_CLASSNAME;

    input.classList.add(addClass);
    input.classList.remove(removeClass);
  }

  function isValidValue(val, pattern) {
    return !!val.match(pattern);
  }

})();

function checkLength(input) {
  const textArea = document.getElementById("separate");
  if( textArea.value.length < 1 && textArea.value.length > 250) {
    input.toggleClass(input, ['valid', 'error']);
  }
}

function submit(e) {
  console.log(e);
  e.preventDefault();
}