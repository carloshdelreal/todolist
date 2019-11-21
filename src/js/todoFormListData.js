function formDataValid(input) {
  const title = input.value;

  if (title === '') {
    return false;
  }
  return true;
}

function getListFormData() {
  const input = document.querySelector('.formList input');

  const title = input.value;
  const valid = formDataValid(input);

  if (valid) {
    input.classList.remove('is-invalid');
    input.value = '';
    return title;
  }
  input.classList.add('is-invalid');
  return null;
}

export { getListFormData, formDataValid };
