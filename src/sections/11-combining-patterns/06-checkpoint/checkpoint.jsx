import { QUESTION_TYPES } from "@nss-workshops/nss-core";

export default [
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: "**Algorithmic Thinking:** What is the time complexity of binary search on a sorted array of n elements?",
    correctAnswer: "O(log n)",
    explanation: "Binary search repeatedly divides the search space in half, leading to O(log n) time complexity. This logarithmic performance makes it extremely efficient for searching large sorted datasets."
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: "**Array Patterns:** Which algorithmic pattern is most efficient for finding pairs in a sorted array that sum to a target value?",
    answers: [
      "Two pointers technique with O(n) time complexity",
      "Nested loops with O(n²) time complexity",
      "Binary search for each element with O(n log n) time complexity",
      "Hash map lookup with O(n) time and O(n) space complexity"
    ],
    correctAnswer: 0,
    explanation: "The two pointers technique is optimal for sorted arrays: place one pointer at the start and one at the end, then move them based on whether the current sum is too high or too low. This achieves O(n) time with O(1) space."
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: "**Sliding Window:** Complete this sliding window implementation to find the maximum sum subarray of size k:\n\n```javascript\nfunction maxSumSubarray(arr, k) {\n  let maxSum = 0;\n  let windowSum = 0;\n  let left = 0;\n  \n  for (let right = 0; right < arr.length; right++) {\n    windowSum += arr[right];\n    \n    if (right >= k - 1) {\n      maxSum = Math.max(maxSum, _____);\n      windowSum -= arr[left];\n      left++;\n    }\n  }\n  return maxSum;\n}\n```\n\nWhat should be compared with maxSum?",
    answers: [
      "windowSum",
      "arr[right]",
      "left",
      "right"
    ],
    correctAnswer: 0,
    explanation: "Sliding window maintains a subset of elements (the \"window\") and efficiently updates the window state as it moves through the array. We compare maxSum with windowSum to track the maximum sum found so far. This achieves O(n) time complexity by avoiding recalculation."
  },
  {
    type: QUESTION_TYPES.CHECKBOX,
    questionJsx: "**2D Arrays:** What are the key considerations when working with 2D arrays/matrices?",
    answers: [
      "🔍 Check bounds before accessing elements to avoid index errors",
      "🔄 Use nested loops for systematic traversal of all elements",
      "📐 Consider different traversal patterns (row-wise, column-wise, diagonal)",
      "🔁 Always use recursion for matrix operations",
      "📊 Store matrices as 1D arrays internally for better performance"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Key considerations for 2D arrays include bounds checking (preventing index out of bounds errors), using appropriate nested loop patterns for traversal, and understanding different traversal patterns for different algorithms. Recursion and 1D storage are sometimes useful but not always necessary."
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: "**Linked Lists:** What is the main advantage of linked lists over arrays?",
    answers: [
      "Dynamic size - can grow and shrink during runtime",
      "Random access - can access any element in O(1) time",
      "Cache-friendly - elements are stored contiguously in memory",
      "Less memory usage - no wasted space for unused elements"
    ],
    correctAnswer: 0,
    explanation: "The main advantage of linked lists is dynamic size - they can grow and shrink during runtime without declaring a fixed size upfront. Arrays have random access and are more cache-friendly, while linked lists actually use more memory per element due to storing pointers."
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: "**Stacks & Queues:** Complete the stack and queue implementations:\n\n```javascript\nclass Stack {\n  constructor() { this.items = []; }\n  \n  _____() { return this.items.pop(); }      // Remove from top\n  _____(item) { this.items.push(item); }    // Add to top\n}\n\nclass Queue {\n  constructor() { this.items = []; }\n  \n  _____() { return this.items.shift(); }    // Remove from front\n  _____(item) { this.items.push(item); }    // Add to back\n}\n```\n\nFill in the method names (comma-separated):",
    correctAnswer: "pop,push,dequeue,enqueue",
    explanation: "Stacks follow LIFO (Last In, First Out) using pop() and push() methods. Queues follow FIFO (First In, First Out) using dequeue() and enqueue() methods. The correct answers are: pop, push, dequeue, enqueue."
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: "**Maps & Sets:** What underlying data structure typically implements Maps and Sets for O(1) average-case operations?",
    answers: [
      "Hash table with collision handling",
      "Binary search tree with balanced structure",
      "Linked list with sequential search",
      "Sorted array with binary search"
    ],
    correctAnswer: 0,
    explanation: "Hash tables provide O(1) average-case performance for Maps and Sets by using hash functions to convert keys directly to array indices. Collision handling (like separate chaining) manages cases where different keys hash to the same index."
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: "**Sorting:** What is the time complexity of efficient comparison-based sorting algorithms like merge sort and heap sort?",
    correctAnswer: "O(n log n)",
    explanation: "Efficient comparison-based sorting algorithms like merge sort, heap sort, and quicksort (average case) have O(n log n) time complexity. This is optimal for comparison-based sorting - it's mathematically proven that you cannot do better than O(n log n) when sorting by comparing elements."
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: "**Pattern Recognition:** Choose the best data structure for each scenario:\n\n```javascript\n// Fast key-value lookups\nconst userCache = new _____([['user1', {name: 'Alice'}], ['user2', {name: 'Bob'}]]);\n\n// Unique items only\nconst uniqueIds = new _____([1, 2, 2, 3, 3, 4]);\n\n// Indexed access needed\nconst temperatures = new _____([20, 22, 19, 25]);\n\n// Frequent insertions/deletions from the front and back\nclass _____ {\n  constructor(data) {\n    this.data = data;\n    this.next = null;\n  }\n}\n```\n\nFill in the data structures (comma-separated):",
    correctAnswer: "Map,Set,Array,LinkedList",
    explanation: "Choose data structures based on operations: Map for fast lookups, Set for uniqueness, Array for indexed access, LinkedList for dynamic insertion/deletion. The correct answers are: Map, Set, Array, LinkedList."
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: "**Performance Trade-offs:** Complete this example of time vs space trade-off:\n\n```javascript\nfunction findDuplicates(arr) {\n  const duplicates = [];\n  for (let i = 0; i < arr.length; i++) {\n    for (let j = i + 1; j < arr.length; j++) {\n      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {\n        duplicates.push(arr[i]);\n      }\n    }\n  }\n  return duplicates; // Time: O(n²), Space: _____\n}\n```\n\nWhat is the space complexity?",
    answers: [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    correctAnswer: 1,
    explanation: "This uses O(n) extra space but O(n²) time with nested loops."
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: "```javascript\nclass CoolingIntelligencePlatform {\n  constructor() {\n    this.stationData = new _____();        // Fast station lookups\n    this.temperatureWindow = [];           // For sliding window analysis\n    this.alertCache = new Map();           // Cache recent alerts\n  }\n  \n  processTemperatureStream(readings) {\n    // 1. Fast lookup of station metadata\n    const station = this.stationData.get(readings.stationId);\n    \n    // 2. Sliding window for trend analysis\n    this.updateWindow(readings.temperatures);\n    \n    // 3. Sort for percentile calculations\n    const sorted = [...readings.temperatures].sort();\n    \n    // 4. Cache results to avoid recalculation\n    this.alertCache.set(readings.stationId, this.analyzePattern(sorted));\n  }\n}\n```\n\nWhat data structure should be used for fast station lookups?",
    answers: [
      "Map",
      "Array",
      "Set",
      "LinkedList"
    ],
    correctAnswer: 0,
    explanation: "Complex systems combine multiple specialized algorithms: Map for fast O(1) lookups, sliding window for real-time analysis, sorting for data organization, and caching for performance. Each algorithm is optimized for its specific role."
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: "**Real-world Impact:** Why is the optimal time complexity for comparison-based sorting O(n log n)?",
    answers: [
      "Divide-and-conquer algorithms split the problem into smaller subproblems, leading to O(n log n)",
      "Sorting requires nested loops, which always results in O(n log n) complexity",
      "Memory limitations prevent faster sorting algorithms from being implemented",
      "The number of comparisons needed is limited by the hardware architecture"
    ],
    correctAnswer: 0,
    explanation: "Efficient comparison-based sorting algorithms like merge sort and heap sort use divide-and-conquer strategies. They recursively split the problem into smaller subproblems (log n levels) and process each level in O(n) time, resulting in O(n log n) total complexity. This is mathematically proven to be optimal for comparison-based sorting."
  }
];