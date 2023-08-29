const tasks = []
const addTaskBtn = document.getElementById("add-btn");
addTaskBtn.addEventListener("click", ()=> addTask());

function renderTask(taskNum){
  const taskRow = document.createElement("div");
  const text = document.createElement("input");
  text.type = "text";
  text.placeholder = "Enter task......";
  text.value = tasks[taskNum]
  text.addEventListener("change",()=>{
    tasks[taskNum] = text.value
    console.log(tasks)
  })
  const deleteBtn = document.createElement("input");
  deleteBtn.type = "button";
  deleteBtn.value = "x";
  deleteBtn.addEventListener("click",()=>{
    deleteTask(taskNum)
  })
  taskRow.appendChild(text);
  taskRow.appendChild(deleteBtn);

  const taskContainer = document.getElementById("task-container");
  taskContainer.appendChild(taskRow)
}

function addTask(){
  const taskNum = tasks.length
  tasks.push("")
  renderTask(taskNum)
}

function deleteTask(taskNum){
  tasks.splice(taskNum, 1)
  renderTasks()
}

function renderTasks(){
  const taskContainer = document.getElementById("task-container")
  taskContainer.textContent = ""
  tasks.forEach((taskText,taskNum)=>{
    renderTask(taskNum)
  })
}