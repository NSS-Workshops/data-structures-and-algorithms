import { algorithmicThinkingChapters } from './algorithmic-thinking';
import { arraysAndTwoPointersChapters } from './arrays-and-two-pointers';
import { twoDArraysChapters } from './2d-arrays';
import { linkedListsChapters } from './linked-lists';
import { stacksQueuesChapters } from './stacks-queues';
import { mapsAndSetsChapters } from './maps-and-sets';
import { slidingWindowChapters } from './sliding-window';
import { sortingAndBinarySearchChapters } from './sorting-and-binary-search';
import { combiningPatternsChapters } from './combining-patterns';
import { interviewReadinessChapters } from './interview-readiness';

export const chapters = [
  ...algorithmicThinkingChapters,
  ...arraysAndTwoPointersChapters,
  ...twoDArraysChapters,
  ...linkedListsChapters,
  ...stacksQueuesChapters,
  ...mapsAndSetsChapters,
  ...slidingWindowChapters,
  ...sortingAndBinarySearchChapters,
  ...combiningPatternsChapters,
  ...interviewReadinessChapters
]

/**
 * Helper function to get chapter by ID
 * @param {string} id - The chapter ID to find
 * @returns {Object|undefined} The chapter object if found, undefined otherwise
 */
export const getChapterById = (id) => {
  return chapters.find((chapter) => chapter.id === id);
};

/**
 * Helper function to get chapter content
 * @param {string} id - The chapter ID
 * @returns {Object|null} The chapter content and exercise if found, null otherwise
 */
export const getChapterContent = (id) => {
  const chapter = getChapterById(id);
  return chapter
    ? {
        content: chapter.content,
        exercise: chapter.exercise,
      }
    : null;
};

/**
 * Helper function to get the first chapter in a section
 * @param {string} sectionId - The section ID
 * @returns {Object|undefined} The first chapter in the section
 */
export const getFirstChapterInSection = (sectionId) => {
  return chapters.find(
    (chapter) => chapter.sectionId === sectionId && !chapter.previousChapterId
  );
};

/**
 * Helper function to get all chapters in a section
 * @param {string} sectionId - The section ID
 * @returns {Array} Array of chapters in the section
 */
export const getChaptersInSection = (sectionId) => {
  return chapters.filter((chapter) => chapter.sectionId === sectionId);
};
