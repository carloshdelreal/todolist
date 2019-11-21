import { createDiv, createElem } from './elmcreator';
import bulletField from './bulletField';

// Create Activity Form
function createForm() {
  const todoFields = createElem('div', '', ['formTodo']);
  const todopop = createElem('div', '', ['formpop']);

  // Title
  const todoFieldTitle = createDiv(['form-group']);
  const todoTitle = createElem('input', 'todoTitleForm', [
    'title',
    'form-control',
  ]);
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
  const cDate = new Date();
  todoDueDate.value = `${cDate.getFullYear()}-${cDate.getMonth()}-${cDate.getDate()}`;
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

  const closeBtn = createElem('button', '', ['btn', 'btn-danger']);
  closeBtn.innerText = 'Close';

  // Put everything together
  todopop.appendChild(todoFieldTitle);
  todopop.appendChild(todoFieldDescription);
  todopop.appendChild(todoFieldDate);
  todopop.appendChild(todoFieldPriorityLab);
  todopop.appendChild(todoFieldPriority);
  todopop.appendChild(todoBtn);
  todopop.appendChild(closeBtn);
  todoFields.appendChild(todopop);

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
