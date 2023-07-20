function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');
    newTask.innerHTML = `
      <input type="checkbox">
      <span>${taskInput.value}</span>
    `;
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
  