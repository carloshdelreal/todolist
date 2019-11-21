function getBulletsValue(radios) {
  for (let i = 0; i < radios.length; i += 1) {
    if (radios[i].checked) {
      return radios[i].value;
    }
  }
  return null;
}

function resetBulletsValue(radios) {
  for (let i = 0; i < radios.length; i += 1) {
    if (radios[i].checked) {
      radios[i].checked = false;
    }
  }
  radios[0].checked = true;
}

function formDataValid() {
  const input = document.querySelectorAll('.formTodo input');

  const title = input[0].value;

  if (title === '') {
    input[0].classList.add('is-invalid');
    return false;
  }
  input[0].classList.remove('is-invalid');
  return true;
}

function getTodoFormData() {
  const input = document.querySelectorAll('.formTodo input');
  const desc = document.querySelector('.formTodo textarea');
  const bullets = document.querySelectorAll(
    '.formTodo .bullets .form-check-input'
  );

  const title = input[0].value;
  const description = desc.value;
  let date = input[1].value;
  const priority = getBulletsValue(bullets);

  if (formDataValid()) {
    input[0].value = '';
    desc.value = '';
    const cDate = new Date();
    input[1].value = `${cDate.getFullYear()}-${cDate.getMonth()}-${cDate.getDate()}`;
    resetBulletsValue(bullets);

    if (date === '') {
      date = `${cDate.getFullYear()}-${cDate.getMonth()}-${cDate.getDate()}`;
    }

    return {
      title,
      description,
      date,
      priority
    };
  }
  return null;
}

export { getTodoFormData, getBulletsValue };
