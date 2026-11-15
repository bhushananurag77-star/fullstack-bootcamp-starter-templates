const STORAGE_KEY = "tasks";

function loadTasks() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function render(tasks, filter = "all") {
  const list = document.getElementById("task-list");
  list.innerHTML = "";
  const visible = tasks.filter((t) => filter === "all" || (filter === "active" ? !t.done : t.done));
  visible.forEach((task, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" ${task.done ? "checked" : ""} data-i="${i}"><span>${task.text}</span>`;
    list.appendChild(li);
  });
  document.getElementById("count").textContent = `${tasks.filter((t) => !t.done).length} remaining`;
}

document.getElementById("task-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("task-input");
  const tasks = loadTasks();
  tasks.push({ text: input.value, done: false });
  saveTasks(tasks);
  input.value = "";
  render(tasks);
});

render(loadTasks());
