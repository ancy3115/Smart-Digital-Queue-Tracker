const API = "http://localhost:5000/api/queue";

async function join() {
    const name = document.getElementById("name").value;
    const priority = document.getElementById("priority").value;

    await fetch(`${API}/add`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ name, priority })
    });

    load();
}

async function serve() {
    await fetch(`${API}/serve`, { method: "DELETE" });
    load();
}

async function load() {
    const res = await fetch(API);
    const data = await res.json();

    const ul = document.getElementById("list");
    ul.innerHTML = "";

    data.forEach(u => {
        ul.innerHTML += `<li>
            ${u.name} | ${u.priority} | Slot: ${u.slotTime}
        </li>`;
    });
}

load();
