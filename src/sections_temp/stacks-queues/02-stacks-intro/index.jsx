import content from './index.md?raw';
import starterCode from './starterCode.js?raw';
import solution from './solution.js?raw';
import { tests } from './tests.js';
import { questions } from './checkpoint.jsx';

export const lesson = {
  id: '02-stacks-intro',
  title: 'Introduction to Stacks - The Book Return System',
  content,
  type: 'exercise',
  starterCode,
  solution,
  tests,
  questions
};