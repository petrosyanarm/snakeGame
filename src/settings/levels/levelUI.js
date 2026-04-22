import { applyTheme, themeMode } from "../theme/mode.js";
import { clearActive } from "./active.js";
import { setLevelColor } from "./color.js";
import { recordScores } from "./recordScore.js";
import { saveLevel } from "./storage.js";

export function levelUI({
  buttons,
  state,
  records,
  isUnlocked,
  recordScore,
  grid,
  modals,
}) {
  let selectedLevel = state.level;
  const theme = themeMode();

  function updateLevelButtons() {
    buttons.medium.disabled = !isUnlocked("medium", records);
    buttons.hard.disabled = !isUnlocked("hard", records);
  }
  updateLevelButtons();

  buttons.easy.addEventListener("click", () => {
    clearActive();
    buttons.easy.classList.add("active");
    selectedLevel = "easy";
  });

  buttons.medium.addEventListener("click", () => {
    if (!isUnlocked("medium", records)) return;
    clearActive();
    buttons.medium.classList.add("active");
    selectedLevel = "medium";
  });

  buttons.hard.addEventListener("click", () => {
    if (!isUnlocked("hard", records)) return;
    clearActive();
    buttons.hard.classList.add("active");
    selectedLevel = "hard";
  });

  buttons.ok.addEventListener("click", () => {
    state.level = selectedLevel;
    saveLevel(state.level);
    setLevelColor(state.level, grid);
    recordScores(records, state.level, recordScore);
    const newTheme = theme.getSelectedTheme();
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    theme.setCurrentTheme(newTheme);
  });

  buttons.settingsModalBackBtn.addEventListener("click", () => {
    selectedLevel = state.level;
    clearActive();
    modals.settings.style.display = "none";
    modals.start.style.display = "flex";
  });

  return { updateLevelButtons };
}
