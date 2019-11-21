import './style.scss';
// eslint-disable-next-line import/no-cycle
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
    // eslint-disable-next-line no-loop-func
    listItems[i].addEventListener('click', () => {
      todoContainer.setCurrentList(i);
      todoContainer.update();
      // eslint-disable-next-line no-use-before-define
      changeList(i);
    });
  }

  // Listners for Edit
  const cards = document.querySelectorAll('.card-title');
  for (let i = 0; i < cards.length; i += 1) {
    // eslint-disable-next-line no-loop-func
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
  const btt = document.querySelectorAll('.list-group .card .bin');
  for (let i = 0; i < btt.length; i += 1) {
    // eslint-disable-next-line no-loop-func
    btt[i].addEventListener('click', () => {
      todoContainer.deleteTodo(i);
      todoContainer.update();
    });
  }
}

// adds delete list listeners
function listdeleteListener() {
  const btt = document.querySelectorAll('.list-group .binlist');
  for (let i = 0; i < btt.length; i += 1) {
    // eslint-disable-next-line no-loop-func
    btt[i].addEventListener('click', () => {
      todoContainer.deleteList(i);
    });
  }
  const titleField = document.querySelector('#todoTitleForm');
  titleField.addEventListener('keypress', (e) => {
    const key = e.which || e.keyCode;
    if (key === 13) {
      const data = getTodoFormData();
      if (data) {
        todoContainer.addTodo(data);
        todoContainer.update();
      }
    }
  });
}

function saveCurrentState() {
  localStorage.setItem('todoContainer', JSON.stringify(todoContainer));
}

export {
  listListener,
  deleteListener,
  listdeleteListener,
  changeList,
  saveCurrentState,
};
