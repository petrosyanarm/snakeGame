export function setupKeyboard(state) {
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" && state.pos.x !== 1) {
      state.nextPos = { x: -1, y: 0 };
    }
    if (e.key === "ArrowRight" && state.pos.x !== -1) {
      state.nextPos = { x: 1, y: 0 };
    }
    if (e.key === "ArrowUp" && state.pos.y !== 1) {
      state.nextPos = { x: 0, y: -1 };
    }
    if (e.key === "ArrowDown" && state.pos.y !== -1) {
      state.nextPos = { x: 0, y: 1 };
    }
  });
}
