import { formatObjectives } from "../../utils/format_utils";

const data = [
  {category: "Algorithms Sliding Window", module: "7", name: "Explain what the sliding window technique is and identify when it's appropriate to use it", level: "Remember, Understand"},
  {category: "Algorithms Sliding Window", module: "7", name: "Solve a problem using a sliding window technique", level: "Apply"},
  {category: "Algorithms Sliding Window", module: "7", name: "Evaluate and compare the efficiency of a sliding window solution against a naive nested loop version", level: "Apply"},
];

export const slidingWindowLearningObjectivesChapter = {
  id: 'sliding-window-learning-objectives',
  title: 'Learning Objectives',
  sectionId: 'sliding-window',
  previousChapterId: null,
  content: `
## 🎯 What You Will Learn

This section covers the sliding window technique, a powerful pattern for optimizing array and string problems. By the end of this section, you will understand how to identify sliding window opportunities and implement efficient solutions.

${formatObjectives(data)}
`,
  exercise: null
};