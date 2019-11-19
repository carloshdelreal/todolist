import { createElem } from './elmcreator';
function createList(todo) {
  const list = createElem('ul', '', ['todoLists']);
  todo.lists.forEach((elem) => {
    const item = createElem('li', '', ['todoItem']);
    item.innerText = elem.name;
    list.appendChild(item);
  });
  return list;
}

function showTodo(todo) {
  const list = createElem('ul', '', ['todos']);
  todo.todos.forEach((elem) => {
    const item = createElem('li', '', ['todoItem']);
    item.innerText = elem.title;
    list.appendChild(item);
  });
  return list;
}
export { createList, showTodo };
