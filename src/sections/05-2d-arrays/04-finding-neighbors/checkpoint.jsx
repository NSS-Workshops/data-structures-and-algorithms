import { QUESTION_TYPES } from "@nss-workshops/nss-core";

export default [
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: "How do we typically work with neighboring elements in arrays?",
    answers: [
      "Map the array to multiple copies with the elements offset",
      "Target the different adjacent elements using a direction array",
      "Iterate through all elements and check each for adjacency",
      "Store these spatial relationships in a lookup table"
    ],
    correctAnswer: 1
  }
];