import { mapsAndSetsLearningObjectivesChapter } from './learning-objectives';
import { mapsIntroChapter } from './maps-intro';
import { setsIntroChapter } from './sets-intro';
import { useCasesChapter } from './use-cases';
import { implementMapChapter } from './implement-map';
import { implementSetChapter } from './implement-set';
import { mapsAndSetsInfoSheetChapter } from './info-sheet';
import { supplementalMaterialsChapter } from './supplemental-materials';
import { glossaryChapter } from './glossary';
import { mapsAndSetsCheckpointChapter } from './checkpoint';
import { codeExcerciseOneChapter } from './9dacc692';
import { codeExcerciseTwoChapter } from './cc07fff4';
import { inClassSetCode } from './b7e2c834';
import { inClassMapCode } from './a8f3d921';

export const mapsAndSetsChapters = [
  mapsAndSetsLearningObjectivesChapter,
  mapsIntroChapter,
  setsIntroChapter,
  useCasesChapter,
  implementMapChapter,
  implementSetChapter,
  mapsAndSetsInfoSheetChapter,
  supplementalMaterialsChapter,
  glossaryChapter,
  mapsAndSetsCheckpointChapter,
  codeExcerciseOneChapter,
  codeExcerciseTwoChapter,
  inClassSetCode,
  inClassMapCode
];

/**
 * Get a chapter by its ID
 * @param {string} id - The chapter ID to find
 * @returns {Object|undefined} The chapter object if found, undefined otherwise
 */
export const getChapterById = (id) => {
  return mapsAndSetsChapters.find(chapter => chapter.id === id);
};

/**
 * Get all chapter IDs for the maps and sets section
 * @returns {string[]} Array of chapter IDs
 */
export const getChapterIds = () => {
  return mapsAndSetsChapters.map(chapter => chapter.id);
};

/**
 * Get the next chapter after the given chapter ID
 * @param {string} currentChapterId - The current chapter ID
 * @returns {Object|undefined} The next chapter object if found, undefined otherwise
 */
export const getNextChapter = (currentChapterId) => {
  const currentIndex = mapsAndSetsChapters.findIndex(chapter => chapter.id === currentChapterId);
  return mapsAndSetsChapters[currentIndex + 1];
};

/**
 * Get the previous chapter before the given chapter ID
 * @param {string} currentChapterId - The current chapter ID
 * @returns {Object|undefined} The previous chapter object if found, undefined otherwise
 */
export const getPreviousChapter = (currentChapterId) => {
  const currentIndex = mapsAndSetsChapters.findIndex(chapter => chapter.id === currentChapterId);
  return currentIndex > 0 ? mapsAndSetsChapters[currentIndex - 1] : undefined;
};