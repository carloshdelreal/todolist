export default function() {
  const btn = document.querySelector('.formTodo button');
  btn.addEventListener('click', () => {
    console.log(getFormsData());
    createTodo();
  });
}

function getFormsData() {
  const input = document.querySelectorAll('.formTodo input');
  const desc = document.querySelector('.formTodo textarea');
  const bullets = document.querySelectorAll('.formTodo .bullets .form-check-input');

  const title = input[0].value;
  const description = desc.value;
  const date = input[1].value;
  const priority = getBulletsValue(bullets);

  if (formDataValid()) {
    input[0].value = '';
    desc.value = '';
    input[1].value = '';
    resetBulletsValue(bullets);

    return { title, description, date, priority };
  } else {
    return null;
  }
}

function getBulletsValue(radios) {
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      return radios[i].value;
    }
  }
}

function resetBulletsValue(radios) {
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      radios[i].checked = false;
    }
  }
  radios[0].checked = true;
}

function formDataValid() {
  const input = document.querySelectorAll('.formTodo input');
  const desc = document.querySelector('.formTodo textarea');

  const title = input[0].value;
  const description = desc.value;
  const date = input[1].value;

  if (title == '' || description == '' || date == '') {
    if (title == '') {
      input[0].classList.add('is-invalid');
    } else {
      input[0].classList.remove('is-invalid');
    }
    if (description == '') {
      desc.classList.add('is-invalid');
    } else {
      desc.classList.remove('is-invalid');
    }
    if (date == '') {
      input[1].classList.add('is-invalid');
    } else {
      input[1].classList.remove('is-invalid');
    }

    return false;
  } else {
    input[0].classList.remove('is-invalid');
    desc.classList.remove('is-invalid');
    input[1].classList.remove('is-invalid');
    return true;
  }
}
