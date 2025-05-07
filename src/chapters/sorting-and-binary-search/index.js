import { sortingApproachesChapter } from './sorting-approaches';
import { sortMethodChapter } from './sort-method';
import { binarySearchFundamentalsChapter } from './binary-search-fundamentals';
import { binarySearchVariantsChapter } from './binary-search-variants';

export const sortingAndBinarySearchChapters = [
  sortingApproachesChapter,
  sortMethodChapter,
  binarySearchFundamentalsChapter,
  binarySearchVariantsChapter
];

/**
 * Get a chapter by its ID
 * @param {string} id - The chapter ID to find
 * @returns {Object|undefined} The chapter object if found, undefined otherwise
 */
export const getChapterById = (id) => {
  return sortingAndBinarySearchChapters.find(chapter => chapter.id === id);
};

/**
 * Get all chapter IDs for the sorting and binary search section
 * @returns {string[]} Array of chapter IDs
 */
export const getChapterIds = () => {
  return sortingAndBinarySearchChapters.map(chapter => chapter.id);
};

/**
 * Get the next chapter after the given chapter ID
 * @param {string} currentChapterId - The current chapter ID
 * @returns {Object|undefined} The next chapter object if found, undefined otherwise
 */
export const getNextChapter = (currentChapterId) => {
  const currentIndex = sortingAndBinarySearchChapters.findIndex(chapter => chapter.id === currentChapterId);
  return sortingAndBinarySearchChapters[currentIndex + 1];
};

/**
 * Get the previous chapter before the given chapter ID
 * @param {string} currentChapterId - The current chapter ID
 * @returns {Object|undefined} The previous chapter object if found, undefined otherwise
 */
export const getPreviousChapter = (currentChapterId) => {
  const currentIndex = sortingAndBinarySearchChapters.findIndex(chapter => chapter.id === currentChapterId);
  return currentIndex > 0 ? sortingAndBinarySearchChapters[currentIndex - 1] : undefined;
};