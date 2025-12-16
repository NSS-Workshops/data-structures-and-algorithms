import { Checkpoint } from '@nss-workshops/nss-core';
import questions from "./checkpoint.jsx";

export default {
    id: "introduction_checkpoint",
    title: "Checkpoint",
    description: "T",
    previousChapterId: "introduction_intro",
    nextChapterId: null,
    content:"",
    quiz: {component: () => <>
      <Checkpoint questions={questions}/>
    </>}
}
