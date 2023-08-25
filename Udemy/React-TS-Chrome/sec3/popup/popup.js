const addTaskBtn = document.getElementById("add-btn");
addTaskBtn.addEventListener("click", ()=> addTask());

function addTask(){
  const taskRow = document.createElement("div");
  const text = document.createElement("input");
  text.type = "text";
  text.placeholder = "Enter task......";
  text.addEventListener("change",()=>{
    
  })
  const deleteBtn = document.createElement("input");
  deleteBtn.type = "button";
  deleteBtn.value = "x";

  taskRow.appendChild(text);
  taskRow.appendChild(deleteBtn);

  const taskContainer = document.getElementById("task-container");
  taskContainer.appendChild(taskRow)
}