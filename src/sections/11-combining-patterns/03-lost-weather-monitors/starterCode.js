function collectWeatherMonitors(grid, startRow, startCol, moves) {
  // 2D array + stack: navigate grid and collect weather monitors
  if (!Array.isArray(grid) || grid.length === 0 || !Array.isArray(grid[0])) return [];

  const rows = grid.length;
  const cols = grid[0].length;
  const stack = [];
  let row = startRow;
  let col = startCol;

  // TODO: implement 2D navigation with stack operations
  // Tip: check starting position first, then follow moves (U/D/L/R)
  // Push monitor serial numbers onto stack as you find them
  return stack;
}