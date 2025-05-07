/**
 * Defines the available sections in the learning platform.
 * Each section represents a major topic area that contains related chapters.
 */

export const sections = [
  // Section 1: Algorithmic Thinking
  {
    id: "algorithmic-thinking",
    title: "Algorithmic Thinking",
    description: "Understanding algorithms, data structures, and problem-solving approaches",
    required: true
  },
  // Section 2: Arrays and Two Pointers
  {
    id: "arrays-and-two-pointers",
    title: "Arrays and Two Pointers",
    description: "Learn about array operations, methods, and the two-pointer technique",
    required: true
  },
  // Section 3: 2D Arrays
  {
    id: "2d-arrays",
    title: "2D Arrays",
    description: "Working with multi-dimensional arrays and grid-based problems",
    required: true
  },
  // Section 4: Linked Lists
  {
    id: "linked-lists",
    title: "Linked Lists",
    description: "Understanding node-based data structures and traversal techniques",
    required: true
  },
  // Section 5: Stacks and Queues
  {
    id: "stacks-queues",
    title: "Stacks and Queues",
    description: "Implementing and using LIFO and FIFO data structures",
    required: true
  },
  // Section 6: Maps and Sets
  {
    id: "maps-and-sets",
    title: "Maps and Sets",
    description: "Using key-value pairs and unique collections for efficient lookups",
    required: true
  },
  // Section 7: Sliding Window
  {
    id: "sliding-window",
    title: "Sliding Window",
    description: "Optimizing operations on subarrays and substrings",
    required: true
  },
  // Section 8: Sorting and Binary Search
  {
    id: "sorting-and-binary-search",
    title: "Sorting and Binary Search",
    description: "Efficient searching and sorting algorithms and techniques",
    required: true
  },
  // Section 9: Combining Patterns
  {
    id: "combining-patterns",
    title: "Combining Patterns",
    description: "Recognizing and applying multiple algorithmic patterns to solve complex problems",
    required: true
  },
  // Section 10: Interview Readiness
  {
    id: "interview-readiness",
    title: "Interview Readiness a Recap",
    description: "Preparing for technical interviews with mock interviews, problem-solving under constraints, and effective communication of solutions and tradeoffs",
    required: true
  }
];

/**
 * Get a section by its ID
 * @param {string} id - The section ID to find
 * @returns {Object|undefined} The section object if found, undefined otherwise
 */
export const getSectionById = (id) => {
  return sections.find((section) => section.id === id);
};

/**
 * Get all section IDs
 * @returns {string[]} Array of section IDs
 */
export const getSectionIds = () => {
  return sections.map((section) => section.id);
};

/**
 * Validate if a section ID exists
 * @param {string} id - The section ID to validate
 * @returns {boolean} True if the section exists, false otherwise
 */
export const isValidSectionId = (id) => {
  return sections.some((section) => section.id === id);
};
