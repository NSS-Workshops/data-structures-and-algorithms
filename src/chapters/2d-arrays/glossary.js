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
  { term: "Sliding Window", definition: "A computational technique that uses a window that slides through an array to track a subset of elements.", week: "2"},
  { term: "2D Array", definition: "An array of arrays, creating a matrix-like structure with rows and columns.", week: "3"},
  { term: "Matrix", definition: "A rectangular array of numbers, symbols, or expressions, arranged in rows and columns.", week: "3"},
  { term: "Row", definition: "A horizontal line of elements in a 2D array.", week: "3"},
  { term: "Column", definition: "A vertical line of elements in a 2D array.", week: "3"},
  { term: "Grid", definition: "A network of lines that cross each other to form a series of squares or rectangles.", week: "3"},
  { term: "Neighbors", definition: "Adjacent elements in a 2D array (can be in 4 or 8 directions).", week: "3"},
  { term: "Cardinal Directions", definition: "The four main directions (north, east, south, west) used to find adjacent cells in a grid.", week: "3"},
  { term: "Diagonal Directions", definition: "The four diagonal directions (northeast, southeast, southwest, northwest) sometimes used to find adjacent cells in a grid.", week: "3"},
  { term: "Bounds Checking", definition: "Verifying that indices are within the valid range of a 2D array to prevent out-of-bounds errors.", week: "3"},
  { term: "Traversal", definition: "The process of visiting each element in a 2D array, often in a specific pattern.", week: "3"},
]; 

export const glossaryChapter = {
  id: '2d-arrays-glossary',
  title: 'Glossary: 2D Arrays',
  sectionId: '2d-arrays',
  previousChapterId: "2d-arrays-supplemental-materials",
  content: `## Glossary: 2D Arrays

This glossary contains important terms and concepts related to 2D arrays. Understanding these terms will help you communicate effectively about algorithms and data structures during interviews and technical discussions.

${formatGlossary(data)}
`,
  exercise: null
};