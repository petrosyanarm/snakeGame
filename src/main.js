import { snakeBoard } from "./controls/snakeBoard.js";
import { setupKeyboard } from "./controls/keyboard.js";
import { teleportSnake } from "./controls/teleport.js";
import { mobileControl } from "./controls/mobile.js";
import { drawSnake } from "./game/snake/draw.js";
import { drawFood } from "./game/food/draw.js";
import { createSnake, moveSnake } from "./game/snake/move.js";
import { createFood } from "./game/food/create.js";
import { eatFood } from "./game/snake/eat.js";
import { isEat } from "./game/snake/isEat.js";
import { state } from "./state/state.js";
import { modals,closeAllModals } from "./ui/modals.js";
import { buttons } from "./ui/buttons.js";
import { setLoop,resumeGame } from "./ui/pause.js";
import { handleGameOver,forceGameOver } from "./ui/gameOver.js";
import { restartGame } from "./ui/restartGame.js";
import { eventsUI } from "./ui/eventsUI.js";
import { LEVELS,settingsUI,isUnlocked,loadRecords,checkWallCollision,themeMode,setLevelColor  } from "./settings/index.js"


const grid = document.createElement("div");
const currentScore = document.querySelector(".score");
const recordScore = document.querySelector(".recordScoreNum");
const boardBox = document.querySelector('.board')
const cells = [];
const count = 17;
const gameState = state(count)
const icon = buttons.pause.querySelector('i')

snakeBoard(count, cells,grid,boardBox);
setLevelColor(null,gameState.level,grid);
gameState.snake = createSnake(count);
gameState.food = createFood(count,gameState.snake);

setupKeyboard(gameState);

let gameLoop = null;
function startGame() {
  clearInterval(gameLoop);
  gameLoop = setInterval(game, LEVELS[gameState.level].speed);
  setLoop(gameLoop);
}

function game() {
  gameState.pos = gameState.nextPos;
  const nextHead = {
    x: gameState.snake[0].x + gameState.pos.x,
    y: gameState.snake[0].y + gameState.pos.y,
  };

  if (gameState.level === "hard" && checkWallCollision(nextHead, count, gameState.level)) {
    forceGameOver(gameState, gameLoop, modals, records, updateLevelButtons, recordScore);
    return;
  }

  teleportSnake(nextHead, count, gameState.level);
  
  const eat = isEat(nextHead, gameState.food);
  moveSnake(nextHead, gameState.snake,eat);
  handleGameOver(gameState, gameLoop, modals, records, updateLevelButtons, recordScore);
  eatFood(gameState, count, eat, currentScore);

  drawSnake(cells, gameState.snake, count, gameState.pos);
  drawFood(cells, gameState, count);
}


eventsUI({
  buttons,
  modals,
  startGame,
  resumeGame,
  restartGame,
  closeAllModals,
  gameState,
  gameLoop,
  count,
  currentScore,
  setLoop,
  LEVELS,
  game,
  boardBox,
  icon
});

const records = loadRecords();
const {updateLevelButtons} = settingsUI({
  buttons,
  modals,
  gameState,
  records,
  isUnlocked,
  recordScore,
  grid
});

themeMode();
mobileControl(gameState)


