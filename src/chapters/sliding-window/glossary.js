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
  { term: "Window", definition: "A subarray or substring of a specific size that is being considered in the sliding window technique.", week: "8"},
  { term: "Window Size", definition: "The number of elements in the current window.", week: "8"},
  { term: "Fixed-Size Window", definition: "A sliding window approach where the window size remains constant throughout the algorithm.", week: "8"},
  { term: "Variable-Size Window", definition: "A sliding window approach where the window size can grow or shrink based on certain conditions.", week: "8"},
  { term: "Window State", definition: "The information or aggregated data maintained about the current window.", week: "8"},
  { term: "Window Expansion", definition: "The process of adding elements to the window (usually at the right end).", week: "8"},
  { term: "Window Contraction", definition: "The process of removing elements from the window (usually from the left end).", week: "8"},
  { term: "Window Sliding", definition: "The process of moving the window by removing an element from one end and adding an element at the other end.", week: "8"},
  { term: "Running Sum", definition: "A cumulative sum of elements maintained as the window slides.", week: "8"},
  { term: "Frequency Counter", definition: "A data structure (usually a map or array) that keeps track of the frequency of elements within the current window.", week: "8"},
  { term: "Maximum Subarray", definition: "The subarray with the largest sum or value according to some criteria.", week: "8"},
  { term: "Minimum Subarray", definition: "The subarray with the smallest sum or value according to some criteria.", week: "8"},
  { term: "Longest Substring", definition: "The substring with the maximum length that satisfies certain conditions.", week: "8"},
  { term: "Shortest Substring", definition: "The substring with the minimum length that satisfies certain conditions.", week: "8"},
  { term: "Optimization", definition: "The process of improving an algorithm's efficiency, often by reducing nested loops to a single pass using techniques like sliding window.", week: "8"},
];

export const glossaryChapter = {
  id: 'sliding-window-glossary',
  title: 'Glossary: Sliding Window',
  sectionId: 'sliding-window',
  previousChapterId: 'sliding-window-supplemental-materials',
  content: `## Glossary: Sliding Window

This glossary contains important terms and concepts related to the sliding window technique. Understanding these terms will help you communicate effectively about algorithms and data structures during interviews and technical discussions.

${formatGlossary(data)}
`,
  exercise: null
};