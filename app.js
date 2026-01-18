// Simple helper
function $(id) {
  return document.getElementById(id);
}

// Demo data
function getDemoData() {
  return {
    audit: {
      score: 88,
      fixes: [
        "Clarify your main keyword in the title",
        "Add buyer-focused benefits",
        "Improve first image text"
      ]
    },
    checklist: [
      "Rewrite title",
      "Add keyword variation",
      "Update images",
      "Publish listing"
    ]
  };
}

// Render dashboard
function renderDashboard(data) {
  if ($("score")) $("score").textContent = data.audit.score;

  // Confetti for high score
  if (data.audit.score >= 85 && window.confetti) {
    confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
  }

  // Top fixes
  const fixesBox = $("topFixes");
  if (fixesBox) {
    fixesBox.innerHTML = "";
    data.audit.fixes.forEach(f => {
      const li = document.createElement("li");
      li.textContent = f;
      fixesBox.appendChild(li);
    });
  }

  // Checklist
  const checklistBox = $("checklist");
  const progress = $("checkProgress");
  if (checklistBox) {
    checklistBox.innerHTML = "";
    data.checklist.forEach((item, i) => {
      const row = document.createElement("div");
      row.className = "checkRow";

      const cb = document.createElement("input");
      cb.type = "checkbox";

      const label = document.createElement("label");
      label.textContent = item;

      cb.addEventListener("change", () => {
        const done = checklistBox.querySelectorAll("input:checked").length;
        if (progress) progress.textContent = `${done}/${data.checklist.length} completed`;
      });

      row.appendChild(cb);
      row.appendChild(label);
      checklistBox.appendChild(row);
    });
  }
}

// Load demo
function loadDemo() {
  const data = getDemoData();
  renderDashboard(data);
}

// Fake generate (placeholder until AI backend)
function generate() {
  const data = getDemoData();
  renderDashboard(data);
}

// Copy all
function copyAll() {
  alert("Copy feature coming next.");
}

// Wire buttons
document.addEventListener("DOMContentLoaded", () => {
  $("loadDemoBtn").addEventListener("click", loadDemo);
  $("generateBtn").addEventListener("click", generate);
  $("copyAllBtn").addEventListener("click", copyAll);
});
