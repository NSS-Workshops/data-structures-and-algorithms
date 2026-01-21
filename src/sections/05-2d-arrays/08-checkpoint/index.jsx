import questions from './checkpoint.jsx';
import { Checkpoint } from "@nss-workshops/nss-core";

export default {
  id: "2d-arrays-checkpoint",
  title: 'Checkpoint: 2D Arrays',
  previousChapterId: "2d-arrays-glossary",
  nextChapterId: null,
  content: `Test your understanding of 2D Arrays and working with them.`,
  exercises: [],
    quiz: {component: () =>  <Checkpoint questions={questions}/>}
};