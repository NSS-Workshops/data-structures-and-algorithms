import { formatObjectives } from "../../utils/format_utils";

const data = [
  {category: "Data Structure Arrays", module: 3, name: "Implement code to update values stored in a two-dimensional array and know its runtime characteristics", level: "Apply"},
  {category: "Data Structure Arrays", module: 3, name: "Implement code to find the neighbors of a cell in a two-dimensional array", level: "Remember, Understand"},
];

export const twoDArraysLearningObjectivesChapter = {
  id: '2d-arrays-learning-objectives',
  title: 'Learning Objectives',
  sectionId: '2d-arrays',
  previousChapterId: null,
  content: `# Learning Objectives: 2D Arrays & Grid Navigation

## 🎯 What You Will Learn

This section covers two-dimensional arrays (matrices) and grid-based problem solving. By the end of this section, you will understand how to work with 2D data structures and navigate grid-based problems effectively.

${formatObjectives(data)}
`,
  exercise: null
};