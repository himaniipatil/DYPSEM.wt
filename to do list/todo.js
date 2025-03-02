var task=[];

function addTask() 
{
  var taskInput = document.getElementById("taskInput");
  var priorityInput = document.getElementById("priorityValue");

  var taskText = taskInput.value.trim();
  var priority = priorityInput.value.trim();

  if (taskText === "" || priority === "") 
  {
    alert("Please enter a task and priority!");
    return;
  }

    var p=[];
    p.name = taskText
    p.priority = priority

    task.push(p)

   
    task.sort(function(a, b)
    {
      return Number(a.priority) - Number(b.priority);
    });
  
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = "";

    
    for (var i = 0; i < task.length; i++) 
    {
        var li = document.createElement('li');  
        li.textContent = task[i].name + " - " + task[i].priority; 
        taskList.appendChild(li);  
    }

    taskInput.value = "";
    priorityValue.value = "";
}







