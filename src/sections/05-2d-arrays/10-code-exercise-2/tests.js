export const tests = [
  {
    name: "Get Neighbors top-left corner",
    test: (getNeighbors) => {
      const grid = [
        [5, 2, 3],
        [4, 6, 7],
        [8, 9, 1]
      ];
      const result = getNeighbors(grid, 0, 0);
      const expected = [4, 2];
      return JSON.stringify(result) === JSON.stringify(expected);
    },
    message: "Should return only valid top-left corner neighbors"
  },
  {
    name: "Get Neighbors center cell",
    test: (getNeighbors) => {
      const grid = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];
      const result = getNeighbors(grid, 1, 1);
      const expected = [2, 8, 4, 6];
      return JSON.stringify(result) === JSON.stringify(expected);
    },
    message: "Should return neighbors of center cell"
  }
];