import { createList, createListTodos } from './updateList';
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import {
  listListener, deleteListener, listdeleteListener, saveCurrentState,
} from '../index';

const List = (listName) => {
  const name = listName;
  const todos = [];

  return { name, todos };
};

const Todo = (todoTitle, todoDescription, todoDate, todoPriority) => {
  const title = todoTitle;
  const description = todoDescription;
  const date = todoDate;
  const priority = todoPriority;

  return {
    title,
    description,
    date,
    priority,
  };
};

const Container = () => {
  const listDom = null;
  const todoDom = null;
  let currentList = 0;
  const lists = [];

  const update = () => {
    createList(lists, currentList);
    createListTodos(lists, currentList);
    listListener();
    deleteListener();
    listdeleteListener();
    saveCurrentState();
  };

  const deleteTodo = (index) => {
    lists[currentList].todos.splice(index, 1);
  };

  const deleteList = (index) => {
    lists.splice(index, 1);
  };

  function addTodo(data) {
    const newTodo = Todo(data.title, data.description, data.date, data.priority);
    lists[currentList].todos.push(newTodo);
  }
  function setCurrentList(number) {
    currentList = number;
  }
  function getList() {
    return lists[currentList];
  }
  function addList(list) {
    const newlist = List(list);
    lists.push(newlist);
  }

  function updateTodo(data) {
    const newTodo = Todo(data.title, data.description, data.date, data.priority);

    lists[currentList].todos[data.index] = newTodo;
  }

  return {
    lists,
    listDom,
    todoDom,
    update,
    addList,
    addTodo,
    setCurrentList,
    deleteTodo,
    deleteList,
    getList,
    updateTodo,
  };
};

export { List, Todo, Container };
