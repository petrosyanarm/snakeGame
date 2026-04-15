const table = document.createElement("table");
table.classList.add("table");

export function snakeBoard(count,cells) {
  for (let i = 0; i < count; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < count; j++) {
      const td = document.createElement("td");
      cells.push(td);
      if ((i + j) % 2 === 0) {
        td.classList.add("td");
      }
      tr.append(td);
    }
    table.append(tr);
  }
  return table
}
const board = document.querySelector(".board");
board.append(table);