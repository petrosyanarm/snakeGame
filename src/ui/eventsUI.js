import { renderSound, toggleSound } from "../settings/sound/toggle.js";
import { handlePauseKey } from "./pause.js";
import { resetGame } from "./restartGame.js";
export function eventsUI({
  buttons,
  modals,
  startGame,
  resumeGame,
  restartGame,
  closeAllModals,
  state,
  gameLoop,
  count,
  currentScore,
  setLoop,
  levels,
  game
}) {
  
  buttons.startGame.addEventListener("click", () => {
    closeAllModals();
    startGame(game,levels,state.level,setLoop,gameLoop)
  });

  document.addEventListener("keydown", handlePauseKey);

  buttons.resume.addEventListener("click", () => {
    resumeGame(startGame);
  });

  buttons.restart.addEventListener("click", () => {
    restartGame(state, gameLoop, startGame, count, modals,currentScore);
  });

  buttons.mainMenu.addEventListener("click",()=>{
    resetGame(state,count,currentScore)
    closeAllModals();
    modals.start.style.display = "flex";
  })

  buttons.gameOverRestart.addEventListener("click", () => {
    restartGame(state, gameLoop, startGame, count, modals,currentScore);
  });

  buttons.settings.addEventListener("click", () => {
    modals.settings.style.display="flex"
  });

  buttons.settingsModalBackBtn.addEventListener("click", () => {
    closeAllModals();
    modals.start.style.display = "flex";
  });
  
  let show = false;
  buttons.level.addEventListener("click", () => {
    if (!show) {
      modals.level.style.display = "flex";
      show = true;
    } else {
      modals.level.style.display = "none";
      show = false;
    }
  });
  
  buttons.btnTheme.addEventListener("click",()=>{
    if (!show) {
      modals.theme.style.display = "flex"
      show = true;
    } else {
      modals.theme.style.display = "none";
      show = false;
    }
  })

  buttons.btnVolume.addEventListener("click",()=>{
    toggleSound();
    renderSound();
  })

}
