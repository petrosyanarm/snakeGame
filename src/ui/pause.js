import { modals } from "./modals.js";

let loop = null;
let paused = false;

export function setLoop(newLoop) {
  loop = newLoop;
}

export function pauseGame(boardBox) {
  if (loop === null) return;

  clearInterval(loop);
  boardBox.classList.add('paused')
  modals.pause.style.display = "flex";
  paused = true;
}

export function handlePauseKey(event,boardBox) {
  if (event.key === "p") {
    pauseGame(boardBox);
  }
}

export function resumeGame(startGame,boardBox) {
  if (!paused) return;
  boardBox.classList.remove('paused')
  modals.pause.style.display = "none";
  startGame();

  paused = false;
}
