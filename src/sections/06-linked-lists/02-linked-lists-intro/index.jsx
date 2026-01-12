import contentMd from './index.md?raw';
import starterCode from './starterCode.js?raw';
import solution from './solution.js?raw';
import { tests } from './tests.js';
import questions from './checkpoint.jsx';
import { Checkpoint } from '@nss-workshops/nss-core';


export default {
  id: "linked-intro",
  title: "Introduction to Linked Lists - Building the Perfect Playlist",
  previousChapterId: "linked-objectives",
  nextChapterId: "linked-types",
  content: contentMd,
  exercises: [{
    starterCode,
    solution,
    tests
  }],
  quiz: {component: () => <Checkpoint questions={questions}/> }
};