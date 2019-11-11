import { createDiv } from './elmcreator';
import todoList from './todoList';

export default function load() {
  // Content
  const content = document.querySelector('#content');
  const leftColumn = createDiv(['col-md-4']);
  const rightColumn = createDiv(['col-md-8']);

  content.appendChild(leftColumn);
  content.appendChild(rightColumn);

  // console.log(todoList());

  rightColumn.appendChild(todoList());
}
