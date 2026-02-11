let level = 1;
const maxLevel = 10;

const badge = document.getElementById("level-badge");
const levelText = document.getElementById("level-text");
const levelUpButton = document.getElementById("level-up-btn");
levelUpButton.addEventListener("click", function () {
  if (level < maxLevel) {
    level++;

    badge.textContent = `Level ${level}`;
    levelText.textContent = `You leveled up tp level ${level}`;

    if (level === maxLevel) {
      levelText.textContent = `MAX LEVEL REACHED! Current Level: ${level}`;
      levelUpButton.disabled = true;
      levelUpButton.textContent = `MAX LEVEL`;
    }
  }
});
