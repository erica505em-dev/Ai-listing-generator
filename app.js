function $(id) {
  return document.getElementById(id);
}

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

function renderDashboard(data) {

  $("score").textContent = data.audit.score;

  const fixes = $("topFixes");
  fixes.innerHTML = "";
  data.audit.fixes.forEach(f => {
    const li = document.createElement("li");
    li.textContent = f;
    fixes.appendChild(li);
  });

  const checklist = $("checklist");
  const progress = $("checkProgress");
  checklist.innerHTML = "";

  data.checklist.forEach(item => {
    const row = document.createElement("div");
    row.className = "checkRow";

    const cb = document.createElement("input");
    cb.type = "checkbox";

    const label = document.createElement("label");
    label.textContent = item;

    cb.addEventListener("change", () => {
      const done = checklist.querySelectorAll("input:checked").length;
      progress.textContent = `${done}/${data.checklist.length} completed`;
    });

    row.appendChild(cb);
    row.appendChild(label);
    checklist.appendChild(row);
  });
}

function loadDemo() {
  const data = getDemoData();
  renderDashboard(data);
}

document.addEventListener("DOMContentLoaded", () => {
  $("loadDemoBtn").addEventListener("click", loadDemo);
  $("generateBtn").addEventListener("click", loadDemo);
});