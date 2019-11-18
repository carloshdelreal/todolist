import { createDiv } from './elmcreator';
import { createForm, formList } from './todoForms';
import {Todo,List,Container} from './todo';
import {createList} from './updateList'

export default function load() {
  // Content
  const content = document.querySelector('#content');
  const leftColumn = createDiv(['col-md-4']);
  const rightColumn = createDiv(['col-md-8']);
  const todoContainer = Container();
  console.log(todoContainer);
  const list = List('Test List');
  list.todos.push(Todo('Name','description','Date',3));

  todoContainer.lists.push(list);

  content.appendChild(leftColumn);
  content.appendChild(rightColumn);

  // console.log(todoList());

  rightColumn.appendChild(createForm());
  leftColumn.appendChild(formList());
  leftColumn.appendChild(createList(todoContainer));
}
