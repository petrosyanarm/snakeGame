export function drawSnake(cells, snake, count) {
  cells.forEach(cell => {
    cell.classList.remove("snake", "snakeHead");
    // cell.style.opacity = ''
  });

  snake.forEach((item, index) => {
    const ind = item.y * count + item.x;

    cells[ind].classList.add("snake");
    // cells[ind].style.opacity = 1 - index * 0.03;

    if (index === 0) {
      cells[ind].classList.add("snakeHead");
    }
  });

}


// export function drawSnake(cells, snake, count) {
//     cells.forEach((cell) => {
//         cell.textContent = '';
//       });
//     return snake.forEach((item, index) => {
//         const ind = item.y * count + item.x;
//         const snake = document.createElement('div');
//         snake.classList.add("snake");

//         if (index === 0) {
//             snake.classList.add("snakeHead");
//             // const headEyes = document.createElement('div')
//             // snake.appendChild(headEyes);
//         }
//         // cells[ind].style.opacity = 1 - index * 0.05;
//         // cells[ind].classList.add('snake')
//         cells[ind].appendChild(snake);
//     });
//   }