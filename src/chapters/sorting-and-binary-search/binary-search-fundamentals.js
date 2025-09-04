import content  from './text/binary-search-fundamentals-content.md?raw';
import example from './text/binary-search-fundamentals-example.js?raw';
import completed from './text/binary-search-fundamentals-completed.js?raw';

export const binarySearchFundamentalsChapter = {
  id: 'binary-search-fundamentals',
  title: 'Binary Search Fundamentals',
  sectionId: 'sorting-and-binary-search',
  previousChapterId: 'sort-method',
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