import content from './index.md?raw';
import questions  from './checkpoint.jsx';
import { Checkpoint } from '@nss-workshops/nss-core';

export default {
    id: "combining-checkpoint",
    title: "Checkpoint: Combining Patterns",
    previousChapterId: "combining-survival",
    nextChapterId: null,
    content: content,
    quiz: {component: () => <Checkpoint questions={questions}/>}
}
