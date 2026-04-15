// import { newFood } from "./helpers/newFood.js";
import { snakeBoard } from "./helpers/snakeBoard.js";
import { teleportSnake } from "./helpers/teleportSnake.js";

const count = 17;
let cells = [];
let currentScore = document.querySelector(".score");
let score = Number(currentScore.innerHTML);
let recordScore = Number(localStorage.getItem("record")) || 0;

snakeBoard(count, cells);

let snake = [
  { x: 6, y: 6 },
  { x: 7, y: 6 },
  { x: 8, y: 6 },
];

let foodCord = {
  x: Math.floor(Math.random() * count),
  y: Math.floor(Math.random() * count),
};
console.log(foodCord.x, foodCord.y);

let cell = foodCord.y * count + foodCord.x;
function drawFood() {
  cells[cell].classList.add("food");
}
drawFood();

let snakeHeadStyle = document.createElement("div");
snakeHeadStyle.classList.add("snakeHead");
let snakeHeadEyes = document.createElement("div");
snakeHeadEyes.classList.add("snakeHeadEyes");

function drawSnake() {
  cells.forEach((cell) => {
    cell.classList.remove("snake");
  });
  snake.forEach((item) => {
    let ind = item.y * count + item.x;
    cells[ind].classList.add("snake");
    // cells[ind].appendChild(snakeHeadStyle);
    // snakeHeadStyle.append(snakeHeadEyes);
  });
}

let pos = { x: 0, y: 0 };
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" && pos.x !== 1) {
    pos = { x: -1, y: 0 };
  }
  if (event.key === "ArrowRight" && pos.x !== -1) {
    pos = { x: 1, y: 0 };
  }
  if (event.key === "ArrowUp" && pos.y !== 1) {
    pos = { x: 0, y: -1 };
  }
  if (event.key === "ArrowDown" && pos.y !== -1) {
    pos = { x: 0, y: 1 };
  }
});

let recordScoreNum = document.querySelector(".recordScoreNum");
let head = snake[0];
function moveSnake() {
  // console.log({ pos });
  // console.log({ head });
  head = {
    x: snake[0].x + pos.x,
    y: snake[0].y + pos.y,
  };
  snake.unshift(head);
  if (head.x === foodCord.x && head.y === foodCord.y) {
    // newFood(cells, count, foodCord,cell);
    newFood()
    score++;
    currentScore.innerHTML = score;
  } else {
    snake.pop();
  }

  if (score > recordScore) {
    recordScore = score;
    localStorage.setItem("record", recordScore);
  }
}

// function newFood() {
//   cells.forEach((item) => {
//     item.classList.remove("food");
//   });
//   foodCord = {
//     x: Math.floor(Math.random() * count),
//     y: Math.floor(Math.random() * count),
//   };
//   let cell = foodCord.y * count + foodCord.x;
//   cells[cell].classList.add("food");
// }

let gameOverModal = document.querySelector(".gameOverModal");
let gameOverScore = document.querySelector(".gameOverScore");

function game() {
  moveSnake();
  teleportSnake(head,count);
  drawSnake();
  // gameOver();
}
let gameLoop = setInterval(game, 300);
recordScoreNum.innerHTML = recordScore;

let pauseModal = document.querySelector(".pauseModal");
let paused;
document.addEventListener("keydown", pauseGame);
function pauseGame(event) {
  console.log(event.key);
  if (event.key === "p") {
    paused = true;
    clearInterval(gameLoop);
    console.log(paused);
    pauseModal.style.display = "flex";
  }
}

let btnResume = document.querySelector("#btnResume");
btnResume.addEventListener("click", () => {
  if (paused) {
    paused = false;
    pauseModal.style.display = "none";
    setInterval(game, 300);
    console.log(paused);
  }
});


let btnRestart = document.querySelector("#btnRestart");
btnRestart.addEventListener("click", () => {
  snake = [
    { x: 6, y: 6 },
    { x: 7, y: 6 },
    { x: 8, y: 6 },
  ];
  // clearInterval(gameLoop)
  pauseModal.style.display = "none";
  setInterval(game, 300);
});


let settingModal = document.querySelector(".settingsModal");
let btnSettings = document.querySelector("#btnSettings");
btnSettings.addEventListener("click", () => {
  pauseModal.style.display = "none";
  settingModal.style.display = "flex";
});


let btnLevel = document.querySelector("#btnLevel");
let levelModal = document.querySelector(".levelModal");
btnLevel.addEventListener("click", () => {
  settingModal.style.display = "none";
  levelModal.style.display = "flex";
});




let gameOverBtnRestart = document.querySelector("#gameOverBtnRestart");
gameOverBtnRestart.addEventListener("click", () => {
  gameOverModal.style.display = "none";
  snake = [
    { x: 6, y: 6 },
    { x: 7, y: 6 },
    { x: 8, y: 6 },
  ];
  setInterval(game, 300);
  // clearInterval(gameLoop)
});
