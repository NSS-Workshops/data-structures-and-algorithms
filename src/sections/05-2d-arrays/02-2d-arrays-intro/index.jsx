import content from './index.md?raw';
import starterCode from './starterCode.js?raw';
import solution from './solution.js?raw';
import questions from './checkpoint.jsx';
import { Checkpoint } from "@nss-workshops/nss-core";

export default {
  id: "2d-arrays-intro",
  title: 'Introduction to 2D Arrays',
  previousChapterId: "2d-arrays-learning-objectives",
  nextChapterId: "2d-arrays-indexing",
  content,
  exercises: [{
    starterCode,
    solution,
    instructions: `
# Exercise Instructions

Complete the three functions to create 2D arrays using different methods:

1. **createPhoneLayout()** - Use literal notation to create a 3x3 matrix representing numbers 1-9 on a telephone dialpad
2. **createLoveArray(width, height)** - Use Array.from() and Array.fill() to create a 2D array filled with heart emojis (❤️)
3. **createCheckerboard(width, height)** - Use loops to create a checkerboard pattern alternating between ⬛ and ⬜

Each function should return the completed 2D array.
    `
  }],
  quiz: {component: () => <>
    <h1>Checkpoint</h1>
    <Checkpoint questions={questions}/>
  </>}
};