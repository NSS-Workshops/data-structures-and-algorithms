import contentMd from './index.md?raw';
import starterCode from './starterCode.js?raw';
import solution from './solution.js?raw';
import { tests } from './tests.js';
import questions from './checkpoint.jsx';
import { Checkpoint } from '@nss-workshops/nss-core';

export default {
  id: "linked-types",
  title: "Playlist Types: Singly, Doubly, and Circular Linked Lists",
  previousChapterId: "linked-intro",
  nextChapterId: "linked-tradeoffs",
  content: contentMd,
  exercise: {
    starterCode,
    solution,
    tests
  },
    quiz: {component: () => <Checkpoint questions={questions}/> }
};