/*
Problem: Return Neighbor Values
*/
function getNeighbors(grid, row, col) {
  const result = [];
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  for (let [dr, dc] of directions) {
    let r = row + dr;
    let c = col + dc;
    if (r >= 0 && r < grid.length && c >= 0 && c < grid[0].length) {
      result.push(grid[r][c]);
    }
  }
  return result;
}