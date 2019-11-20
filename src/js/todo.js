import { createList, createListTodos } from './updateList';
import { listListener, deleteListener,listdeleteListener } from '../index';

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
    createList(lists, currentList);
    createListTodos(lists, currentList);
    listListener();
    deleteListener();
    listdeleteListener();
  };

  const deleteTodo = (index) => {
    lists[currentList].todos.splice(index,1);
  }

  const deleteList =(index) =>{
    lists.splice(index,1);
  }

  function addTodo(data) {
    const newTodo = Todo(data.title, data.description, data.date, data.priority);
    lists[currentList].todos.push(newTodo);
  }
  function setCurrentList(number) {
    currentList = number;
  }

  function addList(list) {
    const newlist = List(list);
    lists.push(newlist);
  }

  return { lists, listDom, todoDom, update, addList, addTodo, setCurrentList, deleteTodo, deleteList };
};

export { List, Todo, Container };
