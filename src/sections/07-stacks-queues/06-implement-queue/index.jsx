import content from './index.md?raw';
import starterCode from './starterCode.js?raw';
import solution from './solution.js?raw';
import tests from './tests.js';
import questions  from './checkpoint.jsx';
import { Checkpoint } from '@nss-workshops/nss-core';

export default {
  id: "stacks-implement-queue",
  title: 'Implement a Queue Class - Digitizing the Hold System',
  previousChapterId: "stacks-implement-stack",
  nextChapterId: "stacks-info",
  content: content,
  exercises: [{
    starterCode,
    solution,
    tests
  }],
  quiz: {component: () => <Checkpoint questions={questions}/>}
};