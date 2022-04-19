const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDoArray = [];
const TODOARRAY_KEY = "toDoList";

function saveToDo() {
  localStorage.setItem(TODOARRAY_KEY, JSON.stringify(toDoArray));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDoArray = toDoArray.filter((toDo) => toDo.id !== parseInt(li.id));
  if (toDoArray.length === 0) {
    localStorage.removeItem(TODOARRAY_KEY);
  } else {
    saveToDo();
  }
  console.log(toDoArray);
}

function paintToDo(toDoObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = toDoObj.text;
  li.id = toDoObj.id;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    id: Date.now(),
    text: newToDo,
  };
  toDoArray.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDo();
}
function loadToDoList() {
  const savedToDoArray = localStorage.getItem(TODOARRAY_KEY);
  if (savedToDoArray) {
    const parsedToDoArray = JSON.parse(savedToDoArray);
    toDoArray = parsedToDoArray;
    toDoArray.forEach(paintToDo);
  }
}

toDoForm.addEventListener("submit", handleToDoSubmit);
loadToDoList();
