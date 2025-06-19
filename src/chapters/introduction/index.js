import { introductionChapter } from './introduction';
import { introductionCheckpointChapter } from './checkpoint';

export const introductionChapters = [
  introductionChapter,
  introductionCheckpointChapter
];

/**
 * Get a chapter by its ID
 * @param {string} id - The chapter ID to find
 * @returns {Object|undefined} The chapter object if found, undefined otherwise
 */
export const getChapterById = (id) => {
  return introductionChapters.find(chapter => chapter.id === id);
};

/**
 * Get all chapter IDs for the introduction section
 * @returns {string[]} Array of chapter IDs
 */
export const getChapterIds = () => {
  return introductionChapters.map(chapter => chapter.id);
};

/**
 * Get the next chapter after the given chapter ID
 * @param {string} currentChapterId - The current chapter ID
 * @returns {Object|undefined} The next chapter object if found, undefined otherwise
 */
export const getNextChapter = (currentChapterId) => {
  const currentIndex = introductionChapters.findIndex(chapter => chapter.id === currentChapterId);
  return introductionChapters[currentIndex + 1];
};

/**
 * Get the previous chapter before the given chapter ID
 * @param {string} currentChapterId - The current chapter ID
 * @returns {Object|undefined} The previous chapter object if found, undefined otherwise
 */
export const getPreviousChapter = (currentChapterId) => {
  const currentIndex = introductionChapters.findIndex(chapter => chapter.id === currentChapterId);
  return currentIndex > 0 ? introductionChapters[currentIndex - 1] : undefined;
};