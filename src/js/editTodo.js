import { getBulletsValue } from './todoFormData';
function loadData(currentTodo, i) {
  const form = document.querySelector('.formTodo1');
  form.style.display = 'block';
  document.querySelectorAll('.formTodo1 .form-group input')[0].value =
    currentTodo.title;

  document.querySelector('.hidden').value = i;

  document.querySelectorAll('.formTodo1 .form-group textarea')[0].value =
    currentTodo.description;

  document.querySelectorAll('.formTodo1 .form-group input')[2].value =
    currentTodo.date;

  const bullets = document.querySelectorAll(
    '.formTodo1 .bullets .form-check-input'
  );
  bullets[currentTodo.priority - 1].checked = true;
}

function updateData() {
  const title = document.querySelectorAll('.formTodo1 .form-group input')[0]
    .value;
  const description = document.querySelectorAll(
    '.formTodo1 .form-group textarea'
  )[0].value;
  const date = document.querySelectorAll('.formTodo1 .form-group input')[2]
    .value;
  const bullets = document.querySelectorAll(
    '.formTodo1 .bullets .form-check-input'
  );
  const priority = getBulletsValue(bullets);
  const index = document.querySelector('.hidden').value;
  return { title, description, date, priority, index };
}

export { loadData, updateData };
