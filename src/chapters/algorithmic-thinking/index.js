import { whatIsAlgorithmChapter } from './what-is-algorithm';
import { whatIsDataStructureChapter } from './what-is-data-structure';
import { problemSolvingProcessChapter } from './problem-solving-process';
import { bigONotationChapter } from './big-o-notation';
import { comparingComplexitiesChapter } from './comparing-complexities';

export const algorithmicThinkingChapters = [
  whatIsAlgorithmChapter,
  whatIsDataStructureChapter,
  problemSolvingProcessChapter,
  bigONotationChapter,
  comparingComplexitiesChapter
];

/**
 * Get a chapter by its ID
 * @param {string} id - The chapter ID to find
 * @returns {Object|undefined} The chapter object if found, undefined otherwise
 */
export const getChapterById = (id) => {
  return algorithmicThinkingChapters.find(chapter => chapter.id === id);
};

/**
 * Get all chapter IDs for the algorithmic thinking section
 * @returns {string[]} Array of chapter IDs
 */
export const getChapterIds = () => {
  return algorithmicThinkingChapters.map(chapter => chapter.id);
};

/**
 * Get the next chapter after the given chapter ID
 * @param {string} currentChapterId - The current chapter ID
 * @returns {Object|undefined} The next chapter object if found, undefined otherwise
 */
export const getNextChapter = (currentChapterId) => {
  const currentIndex = algorithmicThinkingChapters.findIndex(chapter => chapter.id === currentChapterId);
  return algorithmicThinkingChapters[currentIndex + 1];
};

/**
 * Get the previous chapter before the given chapter ID
 * @param {string} currentChapterId - The current chapter ID
 * @returns {Object|undefined} The previous chapter object if found, undefined otherwise
 */
export const getPreviousChapter = (currentChapterId) => {
  const currentIndex = algorithmicThinkingChapters.findIndex(chapter => chapter.id === currentChapterId);
  return currentIndex > 0 ? algorithmicThinkingChapters[currentIndex - 1] : undefined;
};