const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const task = {
        text: taskText,
        completed: false
    };

    tasks.push(task);
    taskInput.value = "";
    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.text;

        if (task.completed) {
            li.classList.add("done");
        }

        li.addEventListener("click", () => {
            tasks[index].completed = !tasks[index].completed;
            renderTasks();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            tasks.splice(index, 1);
            renderTasks();
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

addBtn.addEventListener("click", addTask);



