import { modals } from "./modals.js";

let loop = null;
let paused = false;

export function setLoop(newLoop) {
  loop = newLoop;
}

export function handlePauseKey(event) {
  if (event.key === "p") {
    clearInterval(loop);
    modals.pause.style.display = "flex";
    paused = true;
  } else {
    modals.pause.style.display = "none";
    paused = false;
  }
}

export function resumeGame(startGame) {
  if (!paused) return;

  modals.pause.style.display = "none";
  startGame();

  paused = false;
}
