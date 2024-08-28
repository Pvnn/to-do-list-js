const todoList=JSON.parse(localStorage.getItem('todoList')) || [];
renderTodo();
function renderTodo(){
  let html='';
  todoList.forEach((todoObject,index) => {  //Using for each loop..it is preferred in arrays over for loop
    const{name, dueDate}=todoObject;
    html+=`
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-button js-delete-button">Delete</button>
      `;
  });
  /*
  for (let index = 0; index < todoList.length; index++) {
    //const name=todoList.name;
    //const dueDate = todoList.dueDate;
    const{name, dueDate}=todoList[index];
    html+=`
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-button" onclick="
      deleteTodo(${index});
      ">Delete</button>
      `;
  }
  */
  document.querySelector('.js-todo-list').innerHTML=html;
  document.querySelectorAll('.js-delete-button')
    .forEach((deleteButton,index) =>{
      deleteButton.addEventListener("click", () => {
        deleteTodo(index);
      });
    });
}
function deleteTodo(index){
  todoList.splice(index,1);
  localStorage.setItem('todoList',JSON.stringify(todoList));
  renderTodo();
}
function handleKeydown(event){
  if(event.key=='Enter'){
    addTodo();
  }
}
document.querySelector('.js-add-button').
  addEventListener("click", () => {
    addTodo();
  });
function addTodo(){
  const nameElement=document.querySelector('.js-name-input');
  const dueDateElement=document.querySelector('.js-due-date-input');
  const name=nameElement.value;
  const dueDate=dueDateElement.value;
  const task={
    name:name,
    dueDate:dueDate
  };
  todoList.push(task);
  localStorage.setItem('todoList',JSON.stringify(todoList));
  nameElement.value='';
  renderTodo();
}