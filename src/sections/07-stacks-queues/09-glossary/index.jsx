import { formatGlossary } from "@nss-workshops/nss-core";

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
  { term: "Head", definition: "The first node in a linked list.", week: "4"},
  { term: "Tail", definition: "The last node in a linked list.", week: "4"},
  { term: "Stack", definition: "A linear data structure that follows the Last In, First Out (LIFO) principle.", week: "5"},
  { term: "Queue", definition: "A linear data structure that follows the First In, First Out (FIFO) principle.", week: "5"},
  { term: "LIFO", definition: "Last In, First Out - the principle that the last element added is the first one to be removed (used in stacks).", week: "5"},
  { term: "FIFO", definition: "First In, First Out - the principle that the first element added is the first one to be removed (used in queues).", week: "5"},
  { term: "Push", definition: "An operation that adds an element to the top of a stack.", week: "5"},
  { term: "Pop", definition: "An operation that removes the top element from a stack.", week: "5"},
  { term: "Peek/Top", definition: "An operation that returns the top element of a stack without removing it.", week: "5"},
  { term: "Enqueue", definition: "An operation that adds an element to the back of a queue.", week: "5"},
  { term: "Dequeue", definition: "An operation that removes an element from the front of a queue.", week: "5"},
  { term: "Front", definition: "The first element in a queue (the one that will be dequeued next).", week: "5"},
  { term: "Rear/Back", definition: "The last element in a queue (the most recently enqueued).", week: "5"},
  { term: "Circular Queue", definition: "A queue implementation where the front and rear are connected to form a circle, allowing for efficient use of space.", week: "5"},
  { term: "Priority Queue", definition: "A queue where elements have associated priorities and are dequeued based on their priority rather than their arrival order.", week: "5"},
  { term: "Call Stack", definition: "A stack used by programming languages to keep track of function calls and their execution contexts.", week: "5"},
];

export default {
  id: 'stacks-glossary',
  title: 'Glossary: Stacks and Queues',
  previousChapterId: 'stacks-supplemental',
  nextChapterId: "stacks-checkpoint",
  content: `## Glossary: Stacks and Queues

This glossary contains important terms and concepts related to stacks and queues. Understanding these terms will help you communicate effectively about algorithms and data structures during interviews and technical discussions.

${formatGlossary(data)}
`,
  exercise: null
};
