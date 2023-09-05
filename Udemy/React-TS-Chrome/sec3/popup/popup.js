let tasks = []

function updateTime(){
  chrome.storage.local.get(["timer"], (res)=>{
    const time = document.getElementById("time")
    const minutes = 25 - res.timer/60
    time.textContent = res.timer
  })
}

updateTime()
setInterval(updateTime, 1000)

const setTimerBtn = document.getElementById("start-timer-btn")
setTimerBtn.addEventListener("click", () => {
  chrome.storage.local.get(["isRunning"], (res) =>{
    chrome.storage.local.set({
      isRunning: !res.isRunning
    }, () =>{
      setTimerBtn.textContent = !res.isRunning ? "Pause" : "Start"
    })
  })
})

const resetTimerBtn = document.getElementById("reset-timer-btn")
resetTimerBtn.addEventListener("click", () => {
  chrome.storage.local.get(["isRunning"], () =>{
    chrome.storage.local.set({
      timer: 0,
      isRunning: false
    }, () =>{
      setTimerBtn.textContent = "Start"
    })
  })
})


const addTaskBtn = document.getElementById("add-btn");
addTaskBtn.addEventListener("click", ()=> addTask());

chrome.storage.sync.get(["tasks"],(res)=>{
  tasks = res.tasks ? res.tasks : []
  renderTasks()
})

function saveTasks(){
  chrome.storage.sync.set({
    tasks,
  })
}

function renderTask(taskNum){
  const taskRow = document.createElement("div");
  const text = document.createElement("input");
  text.type = "text";
  text.placeholder = "Enter task......";
  text.value = tasks[taskNum]
  text.addEventListener("change",()=>{
    tasks[taskNum] = text.value
    saveTasks()
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
  saveTasks()
}

function deleteTask(taskNum){
  tasks.splice(taskNum, 1)
  renderTasks()
  saveTasks()
}

function renderTasks(){
  const taskContainer = document.getElementById("task-container")
  taskContainer.textContent = ""
  tasks.forEach((taskText,taskNum)=>{
    renderTask(taskNum)
  })
}