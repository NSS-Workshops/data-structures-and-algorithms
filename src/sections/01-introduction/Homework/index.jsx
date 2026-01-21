import content from "./index.md?raw";
import starterCode from "./starterCode.js?raw";
import solution from "./solution.js?raw";
import tests from "./tests.js";

export default {
    id: "Intro Homework",
    title: "Inro Homework",
    description: "The interview problems to work on in the first week.",
    previousChapterId: null,
    nextChapterId: null,
    content,
    exercises: [
      { starterCode,
        solution,
        tests
      },
    ],
    quiz: {component: () => <>
      <h1>Checkpoint</h1>
      <Checkpoint questions={questions}/>
    </>}
}
