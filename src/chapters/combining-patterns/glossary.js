import { formatGlossary } from "../../utils/format_utils";

const data = [
  { term: "Algorithm", definition: "A step-by-step procedure or set of rules designed to perform a specific task or solve a particular problem.", week: "1"},
  { term: "Data Structure", definition: "A specialized format for organizing, processing, retrieving and storing data to suit a specific purpose.", week: "1"},
  { term: "Time Complexity", definition: "A measure of the amount of time an algorithm takes to complete as a function of the length of the input.", week: "1"},
  { term: "Space Complexity", definition: "A measure of the amount of memory an algorithm uses as a function of the length of the input.", week: "1"},
  { term: "Big O Notation", definition: "A mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. Used to classify algorithms according to their growth rates.", week: "1"},
  { term: "O(1)", definition: "Constant time complexity - the operation takes the same amount of time regardless of the input size.", week: "1"},
  { term: "O(log n)", definition: "Logarithmic time complexity - the operation's time increases logarithmically as the input size grows.", week: "1"},
  { term: "O(n)", definition: "Linear time complexity - the operation's time increases linearly with the input size.", week: "1"},
  { term: "O(n log n)", definition: "Linearithmic time complexity - common in efficient sorting algorithms like merge sort and heap sort.", week: "1"},
  { term: "O(n²)", definition: "Quadratic time complexity - often seen in algorithms with nested iterations over the data set.", week: "1"},
  { term: "Array", definition: "A data structure consisting of a collection of elements, each identified by an index or a key.", week: "2"},
  { term: "Index", definition: "A numerical value used to identify an element's position within an array (usually zero-based in JavaScript).", week: "2"},
  { term: "Element", definition: "A single item stored in an array.", week: "2"},
  { term: "Length", definition: "The number of elements in an array.", week: "2"},
  { term: "Two Pointers", definition: "A technique that uses two references (pointers) to traverse an array or list, often moving at different speeds or directions.", week: "2"},
  { term: "In-place Operation", definition: "An algorithm that transforms input using no auxiliary data structure, though a small amount of extra storage space is allowed for auxiliary variables.", week: "2"},
  { term: "Subarray", definition: "A contiguous sequence of elements within an array.", week: "2"},
  { term: "Substring", definition: "A contiguous sequence of characters within a string.", week: "8"},
  { term: "Sliding Window", definition: "A computational technique that uses a window that slides through an array or string to track a subset of elements.", week: "8"},
  { term: "2D Array", definition: "An array of arrays, creating a matrix-like structure with rows and columns.", week: "3"},
  { term: "Matrix", definition: "A rectangular array of numbers, symbols, or expressions, arranged in rows and columns.", week: "3"},
  { term: "Linked List", definition: "A linear data structure where each element (node) contains data and a reference to the next node in the sequence.", week: "4"},
  { term: "Stack", definition: "A linear data structure that follows the Last In, First Out (LIFO) principle.", week: "5"},
  { term: "Queue", definition: "A linear data structure that follows the First In, First Out (FIFO) principle.", week: "5"},
  { term: "Map", definition: "A collection of key-value pairs where each key is unique and maps to exactly one value.", week: "6"},
  { term: "Set", definition: "A collection of unique values with no duplicates allowed.", week: "6"},
  { term: "Binary Search", definition: "A search algorithm that finds the position of a target value within a sorted array by repeatedly dividing the search interval in half.", week: "7"},
  { term: "Sorting", definition: "The process of arranging elements in a specific order (usually ascending or descending).", week: "7"},
  { term: "Algorithmic Pattern", definition: "A general reusable solution to a commonly occurring problem in algorithm design.", week: "9"},
  { term: "Pattern Recognition", definition: "The process of identifying common algorithmic patterns that can be applied to solve a problem.", week: "9"},
  { term: "Hybrid Algorithm", definition: "An algorithm that combines multiple algorithmic patterns or techniques to solve a complex problem.", week: "9"},
  { term: "Trade-off", definition: "A balance between competing factors in algorithm design, such as time complexity vs. space complexity.", week: "9"},
  { term: "Optimization", definition: "The process of improving an algorithm's efficiency or effectiveness.", week: "9"},
  { term: "Greedy Algorithm", definition: "An algorithmic paradigm that makes locally optimal choices at each step with the hope of finding a global optimum.", week: "9"},
  { term: "Dynamic Programming", definition: "A method for solving complex problems by breaking them down into simpler subproblems and storing the results to avoid redundant calculations.", week: "9"},
  { term: "Divide and Conquer", definition: "A paradigm that solves a problem by recursively breaking it down into simpler subproblems, solving them independently, and combining their solutions.", week: "9"},
  { term: "Backtracking", definition: "An algorithmic technique that builds candidates to solutions incrementally and abandons a candidate as soon as it determines it cannot lead to a valid solution.", week: "9"},
  { term: "Graph Algorithm", definition: "An algorithm that operates on graph data structures, such as depth-first search, breadth-first search, or Dijkstra's algorithm.", week: "9"},
  { term: "Heuristic", definition: "A problem-solving approach that uses practical methods or various shortcuts to produce solutions that may not be optimal but are sufficient for immediate goals.", week: "9"},
  { term: "Amortized Analysis", definition: "A method of analyzing algorithms that considers the average performance of each operation in a sequence of operations.", week: "9"},
  { term: "Problem Decomposition", definition: "Breaking down a complex problem into smaller, more manageable subproblems.", week: "9"},
  { term: "Algorithm Design", definition: "The process of creating an efficient and effective algorithm to solve a specific problem.", week: "9"},
  { term: "Edge Case", definition: "A problem or situation that occurs only at an extreme (maximum or minimum) operating parameter.", week: "9"},
  { term: "Corner Case", definition: "A problem or situation that occurs outside normal operating parameters, specifically when multiple environmental variables or conditions are simultaneously at extreme levels.", week: "9"},
];

export const glossaryChapter = {
  id: 'combining-patterns-glossary',
  title: 'Glossary: Combining Patterns',
  sectionId: 'combining-patterns',
  previousChapterId: 'combining-patterns-supplemental-materials',
  content: `## Glossary: Combining Patterns

This glossary contains important terms and concepts related to combining algorithmic patterns. Understanding these terms will help you communicate effectively about algorithms and data structures during interviews and technical discussions.

${formatGlossary(data)}
`,
  exercise: null
};