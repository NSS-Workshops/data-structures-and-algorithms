import { formatGlossary } from "../../utils/format_utils";


const data = [
{ term:"Algorithm", definition:"A step-by-step procedure or set of rules designed to perform a specific task or solve a particular problem. Think of it as a recipe for solving computational problems.", week:"1"},
{ term:"Data Structure", definition:"A specialized format for organizing, processing, retrieving and storing data efficiently. Different structures (like arrays, lists, trees) are optimized for different types of operations.", week:"1"},
{ term:"Time Complexity", definition:"A measure of the amount of time an algorithm takes to complete as a function of the length of the input.", week:"1"},
{ term:"Space Complexity", definition:"A measure of the amount of memory an algorithm uses as a function of the length of the input.", week:"1"},
{ term:"Big O Notation", definition:"A mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. Used to classify algorithms according to their growth rates.", week:"1"},
{ term:"O(1)", definition:"Constant time complexity - the operation takes the same amount of time regardless of the input size.", week:"1"},
{ term:"O(log n)", definition:"Logarithmic time complexity - the operation's time increases logarithmically as the input size grows.", week:"1"},
{ term:"O(n)", definition:"Linear time complexity - the operation's time increases linearly with the input size.", week:"1"},
{ term:"O(n log n)", definition:"Linearithmic time complexity - common in efficient sorting algorithms like merge sort and heap sort.", week:"1"},
{ term:"O(n²)", definition:"Quadratic time complexity - often seen in algorithms with nested iterations over the data set.", week:"1"},
{ term:"Primitive Operations", definition:"Basic operations that a computer performs during algorithm execution, such as assignment, arithmetic, comparison, and array access. These are the building blocks we count when analyzing time complexity.", week:"1"},
{ term:"Polynomial Complexity", definition:"A type of time or space complexity where the algorithm runs in O(n^c) time, where n is the input size and c is some constant. Examples include O(n²) and O(n³).", week:"1"},
{ term:"In-Place Algorithm", definition:"An algorithm that modifies the input data structure directly without using extra memory proportional to the input size. It has O(1) space complexity.", week:"1"},
{ term:"Two-Pointer Technique", definition:"A programming technique that uses two pointers (usually at different positions) to traverse a data structure, often used to solve array problems efficiently.", week:"1"},
{ term:"Problem-Solving Process", definition:"A structured 5-step approach to tackling algorithmic problems: 1) Clarify the problem, 2) Plan the solution, 3) Implement the code, 4) Test the solution, 5) Optimize for efficiency.", week:"1"},
{ term:"Worst Case", definition:"The scenario where an algorithm takes the maximum possible time or space to complete, typically what Big O notation describes.", week:"1"},
{ term:"Best Case", definition:"The scenario where an algorithm performs optimally, taking the minimum possible time or space to complete.", week:"1"},
{ term:"Average Case", definition:"The expected performance of an algorithm across all possible inputs, representing typical real-world behavior.", week:"1"},
];


export const glossaryChapter = {
  id: 'algorithmic-thinking-glossary',
  title: 'Glossary: Algorithmic Thinking',
  sectionId: 'algorithmic-thinking',
  previousChapterId: 'algorithmic-thinking-supplemental-materials',
  getNextChapterId: 'algorithmic-thinking-checkpoint',
  content: `## Glossary: Algorithmic Thinking

This glossary contains essential terms from Module 1 that form the foundation of algorithmic thinking. These concepts will be the building blocks of modules to come and understanding them is important for gaining competency in the core principles of this course. These terms will also help you communicate effectively about algorithms and data structures in interviews and technical discussions.

${formatGlossary(data)}
`,
  exercise: null
};