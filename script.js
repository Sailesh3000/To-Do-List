document.querySelector('#push').onclick = function(){
    var taskInput = document.querySelector('#newtask input').value.trim();
    if(taskInput.length === 0){
        alert("Kindly enter a task name");
    } else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span class="taskname">
                    ${taskInput}
                </span>
                <button class="delete">X</button>
            </div>
        `;
        var current_tasks = document.querySelectorAll(".delete");
        for(var i = 0; i < current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}