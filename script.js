const pendingTasksList = document.getElementById('pendingTasks');
const completedTasksList = document.getElementById('completedTasks');
const taskInput = document.getElementById('taskInput');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const taskItem = createTaskItem(taskText, false);
  pendingTasksList.appendChild(taskItem);
  taskInput.value = '';
}

// Function to create a task item element
function createTaskItem(taskText, isCompleted) {
  const li = document.createElement('li');
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  li.appendChild(taskSpan);

  if (!isCompleted) {
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete');
    completeButton.onclick = () => markAsComplete(li);
    li.appendChild(completeButton);
  }

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.classList.add('edit');
  editButton.onclick = () => editTask(taskSpan);
  li.appendChild(editButton);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete');
  deleteButton.onclick = () => deleteTask(li);
  li.appendChild(deleteButton);

  return li;
}

// Function to mark a task as complete
function markAsComplete(taskItem) {
  const taskText = taskItem.querySelector('span').textContent;
  completedTasksList.appendChild(createTaskItem(taskText, true));
  taskItem.remove();
}

// Function to edit a task
function editTask(taskSpan) {
  const newTaskText = prompt('Edit task:', taskSpan.textContent);
  if (newTaskText !== null) {
    taskSpan.textContent = newTaskText.trim();
  }
}

// Function to delete a task
function deleteTask(taskItem) {
  taskItem.remove();
}
