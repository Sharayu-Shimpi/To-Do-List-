const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click',function(){
const taskText = taskInput.value.trim();
if(taskText === ''){
    alert("enter some task")
    return;
}

const taskItem = document.createElement('li');
taskItem.textContent = taskText;

const deleteButton = document.createElement('button');
deleteButton.className = 'delete-btn';
deleteButton.innerHTML = '<i class="fa fa-trash"></i>';



deleteButton.addEventListener('click',function(){
taskItem.remove();
})

taskItem.appendChild(deleteButton);
taskList.appendChild(taskItem);

taskInput.value = '';

});