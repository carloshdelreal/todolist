
function loadData(currentTodo){
  const form = document.querySelector('.formTodo1');
  form.style.display = "block";
  document.querySelectorAll('.formTodo1 .form-group input')[0].value= currentTodo.title;

  document.querySelectorAll('.formTodo1 .form-group textarea')[0].value= currentTodo.description;

  document.querySelectorAll('.formTodo1 .form-group input')[2].value= currentTodo.date;

  const bullets = document.querySelectorAll(
    '.formTodo1 .bullets .form-check-input'
  );
  bullets[currentTodo.priority-1].checked = true;

}
export {loadData}
