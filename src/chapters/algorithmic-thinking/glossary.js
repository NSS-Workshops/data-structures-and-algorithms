import { getNextChapter } from ".";
import { formatGlossary } from "../../utils/format_utils";


const data = [
{ term:"Algorithm", definition:"A step-by-step procedure or set of rules designed to perform a specific task or solve a particular problem. Think of it as a recipe for solving computational problems.", week:"1"},
{ term:"Data Structure", definition:"A specialized format for organizing, processing, retrieving and storing data efficiently. Different structures (like arrays, lists, trees) are optimized for different types of operations.| 1"},
{ term:"Time Complexity", definition:"A measure of the amount of time an algorithm takes to complete as a function of the length of the input.", week:"1"},
{ term:"Space Complexity", definition:"A measure of the amount of memory an algorithm uses as a function of the length of the input.", week:"1"},
{ term:"Big O Notation", definition:"A mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. Used to classify algorithms according to their growth rates.", week:"1"},
{ term:"O(1)", definition:"Constant time complexity - the operation takes the same amount of time regardless of the input size.", week:"1"},
{ term:"O(log n)", definition:"Logarithmic time complexity - the operation's time increases logarithmically as the input size grows.", week:"1"},
{ term:"O(n)", definition:"Linear time complexity - the operation's time increases linearly with the input size.", week:"1"},
{ term:"O(n log n)", definition:"Linearithmic time complexity - common in efficient sorting algorithms like merge sort and heap sort.", week:"1"},
{ term:"O(n²)", definition:"Quadratic time complexity - often seen in algorithms with nested iterations over the data set.", week:"1"},
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