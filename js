function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() !== "") {
      var li = document.createElement("li");
      li.textContent = taskInput.value;
      
      var deleteButton = document.createElement("span");
      deleteButton.textContent = "❌";
      deleteButton.classList.add("delete");
      deleteButton.onclick = function() {
        gsap.to(li, { opacity: 0, duration: 0.3, onComplete: () => taskList.removeChild(li) });
      };
  
      li.appendChild(deleteButton);
      taskList.appendChild(li);
  
      gsap.from(li, { opacity: 0, y: -20, duration: 0.3 });
      
      taskInput.value = "";
    }
  }
  
