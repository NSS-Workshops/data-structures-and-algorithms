import { combiningPatternsLearningObjectivesChapter } from './learning-objectives';
import { combinePatternsOne } from './combine-patterns-one';
import { combinePatternsTwo } from './combine-patterns-two';
import { combinePatternsThree } from './combine-patterns-three';
import { combinePatternsFour } from './combine-patterns-four';
import { combiningPatternsCheckpointChapter } from './checkpoint';
import {codeExcerciseOneChapter} from './9b8a8427';
import  {codeExcerciseOneAlsoChapter} from './d796e8a8';
import {codeExcerciseTwoChapter} from './a4b7c9d2';
import {codeExcerciseThreeChapter} from "./e8f1a5b3";
import {codeExcerciseFourChapter} from "./c6d9e2f4";
import {codeExcerciseFiveChapter} from "./b3a8d7c1";
import {codeExcerciseSixChapter} from "./f9e4b2a7";
import {codeExcerciseSevenChapter} from "./d1c5f8e3";
import {codeExcerciseEightChapter} from "./a7b2e9f6";
import {codeExcerciseNineChapter} from "./c4f7a1d8";




export const combiningPatternsChapters = [
  combiningPatternsLearningObjectivesChapter,
  combinePatternsOne,
  combinePatternsTwo,
  combinePatternsThree,
  combinePatternsFour,
  combiningPatternsCheckpointChapter,
  codeExcerciseOneChapter,
  codeExcerciseOneAlsoChapter,
  codeExcerciseTwoChapter,
  codeExcerciseThreeChapter,
  codeExcerciseFourChapter,
  codeExcerciseFiveChapter,
  codeExcerciseSixChapter,
  codeExcerciseSevenChapter,
  codeExcerciseEightChapter,
  codeExcerciseNineChapter,
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