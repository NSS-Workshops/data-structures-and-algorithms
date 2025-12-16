// Test cases for Maximum Sum Subarray of Size K

export const tests = [
  {
    name: "Basic sliding window cases",
    input: { arr: [2, 1, 5, 1, 3, 2], k: 3 },
    expected: 9,
    description: "Should find maximum sum subarray [5, 1, 3] = 9"
  },
  {
    name: "Two element window",
    input: { arr: [2, 3, 4, 1, 5], k: 2 },
    expected: 7,
    description: "Should find maximum sum subarray [3, 4] = 7"
  },
  {
    name: "Large window",
    input: { arr: [1, 4, 2, 9, 5], k: 4 },
    expected: 20,
    description: "Should find maximum sum subarray [4, 2, 9, 5] = 20"
  },
  {
    name: "Handle negative numbers",
    input: { arr: [-1, -2, -3, -4], k: 2 },
    expected: -3,
    description: "Should handle negative numbers correctly"
  },
  {
    name: "Single element window",
    input: { arr: [5], k: 1 },
    expected: 5,
    description: "Should handle single element array"
  },
  {
    name: "Window equals array length",
    input: { arr: [1, 2, 3], k: 3 },
    expected: 6,
    description: "Should handle when k equals array length"
  },
  {
    name: "Edge case: empty array",
    input: { arr: [], k: 1 },
    expected: 0,
    description: "Should return 0 for empty array"
  },
  {
    name: "Edge case: k > array length",
    input: { arr: [1, 2], k: 3 },
    expected: 0,
    description: "Should return 0 when k > array length"
  }
];