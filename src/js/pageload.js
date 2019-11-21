import { createDiv, createElem } from './elmcreator';
import { createForm, formList, formEditTodo } from './todoForms';
import { Todo, List, Container } from './todo';
import domListeners from './domListeners';

export default function load() {
  // Content
  const content = document.querySelector('#content');
  const leftColumn = createDiv(['col-md-4']);
  const rightColumn = createDiv(['col-md-8']);
  const buttonTask = createElem('button', '', ['btn', 'btn-success', 'pop-up']);
  buttonTask.innerText = 'Add Task';
  rightColumn.appendChild(buttonTask);

  // Create Todo Objects

  let todoCont = JSON.parse(localStorage.getItem('todoContainer'));
  const todoContainer = Container();

  if (todoCont) {
    for (let i = 0; i < todoCont['lists'].length; i += 1) {
      const list = List(todoCont['lists'][i].name);
      for (let j = 0; j < todoCont['lists'][i].todos.length; j += 1) {
        const t = todoCont['lists'][i].todos[j];
        const todo = Todo(t.title, t.description, t.date, t.priority);
        list.todos.push(todo);
      }
      todoContainer.lists.push(list);
    }
  } else {
    const list = List('Test List');
    const cDate = new Date();
    list.todos.push(
      Todo(
        'Name',
        'This is the Descriptio',
        `${cDate.getFullYear()}-${cDate.getMonth()}-${cDate.getDate()}`,
        3
      )
    );
    todoContainer.lists.push(list);
  }

  // append created DOM objects
  content.appendChild(leftColumn);
  content.appendChild(rightColumn);

  rightColumn.appendChild(createForm());
  rightColumn.appendChild(formEditTodo());
  leftColumn.appendChild(formList());

  const listD = createDiv(['list']);
  const todosD = createDiv(['todos']);

  rightColumn.appendChild(todosD);
  leftColumn.appendChild(listD);

  domListeners();

  return todoContainer;
}
