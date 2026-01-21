import { formatObjectives } from "@nss-workshops/nss-core";

const data = [
  {category: "Data Structure Arrays", module: "3", name: "Implement code to update values stored in a two-dimensional array and know its runtime characteristics", level: "Apply"},
  {category: "Data Structure Arrays", module: "3", name: "Implement code to find the neighbors of a cell in a two-dimensional array ", level: "Remember, Understand"}
];

export default {
  id: "2d-arrays-learning-objectives",
  title: "Learning Objectives",
  description: "What you'll learn about 2D arrays.",
  previousChapterId: null,
  nextChapterId: "2d-arrays-intro",
  content: `## 🎯 What You Will Learn

This section covers two-dimensional arrays (matrices) and grid-based problem solving. By the end of this section, you will understand how to work with 2D data structures and navigate grid-based problems effectively.

${formatObjectives(data)}
`,
  exercises: []
};