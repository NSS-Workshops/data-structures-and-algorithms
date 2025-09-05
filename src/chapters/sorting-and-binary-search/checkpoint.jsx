import Checkpoint, { QUESTION_TYPES } from "../../components/Checkpoint";

const questions = [
  {
      type: QUESTION_TYPES.RADIO,
      questionJsx: <p>What are the two essential requirements for binary search to work effectively?</p>,
      answers: [
        "The array must be sorted and contain only unique elements",
        "The array must be large and stored in memory",
        "The array must be sorted and support random access (O(1) indexing)",
        "The array must be numeric and have no null values"
      ],
      correctAnswer: 2
  },
  {
      type: QUESTION_TYPES.RADIO,
      questionJsx: <p>What is the time complexity of binary search, and why is it that efficient?</p>,
      answers: [
        "O(n) because it checks every element once",
        "O(log n) because it eliminates half the remaining elements with each comparison",
        "O(n²) because it compares elements in nested loops",
        "O(1) because it finds elements instantly"
      ],
      correctAnswer: 1
  },
  {
      type: QUESTION_TYPES.RADIO,
      questionJsx: <p>What happens when you call `array.sort()` on an array of numbers like `[1.99, 15.99, 100.99, 20.99, 3.99]` without providing a comparator function?</p>,
      answers: [
        "It sorts numerically: `[1.99, 3.99, 15.99, 20.99, 100.99]`",
        "It sorts as strings: `[1.99, 100.99, 15.99, 20.99, 3.99]`",
        "It throws an error because numbers need a comparator",
        "It returns the array unchanged"
      ],
      correctAnswer: 1
  },
  {
      type: QUESTION_TYPES.RADIO,
      questionJsx: <p>In a JavaScript comparator function with parameters a and b, what should you return if element a should come BEFORE element b in the sorted order?</p>,
      answers: [
        "false",
        "true",
        "A positive number",
        "A negative number"
      ],
      correctAnswer: 3
  },
];

export const sortingAndBinarySearchCheckpointChapter = {
  id: 'sorting-and-binary-search-checkpoint',
  title: 'Checkpoint: Sorting and Binary Search',
  sectionId: 'sorting-and-binary-search',
  previousChapterId: 'sorting-and-binary-search-glossary',
  content: `
## Quiz: Sorting and Binary Search

Test your understanding of sorting algorithms and binary search.
`,
  quiz: {
    component: () => <Checkpoint questions={questions}/>
  }
};

