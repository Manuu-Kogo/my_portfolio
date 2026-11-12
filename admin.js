// Client-side demonstration only. Never store real admin credentials in public JavaScript.
const DEMO_PASSPHRASE = "portfolio-demo";
const loginArea = document.getElementById("loginArea");
const dashboard = document.getElementById("dashboard");
const loginButton = document.getElementById("loginButton");
const password = document.getElementById("demoPassword");
const form = document.getElementById("projectForm");
const list = document.getElementById("projectList");
const status = document.getElementById("status");
const KEY = "ekPortfolioDraftNotes";

function readNotes() {
  try { return JSON.parse(localStorage.getItem(KEY) || "[]"); }
  catch { return []; }
}
function saveNotes(notes) { localStorage.setItem(KEY, JSON.stringify(notes)); }
function renderNotes() {
  const notes = readNotes();
  list.replaceChildren();
  if (!notes.length) {
    const p = document.createElement("p"); p.className = "muted"; p.textContent = "No draft notes yet."; list.appendChild(p); return;
  }
  notes.forEach((note, index) => {
    const row = document.createElement("div"); row.className = "admin-item";
    const content = document.createElement("div");
    const title = document.createElement("strong"); title.textContent = note.title;
    const desc = document.createElement("p"); desc.className = "muted"; desc.textContent = note.description;
    content.append(title, desc);
    const del = document.createElement("button"); del.type = "button"; del.textContent = "Delete";
    del.addEventListener("click", () => { const updated = readNotes(); updated.splice(index, 1); saveNotes(updated); renderNotes(); status.textContent = "Draft deleted."; });
    row.append(content, del); list.appendChild(row);
  });
}
loginButton.addEventListener("click", () => {
  if (password.value !== DEMO_PASSPHRASE) { status.textContent = "That demo passphrase is not correct."; return; }
  loginArea.hidden = true; dashboard.hidden = false; status.textContent = "Demo dashboard opened."; renderNotes();
});
form.addEventListener("submit", event => {
  event.preventDefault();
  const notes = readNotes();
  notes.push({title: document.getElementById("projectTitle").value.trim(), description: document.getElementById("projectDescription").value.trim(), createdAt: new Date().toISOString()});
  saveNotes(notes); form.reset(); renderNotes(); status.textContent = "Draft note saved in this browser.";
});
document.getElementById("exportButton").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(readNotes(), null, 2)], {type:"application/json"});
  const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = "portfolio-draft-notes.json"; a.click(); URL.revokeObjectURL(url);
});
document.getElementById("logoutButton").addEventListener("click", () => { dashboard.hidden = true; loginArea.hidden = false; password.value = ""; status.textContent = "Dashboard closed."; });
