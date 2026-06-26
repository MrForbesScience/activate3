const SCORE_KEY = "year9ScienceLeaderboard";
const CURRENT_STUDENT_KEY = "year9ScienceCurrentStudent";

function cleanStudentName(name) {
  return name.trim().replace(/\s+/g, " ");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getLeaderboard() {
  try {
    return JSON.parse(localStorage.getItem(SCORE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveLeaderboard(scores) {
  localStorage.setItem(SCORE_KEY, JSON.stringify(scores));
}

function addScore(name, score) {
  const cleanName = cleanStudentName(name);
  if (!cleanName) return 0;
  const scores = getLeaderboard();
  scores[cleanName] = (Number(scores[cleanName]) || 0) + score;
  saveLeaderboard(scores);
  return scores[cleanName];
}

function getCurrentStudent() {
  return localStorage.getItem(CURRENT_STUDENT_KEY) || "";
}

function setCurrentStudent(name) {
  const cleanName = cleanStudentName(name);
  localStorage.setItem(CURRENT_STUDENT_KEY, cleanName);
  return cleanName;
}

function requireStudentName(target, onReady) {
  const savedName = getCurrentStudent();
  target.innerHTML = `
    <h2>Multiple-Choice Quiz</h2>
    <form class="student-form">
      <label for="student-name">Enter your name to start the quiz</label>
      <div class="student-form-row">
        <input id="student-name" name="student-name" type="text" autocomplete="name" required maxlength="40" value="${escapeHtml(savedName)}">
        <button class="try-again" type="submit">Start Quiz</button>
      </div>
      <p class="student-note">Use the same name each time to add to your previous total.</p>
    </form>
  `;

  const form = target.querySelector(".student-form");
  const input = target.querySelector("#student-name");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = setCurrentStudent(input.value);
    if (name) onReady(name);
  });
}

window.ScoreUtils = {
  addScore,
  getLeaderboard,
  getCurrentStudent,
  setCurrentStudent,
  requireStudentName,
  escapeHtml
};
