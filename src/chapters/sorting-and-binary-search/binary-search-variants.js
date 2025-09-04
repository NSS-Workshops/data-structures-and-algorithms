import content from './text/binary-search-variants-content.md?raw';
import example from './text/binary-search-variants-example.js?raw';
import completed from './text/binary-search-variants-completed.js?raw';

export const binarySearchVariantsChapter = {
  id: 'binary-search-variants',
  title: 'Binary Search Variants',
  sectionId: 'sorting-and-binary-search',
  previousChapterId: 'binary-search-fundamentals',
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