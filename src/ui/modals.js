export const modals = {
  start: document.querySelector(".startGameModal"),
  pause: document.querySelector(".pauseModal"),
  gameOver: document.querySelector(".gameOverModal"),
  settings: document.querySelector(".settingsModal"),
  level: document.querySelector(".levelModal"),
  theme: document.querySelector(".themeModal"),
};


export function closeAllModals() {
  Object.values(modals).forEach(modal => {
    if (modal) modal.style.display = "none";
  });
}