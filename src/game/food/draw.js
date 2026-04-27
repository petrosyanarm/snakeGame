export function drawFood(cells, state, count) {
  if(state.lastFood){
    const lastInd = state.lastFood.y * count + state.lastFood.x;
    cells[lastInd].classList.remove("food");
  }
  const ind = state.food.y * count + state.food.x
  cells[ind].classList.add("food");
  state.lastFood = {...state.food}
}
