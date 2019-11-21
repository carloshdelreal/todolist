
export default function(){
  const form = document.querySelector('.formTodo');
  const form1 = document.querySelector('.formTodo1');
  // open create todo window
  const addT = document.querySelector('.pop-up');
  addT.addEventListener('click', () =>{
    form.style.display = "block";
  });

  // close create dodo window
  const closeT = document.querySelector('.btn-danger');
  closeT.addEventListener('click', () => {
    form.style.display = "none";
  });

  const closeT2 = document.querySelector('.formTodo1 .btn-danger');
  closeT2.addEventListener('click', () => {
    form1.style.display = "none";
  });
}
