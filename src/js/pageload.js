import { createDiv } from './elmcreator';
import { createForm, formList } from './todoForms';

export default function load() {
  // Content
  const content = document.querySelector('#content');
  const leftColumn = createDiv(['col-md-4']);
  const rightColumn = createDiv(['col-md-8']);

  content.appendChild(leftColumn);
  content.appendChild(rightColumn);

  // console.log(todoList());

  rightColumn.appendChild(createForm());
  leftColumn.appendChild(formList());
}
