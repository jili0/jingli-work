//Initial references

const container = document.querySelector('.container');
const input = document.querySelector('#input');
const addButton = document.querySelector('#addTask');
const taskContainer = document.querySelector('.tasks');

let tasks = {};
let index;
let task;
let taskId;
let inputValue;
let storedTask;
let keys;
let keyInStorage;
let taskInStorage;
let newIndex;


// Functions of add button
const getInput = () => {
  task = input.value;
}

const generateId = () => {
  taskId = Math.floor(Math.random() * 1000000);
}

const setStorage = (taskId, task) => {
  localStorage.setItem(JSON.stringify(taskId), JSON.stringify(task));
}

const addObject = (taskId) => {
  storedTask = localStorage.getItem(JSON.stringify(taskId)).slice(1,-1);
  tasks[taskId] = storedTask;
}

const updateObject = () => {
  let objectKeys = Array.from(Object.keys(localStorage));
  objectKeys.forEach((key) => {
    let objectValue = localStorage.getItem(key).slice(1, -1);
    tasks[key] = objectValue;
  });
}

const renderTask = (tasks) => {
  taskContainer.innerHTML = "";
  Object.keys(tasks).forEach((key) => {
    taskItem = document.createElement('div');
    taskItem.classList.add('taskItem');
    taskItem.innerHTML = `
    <p class="taskText" id="${key}">${tasks[key]}</p>
    <button class="edit"></button>
    <button class="delete"></button>
  `;
    taskContainer.appendChild(taskItem);
  });
}

const handleAdd = () => {
  getInput();
  generateId();
  setStorage(taskId, task);
  addObject(taskId);
  renderTask(tasks);
  input.style.backgroundColor = "";
}

// Functions of edit button



const edit = (e) => {
  input.value = e.target.previousElementSibling.innerText;
  localStorage.removeItem(e.target.previousElementSibling.id);
  e.target.parentElement.remove();
  input.style.backgroundColor = "rgba(255, 239, 213, 0.665)";
  input.style.border = "1px solid rgba(0, 0, 0, 0.197)";
  input.style.boxShadow = "1px 1px 2px black";
  input.style.boxShadow = "1px 1px 2px black";
}

// Functions of remove button/ edit button
const remove = (e) => {
  localStorage.removeItem(e.target.previousElementSibling.previousElementSibling.id);
  e.target.parentElement.remove();
}


//window load
window.addEventListener('load', () => {
  updateObject();
  renderTask(tasks);
});
// Handle add button
addButton.addEventListener('click', handleAdd);
// Handle edit and delete button
taskContainer.addEventListener('click', (e) => {
  if (e.target.className === 'delete') {
    remove(e);
    e.stopPropagation();
  } else if (e.target.className === 'edit') {
    edit(e);
    e.stopPropagation();
  }
});


