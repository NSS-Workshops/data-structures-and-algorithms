import { formatObjectives } from "@nss-workshops/nss-core";

const data = [
  {category: "Data Structure Linked List", name: "Implement code to iterate over the elements of a Linked List to perform an operation on each element", level: "Apply"},
  {category: "Data Structure Linked List", name: "Build a Linked List without using built-in libraries", level: "Apply"},
  {category: "Data Structure Linked List", name: "Implement code to add an object to a Linked List", level: "Apply"},
  {category: "Data Structure Linked List", name: "Implement code to remove an object from a Linked List", level: "Apply"},
  {category: "Data Structure Linked List", name: "Explain why accessing a value by index from an Linked List runs is linear O(n) time", level: "Remember, Understand"},
  {category: "Data Structure Linked List", name: "Explain why inserting or removing a value by index in an Linked List runs in linear O(n) time", level: "Remember, Understand"},
  {category: "Data Structure Linked List", name: "Differentiate between singly, doubly, and circular linked lists", level: "Remember, Understand"},
  {category: "Data Structure Linked List", name: "Describe the advantages and disadvantages of arrays and linked lists in terms of memory layout, resizing, and access time", level: "Remember, Understand"}
];

export default {
  id: "linked-objectives",
  title: "Learning Objectives",
  description: "What you'll learn about linked lists.",
  previousChapterId: null,
  nextChapterId: "linked-intro",
  content: `## 🎯 What You Will Learn

This section covers linked lists as a dynamic data structure and pointer manipulation techniques. By the end of this section, you will understand how to work with node-based data structures and implement efficient linked list operations.

${formatObjectives(data)}
`,
  exercises: []
};



