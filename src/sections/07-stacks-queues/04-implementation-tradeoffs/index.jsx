import content from './index.md?raw';
import questions  from './checkpoint.jsx';
import { Checkpoint } from '@nss-workshops/nss-core';

export default {
  id: "stacks-tradeoffs",
  title: 'Implementation Tradeoffs - Choosing the Right System',
  previousChapterId: "stacks-queues",
  nextChapterId: "stacks-implement-stack",
  content: content,
  exercises: [],
  quiz: {component: () => <Checkpoint questions={questions}/>}
};