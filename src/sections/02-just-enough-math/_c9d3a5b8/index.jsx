import { Checkpoint, QUESTION_TYPES } from "@nss-workshops/nss-core";

const questions = [
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>Your company is hiring four software development engineers from a pool of 12 candidates. The order in which the candidates are hired has no effect. How many distinct groups of four SDEs are there?</p>,
    answers: [
      "495",
      "11,880",
      "24",
      "12"
    ],
    correctAnswer: 0
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>You have an office with four unique walls ordered by N-S-E-W. You have enough room to hang 4 paintings, one on each wall. If you have 6 paintings to choose from, how many arrangements are there to hang the 4 paintings?</p>,
    answers: [
      "24",
      "15",
      "360",
      "6"
    ],
    correctAnswer: 2
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>Which of the following statements accurately describes combinations?</p>,
    answers: [
      "Combinations are groupings of items in which the order of the grouping matters.",
      "Combinations are groupings of items in which the order of the grouping does not matter.",
      "Combinations are the number of ways to arrange a certain number of objects.",
      "Combinations are calculated by multiplying the number of available possibilities."
    ],
    correctAnswer: 1
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>Your company issues each employee a five-letter ID code. The code is composed of the letters A, B, C, D, E, F, G, and H. The same letter cannot appear twice in a single ID code. How many unique three-letter ID codes are there?</p>,
    answers: [
      "56",
      "512",
      "40,320",
      "336",
    ],
    correctAnswer: 3
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>Given a list of 9 elements, how many combinations of 5 are there?</p>,
    answers: [
      "120",
      "15,120",
      "59,049",
      "126",
    ],
    correctAnswer: 3
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>Which of the following statements accurately describes permutations?</p>,
    answers: [
      "Permutations are groupings of items in which the order does not matter.",
      "Permutations are groupings of items in which the order matters",
      "There are generally more combinations than permutations for the same data set.",
      "Permutations are calculated by adding up all the elements in a data set."
    ],
    correctAnswer: 1
  }
];

export default {
  id: 'c9d3a5b8',
  title: 'Combinations and Permutations Quiz',
  sectionId: 'just-enough-math',
  previousChapterId: null,
  content: `Test your understanding of combinations, permutations, and their applications in organizing and counting data.`,
  quiz: {
    component: () => <Checkpoint questions={questions}/>
  }
};