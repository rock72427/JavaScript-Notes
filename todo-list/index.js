// Global variable to keep track of the task being updated
let editingIndex = null;

// Get task form element
let taskFormEl = document.getElementById("task-form");

// Add event listener to task form
taskFormEl.addEventListener("submit", function (e) {
  e.preventDefault();
  if (editingIndex !== null) {
    updateTask();
  } else {
    createTask();
  }
});

// Create Task Functionality
function createTask() {
  let taskInputEl = document.getElementById("task-input");
  let task = taskInputEl.value.trim();

  if (task) {
    let taskList = localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [];

    let taskObj = { text: task, isCompleted: false };
    taskList.unshift(taskObj);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    displayTasks();
    taskInputEl.value = "";
  }
}

// Display Tasks
function displayTasks() {
  let taskListEl = document.getElementById("task-list-el");
  let taskList = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  if (taskList.length > 0) {
    let eachTask = ``;
    taskList.forEach((task, index) => {
      eachTask += `<li class="list-group-item list-group-item-dark mb-2"> 
                        <input id="check-${index}" type="checkbox" ${
        task.isCompleted ? "checked" : ""
      }> 
                        <span style="${
                          task.isCompleted
                            ? "text-decoration: line-through;"
                            : ""
                        }">${task.text}</span> 
                        <button class="float-end update-task" onclick="startUpdateTask(${index})"> 
                            <i class="bi bi-pen"></i> 
                        </button> 
                        <button class="float-end me-2 delete-task" onclick="deleteTask(${index})"> 
                            <i class="bi bi-trash"></i> 
                        </button> 
                    </li>`;
    });
    taskListEl.innerHTML = eachTask;

    taskList.forEach((task, index) => {
      let checkBox = document.getElementById(`check-${index}`);
      checkBox.addEventListener("change", function () {
        let taskList = localStorage.getItem("tasks")
          ? JSON.parse(localStorage.getItem("tasks"))
          : [];

        taskList[index].isCompleted = this.checked;
        localStorage.setItem("tasks", JSON.stringify(taskList));

        let taskText = document.querySelector(`#check-${index} + span`);
        taskText.style.textDecoration = this.checked ? "line-through" : "none";
      });
    });
  } else {
    taskListEl.innerHTML = `<li class="list-group-item list-group-item-dark mb-2">No tasks available</li>`;
  }
}

function startUpdateTask(index) {
  editingIndex = index;
  let taskList = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  let task = taskList[index];
  let taskInputEl = document.getElementById("task-input");
  taskInputEl.value = task.text;
}

function updateTask() {
  if (editingIndex === null) return;

  let taskList = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  let taskInputEl = document.getElementById("task-input");
  let newTaskText = taskInputEl.value.trim();

  if (newTaskText) {
    taskList[editingIndex].text = newTaskText;
    localStorage.setItem("tasks", JSON.stringify(taskList));
    displayTasks();
    taskInputEl.value = "";
    editingIndex = null;
  }
}

function deleteTask(index) {
  let taskList = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  taskList.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(taskList));
  displayTasks();
}
displayTasks();
