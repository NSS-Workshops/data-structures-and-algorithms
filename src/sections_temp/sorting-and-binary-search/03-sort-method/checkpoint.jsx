import { Checkpoint, QUESTION_TYPES } from "@nss-workshops/nss-core";

const questions = [
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

export default function SortMethodCheckpoint() {
  return (
    <>
      <h1>Checkpoint</h1>
      <Checkpoint questions={questions}/>
    </>
  );
}