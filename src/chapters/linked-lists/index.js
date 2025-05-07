import { linkedListsIntroChapter } from './linked-lists-intro';
import { linkedListTypesChapter } from './linked-list-types';
import { linkedListTradeoffsChapter } from './linked-list-tradeoffs';
import { nodeBasedTraversalChapter } from './node-based-traversal';
import { implementLinkedListChapter } from './implement-linked-list';

export const linkedListsChapters = [
  linkedListsIntroChapter,
  linkedListTypesChapter,
  linkedListTradeoffsChapter,
  nodeBasedTraversalChapter,
  implementLinkedListChapter
];

/**
 * Get a chapter by its ID
 * @param {string} id - The chapter ID to find
 * @returns {Object|undefined} The chapter object if found, undefined otherwise
 */
export const getChapterById = (id) => {
  return linkedListsChapters.find(chapter => chapter.id === id);
};

/**
 * Get all chapter IDs for the linked lists section
 * @returns {string[]} Array of chapter IDs
 */
export const getChapterIds = () => {
  return linkedListsChapters.map(chapter => chapter.id);
};

/**
 * Get the next chapter after the given chapter ID
 * @param {string} currentChapterId - The current chapter ID
 * @returns {Object|undefined} The next chapter object if found, undefined otherwise
 */
export const getNextChapter = (currentChapterId) => {
  const currentIndex = linkedListsChapters.findIndex(chapter => chapter.id === currentChapterId);
  return linkedListsChapters[currentIndex + 1];
};

/**
 * Get the previous chapter before the given chapter ID
 * @param {string} currentChapterId - The current chapter ID
 * @returns {Object|undefined} The previous chapter object if found, undefined otherwise
 */
export const getPreviousChapter = (currentChapterId) => {
  const currentIndex = linkedListsChapters.findIndex(chapter => chapter.id === currentChapterId);
  return currentIndex > 0 ? linkedListsChapters[currentIndex - 1] : undefined;
};