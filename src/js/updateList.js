import {List,Todo} from './todo';
import {createElem} from './elmcreator';
function createList(todo){
  const t = todo
  createElem('ul','todos','1');
}

export {createList};
