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
  { term: "Linked List", definition: "A linear data structure where each element (node) contains data and a reference to the next node in the sequence.", week: "4"},
  { term: "Node", definition: "The basic building block of a linked list, containing data and a reference to the next node.", week: "4"},
  { term: "Head", definition: "The first node in a linked list.", week: "4"},
  { term: "Tail", definition: "The last node in a linked list.", week: "4"},
  { term: "Pointer", definition: "A reference to another node or object in memory.", week: "4"},
  { term: "Singly Linked List", definition: "A linked list where each node points only to the next node in the sequence.", week: "4"},
  { term: "Doubly Linked List", definition: "A linked list where each node has two pointers, one to the next node and one to the previous node.", week: "4"},
  { term: "Circular Linked List", definition: "A linked list where the last node points back to the first node, creating a circle.", week: "4"},
  { term: "Traversal", definition: "The process of visiting each node in a linked list.", week: "4"},
  { term: "Insertion", definition: "Adding a new node to a linked list.", week: "4"},
  { term: "Deletion", definition: "Removing a node from a linked list.", week: "4"},
  { term: "Null", definition: "A special value that indicates the absence of a node (often used to mark the end of a linked list).", week: "4"},
];

export const glossaryChapter = {
  id: 'linked-lists-glossary',
  title: 'Glossary: Linked Lists',
  sectionId: 'linked-lists',
  previousChapterId: 'linked-lists-supplemental-materials',
  content: `## Glossary: Linked Lists

This glossary contains important terms and concepts related to linked lists. Understanding these terms will help you communicate effectively about algorithms and data structures during interviews and technical discussions.

${formatGlossary(data)}
`,
  exercise: null
};