let events = [];
let addForm = document.getElementById("add-form");
let taskList = document.getElementById("task-list");

addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = document.getElementById("task-title-form").value;
    let duration = document.getElementById("task-duration-form").value;
    let description = document.getElementById("task-desc-form").value;
    events.push(
        {"title": title, "duration": duration, "description": description, "deleted": "0"}
    );
    addForm.reset();
    reloadTasks();
});

let reloadTasks = () => {
    taskList.innerHTML = "";
    for(let x = 0; x < events.length; x++){
        if(events[x].deleted == "1") {
            continue;
        }
        let task = document.createElement("div");
        task.className = "task";

        let taskTitle = document.createElement("h4");
        taskTitle.innerHTML = events[x].title;
        taskTitle.className = "task-title";

        let taskDuration = document.createElement("div");
        taskDuration.innerHTML = events[x].duration;
        taskDuration.classList = "task-duration text-success";

        let taskDescription = document.createElement("div");
        taskDescription.innerHTML = events[x].description;
        taskDescription.classList = "task-desc mt-2";

        task.appendChild(taskTitle);
        task.appendChild(taskDuration);
        task.appendChild(taskDescription);

        task.addEventListener("click", () => {
            task.className = "deleted";
            events[x].deleted = "1";
        });

        taskList.appendChild(task);
    }
    
}


