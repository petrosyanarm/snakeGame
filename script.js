// // import { newFood } from "./helpers/newFood.js";
// import { gameOver } from "./helpers/index.js";
// import { snakeBoard } from "./helpers/index.js";
// import { teleportSnake } from "./helpers/index.js";
// import { drawSnake } from "./helpers/index.js";
// import { count, cells } from "./helpers/constants.js";

// const currentScore = document.querySelector(".score");
// let score = Number(currentScore.innerHTML);
// let recordScore = Number(localStorage.getItem("record")) || 0;

// // snakeBoard
// snakeBoard(count, cells);

// let snake = [
//   { x: 8, y: 6 },
//   { x: 7, y: 6 },
//   { x: 6, y: 6 },
// ];

// let foodCord = {
//   x: Math.floor(Math.random() * count),
//   y: Math.floor(Math.random() * count),
// };

// // drawFood
// const cell = foodCord.y * count + foodCord.x;
// function drawFood() {
//   cells[cell].classList.add("food");
// }

// // drawSnake

// // snakeMove
// let pos = { x: 1, y: 0 };
// let nextPos = { x: 1, y: 0 };
// document.addEventListener("keydown", (event) => {
//   if (event.key === "ArrowLeft" && pos.x !== 1) {
//     nextPos = { x: -1, y: 0 };
//   }
//   if (event.key === "ArrowRight" && pos.x !== -1) {
//     nextPos = { x: 1, y: 0 };
//   }
//   if (event.key === "ArrowUp" && pos.y !== 1) {
//     nextPos = { x: 0, y: -1 };
//   }
//   if (event.key === "ArrowDown" && pos.y !== -1) {
//     nextPos = { x: 0, y: 1 };
//   }
// });

// const recordScoreNum = document.querySelector(".recordScoreNum");
// let head = snake[0];
// let soundOn = localStorage.getItem('soundOn')==="false"

// function moveSnake() {
//   pos = nextPos;
//   head = {
//     x: snake[0].x + pos.x,
//     y: snake[0].y + pos.y,
//   };
//   teleportSnake(head, count, currentLevel);

//   snake.unshift(head);
//   if (head.x === foodCord.x && head.y === foodCord.y) {
//     // newFood(cells, count, foodCord);
//     newFood();
//     score++;
//     currentScore.innerHTML = score;
//   } else {
//     snake.pop();
//   }
//   if(soundOn) {
//     moveSound.currentTime = 0;
//     moveSound.play();
//   }
// }

// // newFood
// function newFood() {
//   cells.forEach((item) => {
//     item.classList.remove("food");
//   });
//   foodCord = {
//     x: Math.floor(Math.random() * count),
//     y: Math.floor(Math.random() * count),
//   };
//   const cell = foodCord.y * count + foodCord.x;
//   cells[cell].classList.add("food");
// }

// // startGame
// const startGameModal = document.querySelector(".startGameModal");
// const btnStartGame = document.getElementById("btnStartGame");
// btnStartGame.addEventListener("click", () => {
//   startGameModal.style.display = "none";
//   pauseModal.style.display = "none";
//   startGame();
//   drawFood();
// });

// let paused = false;
// let gameLoop = null;
// function startGame() {
//   console.log({ currentLevel });
//   clearInterval(gameLoop);
//   gameLoop = setInterval(game, levels[currentLevel].speed);
// }

// const gameOverModal = document.querySelector(".gameOverModal");
// const gameOverScore = document.querySelector(".gameOverScore");
// const moveSound = new Audio("./sound/move.mp3");

// function game() {
//   moveSnake();
//   if (gameOver(snake, score, recordScore)) {
//     clearInterval(gameLoop);
//     updateRecord(score);
//     updateLevelButtons();
//     gameOverModal.style.display = "flex";
//     gameOverScore.textContent = "Final Score : " + score;
//     return;
//   }
//   if (currentLevel === "hard") {
//     if (head.x < 0 || head.x >= count || head.y < 0 || head.y >= count) {
//       clearInterval(gameLoop);
//       updateRecord(score);
//       updateLevelButtons();
//       gameOverModal.style.display = "flex";
//       gameOverScore.textContent = "Final Score : " + score;
//     }
//   }
//   drawSnake(cells, snake, count);
// }
// recordScoreNum.innerHTML = recordScore;

// // pauseGame
// const pauseModal = document.querySelector(".pauseModal");
// document.addEventListener("keydown", pauseGame);
// function pauseGame(event) {
//   if (event.key === "p") {
//     paused = true;
//     clearInterval(gameLoop);
//     pauseModal.style.display = "flex";
//     pauseModal.style.zIndex = "999";
//   }
// }

// // resumeGame
// const btnResume = document.querySelector("#btnResume");
// btnResume.addEventListener("click", () => {
//   if (paused) {
//     pauseModal.style.display = "none";
//     startGame();
//     paused = false;
//   }
// });

// // startSettings
// const btnStartSettings = document.querySelector("#btnStartSettings");
// btnStartSettings.addEventListener("click", () => {
//   settingModal.style.display = "flex";
// });

// // settingsBack
// const settingsModalBackBtn = document.querySelector("#settingsModalBackBtn");
// settingsModalBackBtn.addEventListener("click", () => {
//   pauseModal.style.display = "flex";
//   settingModal.style.display = "none";
//   levelModal.style.display = "none";
//   themeModal.style.display = "none";
//   btnVolumeIcon.style.display = "none";
//   show = false;
// });

// // settingsModal
// const settingModal = document.querySelector(".settingsModal");
// const btnSettings = document.querySelector("#btnSettings");
// btnSettings.addEventListener("click", () => {
//   pauseModal.style.display = "none";
//   settingModal.style.display = "flex";
// });

// // btnRestart
// const btnRestart = document.querySelector("#btnRestart");
// btnRestart.addEventListener("click", () => {
//   snake = [
//     { x: 8, y: 6 },
//     { x: 7, y: 6 },
//     { x: 6, y: 6 },
//   ];
//   pos = { x: 1, y: 0 };
//   nextPos = { x: 1, y: 0 };
//   clearInterval(gameLoop);
//   score = 0;
//   currentScore.innerHTML = score;
//   pauseModal.style.display = "none";
//   startGame();
// });

// // gameOverStart
// const gameOverBtnRestart = document.querySelector("#gameOverBtnRestart");
// gameOverBtnRestart.addEventListener("click", () => {
//   gameOverModal.style.display = "none";
//   snake = [
//     { x: 8, y: 6 },
//     { x: 7, y: 6 },
//     { x: 6, y: 6 },
//   ];
//   pos = { x: 1, y: 0 };
//   nextPos = { x: 1, y: 0 };
//   clearInterval(gameLoop);
//   score = 0;
//   currentScore.innerHTML = score;
//   startGame();
// });

// // levelModal
// const btnLevel = document.querySelector("#btnLevel");
// const levelModal = document.querySelector(".levelModal");
// let show = false;
// btnLevel.addEventListener("click", () => {
//   if (!show) {
//     levelModal.style.display = "flex";
//     show = true;
//   } else {
//     levelModal.style.display = "none";
//     show = false;
//   }
// });

// const levelsInterval = {
//   easy: 500,
//   medium: 300,
//   hard: 100,
// };

// const levels = {
//   easy: { speed: levelsInterval.easy, unlockScore: 0 },
//   medium: { speed: levelsInterval.medium, unlockScore: 15 },
//   hard: { speed: levelsInterval.hard, unlockScore: 20 },
// };

// let currentLevel = "easy";
// document.body.className = "level-" + currentLevel;

// const records = JSON.parse(localStorage.getItem("snakeRecords")) || {
//   easy: 0,
//   medium: 0,
//   hard: 0,
// };

// function saveRecords() {
//   localStorage.setItem("snakeRecords", JSON.stringify(records));
// }

// function updateRecord(score) {
//   if (score > records[currentLevel]) {
//     records[currentLevel] = score;
//     saveRecords();
//   }
// }

// const btnMediumLevel = document.querySelector("#btnMediumLevel");
// const btnEasyLevel = document.querySelector("#btnEasyLevel");
// const btnHardLevel = document.querySelector("#btnHardLevel");

// function updateLevelButtons() {
//   btnMediumLevel.disabled = !isUnlocked("medium");
//   btnHardLevel.disabled = !isUnlocked("hard");
// }
// updateLevelButtons();

// function isUnlocked(level) {
//   if (level === "easy") return true;
//   if (level === "medium") {
//     return records.easy >= levels.medium.unlockScore;
//   }
//   if (level === "hard") {
//     return records.medium >= levels.hard.unlockScore;
//   }
// }

// // easyLevel

// btnEasyLevel.addEventListener("click", () => {
//   levelModal.style.display = "none";
//   currentLevel = "easy";
//   show = false;
// });

// // mediumLevel
// btnMediumLevel.addEventListener("click", () => {
//   if (!isUnlocked("medium")) return;
//   levelModal.style.display = "none";
//   currentLevel = "medium";
//   document.body.className = "level-" + currentLevel;
//   show = false;
// });

// // hardLevel

// btnHardLevel.addEventListener("click", () => {
//   if (!isUnlocked("hard")) return;
//   levelModal.style.display = "none";
//   currentLevel = "hard";
//   document.body.className = "level-" + currentLevel;
//   show = false;
// });

// // theme LIGHT/DARK
// const btnTheme = document.querySelector("#btnTheme");
// const themeModal = document.querySelector(".themeModal");
// btnTheme.addEventListener("click", () => {
//   if (!show) {
//     themeModal.style.display = "flex";
//     show = true;
//   } else {
//     themeModal.style.display = "none";
//     show = false;
//   }
// });

// const btnThemeToggle = document.querySelector("#btnThemeToggle");
// document.body.classList.toggle(
//   "dark",
//   localStorage.getItem("theme") === "dark",
// );
// btnThemeToggle.innerHTML = localStorage.getItem("theme");
// btnThemeToggle.addEventListener("click", () => {
//   const isDark = document.body.classList.toggle("dark");
//   localStorage.setItem("theme", isDark ? "dark" : "light");
//   btnThemeToggle.innerHTML = localStorage.getItem("theme");
// });

// // sound
// const btnSound = document.querySelector("#btnSound");
// const btnVolumeIcon = document.querySelector("#btnVolumeIcon");
// btnSound.addEventListener("click", () => {
//   if (!show) {
//     btnVolumeIcon.style.display = "flex";
//     show = true;
//   } else {
//     btnVolumeIcon.style.display = "none";
//     show = false;
//   }
// });

// const btnVolume = document.querySelector("#btnVolume");
// btnVolume.addEventListener("click", () => {
//   soundOn=!soundOn;
//   localStorage.setItem('soundOn',soundOn)
// });

// btnVolumeIcon.addEventListener("click", () => {
//   soundOn=!soundOn;
//   localStorage.setItem('soundOn',soundOn)
// });


// // mobileControl
// const arrowUp = document.querySelector("#up");
// arrowUp.addEventListener("pointerdown", () => {
//   if (pos.y !== 1) {
//     nextPos = { x: 0, y: -1 };
//   }
// });
// const arrowDown = document.querySelector("#down");
// arrowDown.addEventListener("pointerdown", () => {
//   if (pos.y !== -1) {
//     nextPos = { x: 0, y: 1 };
//   }
// });
// const arrowLeft = document.querySelector("#left");
// arrowLeft.addEventListener("pointerdown", () => {
//   if (pos.x !== 1) {
//     nextPos = { x: -1, y: 0 };
//   }
// });
// const arrowRight = document.querySelector("#right");
// arrowRight.addEventListener("pointerdown", () => {
//   if (pos.x !== -1) {
//     nextPos = { x: 1, y: 0 };
//   }
// });
