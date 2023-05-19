// Array para almacenar las tareas
let tasks = [];
//fecha
const day = document.getElementById("day");
const daytext = document.getElementById("daytext");
const month = document.getElementById("month");
const year = document.getElementById("year");

const setDate = () =>{
    const date = new Date();
    daytext.textContent = date.toLocaleString("es", { weekday: "long" });
    day.textContent = date.toLocaleString("es", { day: "numeric"});
    month.textContent = date.toLocaleString("es", { month: "long"});
    year.textContent = date.toLocaleString("es", { year: "numeric"});

};
setDate();
// Función para agregar una tarea a la lista
function addTask() {
const taskInput = document.getElementById('taskInput');
const dateInput = document.getElementById('dateInput');

const task = {
    description: taskInput.value,
    date: dateInput.value,
    completed: false
};




tasks.push(task);

taskInput.value = '';
dateInput.value = '';

renderTasks();
}
// ...

// Función para organizar las tareas
function sortTasks() {
    tasks.sort((a, b) => {
      // Primero, se ordenan las tareas completadas y luego las tareas incompletas
    if (a.completed && !b.completed) {
        return 1;
    } else if (!a.completed && b.completed) {
        return -1;
    }
    
      // Si ambas tareas tienen el mismo estado, se ordenan por fecha
    return a.date.localeCompare(b.date);
    });
    
    renderTasks();
}

  // ...

// Función para renderizar la lista de tareas
function renderTasks() {
const taskList = document.getElementById('taskList');
taskList.innerHTML = '';

tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    
    // Establecer la clase CSS según si la tarea está completada o no
    if (task.completed) {
    taskItem.classList.add('completed');
    }
    
    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.checked = task.completed;
    taskCheckbox.addEventListener('change', () => toggleTaskCompleted(index));
    
    const taskDescription = document.createElement('span');
    taskDescription.innerText = task.description + ' - ' + task.date;
    
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Eliminar';
    deleteButton.addEventListener('click', () => deleteTask(index));
    
    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskDescription);
    taskItem.appendChild(deleteButton);
    
    taskList.appendChild(taskItem);
});
}

// Función para marcar una tarea como completada o incompleta
function toggleTaskCompleted(index) {
tasks[index].completed = !tasks[index].completed;
renderTasks();
}

// Función para eliminar una tarea de la lista
function deleteTask(index) {
tasks.splice(index, 1);
renderTasks();
}