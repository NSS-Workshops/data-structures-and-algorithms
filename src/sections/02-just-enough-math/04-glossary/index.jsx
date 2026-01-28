import { formatGlossary } from "@nss-workshops/nss-core";

const data = [
  { term: "Base", definition: "The number an exponent is applied to.", week: "" },
  { term: "Binary Search", definition: "An algorithm that finds items in sorted lists by repeatedly dividing the search space in half.", week: "" },
  { term: "Coefficient", definition: "Any number that appears in a polynomial, either multiplied with a variable or on its own.", week: "" },
  { term: "Combination", definition: "An arrangement of items in which the order of the items does not matter.", week: "" },
  { term: "Degree", definition: "The size of the exponent operating on a term. In a polynomial, degree refers to the largest exponent of all the terms.", week: "" },
  { term: "Exponent", definition: "A number written over another one indicating how many times the second number is multiplied by itself.", week: "" },
  { term: "Exponential Growth", definition: "Growth pattern where the output doubles or increases by a constant factor for each unit increase in input.", week: "" },
  { term: "Expression", definition: "A sequence of numbers, symbols, variables, and operations that can be evaluated to get a single result.", week: "" },
  { term: "Factorial", definition: "The product of all positive integers less than or equal to n, denoted as n!.", week: "" },
  { term: "Function", definition: "A mathematical relationship that maps each input to exactly one output.", week: "" },
  { term: "Growth Rate", definition: "How quickly a function's output increases as its input increases.", week: "" },
  { term: "Linear Growth", definition: "Growth pattern where quantities increase by a constant amount in each time period.", week: "" },
  { term: "Logarithm", definition: "The inverse operation of exponentiation; log_b(x) asks \"to what power must b be raised to get x?\"", week: "" },
  { term: "Logarithmic Growth", definition: "Growth pattern that increases slowly, characteristic of efficient divide-and-conquer algorithms.", week: "" },
  { term: "Permutation", definition: "An arrangement of objects where order matters.", week: "" },
  { term: "Polynomial", definition: "A mathematical expression consisting of variables, coefficients, and non-negative integer exponents.", week: "" },
  { term: "Polynomial Growth", definition: "Growth pattern described by polynomial functions (linear, quadratic, cubic, etc.).", week: "" },
  { term: "Quadratic Growth", definition: "Growth pattern where quantities increase proportionally to the square of the input size.", week: "" },
  { term: "Term", definition: "A combination of coefficients and variables, or a number on its own.", week: "" },
  { term: "Variable", definition: "A letter or symbol that represents a numeric value that can change.", week: "" },
];

export default {
    id: "just-enough-math-glossary",
    title: "Glossary",
    previousChapterId: "combinations-permutations",
    nextChapterId: null,
    content: `${formatGlossary(data)}`,
    exercises: [],
    quiz: null
}

