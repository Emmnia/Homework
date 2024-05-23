const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

function createTask() {
    const taskText = taskInput.value;
    const newTask = document.createElement('li');
    const star = document.createElement('i');
    star.setAttribute('class', 'fa-solid fa-star star');
    newTask.setAttribute('class', 'task');
    newTask.textContent = taskText;
    newTask.appendChild(star);
    taskList.append(newTask);
    taskList.setAttribute('class', 'full');
    taskInput.value = '';
}

addButton.addEventListener('click', createTask);

function checkTask(evt) {
    if (evt.target.tagName === 'LI') {
    evt.target.classList.toggle('completed');
    }
}

function askMark(evt) {
    if (evt.target.tagName === 'I') {
    evt.target.setAttribute('title', 'Пометить как важную');
    }
}

function markTask(evt) {
    if (evt.target.tagName === 'I') {
    evt.target.classList.toggle('star_important');
    }
}

taskList.addEventListener('click', checkTask);
taskList.addEventListener('mouseover', askMark);
taskList.addEventListener('click', markTask);
