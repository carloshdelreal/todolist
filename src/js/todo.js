import { createList, showTodo } from './updateList';

const List = (listName) => {
  let name = listName;
  const todos = [];

  return { name, todos };
};

const Todo = (todoTitle, todoDescription, todoDate, todoPriority) => {
  let title = todoTitle;
  let description = todoDescription;
  let date = todoDate;
  let priority = todoPriority;

  return { title, description, date, priority };
};

const Container = () => {
  let listDom = null;
  let todoDom = null;
  let currentList = 0;
  const lists = [];

  const update = () => {
    createList(lists);
    showTodo(lists[currentList].todos);
  };

  function addTodo(data) {
    const newTodo = Todo(data.title, data.description, data.date, data.priority);
    lists[currentList].todos.push(newTodo);
  }

  function addList(list) {
    const newlist = List(list);
    lists.push(newlist);
  }

  return { lists, listDom, todoDom, update, addList, addTodo };
};

export { List, Todo, Container };
