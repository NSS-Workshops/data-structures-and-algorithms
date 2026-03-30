import contentMd from './index.md?raw';
import questions from './checkpoint.jsx';
import { Checkpoint } from '@nss-workshops/nss-core';

export default {
  id: "linked-tradeoffs",
  title: "Playlist Performance: Arrays vs Linked Lists",
  previousChapterId: "linked-types",
  nextChapterId: "linked-traversal",
  content: contentMd,
  quiz: {component: () => <Checkpoint questions={questions}/> }
};