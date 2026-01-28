import { QUESTION_TYPES } from "@nss-workshops/nss-core";

 export default[
  {
      type: QUESTION_TYPES.RADIO,
      questionJsx:<p>When implementing multi-level sorting (e.g., sort by artist, then by year within each artist), what is the correct approach in your comparator function?</p>,
      answers: [
        "Always sort by the primary criterion only",
        "Compare the primary criterion first; if equal, then compare the secondary criterion",
        "Sort by secondary criterion first, then primary criterion",
        "Use separate sort() calls for each criterion"
      ],
      correctAnswer: 1
  }
];
