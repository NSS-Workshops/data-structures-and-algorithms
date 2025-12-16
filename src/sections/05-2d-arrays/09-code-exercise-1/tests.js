export const tests = [
  {
    name: "Increment Neighbors basic 3x3 center",
    test: (incrementNeighbors) => {
      const grid = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ];
      incrementNeighbors(grid, 1, 1);
      const expected = [
        [1, 2, 1],
        [2, 1, 2],
        [1, 2, 1],
      ];
      return JSON.stringify(grid) === JSON.stringify(expected);
    },
    message: "Should increment 4 neighbors of the center cell"
  },
  {
    name: "Increment Neighbors edge cell",
    test: (incrementNeighbors) => {
      const grid = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
      ];
      incrementNeighbors(grid, 0, 1);
      const expected = [
        [2, 1, 2],
        [1, 2, 1],
        [1, 1, 1]
      ];
      return JSON.stringify(grid) === JSON.stringify(expected);
    },
    message: "Should handle edge case for top edge cell"
  }
];