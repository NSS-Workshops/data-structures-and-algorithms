import { formatGlossary } from "../../utils/format_utils";

const data = [
{ term:"Anagram", definition:"A word made by rearranging the letters of another word", week:"2"},
{ term:"Algorithm", definition:"A step-by-step procedure or set of rules designed to perform a specific task or solve a particular problem.", week:"1"},
{ term:"Data Structure", definition:"A specialized format for organizing, processing, retrieving and storing data to suit a specific purpose.", week:"1"},
{ term:"Time Complexity", definition:"A measure of the amount of time an algorithm takes to complete as a function of the length of the input.", week:"1"},
{ term:"Space Complexity", definition:"A measure of the amount of memory an algorithm uses as a function of the length of the input.", week:"1"},
{ term:"Big O Notation", definition:"A mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. Used to classify algorithms according to their growth rates.", week:"1"},
{ term:"O(1)", definition:"Constant time complexity - the operation takes the same amount of time regardless of the input size.", week:"1"},
{ term:"O(log n)", definition:"Logarithmic time complexity - the operation's time increases logarithmically as the input size grows.", week:"1"},
{ term:"O(n)", definition:"Linear time complexity - the operation's time increases linearly with the input size.", week:"1"},
{ term:"O(n log n)", definition:"Linearithmic time complexity - common in efficient sorting algorithms like merge sort and heap sort.", week:"1"},
{ term:"O(n²)", definition:"Quadratic time complexity - often seen in algorithms with nested iterations over the data set.", week:"1"},
{ term:"Array", definition:"A data structure consisting of a collection of elements, each identified by an index or a key.", week:"2"},
{ term:"Index", definition:"A numerical value used to identify an element's position within an array (usually zero-based in JavaScript).", week:"2"},
{ term:"Element", definition:"A single item stored in an array.", week:"2"},
{ term:"Length", definition:"The number of elements in an array.", week:"2"},
{ term:"Two Pointers", definition:"A technique that uses two references (pointers) to traverse an array or list, often moving at different speeds or directions.", week:"2"},
{ term:"Subarray", definition:"A contiguous sequence of elements within an array.", week:"2"},
{ term:"Subsequence", definition:"A selection of elements from an array (in order) but not necessarily next to each other", week:"2"},
{ term:"Monotonic", definition:"An array where numbers only go up or only go down", week:"2"},
{ term:"Circular Array", definition:"An array where the last element connects back to the first", week:"2"},
{ term:"Partition", definition:"Splitting an array into parts based on some rule or condition", week:"2"},
{ term:"Two Pointers", definition:"Solving problems by moving two markers (pointers) across the array", week:"2"},
{ term:"Sliding Window", definition:"A way to check or process parts of an array by moving a fixed-size window", week:"2"},
{ term:"Prefix Sum", definition:"An array where each value is the sum of all values before it (and itself)", week:"2"},
{ term:"Suffix Sum", definition:"An array where each value is the sum of all values after it (and itself)", week:"2"},
{ term:"Rotation", definition:"Moving elements of an array to the left or right by some number of steps", week:"2"},
{ term:"In-place", definition:"Changing the original array without using extra space for another one", week:"2"},
{ term:"Lexicographic Order| The order strings appear in a dictionary (alphabetical order)", week:"2"},
];

export const glossaryChapter = {
 id: 'arrays-and-two-pointers-glossary',
 title: 'Glossary: Arrays and Two Pointers',
 sectionId: 'arrays-and-two-pointers',
 previousChapterId: 'arrays-and-two-pointers-supplemental-materials',
 content: `## Glossary: Arrays and Two Pointers

This glossary contains important terms and concepts related to arrays and two pointers. Understanding these terms will help you communicate effectively about algorithms and data structures during interviews and technical discussions.

${formatGlossary(data)}
`,
 exercise: null
};