import { createDiv, createElem } from './elmcreator';
import bulletField from './bulletField';

export default function createForm() {
  const todoContainer = createDiv(['todoContainer']);
  const todoFields = createDiv(['form']);

  // Title
  const todoFieldTitle = createDiv(['form-group']);
  const todoTitleLabel = createElem('label', '', []);
  todoTitleLabel.for = 'todoTitle';
  const todoTitle = createElem('input', 'todoTitle', ['title']);
  todoTitle.placeholder = 'Todo';
  todoFieldTitle.appendChild(todoTitleLabel);
  todoFieldTitle.appendChild(todoTitle);

  // description
  const todoFieldDescription = createDiv(['form-group']);
  const todoDescription = createElem('textarea', '', ['description']);
  todoDescription.placeholder = 'Description';
  todoFieldDescription.appendChild(todoDescription);

  // date
  const todoFieldDate = createDiv(['form-group']);
  const todoDueDate = createElem('input', '', ['due-date']);
  todoDueDate.type = 'date';
  todoFieldDate.appendChild(todoDueDate);

  // priority
  const todoFieldPriority = createDiv(['form-group']);
  todoFieldPriority.appendChild(bulletField(1));
  todoFieldPriority.appendChild(bulletField(2));
  todoFieldPriority.appendChild(bulletField(3));
  todoFieldPriority.appendChild(bulletField(4));
  todoFieldPriority.appendChild(bulletField(5));

  // button
  const todoBtn = createElem('button', '', ['btn', 'btn-success']);
  todoBtn.innerText = 'add';

  // Put everything together
  todoFields.appendChild(todoFieldTitle);
  todoFields.appendChild(todoFieldDescription);
  todoFields.appendChild(todoFieldDate);
  todoFields.appendChild(todoFieldPriority);
  todoFields.appendChild(todoBtn);

  todoContainer.appendChild(todoFields);

  return todoContainer;
}
