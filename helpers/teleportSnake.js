export function teleportSnake(head,count) {
  if (head.x < 0) {
    head.x = count - 1;
  }
  if (head.x >= count) {
    head.x = 0;
  }
  if (head.y < 0) {
    head.y = count - 1;
  }
  if (head.y >= count) {
    head.y = 0;
  }
}
