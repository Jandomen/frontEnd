function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value.trim();

    if (taskValue !== "") {
        const newTask = document.createElement("li");
        newTask.textContent = taskValue;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.onclick = function () {
            newTask.remove();
        };

        const updateButton = document.createElement("button");
        updateButton.textContent = "Actualizar";
        updateButton.onclick = function () {
            const updatedTask = document.getElementById('taskInput').value;
            if (updatedTask !== null) {
                newTask.textContent = updatedTask;
            }
        };

        newTask.appendChild(deleteButton);
        newTask.appendChild(updateButton);

        document.getElementById("taskList").appendChild(newTask);
        taskInput.value = "";
    }
}
