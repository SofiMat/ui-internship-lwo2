/* eslint-disable */

function validateName() {
  const name = document.forms["l-form"]["l-form-name"].value;
  const validName = /[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/g;
  if (!validName.test(name)) {
    document.getElementById("l-form-name").style.outline = "2px inset #d32815";
  } else {
    document.getElementById("l-form-name").style.outline = "2px outset #4cd83a";
  }
}

function validateEmail() {
  const email = document.forms["l-form"]["l-form-email"].value;
  const validEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g;
  if (!validEmail.test(email)) {
    document.getElementById("l-form-email").style.outline = "2px inset #d32815";
  } else {
    document.getElementById("l-form-email").style.outline = "2px outset #4cd83a";
  }
}

function validatePass() {
  const pass = document.forms["l-form"]["l-form-pass"].value;
  const validPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/g;
  if (!validPass.test(pass)) {
    document.getElementById("l-form-pass").style.outline = "2px inset #d32815";
  } else {
    document.getElementById("l-form-pass").style.outline = "2px outset #4cd83a";
  }
}

function checkLength() {
  const area = document.getElementById("separate");
  const maxLength = 250;
  const minLength = 1;
  if(area.value.length > maxLength && area.value.length < minLength) {
    document.getElementById("separate").style.outline = "2px inset #d32815";
  }
}