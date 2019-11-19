import { createElem } from './elmcreator';
function createList(todo) {
  const list = createElem('ul', '', ['todoLists', 'list-group']);
  todo.forEach((elem) => {
    const item = createElem('li', '', [
      'todoItem',
      'list-group-item',
      'd-flex',
      'justify-content-between',
      'align-items-center',
    ]);
    item.innerText = elem.name;
    list.appendChild(item);
  });
  list.firstElementChild.classList.add('list-group-item-primary');
  const listContainer = document.querySelector('.list');
  listContainer.innerHTML = '';
  listContainer.appendChild(list);
}

function showTodo(todo) {
  const list = createElem('ul', '', ['todos', 'list-group']);
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
