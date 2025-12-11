import content from './index.md?raw';
import starterCode from './starterCode.js?raw';
import solution from './solution.js?raw';
import { tests } from './tests.js';

export const lesson = {
  id: '10-reverse-linked-list',
  title: 'Code Exercise: Reverse Linked List',
  content,
  type: 'exercise',
  starterCode,
  solution,
  tests
};