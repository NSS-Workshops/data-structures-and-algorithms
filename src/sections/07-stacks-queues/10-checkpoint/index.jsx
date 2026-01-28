import contentMd from './index.md?raw';
import questions from './checkpoint.jsx';
import { Checkpoint } from '@nss-workshops/nss-core';

export default {
  id: "stacks-checkpoint",
  title: "Checkpoint: Stacks & Queues",
  previousChapterId: "stacks-glossary",
  nextChapterId: null,
  content: contentMd,
  exercises: [],
  quiz: {component: () => <Checkpoint questions={questions}/> }
};