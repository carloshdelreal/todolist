export default function() {
  const form = document.querySelector('.formTodo');
  const formEdit = document.querySelector('.formTodo1');

  // open create todo window
  const addT = document.querySelector('.pop-up');
  addT.addEventListener('click', () => {
    form.style.display = 'block';
    document.querySelector('#inlineRadio1').checked = true;
  });

  // close create dodo window
  const closeT = document.querySelector('.btn-danger');
  closeT.addEventListener('click', () => {
    form.style.display = 'none';
  });

  // close form Edit
  const closeT2 = document.querySelector('.formTodo1 .btn-danger');
  closeT2.addEventListener('click', () => {
    formEdit.style.display = 'none';
  });
}
