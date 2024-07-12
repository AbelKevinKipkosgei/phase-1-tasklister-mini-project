document.addEventListener("DOMContentLoaded", (e) => {
  // your code here
  let form = document.querySelector("#create-task-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let taskDescription = document.querySelector("#new-task-description").value;
    buildTodo(taskDescription);
    form.reset();
  });
});
function buildTodo(todo) {
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.addEventListener("click", handleDelete);
  btn.textContent = "x";
  li.textContent = `${todo} `;
  li.appendChild(btn);
  console.log(li);
  document.querySelector("#tasks").appendChild(li);
}
function handleDelete(e) {
  e.target.parentNode.remove();
}
