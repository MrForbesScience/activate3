const TEACHER_PASSWORD = "Act1vate3!";

function renderLeaderboard() {
  const target = document.querySelector("[data-leaderboard]");
  if (!target || !window.ScoreUtils) return;

  const scores = window.ScoreUtils.getLeaderboard();
  const entries = Object.entries(scores)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

  if (!entries.length) {
    target.innerHTML = `
      <h2>Leaderboard</h2>
      <p>No quiz scores yet. Complete a quiz and your total correct answers will appear here.</p>
    `;
    return;
  }

  target.innerHTML = `
    <div class="leaderboard-heading">
      <div>
        <h2>Leaderboard</h2>
        <p>Total correct answers by student on this device.</p>
      </div>
    </div>
    <ol class="leaderboard-list">
      ${entries.map(([name, total]) => `
        <li>
          <span>${escapeLeaderboardText(name)}</span>
          <strong>${total}</strong>
        </li>
      `).join("")}
    </ol>
    <details class="teacher-controls">
      <summary>Teacher Controls</summary>
      <div class="teacher-control-grid">
        <label for="remove-student-name">Remove one student</label>
        <select id="remove-student-name">
          ${entries.map(([name]) => `<option value="${escapeLeaderboardText(name)}">${escapeLeaderboardText(name)}</option>`).join("")}
        </select>
        <button class="remove-student" type="button">Remove Selected Student</button>
        <button class="clear-scores" type="button">Clear All Scores</button>
      </div>
      <p class="teacher-note">Password required for teacher controls.</p>
    </details>
  `;

  target.querySelector(".remove-student").addEventListener("click", () => {
    if (!confirmTeacherPassword()) return;
    const select = target.querySelector("#remove-student-name");
    removeStudentScore(select.value);
    renderLeaderboard();
  });

  target.querySelector(".clear-scores").addEventListener("click", () => {
    if (!confirmTeacherPassword()) return;
    const confirmed = confirm("Clear all leaderboard scores on this device?");
    if (!confirmed) return;
    localStorage.removeItem("year9ScienceLeaderboard");
    renderLeaderboard();
  });
}

function confirmTeacherPassword() {
  const password = prompt("Enter teacher password:");
  if (password === TEACHER_PASSWORD) return true;
  alert("Incorrect password.");
  return false;
}

function removeStudentScore(name) {
  const scores = window.ScoreUtils.getLeaderboard();
  delete scores[name];
  localStorage.setItem("year9ScienceLeaderboard", JSON.stringify(scores));
}

function escapeLeaderboardText(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

renderLeaderboard();
