import { polynomialsChapter } from './polynomials';
import { exponentsLogarithmsChapter } from './exponents-logarithms';
import { combinationsPermutationsChapter } from './combinations-permutations';
import { glossaryChapter } from './glossary';
import { polynomialsQuizChapter } from './f7a9c2d4';
import { exponentsLogarithmsQuizChapter } from './e8b4f1a7';
import { combinationsPermutationsQuizChapter } from './c9d3a5b8';

export const justEnoughMathChapters = [
  polynomialsChapter,
  exponentsLogarithmsChapter,
  combinationsPermutationsChapter,
  glossaryChapter,
  polynomialsQuizChapter,
  exponentsLogarithmsQuizChapter,
  combinationsPermutationsQuizChapter
];

/**
 * Get a chapter by its ID
 * @param {string} id - The chapter ID to find
 * @returns {Object|undefined} The chapter object if found, undefined otherwise
 */
export const getChapterById = (id) => {
  return justEnoughMathChapters.find(chapter => chapter.id === id);
};

/**
 * Get all chapter IDs for the just enough math section
 * @returns {string[]} Array of chapter IDs
 */
export const getChapterIds = () => {
  return justEnoughMathChapters.map(chapter => chapter.id);
};

/**
 * Get the next chapter after the given chapter ID
 * @param {string} currentChapterId - The current chapter ID
 * @returns {Object|undefined} The next chapter object if found, undefined otherwise
 */
export const getNextChapter = (currentChapterId) => {
  const currentIndex = justEnoughMathChapters.findIndex(chapter => chapter.id === currentChapterId);
  return justEnoughMathChapters[currentIndex + 1];
};

/**
 * Get the previous chapter before the given chapter ID
 * @param {string} currentChapterId - The current chapter ID
 * @returns {Object|undefined} The previous chapter object if found, undefined otherwise
 */
export const getPreviousChapter = (currentChapterId) => {
  const currentIndex = justEnoughMathChapters.findIndex(chapter => chapter.id === currentChapterId);
  return currentIndex > 0 ? justEnoughMathChapters[currentIndex - 1] : undefined;
};