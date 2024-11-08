//To add the task
document.getElementById("submit-btn").addEventListener("click", async () => {
  const task = document.getElementById("task").value;

  if (!task) {
    alert("Enter a task");
    return;
  }

  const response1 = await fetch(`/add/${task}`);
  if (!response1.ok) {
    alert("Data not came from back end");
    return;
  }

  try {
    const data1 = await response1.text();
    console.log("Data came from backend");
    const new_task = `
    <div class="task" data-task="${data1}" style="display:flex;">
        <input type="checkbox" class="task-checkbox"/>
        <p>${data1}</p>
    </div>`;
    document.getElementById("task-box").innerHTML += new_task;
  } catch (error) {
    console.error("Error:", error);
  }
});

//To remove the task

document.getElementById("remove-btn").addEventListener("click", async () => {
  const taskdivs = document.querySelectorAll("task-box");

  const response2 = await fetch("/remove");
});

//chatgpt code
document.getElementById("submit-btn").addEventListener("click", async () => {
  const task = document.getElementById("task").value;

  if (!task) {
    alert("Enter a task");
    return;
  }

  // Send task to backend to add it
  const response1 = await fetch(`/add/${task}`);
  if (!response1.ok) {
    alert("Data not came from back end");
    return;
  }

  try {
    const data1 = await response1.text();
    console.log("Task added:", data1);

    const new_task = `
        <div class="task" data-task="${data1}" style="display: flex;">
          <input type="checkbox" class="task-checkbox"/>
          <p>${data1}</p>
        </div>`;
    document.getElementById("task-box").innerHTML += new_task;
  } catch (error) {
    console.error("Error:", error);
  }
});

// Remove completed tasks
document.getElementById("remove-btn").addEventListener("click", async () => {
  const tasks = document.querySelectorAll(".task-checkbox:checked");
  tasks.forEach(async (checkbox) => {
    const taskDiv = checkbox.closest(".task");
    const taskText = taskDiv.getAttribute("data-task");

    // Send the completed task to the backend
    const response2 = await fetch(`/remove/${taskText}`);
    if (!response2.ok) {
      alert("Failed to remove task");
    } else {
      // Move the task to the completed tasks box
      const taskHtml = taskDiv.outerHTML;
      document.getElementById("completion-box").innerHTML += taskHtml;
      taskDiv.remove(); // Remove from task-box
    }
  });
});
