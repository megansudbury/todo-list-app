document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value;
    if (taskText) {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(text) {
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.className = 'task';
    taskItem.innerHTML = `${text} <button onclick="removeTask(this)">X</button>`;
    taskList.appendChild(taskItem);
}

function removeTask(button) {
    const taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem);
}