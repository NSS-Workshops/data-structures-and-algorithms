import contentMd from './index.md?raw';
import starterCode from './starterCode.js?raw';
import solution from './solution.js?raw';
import { tests } from './tests.js';
import NodeBasedTraversalCheckpoint from './checkpoint.jsx';

export default {
  title: "Playlist Traversal and Song Manipulation",
  content: contentMd,
  exercise: {
    starterCode,
    solution,
    tests
  },
  checkpoint: NodeBasedTraversalCheckpoint
};