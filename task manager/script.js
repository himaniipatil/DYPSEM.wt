let tasks = [];

  function loadTasks() {
    let saved = localStorage.getItem("tasks");
    if (saved) {
      tasks = JSON.parse(saved);
    }
    showTasks();
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function showTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach(function(task, index) {
      let card = document.createElement("div");
      card.className = "task-card";

      let taskText = document.createElement("div");
      taskText.innerText = task;

      let btns = document.createElement("div");
      btns.className = "task-actions";

      let editBtn = document.createElement("button");
      editBtn.className = "edit";
      editBtn.innerText = "Edit";
      editBtn.onclick = function() {
        let newTask = prompt("Edit task:", task);
        if (newTask && newTask.trim() !== "") {
          tasks[index] = newTask.trim();
          saveTasks();
          showTasks();
        }
      };

      let delBtn = document.createElement("button");
      delBtn.className = "delete";
      delBtn.innerText = "Delete";
      delBtn.onclick = function() {
        tasks.splice(index, 1);
        saveTasks();
        showTasks();
      };

      btns.appendChild(editBtn);
      btns.appendChild(delBtn);

      card.appendChild(taskText);
      card.appendChild(btns);

      list.appendChild(card);
    });
  }

  document.getElementById("addTaskBtn").onclick = function() {
    let input = document.getElementById("taskInput");
    let newTask = input.value.trim();
    if (newTask !== "") {
      tasks.push(newTask);
      saveTasks();
      showTasks();
      input.value = "";
    }
  };

  window.onload = loadTasks;