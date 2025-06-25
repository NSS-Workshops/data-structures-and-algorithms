import { formatObjectives } from "../../utils/format_utils";

const data = [
  {category: "Pattern Recognition", module: "9", name: "Recognize common patterns in problem statements and identify appropriate data structures and algorithms", level: "Remember, Understand"},
  {category: "Data Structure Selection", module: "9", name: "Choose the right data structure for specific problem requirements based on performance characteristics", level: "Apply"},
  {category: "Algorithm Integration", module: "9", name: "Combine multiple algorithmic techniques (two pointers, sliding window, etc.) to solve complex problems", level: "Apply"},
  {category: "Performance Analysis", module: "9", name: "Analyze trade-offs between space and time complexity when choosing between different approaches", level: "Apply"},
  {category: "Problem Solving", module: "9", name: "Break down complex problems into smaller components that can be solved with known patterns", level: "Apply"},
  {category: "Optimization", module: "9", name: "Evaluate and compare different solutions to determine the most efficient approach", level: "Apply"},
];

export const combiningPatternsLearningObjectivesChapter = {
  id: 'combining-patterns-learning-objectives',
  title: 'Learning Objectives',
  sectionId: 'combining-patterns',
  previousChapterId: null,
  content: `# Learning Objectives: Combining Patterns & Tradeoff Analysis

## 🎯 What You Will Learn

This section focuses on integrating multiple data structures and algorithmic patterns to solve complex problems. By the end of this section, you will understand how to recognize patterns, choose appropriate data structures, and analyze trade-offs in real-world scenarios.

${formatObjectives(data)}
`,
  exercise: null
};