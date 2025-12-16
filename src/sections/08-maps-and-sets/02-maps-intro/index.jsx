import content from './index.md?raw';
import starterCode from './starterCode.js?raw';
import solution from './solution.js?raw';
import { tests } from './tests.js';
import questions  from './checkpoint.jsx';
import { Checkpoint } from '@nss-workshops/nss-core';

export default {
    id: "mapssets-maps",
    title: 'Introduction to Maps',
    previousChapterId: "mapssets-objectives",
    nextChapterId: "mapssets-sets",
    content: content,
    exercises: [{
      starterCode,
      solution,
      tests
    }],
    quiz: {component: () => <Checkpoint questions={questions}/>}
}
