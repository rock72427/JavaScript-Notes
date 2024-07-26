let taskFormEl = document.getElementById("task-form");

taskFormEl.addEventListener("submit", function (e) {
  e.preventDefault();
  createTask();
});

//Create Task Functionality

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

//Display Tasks
function displayTasks() {
  let taskListEl = document.getElementById("task-list-el");
  let taskList = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  if (taskList != 0) {
    let eachTask = ``;
    taskList.forEach((task) => {
      eachTask += `<li class="list-group-item list-group-item-dark mb-2">
                        <input id="check" type="checkbox" >
                        <span>${task.text}</span>
                        <button class="float-end">
                            <i class="bi bi-pen"></i>
                        </button>
                        <button class="float-end me-2">
                            <i class="bi bi-trash"></i>
                        </button>
                    </li>`;
    });
    taskListEl.innerHTML = eachTask;
  }
}
displayTasks();
