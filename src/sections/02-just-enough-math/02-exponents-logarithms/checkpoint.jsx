import { QUESTION_TYPES } from '@nss-workshops/nss-core';

export default [
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>Which of the following statements describes the difference between the following expressions: 4³ = 64 and log₄64 = 3?</p>,
    answers: [
      "4³ = 64 is an exponential function and log₄64 = 3 is a logarithmic function.",
      "4³ = 64 and log₄64 = 3 are both exponential functions.",
      "4³ = 64 and log₄64 = 3 are both logarithmic functions.",
      "4³ = 64 and log₄64 = 3 are both linear functions."
    ],
    correctAnswer: 0
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>Which of the following expressions is equivalent to the exponent 5² = 25?</p>,
    answers: [
      "log₅25 = 2",
      "log₂₅5 = 2",
      "log₂25 = 5",
      "log₅2 = 25"
    ],
    correctAnswer: 0
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>Which of the following expressions is equivalent to the logarithm log₂8 = 3?</p>,
    answers: [
      "2³ = 8",
      "3² = 8",
      "8² = 3",
      "2⁸ = 3"
    ],
    correctAnswer: 0
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>Suppose a company has a website tracker to see how much traffic comes to their website. Due to a bug in the software, traffic is added that is not real. The company knows that they have an average 10 visits per day, but the website tracker observes 100 visits the second day, 1,000 visits the third day, 10,000 visits the fourth day, and so on. What statement accurately describes the growth rate of the buggy tracker?</p>,
    answers: [
      "The traffic grows logarithmically.",
      "The traffic grows exponentially at first, then logarithmically.",
      "The traffic grows exponentially.",
      "The traffic grows logarithmically at first, then exponentially."
    ],
    correctAnswer: 2
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>Which of the following statements is correct regarding the relationship in growth rates of exponents and logarithms?</p>,
    answers: [
      "Logarithms grow at a much faster rate than exponents.",
      "Exponents and logarithms grow at a similar rate",
      "It differs and must be calculated on a case-by-case basis.",
      "Exponents grow at a much faster rate than logarithms.",
    ],
    correctAnswer: 3
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>Which of the following logarithms is equivalent to the expression x² = 10?</p>,
    answers: [
      "log₁₀x = 2",
      "logₓ10 = 2",
      "log₂x = 10",
      "log₁₀2 = x"
    ],
    correctAnswer: 1
  }
];