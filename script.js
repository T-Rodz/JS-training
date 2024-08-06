document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
            taskInput.focus();
        }
    });

    taskList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('completed');
        } else if (event.target.tagName === 'BUTTON') {
            event.target.parentElement.remove();
        }
    });

    function addTask(text) {
        const li = document.createElement('li');
        li.textContent = text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    }
});
