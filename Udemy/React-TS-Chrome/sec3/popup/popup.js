const tasks = []
const addTaskBtn = document.getElementById("add-btn");
addTaskBtn.addEventListener("click", ()=> addTask());

function renderTask(){
  const taskRow = document.createElement("div");
  const text = document.createElement("input");
  text.type = "text";
  text.placeholder = "Enter task......";
  text.addEventListener("change",()=>{
    tasks[taskNum] = text.value
    console.log(tasks)
  })
  const deleteBtn = document.createElement("input");
  deleteBtn.type = "button";
  deleteBtn.value = "x";
  deleteBtn.addEventListener("click",()=>{
      tasks.splice(taskNum, 1)
  })
  taskRow.appendChild(text);
  taskRow.appendChild(deleteBtn);

  const taskContainer = document.getElementById("task-container");
  taskContainer.appendChild(taskRow)
}

function addTask(){
  const taskNum = tasks.length
  tasks.push("")
}