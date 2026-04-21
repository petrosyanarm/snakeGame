import { clearActive } from "./active.js";
import { recordScores } from "./recordScore.js";
import { saveLevel } from "./storage.js";

export function levelUI({
  buttons,
  state,
  records,
  isUnlocked,
  recordScore
}) {

function updateLevelButtons() {
    buttons.medium.disabled = !isUnlocked("medium", records);
    buttons.hard.disabled = !isUnlocked("hard", records);
}
updateLevelButtons()
  
  buttons.easy.addEventListener("click", () => {
    clearActive();
    buttons.easy.classList.add('active')
    state.level = "easy";
    recordScores(records, state.level, recordScore);
    saveLevel(state.level)
    // document.body.className = "level-" + state.level;
  });

  buttons.medium.addEventListener("click", () => {
    if (!isUnlocked("medium", records)) return;
    clearActive();
    buttons.medium.classList.add('active')
    state.level = "medium";
    recordScores(records, state.level, recordScore);
    saveLevel(state.level)
    // document.body.className = "level-" + state.level;
  });

  buttons.hard.addEventListener("click", () => {
    if (!isUnlocked("hard", records)) return;
    clearActive();
    buttons.hard.classList.add('active')
    state.level = "hard";
    recordScores(records, state.level, recordScore);
    saveLevel(state.level)
    // document.body.className = "level-" + state.level;
});
  console.log(records)
  return  { updateLevelButtons } ;
}