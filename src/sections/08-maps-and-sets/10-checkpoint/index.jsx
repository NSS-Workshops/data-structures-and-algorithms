import content from './index.md?raw';
import questions  from './checkpoint.jsx';
import { Checkpoint } from '@nss-workshops/nss-core';

export default {
    id: "mapssets-checkpoint",
    title: "Checkpoint: Maps and Sets",
    previousChapterId: "mapssets-glossary",
    nextChapterId: null,
    content: content,
    quiz: {component: () => <Checkpoint questions={questions}/>}
}
