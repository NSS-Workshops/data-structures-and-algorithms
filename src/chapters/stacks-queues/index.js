import { stacksIntroChapter } from './stacks-intro';
import { queuesIntroChapter } from './queues-intro';
import { implementationTradeoffsChapter } from './implementation-tradeoffs';
import { implementStackChapter } from './implement-stack';
import { implementQueueChapter } from './implement-queue';
import { glossaryChapter } from './glossary';

export const stacksQueuesChapters = [
  stacksIntroChapter,
  queuesIntroChapter,
  implementationTradeoffsChapter,
  implementStackChapter,
  implementQueueChapter,
  glossaryChapter
];

/**
 * Get a chapter by its ID
 * @param {string} id - The chapter ID to find
 * @returns {Object|undefined} The chapter object if found, undefined otherwise
 */
export const getChapterById = (id) => {
  return stacksQueuesChapters.find(chapter => chapter.id === id);
};

/**
 * Get all chapter IDs for the stacks and queues section
 * @returns {string[]} Array of chapter IDs
 */
export const getChapterIds = () => {
  return stacksQueuesChapters.map(chapter => chapter.id);
};

/**
 * Get the next chapter after the given chapter ID
 * @param {string} currentChapterId - The current chapter ID
 * @returns {Object|undefined} The next chapter object if found, undefined otherwise
 */
export const getNextChapter = (currentChapterId) => {
  const currentIndex = stacksQueuesChapters.findIndex(chapter => chapter.id === currentChapterId);
  return stacksQueuesChapters[currentIndex + 1];
};

/**
 * Get the previous chapter before the given chapter ID
 * @param {string} currentChapterId - The current chapter ID
 * @returns {Object|undefined} The previous chapter object if found, undefined otherwise
 */
export const getPreviousChapter = (currentChapterId) => {
  const currentIndex = stacksQueuesChapters.findIndex(chapter => chapter.id === currentChapterId);
  return currentIndex > 0 ? stacksQueuesChapters[currentIndex - 1] : undefined;
};