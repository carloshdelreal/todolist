import { createDiv, createElem } from './elmcreator';
import bulletField from './bulletField';

// Create Activity Form
function createForm() {
  const todoFields = createElem('div', '', ['formTodo']);

  // Title
  const todoFieldTitle = createDiv(['form-group']);
  const todoTitle = createElem('input', 'todoTitle', ['title', 'form-control']);
  todoTitle.placeholder = 'Todo';
  todoFieldTitle.appendChild(todoTitle);

  // description
  const todoFieldDescription = createDiv(['form-group']);
  const todoDescription = createElem('textarea', '', ['description', 'form-control']);
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
  const todoFieldPriority = createElem('div', '', ['form-group', 'bullets']);
  const defaultBullet = bulletField(1);
  defaultBullet.firstChild.checked = true;
  todoFieldPriority.appendChild(defaultBullet);
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

  return todoFields;
}

// create todo classes form
function formList() {
  const todoFields = createElem('div', '', ['formList']);

  // Title
  const todoFieldTitle = createDiv(['form-group']);
  const todoTitle = createElem('input', 'todoTitle', ['title', 'form-control']);
  todoTitle.placeholder = 'List Name';
  todoFieldTitle.appendChild(todoTitle);

  // button
  const todoBtn = createElem('button', '', ['btn', 'btn-success']);
  todoBtn.innerText = 'add list';

  todoFields.appendChild(todoFieldTitle);
  todoFields.appendChild(todoBtn);

  return todoFields;
}

export { createForm, formList };
