import { createElem } from './elmcreator';
function createList(lists, currenList) {
  const list = createElem('ul', '', ['todoLists', 'list-group']);
  lists.forEach((elem) => {
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
  list.children[currenList].classList.add('list-group-item-primary');
  const listContainer = document.querySelector('.list');
  listContainer.innerHTML = '';
  listContainer.appendChild(list);
}

function createListTodos(todos) {
  const list = createElem('ul', '', ['todos', 'list-group']);
  todos.forEach((elem) => {
    const item = createElem('li', '', ['todoItem']);
    const card = createElem('div', '', ['card']);
    const body = createElem('div', '', ['card-body']);
    const title = createElem('h5', '', ['card-title']);
    const duedate = createElem('p', '', ['card-text']);
    title.innerText = elem.title;
    duedate.innerText =' Due date:'+ elem.date;
    body.appendChild(title);
    body.appendChild(duedate);
    card.appendChild(body);
    item.appendChild(card);
    list.appendChild(item);
  });
  const listContainer = document.querySelector('.todos');
  listContainer.innerHTML = '';
  listContainer.appendChild(list);
}
export { createList, createListTodos };
