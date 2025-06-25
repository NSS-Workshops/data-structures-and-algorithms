import { formatObjectives } from "../../utils/format_utils";

const data = [
  {category: "Data Structure Stack", module: "5", name: "Implement code to push a value onto a Stack and know it's runtime", level: "Apply"},
  {category: "Data Structure Stack", module: "5", name: "Build a LIFO Stack without using built-in libraries", level: "Apply"},
  {category: "Data Structure Stack", module: "5", name: "Implement code to pop a value from a Stack and know it's runtime", level: "Apply"},
  {category: "Data Structure Stack", module: "5", name: "Implement code to peek at the top value in a Stack and know it's runtime", level: "Apply"},
  {category: "Data Structure Stack", module: "5", name: "Explain why Stack operations run in constant O(1) time", level: "Remember, Understand"},
  {category: "Data Structure Stack", module: "5", name: "Identify real-world or interview problems where Stack is the ideal data structure", level: "Remember, Understand"},
  {category: "Data Structure Stack", module: "5", name: "Compare Stack behavior to Queue behavior and describe differences in use cases", level: "Remember, Understand"},
  {category: "Data Structure Queue", module: "5", name: "Implement code to enqueue a value in a Queue and know it's runtime", level: "Apply"},
  {category: "Data Structure Queue", module: "5", name: "Build a FIFO Queue without using built-in libraries", level: "Apply"},
  {category: "Data Structure Queue", module: "5", name: "Implement code to dequeue a value from a Queue and know it's runtime", level: "Apply"},
  {category: "Data Structure Queue", module: "5", name: "Implement code to peek at the front value in a Queue and know it's runtime", level: "Apply"},
  {category: "Data Structure Queue", module: "5", name: "Explain why Queue operations (enqueue/dequeue) typically run in constant O(1) time(Linked List) or O(n) (Array)", level: "Remember, Understand"},
  {category: "Data Structure Queue", module: "5", name: "Compare performance trade-offs between array-based and linked-list-based Queue implementations", level: "Remember, Understand"},
];

export const stacksQueuesLearningObjectivesChapter = {
  id: 'stacks-queues-learning-objectives',
  title: 'Learning Objectives',
  sectionId: 'stacks-queues',
  previousChapterId: null,
  content: `# Learning Objectives: Stacks & Queues

## 🎯 What You Will Learn

This section covers stacks and queues as fundamental data structures for sequence management. By the end of this section, you will understand LIFO and FIFO principles and implement efficient stack and queue operations.

${formatObjectives(data)}
`,
  exercise: null
};