import { slidingWindowIntroChapter } from './sliding-window-intro';
import { optimizingNestedLoopsChapter } from './optimizing-nested-loops';
import { maintainingWindowStateChapter } from './maintaining-window-state';
import { subarraysSubstringsChapter } from './subarrays-substrings';

export const slidingWindowChapters = [
  slidingWindowIntroChapter,
  optimizingNestedLoopsChapter,
  maintainingWindowStateChapter,
  subarraysSubstringsChapter
];

/**
 * Get a chapter by its ID
 * @param {string} id - The chapter ID to find
 * @returns {Object|undefined} The chapter object if found, undefined otherwise
 */
export const getChapterById = (id) => {
  return slidingWindowChapters.find(chapter => chapter.id === id);
};

/**
 * Get all chapter IDs for the sliding window section
 * @returns {string[]} Array of chapter IDs
 */
export const getChapterIds = () => {
  return slidingWindowChapters.map(chapter => chapter.id);
};

/**
 * Get the next chapter after the given chapter ID
 * @param {string} currentChapterId - The current chapter ID
 * @returns {Object|undefined} The next chapter object if found, undefined otherwise
 */
export const getNextChapter = (currentChapterId) => {
  const currentIndex = slidingWindowChapters.findIndex(chapter => chapter.id === currentChapterId);
  return slidingWindowChapters[currentIndex + 1];
};

/**
 * Get the previous chapter before the given chapter ID
 * @param {string} currentChapterId - The current chapter ID
 * @returns {Object|undefined} The previous chapter object if found, undefined otherwise
 */
export const getPreviousChapter = (currentChapterId) => {
  const currentIndex = slidingWindowChapters.findIndex(chapter => chapter.id === currentChapterId);
  return currentIndex > 0 ? slidingWindowChapters[currentIndex - 1] : undefined;
};