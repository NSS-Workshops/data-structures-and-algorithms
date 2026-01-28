// Reference Solution
function collectWeatherMonitors(grid, startRow, startCol, moves) {
  if (!Array.isArray(grid) || grid.length === 0 || !Array.isArray(grid[0])) return [];

  const rows = grid.length;
  const cols = grid[0].length;
  const stack = [];
  const collected = new Set(); // Track collected positions to avoid duplicates
  let row = startRow;
  let col = startCol;

  // Check starting position for weather monitor
  if (row >= 0 && row < rows && col >= 0 && col < cols && grid[row][col] > 0) {
    stack.push(grid[row][col]);
    collected.add(row + ',' + col); // Mark position as collected
  }

  // Process each search move
  for (const move of moves) {
    // Update position based on move direction
    switch (move) {
      case 'U':
        row--;
        break;
      case 'D':
        row++;
        break;
      case 'L':
        col--;
        break;
      case 'R':
        col++;
        break;
    }

    // Check bounds and collect monitor if present and not already collected
    if (row >= 0 && row < rows && col >= 0 && col < cols) {
      const posKey = row + ',' + col;
      if (grid[row][col] > 0 && !collected.has(posKey)) {
        stack.push(grid[row][col]); // Push monitor serial number onto stack
        collected.add(posKey); // Mark position as collected
      }
    }
    // If out of bounds, we just continue (ignore invalid moves)
  }

  return stack; // Returns monitor serial numbers in the order found
}