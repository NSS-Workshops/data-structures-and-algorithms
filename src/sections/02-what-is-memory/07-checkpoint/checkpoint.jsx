import { QUESTION_TYPES } from '@nss-workshops/nss-core';

export default [
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>How many bits are in one byte?</p>,
    answers: [
      "4",
      "8",
      "16",
      "32"
    ],
    correctAnswer: 1
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>What makes RAM "volatile"?</p>,
    answers: [
      "It can only store small amounts of data",
      "It is slower than a hard drive",
      "Its contents are erased when the power is off",
      "It can only be read, not written to"
    ],
    correctAnswer: 2
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>What is a memory address?</p>,
    answers: [
      "The name you give a variable in your code",
      "A unique number identifying a specific byte's location in RAM",
      "The size of a data structure in bytes",
      "A URL pointing to data on the internet"
    ],
    correctAnswer: 1
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <>
      <p>What does this code print for <code>a.length</code>, and why?</p>
      <pre><code>{`const a = [1, 2, 3];
const b = a;
b.push(4);
console.log(a.length);`}</code></pre>
    </>,
    answers: [
      "3 — b is a copy of a, so a is unchanged",
      "4 — a and b reference the same array in memory",
      "undefined — you cannot push to a const array",
      "0 — the array was reassigned"
    ],
    correctAnswer: 1
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>Why can the computer access any array element immediately, without searching through the array?</p>,
    answers: [
      "Because arrays are always small enough to scan quickly",
      "Because the computer searches from the beginning and stops early",
      "Because array elements are stored contiguously, so any address can be calculated directly from the index",
      "Because JavaScript automatically caches array lookups"
    ],
    correctAnswer: 2
  },
  {
    type: QUESTION_TYPES.CHECKBOX,
    questionJsx: <p>Which of the following are stored by <strong>reference</strong> in JavaScript? (Select all that apply.)</p>,
    answers: [
      "A number like 42",
      "An array like [1, 2, 3]",
      "A boolean like true",
      "An object like { name: 'Alice' }",
      "A string like 'hello'"
    ],
    correctAnswers: [1, 3]
  }
];
