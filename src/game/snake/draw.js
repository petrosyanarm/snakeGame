export function drawSnake(cells, snake, count, direction) {
  cells.forEach((cell) => {
    cell.classList.remove(
      "snake",
      "snakeHead",
      "head-up",
      "head-down",
      "head-left",
      "head-right",
    );
  });

  snake.forEach((item, index) => {
    const ind = item.y * count + item.x;
    cells[ind].classList.add("snake");

    if (index === 0) {
      cells[ind].classList.add("snakeHead");

      if (direction.x === 1) cells[ind].classList.add("head-right");
      else if (direction.x === -1) cells[ind].classList.add("head-left");
      else if (direction.y === -1) cells[ind].classList.add("head-up");
      else if (direction.y === 1) cells[ind].classList.add("head-down");
    }
  });
}
