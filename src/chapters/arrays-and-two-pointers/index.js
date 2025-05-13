import { arraysIntroChapter } from './arrays-intro';
import { arrayCoreOperationsChapter } from './array-core-operations';
import { arrayTradeoffsChapter } from './array-tradeoffs';
import { arrayMethodsChapter } from './array-methods';
import { twoPointersChapter } from './two-pointers';
import { glossaryChapter } from './glossary';

export const arraysAndTwoPointersChapters = [
  arraysIntroChapter,
  arrayCoreOperationsChapter,
  arrayTradeoffsChapter,
  arrayMethodsChapter,
  twoPointersChapter,
  glossaryChapter
];

/**
 * Get a chapter by its ID
 * @param {string} id - The chapter ID to find
 * @returns {Object|undefined} The chapter object if found, undefined otherwise
 */
export const getChapterById = (id) => {
  return arraysAndTwoPointersChapters.find(chapter => chapter.id === id);
};

/**
 * Get all chapter IDs for the arrays and two pointers section
 * @returns {string[]} Array of chapter IDs
 */
export const getChapterIds = () => {
  return arraysAndTwoPointersChapters.map(chapter => chapter.id);
};

/**
 * Get the next chapter after the given chapter ID
 * @param {string} currentChapterId - The current chapter ID
 * @returns {Object|undefined} The next chapter object if found, undefined otherwise
 */
export const getNextChapter = (currentChapterId) => {
  const currentIndex = arraysAndTwoPointersChapters.findIndex(chapter => chapter.id === currentChapterId);
  return arraysAndTwoPointersChapters[currentIndex + 1];
};

/**
 * Get the previous chapter before the given chapter ID
 * @param {string} currentChapterId - The current chapter ID
 * @returns {Object|undefined} The previous chapter object if found, undefined otherwise
 */
export const getPreviousChapter = (currentChapterId) => {
  const currentIndex = arraysAndTwoPointersChapters.findIndex(chapter => chapter.id === currentChapterId);
  return currentIndex > 0 ? arraysAndTwoPointersChapters[currentIndex - 1] : undefined;
};