function incrementNeighbors(matrix, row, col) {
  const directions = [
    [-1, 0], // up
    [1, 0],  // down
    [0, -1], // left
    [0, 1]   // right
  ];

  for (const [dr, dc] of directions) {
    const r = row + dr;
    const c = col + dc;
    if (r >= 0 && r < matrix.length && c >= 0 && c < matrix[0].length) {
      matrix[r][c] += 1;
    }
  }
}