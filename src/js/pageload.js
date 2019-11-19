import { createDiv } from './elmcreator';
import { createForm, formList } from './todoForms';
import { Todo, List, Container } from './todo';

export default function load() {
  // Content
  const content = document.querySelector('#content');
  const leftColumn = createDiv(['col-md-4']);
  const rightColumn = createDiv(['col-md-8']);

  // Create Todo Objects
  const todoContainer = Container();
  const list = List('Test List');
  list.todos.push(Todo('Name', 'description', 'Date', 3));
  todoContainer.lists.push(list);

  content.appendChild(leftColumn);
  content.appendChild(rightColumn);

  rightColumn.appendChild(createForm());
  leftColumn.appendChild(formList());

  const listD = createDiv(['list']);
  const todosD = createDiv(['todos']);

  todoContainer.listDom = listD;
  todoContainer.todoDom = todosD;

  rightColumn.appendChild(todosD);
  leftColumn.appendChild(listD);

  return todoContainer;
}
