const express = require("express");

const port = 9000;

const app = express();
app.use(express.static("public"));

app.get("/add/:task", async (req, res) => {
  const task = req.params.task;
  console.log(`Task came to server through api call `);

  res.send(task);
});

app.get("/remove", async (req, res) => {});

app.listen(port, () => {
  console.log(`server connected to port ${port}`);
});

//chtgpt code

const express = require("express");

const port = 9000;
const app = express();

// Store tasks in memory
let tasks = [];

app.use(express.static("public"));

app.get("/add/:task", (req, res) => {
  const task = req.params.task;
  console.log(`Received task: ${task}`);

  // Add the task to the tasks array
  tasks.push(task);

  // Send the task back as confirmation
  res.send(task);
});

app.get("/remove/:task", (req, res) => {
  const task = req.params.task;
  console.log(`Removing task: ${task}`);

  // Find the index of the task and remove it
  const taskIndex = tasks.indexOf(task);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    res.status(200).send(`Task "${task}" removed successfully`);
  } else {
    res.status(404).send("Task not found");
  }
});

app.listen(port, () => {
  console.log(`Server connected to port ${port}`);
});
