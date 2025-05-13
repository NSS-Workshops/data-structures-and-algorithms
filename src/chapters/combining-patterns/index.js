import { recognizingPatternsChapter } from './recognizing-patterns';
import { choosingDataStructuresChapter } from './choosing-data-structures';
import { analyzingTradeoffsChapter } from './analyzing-tradeoffs';
import { solvingComplexProblemsChapter } from './solving-complex-problems';
import { glossaryChapter } from './glossary';

export const combiningPatternsChapters = [
  recognizingPatternsChapter,
  choosingDataStructuresChapter,
  analyzingTradeoffsChapter,
  solvingComplexProblemsChapter,
  glossaryChapter
];

/**
 * Get a chapter by its ID
 * @param {string} id - The chapter ID to find
 * @returns {Object|undefined} The chapter object if found, undefined otherwise
 */
export const getChapterById = (id) => {
  return combiningPatternsChapters.find(chapter => chapter.id === id);
};

/**
 * Get all chapter IDs for the combining patterns section
 * @returns {string[]} Array of chapter IDs
 */
export const getChapterIds = () => {
  return combiningPatternsChapters.map(chapter => chapter.id);
};

/**
 * Get the next chapter after the given chapter ID
 * @param {string} currentChapterId - The current chapter ID
 * @returns {Object|undefined} The next chapter object if found, undefined otherwise
 */
export const getNextChapter = (currentChapterId) => {
  const currentIndex = combiningPatternsChapters.findIndex(chapter => chapter.id === currentChapterId);
  return combiningPatternsChapters[currentIndex + 1];
};

/**
 * Get the previous chapter before the given chapter ID
 * @param {string} currentChapterId - The current chapter ID
 * @returns {Object|undefined} The previous chapter object if found, undefined otherwise
 */
export const getPreviousChapter = (currentChapterId) => {
  const currentIndex = combiningPatternsChapters.findIndex(chapter => chapter.id === currentChapterId);
  return currentIndex > 0 ? combiningPatternsChapters[currentIndex - 1] : undefined;
};