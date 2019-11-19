import './style.scss';
import load from './js/pageload';
import { getTodoFormData } from './js/todoFormData';
import { getListFormData } from './js/listFormData';
// import { createList, showTodo } from './js/updateList';

window.onload = () => {
  const todoContainer = load();

  todoContainer.update();

  const btn = document.querySelector('.formTodo button');
  btn.addEventListener('click', () => {
    const data = getTodoFormData();
    if (data) {
      todoContainer.addTodo(data);
      todoContainer.update();
    }
  });

  const btnList = document.querySelector('.formList button');
  btnList.addEventListener('click', () => {
    const data = getListFormData();
    if (data) {
      todoContainer.addList(data);
      todoContainer.update();
    }
  });
};
