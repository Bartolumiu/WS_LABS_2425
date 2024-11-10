document.addEventListener('DOMContentLoaded', loadTasks);

/**
 * Carga las tareas almacenadas en el LocalStorage.
 */
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    // Añadir cada tarea a la lista
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    });
};

/**
 * Agrega una tarea al LocalStorage.
 */
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();

    // Verificar si la tarea no está vacía
    if (task) {
        // Guardar la tarea en el LocalStorage
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        loadTasks(); // Refresh frontend
        taskInput.value = '';
    };
};

/**
 * Elimina todas las tareas del LocalStorage.
 */
function clearTasks() {
    localStorage.removeItem('tasks');
    loadTasks(); // Refresh frontend
};

/**
 * Sube las tareas al servidor.
 */
async function uploadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    await fetch('/upload', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Indica que el cuerpo es JSON (para el middleware express.json())
        },
        body: JSON.stringify({ tasks })
    });
};

/**
 * Descarga las tareas del servidor.
 */
async function downloadTasks() {
    const response = await fetch('/download');
    const { tasks } = await response.json();
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks(); // Refresh frontend
}