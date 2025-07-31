function countIslands(grid) {
  // Create a copy of the grid to avoid modifying the original
  const gridCopy = grid.map(row => [...row]);
  const rows = gridCopy.length;
  const cols = gridCopy[0].length;
  let count = 0;
  
  function explore(r, c) {
    if (
      r < 0 || r >= rows ||
      c < 0 || c >= cols ||
      gridCopy[r][c] === 0
    ) {
      return;
    }
    
    // Mark as visited by changing to water
    gridCopy[r][c] = 0;
    
    // Recursively call explore with all 4 neighbors of the specified element
    explore(r-1, c);  // Up
    explore(r+1, c);  // Down
    explore(r, c-1);  // Left
    explore(r, c+1);  // Right
  }
  
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (gridCopy[r][c] === 1) {
        count++;  // Found a new island
        explore(r, c);  // Mark all connected land
      }
    }
  }
  
  return count;
}


const map = [
[0,1,0,0,1,1],
[1,1,0,0,0,0],
[0,0,0,1,1,0],
[1,0,0,0,1,1],
[1,0,0,0,0,1],
]

const islands = countIslands(map);
console.log("Islands: "+islands);