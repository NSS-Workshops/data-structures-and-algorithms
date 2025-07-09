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
  { term: "Linked List", definition: "A linear data structure where each element (node) contains data and a reference to the next node in the sequence.", week: "4"},
  { term: "Node", definition: "The basic building block of a linked list, containing data and a reference to the next node.", week: "4"},
  { term: "Stack", definition: "A linear data structure that follows the Last In, First Out (LIFO) principle.", week: "5"},
  { term: "Queue", definition: "A linear data structure that follows the First In, First Out (FIFO) principle.", week: "5"},
  { term: "Map", definition: "A collection of key-value pairs where each key is unique and maps to exactly one value.", week: "6"},
  { term: "Set", definition: "A collection of unique values with no duplicates allowed.", week: "6"},
  { term: "Hash Table", definition: "The underlying data structure for Map and Set implementations that uses a hash function to map keys to values.", week: "6"},
  { term: "Hash Function", definition: "A function that converts input data of arbitrary size to a fixed-size value, used to determine where to store elements in a hash table.", week: "6"},
  { term: "Hash Collision", definition: "When two different inputs to a hash function produce the same output, requiring a collision resolution strategy.", week: "6"},
  { term: "Key", definition: "A unique identifier used to access a value in a Map.", week: "6"},
  { term: "Value", definition: "The data associated with a key in a Map.", week: "6"},
  { term: "Entry", definition: "A key-value pair in a Map.", week: "6"},
  { term: "Lookup", definition: "The operation of finding a value associated with a key in a Map.", week: "6"},
  { term: "Insertion", definition: "The operation of adding a new key-value pair to a Map or a new value to a Set.", week: "6"},
  { term: "Deletion", definition: "The operation of removing a key-value pair from a Map or a value from a Set.", week: "6"},
  { term: "Iteration", definition: "The process of visiting each element in a Map or Set.", week: "6"},
  { term: "Membership Test", definition: "Checking if a value exists in a Set or if a key exists in a Map.", week: "6"},
  { term: "Union", definition: "The operation of combining two Sets to create a new Set containing all unique elements from both.", week: "6"},
  { term: "Intersection", definition: "The operation of creating a new Set containing only elements that exist in both original Sets.", week: "6"},
  { term: "Difference", definition: "The operation of creating a new Set containing elements that exist in one Set but not in another.", week: "6"},
  { term: "Symmetric Difference", definition: "The operation of creating a new Set containing elements that exist in either of two Sets but not in both.", week: "6"},
];

export const glossaryChapter = {
  id: 'maps-and-sets-glossary',
  title: 'Glossary: Maps and Sets',
  sectionId: 'maps-and-sets',
  previousChapterId: 'maps-and-sets-supplemental-materials',
  content: `## Glossary: Maps and Sets

This glossary contains important terms and concepts related to maps and sets. Understanding these terms will help you communicate effectively about algorithms and data structures during interviews and technical discussions.

${formatGlossary(data)}
`,
  exercise: null
};