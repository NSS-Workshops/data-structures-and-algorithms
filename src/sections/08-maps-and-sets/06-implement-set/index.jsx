import content from './index.md?raw';
import starterCode from './starterCode.js?raw';
import solution from './solution.js?raw';
import { tests } from './tests.js';
import questions  from './checkpoint.jsx';
import { Checkpoint } from '@nss-workshops/nss-core';

export default {
    id: "mapssets-implementset",
    title: "Building a Custom Set from Scratch",
    previousChapterId: "mapssets-implementmap",
    nextChapterId: "mapssets-info",
    content: content,
    exercises: [{
      starterCode,
      solution,
      tests
    }],
    quiz: {component: () => <Checkpoint questions={questions}/>}
}
