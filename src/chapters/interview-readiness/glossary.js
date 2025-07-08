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
  { term: "Two Pointers", definition: "A technique that uses two references (pointers) to traverse an array or list, often moving at different speeds or directions.", week: "2"},
  { term: "Sliding Window", definition: "A computational technique that uses a window that slides through an array or string to track a subset of elements.", week: "8"},
  { term: "Linked List", definition: "A linear data structure where each element (node) contains data and a reference to the next node in the sequence.", week: "4"},
  { term: "Stack", definition: "A linear data structure that follows the Last In, First Out (LIFO) principle.", week: "5"},
  { term: "Queue", definition: "A linear data structure that follows the First In, First Out (FIFO) principle.", week: "5"},
  { term: "Map", definition: "A collection of key-value pairs where each key is unique and maps to exactly one value.", week: "6"},
  { term: "Set", definition: "A collection of unique values with no duplicates allowed.", week: "6"},
  { term: "Binary Search", definition: "A search algorithm that finds the position of a target value within a sorted array by repeatedly dividing the search interval in half.", week: "7"},
  { term: "Sorting", definition: "The process of arranging elements in a specific order (usually ascending or descending).", week: "7"},
  { term: "Algorithmic Pattern", definition: "A general reusable solution to a commonly occurring problem in algorithm design.", week: "9"},
  { term: "Edge Case", definition: "A problem or situation that occurs only at an extreme (maximum or minimum) operating parameter.", week: "9"},
  { term: "Corner Case", definition: "A problem or situation that occurs outside normal operating parameters, specifically when multiple environmental variables or conditions are simultaneously at extreme levels.", week: "9"},
  { term: "Clarifying Questions", definition: "Questions asked to better understand the problem requirements, constraints, and expected outputs.", week: "10"},
  { term: "Problem Decomposition", definition: "Breaking down a complex problem into smaller, more manageable subproblems.", week: "10"},
  { term: "Pseudocode", definition: "An informal high-level description of the operating principle of an algorithm, intended for human reading rather than machine reading.", week: "10"},
  { term: "Brute Force", definition: "A straightforward approach to solving a problem, typically by trying all possibilities until a solution is found.", week: "10"},
  { term: "Optimization", definition: "The process of improving an algorithm's efficiency or effectiveness.", week: "10"},
  { term: "Trade-off", definition: "A balance between competing factors in algorithm design, such as time complexity vs. space complexity.", week: "10"},
  { term: "Test Case", definition: "A specific set of inputs and expected outputs used to verify the correctness of an algorithm.", week: "10"},
  { term: "Whiteboarding", definition: "The process of solving a problem by writing code or diagrams on a whiteboard during an interview.", week: "10"},
  { term: "Code Review", definition: "The systematic examination of code by peers to identify bugs, improve code quality, and ensure adherence to standards.", week: "10"},
  { term: "Clean Code", definition: "Code that is easy to understand, maintain, and extend.", week: "10"},
  { term: "Refactoring", definition: "The process of restructuring existing code without changing its external behavior.", week: "10"},
  { term: "Debugging", definition: "The process of finding and resolving defects in software.", week: "10"},
  { term: "Technical Communication", definition: "The ability to clearly explain technical concepts, solutions, and trade-offs.", week: "10"},
  { term: "Behavioral Interview", definition: "An interview focused on past experiences and how a candidate handled specific situations.", week: "10"},
  { term: "System Design", definition: "The process of defining the architecture, components, and interfaces for a system to satisfy specified requirements.", week: "10"},
  { term: "Mock Interview", definition: "A practice interview that simulates a real interview environment.", week: "10"},
  { term: "Feedback Loop", definition: "The process of receiving and incorporating feedback to improve performance.", week: "10"},
];

export const glossaryChapter = {
  id: "interview-readiness-glossary",
  title: "Glossary: Interview Readiness",
  sectionId: "interview-readiness",
  description: "Key terms and concepts for technical interviews",
  previousChapterId: "interview-readiness-supplemental-materials",
  nextChapterId: null,
  content: `## Glossary: Interview Readiness

This glossary contains important terms and concepts related to technical interviews and problem-solving. Understanding these terms will help you communicate effectively during coding interviews.

${formatGlossary(data)}
`,
};