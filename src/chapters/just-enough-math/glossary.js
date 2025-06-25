import { formatGlossary } from "../../utils/format_utils";

const data = [
  { term: "Algorithm Complexity", definition: "A measure of how the runtime or space requirements of an algorithm grow with input size.", week: "" },
  { term: "Big O Notation", definition: "Mathematical notation used to describe the upper bound of algorithm complexity.", week: "" },
  { term: "Complexity Class", definition: "A set of computational problems with similar resource requirements (time or space).", week: "" },
  { term: "Exponential Growth", definition: "Growth pattern where quantities increase by a constant factor in each time period.", week: "" },
  { term: "Function", definition: "A mathematical relationship that maps each input to exactly one output.", week: "" },
  { term: "Factorial", definition: "The product of all positive integers less than or equal to n, denoted as n!.", week: "" },
  { term: "Growth Rate", definition: "How quickly a function's output increases as its input increases.", week: "" },
  { term: "Linear Growth", definition: "Growth pattern where quantities increase by a constant amount in each time period.", week: "" },
  { term: "Logarithm", definition: "The inverse operation of exponentiation; log_b(x) asks \"to what power must b be raised to get x?\"", week: "" },
  { term: "Logarithmic Growth", definition: "Growth pattern that increases slowly, characteristic of efficient divide-and-conquer algorithms.", week: "" },
  { term: "Permutation", definition: "An arrangement of objects where order matters.", week: "" },
  { term: "Polynomial", definition: "A mathematical expression consisting of variables, coefficients, and non-negative integer exponents.", week: "" },
  { term: "Polynomial Growth", definition: "Growth pattern described by polynomial functions (linear, quadratic, cubic, etc.).", week: "" },
  { term: "Quadratic Growth", definition: "Growth pattern where quantities increase proportionally to the square of the input size.", week: "" },
  { term: "Recursion", definition: "A programming technique where a function calls itself to solve smaller instances of the same problem.", week: "" },
  { term: "Set", definition: "A collection of distinct objects, considered as a whole.", week: "" },
  { term: "Sequence", definition: "An ordered list of numbers or objects following a specific pattern.", week: "" },
  { term: "Time Complexity", definition: "A measure of how the execution time of an algorithm grows with input size.", week: "" },
  { term: "Space Complexity", definition: "A measure of how much memory an algorithm uses relative to the input size.", week: "" },
  { term: "O(1)", definition: "Constant time 😄", week: "" },
  { term: "O(log n)", definition: "Logarithmic time 🙂", week: "" },
  { term: "O(n)", definition: "Linear time 🙂", week: "" },
  { term: "O(n log n)", definition: "Linearithmic time 😐", week: "" },
  { term: "O(n²)", definition: "Quadratic time 😕", week: "" },
  { term: "O(n³)", definition: "Cubic time 😟", week: "" },
  { term: "O(2ⁿ)", definition: "Exponential time 😫", week: "" },
  { term: "O(n!)", definition: "Factorial time 😱", week: "" },
];

export const glossaryChapter = {
  id: 'just-enough-math-glossary',
  title: 'Just Enough Math - Glossary',
  sectionId: 'just-enough-math',
  previousChapterId: 'combinations-permutations',
  nextChapterId:'just-enough-math-checkpoint',
  content: `
${formatGlossary(data)}`,
  exercise: null
};