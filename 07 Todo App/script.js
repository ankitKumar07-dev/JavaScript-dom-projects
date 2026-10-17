let input = document.querySelector("input");
let addBtn = document.querySelector("button");
let todoList = document.querySelector("ul");
let emtyMessage = document.querySelector("#empty-message");

function getData(){
    let task = input.value.trim();

    if(task === "")
    {
        input.value = "";
        return;
    }
    
    let list = document.createElement("li");

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");

    let span = document.createElement("span");
    span.textContent = task;

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");

    let div = document.createElement("div");
    div.classList.add("content");
    div.append(checkbox);
    div.append(span);
    



    todoList.prepend(list);
    emtyMessage.style.display = "none";
    list.append(div);
    list.append(deleteBtn);
    input.value = "";
    
    checkbox.addEventListener("click", ()=>{
    span.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", ()=>{
        event.stopPropagation();
        list.remove();

        if(todoList.children.length === 0){
            emtyMessage.style.display = "block";
        }
    });
}

addBtn.addEventListener("click", ()=>{
    getData();
});

input.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        getData();
    }
});

