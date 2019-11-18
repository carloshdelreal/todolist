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
  const lists = [];
  return {lists};
};

export { List, Todo,Container};
