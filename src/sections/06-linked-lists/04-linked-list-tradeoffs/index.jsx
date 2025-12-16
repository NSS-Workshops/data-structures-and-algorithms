import contentMd from './index.md?raw';
import starterCode from './starterCode.js?raw';
import solution from './solution.js?raw';
import { tests } from './tests.js';
import questions from './checkpoint.jsx';
import { Checkpoint } from '@nss-workshops/nss-core';

console.log(questions);
export default {
  id: "linked-tradeoffs",
  title: "Playlist Performance: Arrays vs Linked Lists",
  previousChapterId: "linked-types",
  nextChapterId: "linked-traversal",
  content: contentMd,
  exercises: [{
    starterCode,
    solution,
    tests
  }],
  quiz: {component: () => <Checkpoint questions={questions}/> }
};