import {List,Todo,Container} from './todo';
import {createElem} from './elmcreator';
function createList(todo){

  const list=createElem('ul','',['todoLists']);
  todo.lists.forEach((elem)=> {
    const item = createElem('li','',['todoItem']);
    item.innerText = elem.name;
    console.log(elem)
    list.appendChild(item);
  });
  return list
}

function showTodo(todo){
  const list=createElem('ul','',['todos']);
  console.log(todo);
  todo.todos.forEach((elem)=> {
    const item = createElem('li','',['todoItem']);
    item.innerText = elem.title;
    console.log(elem)
    list.appendChild(item);
  });
  return list

}
export {createList,showTodo};
