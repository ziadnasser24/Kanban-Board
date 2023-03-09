/* Model box */
const btns = document.querySelectorAll("[data-target]")
const closeBtn = document.querySelectorAll(".model-btn");
const overlay = document.querySelector("#overlay");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(btn.dataset.target).classList.add("active");
        overlay.classList.add("active");
    })
})
closeBtn.forEach(btn =>{
    btn.addEventListener("click",()=>{
       const model = btn.closest(".model");
       model.classList.remove("active");
       overlay.classList.remove("active");
    })
})

window.onclick = (e) =>{
    if(e.target == overlay){
        const models = document.querySelectorAll(".model");
        models.forEach((model) =>  model.classList.remove("active"));
        overlay.classList.remove("active");
    }
}



/* kanban */
const todos = document.querySelectorAll(".todo");
const kanbanColumn = document.querySelectorAll(".kanban-column");
const addBtn = document.getElementById("addBtn");
let dragToda = null;


todos.forEach(todo =>{
    todo.addEventListener('dragstart',dragStart);
    todo.addEventListener('dragend',dragEnd);
});

kanbanColumn.forEach(column =>{
    column.addEventListener('dragover',dragOver);
    column.addEventListener('dragenter',dragEnter);
    column.addEventListener('dragleave',dragLeave);
    column.addEventListener('drop',dragDrop);
})


function dragStart(){
    dragToda = this;
    setTimeout(()=>{
        this.style.display = "none";
    },0)
    console.log("dragStart");
}

function dragEnd(){
    dragToda = null;
    setTimeout(()=>{
        this.style.display = "block";
    },0)
    console.log("dragEnd");
}

function dragOver(e){
    e.preventDefault();
    console.log("dragOver");
}

function dragEnter(){
    console.log("dragEnter");
}
function dragLeave(){
    console.log("dragLeave");
}

function dragDrop(){
    this.appendChild(dragToda); 
    console.log("dragDrop");
}

/*  */

const todoSubmit = document.getElementById("todo-submit");
todoSubmit.addEventListener("click", createDiv);


function createDiv(){
    const todoDiv = document.createElement("div");
    const inputValue = document.getElementById("todo-input").value;
    const txt = document.createTextNode(inputValue);
    const todoForm = document.getElementById("todo-form");
    todoDiv.appendChild(txt);
    todoDiv.classList.add("todo");
    todoDiv.setAttribute("draggable","true");


    const span = document.createElement("span");
    const spanTxt = document.createTextNode("🗑")
    span.appendChild(spanTxt);
    span.classList.add("remove-icon");
    todoDiv.appendChild(span);
    no_status.appendChild(todoDiv);

    todoDiv.addEventListener("dragstart",dragStart);
    todoDiv.addEventListener("dragend",dragEnd);
    document.getElementById("todo-input").value = "";
    
    todoForm.classList.remove("active");
    overlay.classList.remove("active");

    span.addEventListener("click", ()=>{
        span.parentElement.style.display ="none";
    })

}


const trashBtn = document.querySelectorAll(".remove-icon"); 

trashBtn.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        btn.parentElement.style.display ="none";
    })
})


