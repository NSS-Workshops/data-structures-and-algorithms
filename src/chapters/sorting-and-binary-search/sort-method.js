import content  from './text/sort-method-content.md?raw';
import example from './text/sort-method-example.js?raw';
import completed from './text/sort-method-completed.js?raw';

export const sortMethodChapter = {
  id: 'sort-method',
  title: 'Using .sort() with Comparators',
  sectionId: 'sorting-and-binary-search',
  previousChapterId: 'sorting-approaches',
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