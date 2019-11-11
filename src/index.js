import './style.scss';

function addTask() {
  let task = document.getElementById('item').value;
  if (task) {
    console.log(task);
  }
}
document.getElementById('add').addEventListener('click', addTask);
