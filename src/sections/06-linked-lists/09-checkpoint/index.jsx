import contentMd from './index.md?raw';
import questions from './checkpoint.jsx';
import { Checkpoint } from '@nss-workshops/nss-core';

export default {
  id: "linked-checkpoint",
  title: "Checkpoint: Linked Lists",
  previousChapterId: "linked-glossary",
  nextChapterId: "linked-reverse",
  content: contentMd,
  exercises: [],
  quiz: {component: () => <Checkpoint questions={questions}/> }
};