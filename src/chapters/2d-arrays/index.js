import { twoDArraysLearningObjectivesChapter } from './learning-objectives';
import { twoDArraysIntroChapter } from './2d-arrays-intro';
import { indexingAndBoundsChapter } from './indexing-and-bounds';
import { findingNeighborsChapter } from './finding-neighbors';
import { twoDArraysInfoSheetChapter } from './info-sheet';
import { supplementalMaterialsChapter } from './supplemental-materials';
import { glossaryChapter } from './glossary';
import { twoDArraysCheckpointChapter } from './checkpoint';
import { codeExcerciseOneChapter } from './9e31c844';
import { codeExcerciseTwoChapter } from './5e6361db';

export const twoDArraysChapters = [
  twoDArraysLearningObjectivesChapter,
  twoDArraysIntroChapter,
  indexingAndBoundsChapter,
  findingNeighborsChapter,
  twoDArraysInfoSheetChapter,
  supplementalMaterialsChapter,
  glossaryChapter,
  twoDArraysCheckpointChapter,
  codeExcerciseOneChapter,
  codeExcerciseTwoChapter
];

/**
 * Get a chapter by its ID
 * @param {string} id - The chapter ID to find
 * @returns {Object|undefined} The chapter object if found, undefined otherwise
 */
export const getChapterById = (id) => {
  return twoDArraysChapters.find(chapter => chapter.id === id);
};

/**
 * Get all chapter IDs for the 2D arrays section
 * @returns {string[]} Array of chapter IDs
 */
export const getChapterIds = () => {
  return twoDArraysChapters.map(chapter => chapter.id);
};

/**
 * Get the next chapter after the given chapter ID
 * @param {string} currentChapterId - The current chapter ID
 * @returns {Object|undefined} The next chapter object if found, undefined otherwise
 */
export const getNextChapter = (currentChapterId) => {
  const currentIndex = twoDArraysChapters.findIndex(chapter => chapter.id === currentChapterId);
  return twoDArraysChapters[currentIndex + 1];
};

/**
 * Get the previous chapter before the given chapter ID
 * @param {string} currentChapterId - The current chapter ID
 * @returns {Object|undefined} The previous chapter object if found, undefined otherwise
 */
export const getPreviousChapter = (currentChapterId) => {
  const currentIndex = twoDArraysChapters.findIndex(chapter => chapter.id === currentChapterId);
  return currentIndex > 0 ? twoDArraysChapters[currentIndex - 1] : undefined;
};