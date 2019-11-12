import { createDiv, createElem } from './elmcreator';
import bulletField from './bulletField';

export default function createForm() {
  const todoContainer = createDiv(['todoContainer']);
  const todoFields = createElem('form', '', ['form']);

  // Title
  const todoFieldTitle = createDiv(['form-group']);
  const todoTitle = createElem('input', 'todoTitle', ['title', 'form-control']);
  todoTitle.placeholder = 'Todo';
  todoFieldTitle.appendChild(todoTitle);

  // description
  const todoFieldDescription = createDiv(['form-group']);
  const todoDescription = createElem('textarea', '', [
    'description',
    'form-control',
  ]);
  todoDescription.placeholder = 'Description';
  todoFieldDescription.appendChild(todoDescription);

  // date
  const todoFieldDate = createDiv(['form-group']);
  const todoDueDate = createElem('input', '', ['due-date', 'form-control']);
  todoDueDate.type = 'date';
  todoFieldDate.appendChild(todoDueDate);

  // priority label
  const todoFieldPriorityLab = createElem('div', 'priority', ['form-group']);
  const todoFieldPriorityLabel = createElem('label', '', ['form-check-label']);
  todoFieldPriorityLabel.setAttribute('for', 'priority');
  todoFieldPriorityLabel.innerText = 'Priority';
  todoFieldPriorityLab.appendChild(todoFieldPriorityLabel);

  // priority
  const todoFieldPriority = createElem('div', '', ['form-group']);
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
  todoFields.appendChild(todoFieldPriorityLab);
  todoFields.appendChild(todoFieldPriority);
  todoFields.appendChild(todoBtn);

  todoContainer.appendChild(todoFields);

  return todoContainer;
}
