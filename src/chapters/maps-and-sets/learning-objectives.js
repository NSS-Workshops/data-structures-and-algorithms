import { formatObjectives } from "@nss-workshops/nss-core";

const data = [
  {category: "Data Structure Map", module: "7", name: "Implement code to add a key-value pair to a Map", level: "Apply"},
  {category: "Data Structure Map", module: "7", name: "Build a Map without using built-in libraries", level: "Apply"},
  {category: "Data Structure Map", module: "7", name: "Implement code to retrieve a value by key from a Map and know it's runtime", level: "Apply"},
  {category: "Data Structure Map", module: "7", name: "Implement code to remove a key-value pair from a Map and know its runtime", level: "Apply"},
  {category: "Data Structure Map", module: "7", name: "Explain why accessing a value by key in a Map typically runs in constant O(1) time", level: "Remember, Understand"},
  {category: "Data Structure Map", module: "7", name: "Explain BigO runtime of popular Map methods .get .set .has .delete .size .keys .values()", level: "Remember, Understand"},
  {category: "Data Structure Set", module: "7", name: "Implement code to add a value to a Set and know it's runtime", level: "Apply"},
  {category: "Data Structure Set", module: "7", name: "Build a Set without using built-in libraries", level: "Apply"},
  {category: "Data Structure Set", module: "7", name: "Implement code to check if a value exists in a Set and know it's runtime", level: "Apply"},
  {category: "Data Structure Set", module: "7", name: "Implement code to remove a value from a Set and know it's runtime", level: "Apply"},
  {category: "Data Structure Set", module: "7", name: "Explain why Set operations (add, delete, has) typically run in constant O(1) time", level: "Remember, Understand"},
  {category: "Data Structure Set", module: "7", name: "Describe how Sets prevent duplicate values and when that is beneficial", level: "Understand"},
  {category: "Data Structure Set", module: "7", name: "Compare the behavior of Sets to Maps when storing unique values", level: "Understand"},
];

export const mapsAndSetsLearningObjectivesChapter = {
  id: 'maps-sets-learning-objectives',
  title: 'Learning Objectives',
  sectionId: 'maps-and-sets',
  previousChapterId: null,
  content: `
## 🎯 What You Will Learn

This section covers maps and sets as hash-based data structures for efficient lookups and uniqueness management. By the end of this section, you will understand how to use these structures for optimization and implement them from scratch.

${formatObjectives(data)}
`,
  exercise: null
};