import { formatObjectives } from "../../utils/format_utils";

const data = [
  {category: "Sort", module: "8", name: "Use a pre-existing sort implementation to sort a collection of objects according to their natural ordering vs custom order and understand why the sort algoritms runtime is O(n log n)", level: "Apply"},
  {category: "Sort", module: "8", name: "Remember that multiple sorting algorithms exist, and be familiar with the most common ones—such as bubble sort, selection sort, and merge sort—along with their typical time complexities", level: "Remember"},
  {category: "Algorithms Binary Search", module: "8", name: "Explain what Binary Search technique is and identify when it's appropriate to use it (sorted collection)", level: "Remember, Understand"},
  {category: "Algorithms Binary Search", module: "8", name: "Solve a problem using a Binary Search technique", level: "Apply"},
  {category: "Algorithms Binary Search", module: "8", name: "Evaluate and compare the efficiency of a Binary Search solution against a naive nested loop version", level: "Apply"},
];

export const sortingAndBinarySearchLearningObjectivesChapter = {
  id: 'sorting-binary-search-learning-objectives',
  title: 'Learning Objectives',
  sectionId: 'sorting-and-binary-search',
  previousChapterId: null,
  content: `# Learning Objectives: Sorting & Binary Search

## 🎯 What You Will Learn

This section covers sorting algorithms and binary search techniques. By the end of this section, you will understand how to work with sorted data and implement efficient search algorithms.

${formatObjectives(data)}
`,
  exercise: null
};