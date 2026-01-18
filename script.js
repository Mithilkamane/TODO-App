const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", addTodo);

function addTodo() {
  if (input.value.trim() === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.innerText = input.value;


  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(delBtn);
  todoList.appendChild(li);

  input.value = "";
}

