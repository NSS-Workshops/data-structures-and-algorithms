import file1 from "../_9b8a8427/index";

/*
If you’re wondering why we re-export from a different file:

This approach ensures we deliver the same starting file using the existing 
\automation in the final week. It’s a bit of a hack, but it 
works without requiring changes to the automation code.

In earlier weeks, pair work on 2 different exercises. 
However, Week 10 is structured differently, pairs works on the same 
material together in a pair programming format.

*/

export default {
  ...file1,
  id: 'd796e8a8'
};