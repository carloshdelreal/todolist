import { createDiv, createElem } from './elmcreator';

export default function createHomeContent() {
  const todoContainer = createDiv(['todoContainer']);
  const todoFields = createDiv(['fieldSet']);
  const todoTitle = createElem('input', '', ['title']);
  const todoDescription = createElem('input', '', ['description']);
  const todoDueDate = createElem('input', '', ['due-date']);
  const todoPriority = createElem('input', '', ['priority']);
  const todoBtn = createElem('button', '', ['btn', 'btn-success']);

  todoBtn.innerText = 'add';

  todoFields.appendChild(todoTitle);
  todoFields.appendChild(todoDescription);
  todoFields.appendChild(todoDueDate);
  todoFields.appendChild(todoPriority);
  todoFields.appendChild(todoBtn);

  todoContainer.appendChild(todoFields);

  return todoContainer;
}
