const API_URL = "https://todo-list.joselucasa937.workers.dev";

async function loadTasks() {
  const res = await fetch(`${API_URL}/api/tasks`);
  const tasks = await res.json();

  const pending = document.getElementById("pending");
  const done = document.getElementById("done");

  pending.innerHTML = "";
  done.innerHTML = "";

  tasks.forEach((task) => {
    const el = document.createElement("div");
    el.className = "task";

    el.innerHTML = `
      <span onclick="toggleTask(${task.id})">
        ${task.completed ? "✅" : "⬜"} ${task.title}
      </span>

      <div class="actions">
        <button onclick="deleteTask(${task.id})">❌</button>
      </div>
    `;

    if (task.completed) {
      done.appendChild(el);
    } else {
      pending.appendChild(el);
    }
  });
}

async function addTask() {
  const input = document.getElementById("taskInput");

  if (!input.value.trim()) return;

  await fetch(`${API_URL}/api/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: input.value }),
  });

  input.value = "";
  loadTasks();
}

async function toggleTask(id) {
  await fetch(`${API_URL}/api/tasks/${id}/toggle`, {
    method: "PUT",
  });

  loadTasks();
}

async function deleteTask(id) {
  await fetch(`${API_URL}/api/tasks/${id}`, {
    method: "DELETE",
  });

  loadTasks();
}

loadTasks();
