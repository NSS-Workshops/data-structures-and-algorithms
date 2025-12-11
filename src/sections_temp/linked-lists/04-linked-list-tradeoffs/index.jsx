import contentMd from './index.md?raw';
import starterCode from './starterCode.js?raw';
import solution from './solution.js?raw';
import { tests } from './tests.js';
import LinkedListTradeoffsCheckpoint from './checkpoint.jsx';

export default {
  title: "Playlist Performance: Arrays vs Linked Lists",
  content: contentMd,
  exercise: {
    starterCode,
    solution,
    tests
  },
  checkpoint: LinkedListTradeoffsCheckpoint
};