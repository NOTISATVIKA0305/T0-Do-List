function addTask(){
    var  input=document.getElementById("new-task");
    var taskList=document.getElementById("task-list");
    if(input.value==""){
        alert("please enter the task");
        return
    }
    var listItem=document.createElement('li')
    listItem.innerText=input.value
    var buttonContainer=document.createElement('div')
    buttonContainer.className='task-button'
    var deletebutton=document.createElement('button')
    deletebutton.innerText='delete'
    deletebutton.onclick=function(){
        taskList.removeChild(listItem)
    }
    var completButton=document.createElement('button')
    completButton.innerText='complete'
    completButton.onclick=function(){
        listItem.classList.toggle('complete')
    }
    buttonContainer.appendChild(deletebutton)
    buttonContainer.appendChild(completButton)
    listItem.appendChild(buttonContainer)
    taskList.appendChild(listItem)
    input.value="";
}