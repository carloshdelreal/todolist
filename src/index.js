import './style.scss';
import load from './js/pageload';
import { getTodoFormData } from './js/todoFormData';
import { getListFormData } from './js/todoFormListData';
import {deleteTask} from './js/delete';

let todoContainer = null;

window.onload = () => {
  todoContainer = load();
  todoContainer.update();


  const btn = document.querySelector('.formTodo button');
  btn.addEventListener('click', () => {
    const data = getTodoFormData();
    if (data) {
      todoContainer.addTodo(data);
      todoContainer.update();
      deleteListener();
    }
  });
  const addT = document.querySelector('.pop-up');
  const closeT = document.querySelector('.btn-danger');
  const btnList = document.querySelector('.formList button');
  btnList.addEventListener('click', () => {
    const data = getListFormData();
    if (data) {
      todoContainer.addList(data);
      todoContainer.update();
      listListener();

    }
  });
  const form = document.querySelector('.formTodo');
  addT.addEventListener('click', () =>{
    form.style.display = "block";
  });
  
  closeT.addEventListener('click', () => {
    form.style.display = "none";
  });
};

function listListener() {
  const listItems = document.querySelectorAll('.todoLists .todoItem');
  for (let i = 0; i < listItems.length; i += 1) {
    listItems[i].addEventListener('click', () => {
      todoContainer.setCurrentList(i);

      todoContainer.update();
      changeList(i);
    });
  }
}

function changeList(index) {
  const listItems = document.querySelectorAll('.todoLists .todoItem');
  const test = document.querySelector('.list-group-item-primary');
  test.classList.remove('list-group-item-primary');
  listItems[index].classList.add('list-group-item-primary');
}

function deleteListener(){
  let btt =document.querySelectorAll('.list-group .card .bin');
  for (let i = 0; i <btt.length; i += 1) {
    btt[i].addEventListener('click', () => {
      todoContainer.deleteTodo(i);
      console.log(i);
      todoContainer.update();
      });
  }

}



export { listListener, deleteListener };
