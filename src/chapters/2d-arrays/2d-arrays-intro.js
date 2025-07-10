import content  from './text/2d-arrays-intro-content.md?raw';
import example from './text/2d-arrays-intro-example.js?raw';
import completed from './text/2d-arrays-intro-completed.js?raw';

export const twoDArraysIntroChapter = {
  id: '2d-arrays-intro',
  title: 'Introduction to 2D Arrays',
  sectionId: '2d-arrays',
  previousChapterId: '2d-arrays-learning-objectives',
  content: content,

  exercise: {
    starterCode: example,
    solution: completed,
    question: `
# Exercise Question
    `,
    solution_explanation: `
# Solution Explanation
it goes like this
    `
  }
};