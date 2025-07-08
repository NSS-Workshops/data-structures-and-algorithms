import { formatObjectives } from "../../utils/format_utils";

const data = [
  {category: "Data Structure Arrays", module: "2", name: "Implement code to iterate over the elements of a Array to perform an operation on each element", level: "Apply"},
  {category: "Data Structure Arrays", module: "2", name: "Implement code to add an object to an Array", level: "Apply"},
  {category: "Data Structure Arrays", module: "2", name: "Implement code to remove an object from an Array", level: "Apply"},
  {category: "Data Structure Arrays", module: "2", name: "Explain why inserting or removing a value by index in an Array runs in linear O(n) time", level: "Remember, Understand"},
  {category: "Data Structure Arrays", module: "2", name: "Explain BigO runtime of popular array methods .push .pop .shift .unshift .map .filter", level: "Remember, Understand"},
  {category: "Algorithms Two Pointer", module: "2", name: "Explain what the two pointer technique is and identify when it's appropriate to use it", level: "Remember, Understand"},
  {category: "Algorithms Two Pointer", module: "2", name: "Solve a problem using a two pointers technique", level: "Apply"},
  {category: "Algorithms Two Pointer", module: "2", name: "Evaluate and compare the efficiency of a two pointer solution against a naive nested loop version", level: "Apply"},
];

export const arraysAndTwoPointersLearningObjectivesChapter = {
  id: 'arrays-two-pointers-learning-objectives',
  title: 'Learning Objectives',
  sectionId: 'arrays-and-two-pointers',
  previousChapterId: null,
  content: `# Learning Objectives: Arrays & Two Pointers

## 🎯 What You Will Learn

This section covers arrays as a fundamental data structure and the two-pointer technique for efficient problem solving. By the end of this section, you will understand how to work with arrays effectively and apply the two-pointer pattern to optimize solutions.

${formatObjectives(data)}
`,
  exercise: null
};