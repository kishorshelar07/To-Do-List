

  var taskId = 1; // Initialize task ID counter

  // Function to add a new task
  function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
      var li = document.createElement("li");
      li.innerHTML = `
        <span class="task">${taskId}. ${taskInput.value}</span>
        <div class="btn-group">
          <button onclick="completeTask(this)">Complete</button>
          <button onclick="deleteTask(this)">Delete</button>
          <button onclick="editTask(this)">Edit</button>
        </div>
      `;
      taskList.appendChild(li);
      taskInput.value = "";
      taskId++; // Increment task ID
    }
  }

  // Function to delete a task
  function deleteTask(btn) {
    var listItem = btn.parentNode.parentNode;
    listItem.parentNode.removeChild(listItem);
  }

  // Function to mark a task as complete
  function completeTask(btn) {
    var listItem = btn.parentNode.parentNode;
    var taskText = listItem.querySelector('.task');
    taskText.style.textDecoration = "line-through";
    btn.parentNode.remove();
  }
 
  // Function to edit task 
   function editTask(btn) {
      var listItem = btn.parentNode.parentNode;
      var taskText = listItem.querySelector('.task');
      var currentTask = taskText.innerText.split('. ')[1];
      var newTask = prompt("Edit Task:", currentTask);
      if (newTask !== null) {
        taskText.innerText = taskId  + ". " + newTask;
      }
    }

