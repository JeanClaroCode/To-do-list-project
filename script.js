var buttonAddTask = document.querySelector('.btn.btn-primary');


buttonAddTask.addEventListener('click', function(event) {
    let taskTextContent = document.querySelector('.form-control').value;
    if(taskTextContent !== "") {

    var selectDivMainly = document.getElementById('todoprincipal');
    var newTaskDiv = document.createElement('div');
    newTaskDiv.setAttribute('class', 'newtask')

    var createNewTaskDiv = selectDivMainly.appendChild(newTaskDiv)

    var newCheckTask = document.createElement('input')
    newCheckTask.type = 'checkbox' ;
    newCheckTask.id = 'check';
    newCheckTask.name = 'sales';
    createNewTaskDiv.appendChild(newCheckTask)

    var newSpanTextContent = document.createElement('span')
    newSpanTextContent.id = 'taskcontent'
    newSpanTextContent.textContent = taskTextContent

    createNewTaskDiv.appendChild(newSpanTextContent)

    var createDivButton = document.createElement('div')     
    createDivButton.className = 'buttonremove'
    createNewTaskDiv.appendChild(createDivButton)
    var createButtonimg = document.createElement('img')
    createButtonimg.id = 'remove'
    createButtonimg.src = '/Imagens/trash3.svg'
    createButtonimg.alt = 'trash3'
    createDivButton.appendChild(createButtonimg)}
});

function deleteTask(){
    document.parentNode.parentNode.remove()}