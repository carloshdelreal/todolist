import './style.scss';
import load from './js/pageload';
import { getTodoFormData } from './js/todoFormData';
import { getListFormData } from './js/todoFormListData';
import { loadData, updateData } from './js/editTodo';
let todoContainer = null;

window.onload = () => {
  todoContainer = load();
  todoContainer.update();

  // add todo
  const btn = document.querySelector('.formTodo button');
  btn.addEventListener('click', () => {
    const data = getTodoFormData();
    if (data) {
      todoContainer.updateTodo(data);
      todoContainer.update();
    }
  });

  // update todo
  const updateBtn = document.querySelector('.formTodo1 button');
  updateBtn.addEventListener('click', () => {
    const data = updateData();
    if (data) {
      todoContainer.updateTodo(data);
      todoContainer.update();
    }
  });

  // add list
  const btnList = document.querySelector('.formList button');
  btnList.addEventListener('click', () => {
    const data = getListFormData();
    if (data) {
      todoContainer.addList(data);
      todoContainer.update();
    }
  });
};

// adds list items listeners
function listListener() {
  const listItems = document.querySelectorAll('.todoLists .todoItem');
  for (let i = 0; i < listItems.length; i += 1) {
    listItems[i].addEventListener('click', () => {
      todoContainer.setCurrentList(i);
      todoContainer.update();
      changeList(i);
    });
  }

  //Listners for Edit

  const cards = document.querySelectorAll('.card');
  for (let i = 0; i < cards.length; i += 1) {
    cards[i].addEventListener('click', () => {
      const currentTodo = todoContainer.getList().todos[i];

      loadData(currentTodo, i);
    });
  }
}

// higlights selected list
function changeList(index) {
  if (todoContainer.lists.length > 0) {
    const listItems = document.querySelectorAll('.todoLists .todoItem');
    const test = document.querySelector('.list-group-item-primary');
    if (test) {
      test.classList.remove('list-group-item-primary');
    }
    if (listItems[index]) {
      listItems[index].classList.add('list-group-item-primary');
    }
  }
}

// adds delete todo listeners
function deleteListener() {
  let btt = document.querySelectorAll('.list-group .card .bin');
  for (let i = 0; i < btt.length; i += 1) {
    btt[i].addEventListener('click', () => {
      todoContainer.deleteTodo(i);
      todoContainer.update();
    });
  }
}

// adds delete list listeners
function listdeleteListener() {
  let btt = document.querySelectorAll('.list-group .binlist');
  for (let i = 0; i < btt.length; i += 1) {
    btt[i].addEventListener('click', () => {
      todoContainer.deleteList(i);
    });
  }
  const titleField = document.querySelector('#todoTitleForm');
  titleField.addEventListener('keypress', (e) => {
    let key = e.which || e.keyCode;
    if (key === 13) {
      const data = getTodoFormData();
      if (data) {
        todoContainer.addTodo(data);
        todoContainer.update();
      }
    }
  });
}

export { listListener, deleteListener, listdeleteListener, changeList };
