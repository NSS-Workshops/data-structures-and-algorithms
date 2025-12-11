import content from './index.md?raw';
import starterCode from './starterCode.js?raw';
import solution from './solution.js?raw';
import { tests } from './tests.js';

export const lesson = {
  id: '12-build-from-scratch',
  title: 'Building a Linked List from Scratch',
  content,
  type: 'exercise',
  starterCode,
  solution,
  tests
};