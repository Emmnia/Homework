const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const empty = document.getElementById('empty');
const clearButton = document.getElementById('clearButton');
let taskArr = [];
clearButton.disabled = true;

if (localStorage.getItem('taskList')) {
    taskArr = JSON.parse(localStorage.getItem('taskList'));
    clearButton.disabled = false;
}
taskArr.forEach((taskObject) => {
    const taskHTML = `<li class="task" id="${taskObject.id}">${taskObject.name}<input type="checkbox" class="checkbox"></li>`
    taskList.insertAdjacentHTML('beforeend', taskHTML);
    const taskCheckbox = document.querySelectorAll('.checkbox');
    for (let checkbox of taskCheckbox) {
        const parent = checkbox.closest('.task');
        const id = Number(parent.id);
        if (taskObject.id === id && taskObject.completed === true) {
            checkbox.checked = true;
        }
    }
    if (taskList.innerHTML.trim() !== '') {
        taskList.setAttribute('class', 'full');
        }
    empty.style.display = 'none';
    taskInput.value = '';
    taskInput.focus();
})

const saveToStorage = () => {
    localStorage.setItem('taskList', JSON.stringify(taskArr));
}

const addTask = () => {
    const taskText = taskInput.value;
    const taskObject = {
        id: Date.now(),
        name: taskText,
        completed: false
    };

    const newTask = document.createElement('li');
    newTask.setAttribute('class', 'task');
    newTask.setAttribute('id', taskObject.id);
    const taskCheckbox = document.createElement('input');
    taskCheckbox.setAttribute('type', 'checkbox');
    taskCheckbox.classList.add('checkbox');
    newTask.textContent = taskObject.name;
    newTask.appendChild(taskCheckbox);
    taskList.append(newTask);
    if (taskList.innerHTML.trim() !== '') {
        taskList.setAttribute('class', 'full');
    }
    taskArr.push(taskObject);
    empty.style.display = 'none';
    clearButton.disabled = false;
    taskInput.value = '';
    taskInput.focus();
    saveToStorage();
}

const doneTask = (event) => {
    if (event.target.type !== 'checkbox') return;
    const parent = event.target.closest('.task');
    const id = Number(parent.id);
    const task = taskArr.find((task) => task.id === id);
    task.completed = !task.completed;
    saveToStorage();
}

const clearList = () => {
    taskList.innerHTML = '';
    taskList.classList.remove('full');
    empty.style.display = 'block';
    taskArr = [];
    localStorage.clear();
    clearButton.disabled = true;
}

addButton.addEventListener('click', () => {
    if (taskInput.value === '') {
        return;
    }
    addTask();
})

clearButton.addEventListener('click', clearList);

taskList.addEventListener('click', doneTask);