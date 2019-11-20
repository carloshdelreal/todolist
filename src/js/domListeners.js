
export default function(){
  const form = document.querySelector('.formTodo');
  
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
}