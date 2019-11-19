import { createElem } from './elmcreator';
function createList(todo) {
  const list = createElem('ul', '', ['todoLists']);
  todo.forEach((elem) => {
    const item = createElem('li', '', ['todoItem']);
    item.innerText = elem.name;
    list.appendChild(item);
  });
  const listContainer = document.querySelector('.list');
  listContainer.innerHTML = '';
  listContainer.appendChild(list);
}

function showTodo(todo) {
  const list = createElem('ul', '', ['todos']);
  todo.forEach((elem) => {
    const item = createElem('li', '', ['todoItem']);
    item.innerText = elem.title;
    list.appendChild(item);
  });
  const listContainer = document.querySelector('.todos');
  listContainer.innerHTML = '';
  listContainer.appendChild(list);
}
export { createList, showTodo };
